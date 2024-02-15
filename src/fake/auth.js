import _ from 'lodash';
import jwt from 'jsonwebtoken';

const parseFormData = data =>
  _.fromPairs(data.split('&').map(keyValue => keyValue.split('=').map(decodeURIComponent)));

const hostnameFromToken = (token, secret) => {
  try {
    return jwt.verify(token, secret).hostname;
  } catch (e) {
    return null;
  }
};

export const revoke = (config, resolve, reject, tokenStore) => {
  const formData = parseFormData(config.data);

  if (formData.token) {
    if (tokenStore) {
      const revoked = tokenStore.revokeRefreshToken(formData.token);

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
      res = fakeTokenStore.createTokenWithCredentials(formData.username, formData.password);
    } else if (formData.grant_type === 'authorization_code') {
      res = fakeTokenStore.createTokenWithAuthorizationCode(formData.code);
    } else if (formData.grant_type === 'refresh_token') {
      res = fakeTokenStore.freshToken(formData.refresh_token);
    } else if (
      formData.grant_type === 'token_exchange' &&
      formData.client_secret === '8af2bf99c380b3a303ab90ae4012c8cd8f69d309'
    ) {
      res = fakeTokenStore.exchangeToken(formData.subject_token);
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

export const multitenantAuthData = (config, resolve, reject, fakeTokenStore) => {
  const formData = parseFormData(config.data);
  let success;
  let error = {
    status: 401,
    statusText: 'Unauthorized',
    data: 'Unauthorized',
  };

  const hostname = hostnameFromToken(formData.client_secret, 'valid-secret');

  if (hostname === 'valid.example.com') {
    if (formData.grant_type === 'multitenant_client_credentials') {
      success = {
        ...fakeTokenStore.createAnonToken(),
        client_data: {
          client_id: '08ec69f6-d37e-414d-83eb-324e94afddf0',
          // for testing purposes, we want to check which endpoint is called
          called_url: config.url,
        },
      };
    } else if (formData.grant_type === 'multitenant_token_exchange') {
      success = {
        ...fakeTokenStore.exchangeToken(formData.subject_token),
        client_data: {
          client_id: '08ec69f6-d37e-414d-83eb-324e94afddf0',
        },
      };
    }
  } else if (hostname === 'invalid.example.com') {
    error = {
      ...error,
      status: 404,
      statusText: 'Not Found',
      data: 'Not Found',
      headers: { 'content-type': 'text/plain' },
    };
  }

  if (success) {
    return resolve({ data: JSON.stringify(success) });
  }

  return reject(error);
};

export const multitenantClientData = (config, resolve, reject) => {
  const authHeader = _.get(config.headers, 'Authorization', 'Bearer invalid-token');
  const secretToken = authHeader.replace('Bearer ', '');
  let success;
  let error = {
    status: 401,
    statusText: 'Unauthorized',
    data: 'Unauthorized',
  };

  const hostname = hostnameFromToken(secretToken, 'valid-secret');

  if (hostname === 'valid.example.com') {
    success = {
      client_id: '08ec69f6-d37e-414d-83eb-324e94afddf0',
      // for testing purposes, we want to check which endpoint is called
      called_url: config.url,
    };
  } else if (hostname === 'invalid.example.com') {
    error = {
      ...error,
      status: 404,
      statusText: 'Not Found',
      data: 'Not Found',
    };
  }

  if (success) {
    return resolve({ data: JSON.stringify(success) });
  }

  return reject(error);
};

export const authWithIdp = (config, resolve, reject, fakeTokenStore) => {
  const formData = parseFormData(config.data);

  /* eslint-disable camelcase */
  const { idp_id, idp_client_id, idp_token } = formData;
  /* eslint-enable camelcase */

  let res;

  if (formData.client_id === '08ec69f6-d37e-414d-83eb-324e94afddf0') {
    res = fakeTokenStore.createTokenWithIdp(idp_id, idp_client_id, idp_token);
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

export const multitenantAuthWithIdpData = (config, resolve, reject, fakeTokenStore) => {
  const formData = parseFormData(config.data);

  /* eslint-disable camelcase */
  const { idp_id, idp_client_id, idp_token } = formData;
  /* eslint-enable camelcase */

  let success;
  let error = {
    status: 401,
    statusText: 'Unauthorized',
    data: 'Unauthorized',
  };

  const hostname = hostnameFromToken(formData.client_secret, 'valid-secret');

  if (hostname === 'valid.example.com') {
    success = fakeTokenStore.createTokenWithIdp(idp_id, idp_client_id, idp_token);
  } else if (hostname === 'invalid.example.com') {
    error = {
      ...error,
      status: 404,
      statusText: 'Not Found',
      data: 'Not Found',
      headers: { 'content-type': 'text/plain' },
    };
  }

  if (success) {
    return resolve({ data: JSON.stringify(success) });
  }

  return reject(error);
};
