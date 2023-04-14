import Cookies from 'js-cookie';

const generateKey = (cookieId, namespace) => `${namespace}-${cookieId}-token`;

const createStore = ({ clientId, cookieId, secure }) => {
  const expiration = 30; // 30 days
  const namespace = 'st';
  const key = generateKey(clientId || cookieId, namespace);

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
