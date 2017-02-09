const createStore = () => {
  let memo;

  const getToken = () => memo;
  const setToken = (tokenData) => { memo = tokenData; };

  return {
    getToken,
    setToken,
  };
};

export default createStore;
