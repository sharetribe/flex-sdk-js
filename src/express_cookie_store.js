const generateKey = (clientId, namespace) => `${namespace}-${clientId}-token`;

const createStore = ({ clientId, req, res }) => {
  const expiration = 30; // 30 days
  const namespace = 'st';
  const key = generateKey(clientId, namespace);

  const getToken = () => {
    const cookie = req.cookies[key];

    if (cookie) {
      return JSON.parse(cookie);
    }

    return null;
  };

  const setToken = (tokenData) => {
    res.cookie(key, JSON.stringify(tokenData), { maxAge: 1000 * 60 * 60 * 24 * expiration });
  };

  const removeToken = () => {
    res.clearCookie(key);
  };

  return {
    getToken,
    setToken,
    removeToken,
  };
};

export default createStore;
