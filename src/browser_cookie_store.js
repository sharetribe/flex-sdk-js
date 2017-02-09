import Cookies from 'js-cookie';

const generateKey = (clientId, namespace) => `${namespace}-${clientId}-token`;

const createStore = (clientId) => {
  const expiration = 30; // 30 days
  const namespace = 'st';
  const key = generateKey(clientId, namespace);

  const getToken = () => Cookies.getJSON(key);
  const setToken = (tokenData) => {
    Cookies.set(key, tokenData, { expires: expiration });
  };

  return {
    getToken,
    setToken,
  };
};

export default createStore;
