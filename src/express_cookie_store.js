const generateKey = (clientId, namespace) => `${namespace}-${clientId}-token`;

const createStore = ({ clientId, req, res }) => {
  const expiration = 30; // 30 days
  const namespace = 'st';
  const key = generateKey(clientId, namespace);

  // A mutable variable containing the current token.
  // When a `setToken` is called, the current token will be
  // stored to this variable. `getToken` will read subsequent
  // calls from this variable.
  let currentToken;

  const readCookie = () => {
    const cookie = req.cookies[key];

    if (cookie) {
      return JSON.parse(cookie);
    }

    return null;
  };

  const getToken = () => {
    currentToken = currentToken || readCookie();

    return currentToken;
  };

  const setToken = (tokenData) => {
    currentToken = tokenData;
    res.cookie(key, tokenData, { maxAge: 1000 * 60 * 60 * 24 * expiration });
  };

  const removeToken = () => {
    currentToken = null;
    res.clearCookie(key);
  };

  return {
    getToken,
    setToken,
    removeToken,
  };
};

export default createStore;
