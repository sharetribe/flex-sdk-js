import Cookies from 'js-cookie';

const generateKey = (clientId, namespace) => `${namespace}-${clientId}-token`;

const createStore = ({ clientId, secure }) => {
  const expiration = 30; // 30 days
  const namespace = 'st';
  const key = generateKey(clientId, namespace);

  const getToken = () => Cookies.getJSON(key);
  const setToken = tokenData => {
    const secureFlag = secure ? { secure: true } : {};
    Cookies.set(key, tokenData, { expires: expiration, ...secureFlag });
  };
  const removeToken = () => {
    Cookies.remove(key);
  };

  return {
    getToken,
    setToken,
    removeToken,
  };
};

export default createStore;
