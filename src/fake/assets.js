const assetByAliasRe = /assets\/pub\/(.+)\/a\/(.+)\/(.+[^/])$/;
const assetByVersionRe = /assets\/pub\/(.+)\/v\/(.+)\/(.+[^/])$/;
const assetsByAliasRe = /assets\/pub\/(.+)\/a\/(.+)\/(.+\/)/;
const assetsByVersionRe = /assets\/pub\/(.+)\/v\/(.+)\/(.+\/)/;
const testClientId = '08ec69f6-d37e-414d-83eb-324e94afddf0';

const pub = {
  assetByAlias: (config, resolve, reject, matchByAlias) => {
    const [match, clientId, alias, assetPath] = matchByAlias;

    if (
      clientId === testClientId &&
      (alias === 'latest' || alias === 'release-prod') &&
      assetPath === 'translations.json'
    ) {
      const res = JSON.stringify({
        data: {
          'navigation.listings': 'Listings',
          'navigation.account': 'My account',
          'navigation.login': 'Log in',
        },
        included: [],
        meta: {
          version: 'v3',
        },
      });
      return resolve({ data: res });
    }

    if (clientId === testClientId && alias === 'release-dev' && assetPath === 'translations.json') {
      const res = JSON.stringify({
        data: {
          'navigation.listings': 'Listings',
          'navigation.account': 'My account',
        },
        included: [],
        meta: {
          version: 'v2',
        },
      });
      return resolve({ data: res });
    }

    throw new Error(`Asset by alias not implemented for: ${match}`);
  },

  assetByVersion: (config, resolve, reject, matchByVersion) => {
    const [match, clientId, version, assetPath] = matchByVersion;

    if (
      clientId === '08ec69f6-d37e-414d-83eb-324e94afddf0' &&
      version === 'v2' &&
      assetPath === 'translations.json'
    ) {
      const res = JSON.stringify({
        data: {
          'navigation.listings': 'Listings',
          'navigation.account': 'My account',
        },
        included: [],
        meta: {
          version: 'v2',
        },
      });
      return resolve({ data: res });
    }

    throw new Error(`Asset by version not implemented for: ${match}`);
  },

  assetsByAlias: (config, resolve, reject, matchByAlias) => {
    const [match, clientId, alias, assetPath] = matchByAlias;
    const relativePaths = config.params.assets;

    if (clientId === testClientId && alias === 'latest') {
      const res = JSON.stringify({
        data: [
          ...relativePaths.map(relativePath => ({
            id: `byAlias-${relativePath}`,
            type: 'jsonAsset',
            attributes: {
              assetPath: `/${assetPath}${relativePath}`,
              data: { assetPath, relativePath },
            },
          })),
        ],
        included: [],
        meta: {
          version: 'v1',
        },
      });
      return resolve({ data: res });
    }

    throw new Error(`Assets by alias not implemented for: ${match}`);
  },

  assetsByVersion: (config, resolve, reject, matchByVersion) => {
    const [match, clientId, version, assetPath] = matchByVersion;
    const relativePaths = config.params.assets;

    if (clientId === testClientId) {
      const res = JSON.stringify({
        data: [
          ...relativePaths.map(relativePath => ({
            id: `byVersion-${relativePath}`,
            type: 'jsonAsset',
            attributes: {
              assetPath: `/${assetPath}${relativePath}`,
              data: { assetPath, relativePath },
            },
          })),
        ],
        included: [],
        meta: {
          version,
        },
      });
      return resolve({ data: res });
    }

    throw new Error(`Assets by version not implemented for: ${match}`);
  },
};

const handler = (config, resolve, reject) => {
  const matchAssetByAlias = config.url.match(assetByAliasRe);
  const matchAssetByVersion = config.url.match(assetByVersionRe);
  const matchAssetsByAlias = config.url.match(assetsByAliasRe);
  const matchAssetsByVersion = config.url.match(assetsByVersionRe);

  if (matchAssetByAlias) {
    return pub.assetByAlias(config, resolve, reject, matchAssetByAlias);
  }
  if (matchAssetByVersion) {
    return pub.assetByVersion(config, resolve, reject, matchAssetByVersion);
  }
  if (matchAssetsByAlias) {
    return pub.assetsByAlias(config, resolve, reject, matchAssetsByAlias);
  }
  if (matchAssetsByVersion) {
    return pub.assetsByVersion(config, resolve, reject, matchAssetsByVersion);
  }

  throw new Error(`No fake adapter handler implemented for Assets API endpoint: ${config.url}`);
};

export default handler;
