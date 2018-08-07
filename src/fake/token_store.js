import _ from 'lodash';

const createTokenStore = () => {
  const tokens = [];
  let anonAccessCount = 0;
  let passwordAccessCount = 0;
  let passwordRefreshCount = 0;

  const knownUsers = [['joe.dunphy@example.com', 'secret-joe']];

  // Private

  const generateAnonAccessToken = () => {
    anonAccessCount += 1;
    return `anonymous-access-${anonAccessCount}`;
  };

  const generatePasswordAccessToken = (username, password) => {
    passwordAccessCount += 1;
    return `${username}-${password}-access-${passwordAccessCount}`;
  };

  const generatePasswordRefreshToken = (username, password) => {
    passwordRefreshCount += 1;
    return `${username}-${password}-refresh-${passwordRefreshCount}`;
  };

  // Public

  const validToken = (accessToken, tokenType) =>
    _.find(
      tokens,
      ({ token }) =>
        token.access_token &&
        accessToken &&
        token.token_type &&
        tokenType &&
        token.access_token.toLowerCase() === accessToken.toLowerCase() &&
        token.token_type.toLowerCase() === tokenType.toLowerCase()
    );

  const createAnonToken = () => {
    const token = {
      token: {
        access_token: generateAnonAccessToken(),
        token_type: 'bearer',
        expires_in: 86400,
      },
    };
    tokens.push(token);

    return token.token;
  };

  const createPasswordToken = (username, password) => {
    const user = _.find(knownUsers, u => _.isEqual(u, [username, password]));

    if (!user) {
      return null;
    }

    const token = {
      token: {
        access_token: generatePasswordAccessToken(username, password),
        refresh_token: generatePasswordRefreshToken(username, password),
        token_type: 'bearer',
        expires_in: 86400,
      },
      user: {
        username,
        password,
      },
    };
    tokens.push(token);

    return token.token;
  };

  const expireAccessToken = accessToken => {
    _.map(tokens, t => {
      const { token } = t;

      if (token.access_token === accessToken) {
        token.access_token = null;
      }

      return t;
    });
  };

  const revokePasswordToken = refreshToken =>
    _.remove(tokens, t => t.token.refresh_token === refreshToken);

  const freshPasswordToken = refreshToken => {
    const existingToken = revokePasswordToken(refreshToken);

    if (existingToken.length) {
      const { username, password } = existingToken[0].user;
      return createPasswordToken(username, password);
    }

    return null;
  };

  return {
    createAnonToken,
    createPasswordToken,
    freshPasswordToken,
    revokePasswordToken,
    validToken,
    expireAccessToken,
  };
};

export default createTokenStore;
