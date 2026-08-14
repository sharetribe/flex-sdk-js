import _ from 'lodash';

const createTokenStore = () => {
  const tokens = [];
  let anonAccessTokenCount = 0;
  let accessTokenCount = 0;
  let refreshTokenCount = 0;

  const knownUsers = [['joe.dunphy@example.com', 'secret-joe']];

  const knownAuthorizationCodes = [
    { code: 'flex-authorization-code', username: 'joe.dunphy@example.com' },
  ];

  const knownIdpTokens = [
    {
      id: 'facebook',
      token: 'idp-token',
      clientId: 'idp-client-id',
      username: 'joe.dunphy@example.com',
    },
  ];

  // Private

  const generateAnonAccessToken = () => {
    anonAccessTokenCount += 1;
    return `anonymous-access-${anonAccessTokenCount}`;
  };

  const generateAccessToken = username => {
    accessTokenCount += 1;
    return `${username}-access-${accessTokenCount}`;
  };

  const generateRefreshToken = username => {
    refreshTokenCount += 1;
    return `${username}-refresh-${refreshTokenCount}`;
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
        scope: 'public-read',
      },
    };
    tokens.push(token);

    return token.token;
  };

  const createTokenWithCredentials = (username, password) => {
    const user = _.find(knownUsers, u => _.isEqual(u, [username, password]));

    if (!user) {
      return null;
    }

    const token = {
      token: {
        access_token: generateAccessToken(username),
        refresh_token: generateRefreshToken(username),
        token_type: 'bearer',
        expires_in: 86400,
        scope: 'user',
      },
      user: {
        username,
      },
    };
    tokens.push(token);

    return token.token;
  };

  const createTokenWithAuthorizationCode = authorizationCode => {
    const knownCode = _.find(knownAuthorizationCodes, ({ code }) => code === authorizationCode);

    if (!knownCode) {
      return null;
    }

    const { username } = knownCode;
    const token = {
      token: {
        access_token: generateAccessToken(username),
        refresh_token: generateRefreshToken(username),
        token_type: 'bearer',
        expires_in: 86400,
        scope: 'user:limited',
      },
      user: {
        username,
      },
    };
    tokens.push(token);

    return token.token;
  };

  const createTokenWithIdp = (idpId, idpClientId, idpToken) => {
    const knownIdpToken = _.find(
      knownIdpTokens,
      ({ id, token, clientId }) => id === idpId && token === idpToken && clientId === idpClientId
    );

    if (!knownIdpToken) {
      return null;
    }

    const { username } = knownIdpToken;
    const token = {
      token: {
        access_token: generateAccessToken(username),
        refresh_token: generateRefreshToken(username),
        token_type: 'bearer',
        expires_in: 86400,
        scope: 'user',
      },
      user: {
        username,
      },
    };
    tokens.push(token);

    return token.token;
  };

  const exchangeToken = accessToken => {
    const currentToken = _.find(
      tokens,
      ({ token }) =>
        token.access_token &&
        accessToken &&
        token.access_token.toLowerCase() === accessToken.toLowerCase()
    );

    if (!currentToken) {
      return null;
    }

    const { username } = currentToken.user;

    const trustedToken = {
      token: {
        access_token: generateAccessToken(username),
        refresh_token: generateRefreshToken(username),
        token_type: 'bearer',
        expires_in: 86400,
        scope: 'trusted:user',
      },
      user: {
        username,
      },
    };
    tokens.push(trustedToken);

    return trustedToken.token;
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

  const revokeRefreshToken = refreshToken =>
    _.remove(tokens, t => t.token.refresh_token === refreshToken);

  const freshToken = refreshToken => {
    const existingToken = revokeRefreshToken(refreshToken);

    if (existingToken.length) {
      const { username } = existingToken[0].user;

      const token = {
        token: {
          access_token: generateAccessToken(username),
          refresh_token: generateRefreshToken(username),
          token_type: 'bearer',
          expires_in: 86400,
          // TODO missing `scope`
        },
        user: {
          username,
        },
      };
      tokens.push(token);

      return token.token;
    }

    return null;
  };

  return {
    createAnonToken,
    createTokenWithCredentials,
    createTokenWithAuthorizationCode,
    createTokenWithIdp,
    exchangeToken,
    freshToken,
    revokeRefreshToken,
    validToken,
    expireAccessToken,
  };
};

export default createTokenStore;
