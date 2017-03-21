const createStore = () => {
  let memo;

  const getToken = () => memo;
  const setToken = tokenData => {
    memo = tokenData;
  };
  const removeToken = () => {
    memo = null;
  };

  return {
    getToken,
    setToken,
    removeToken,
  };
};

export default createStore;
