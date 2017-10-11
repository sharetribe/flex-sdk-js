const generateKey = (clientId, namespace) => `${namespace}-${clientId}-token`;

const createStore = ({ clientId, req, res, secure }) => {
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

  const setToken = tokenData => {
    currentToken = tokenData;
    const secureFlag = secure ? { secure: true } : {};

    // Manually stringify tokenData.
    // Express supports passing object to `res.cookie` which will be then automatically
    // JSON stringified. However, we CAN NOT use it, because it seems to output invalid JSON
    // with a "j" tag in front of the content (`"j:{ ...json here... }`). Because we want
    // to read that cookie also in browser, we don't want to produce invalid JSON.
    res.cookie(key, JSON.stringify(tokenData), {
      maxAge: 1000 * 60 * 60 * 24 * expiration,
      ...secureFlag,
    });
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
