import _ from 'lodash';

const parseFormData = data =>
  _.fromPairs(data.split('&').map(keyValue => keyValue.split('=').map(decodeURIComponent)));

export const revoke = (config, resolve, reject, tokenStore) => {
  const formData = parseFormData(config.data);

  if (formData.token) {
    if (tokenStore) {
      const revoked = tokenStore.revokePasswordToken(formData.token);

      if (revoked.length) {
        return resolve({ data: { action: 'revoked' } });
      }
    }

    // FIXME The `data` is not what the server returns
    return resolve({ data: { action: 'nothing' } });
  }

  // FIXME The `data` is not what the server returns
  return reject({ data: {}, __additionalTestInfo: formData });
};

export const token = (config, resolve, reject, fakeTokenStore) => {
  const formData = parseFormData(config.data);
  let res;

  if (formData.client_id === '08ec69f6-d37e-414d-83eb-324e94afddf0') {
    if (formData.grant_type === 'client_credentials') {
      res = fakeTokenStore.createAnonToken();
    } else if (formData.grant_type === 'password') {
      res = fakeTokenStore.createPasswordToken(formData.username, formData.password);
    } else if (formData.grant_type === 'refresh_token') {
      res = fakeTokenStore.freshPasswordToken(formData.refresh_token);
    }
  }

  if (res) {
    return resolve({ data: JSON.stringify(res) });
  }

  return reject({
    status: 401,
    statusText: 'Unauthorized',
    data: 'Unauthorized',

    // Add additional information to help debugging when testing.
    // This key is NOT returned by the real API.
    __additionalTestInfo: { formData },
  });
};
