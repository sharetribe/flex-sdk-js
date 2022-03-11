const byAliasRe = /assets\/pub\/(.+)\/a\/(.+)\/(.+)/;
const byVersionRe = /assets\/pub\/(.+)\/v\/(.+)\/(.+)/;

const pub = {
  alias: (config, resolve, reject, matchByAlias) => {
    const [match, clientId, alias, assetPath] = matchByAlias;

    if (
      clientId === '08ec69f6-d37e-414d-83eb-324e94afddf0' &&
      alias === 'latest' &&
      assetPath === 'translations.json'
    ) {
      const res = `["^ ",
                     "~:data",["^ ",
                       "navigation.listings","Listings",
                       "navigation.account","My account",
                       "navigation.login","Log in"],
                     "~:included",[],
                     "~:meta",["^ ",
                       "~:version","v1",
                       "~:aliased-version","release-1"]]`;

      return resolve({ data: res });
    }

    throw new Error(`Asset by alias not implemented for: ${match}`);
  },

  version: (config, resolve, reject, matchByVersion) => {
    const [match, clientId, version, assetPath] = matchByVersion;

    if (
      clientId === '08ec69f6-d37e-414d-83eb-324e94afddf0' &&
      version === 'v1' &&
      assetPath === 'translations.json'
    ) {
      const res = `["^ ",
                     "~:data",["^ ",
                       "navigation.listings","Listings",
                       "navigation.account","My account",
                       "navigation.login","Log in"],
                     "~:included",[],
                     "~:meta",["^ ",
                       "~:version","v1",
                       "~:aliased-version","release-1"]]`;
      return resolve({ data: res });
    }

    throw new Error(`Asset by alias not implemented for: ${match}`);
  },
};

const handler = (config, resolve, reject) => {
  const matchByAlias = config.url.match(byAliasRe);
  const matchByVersion = config.url.match(byVersionRe);

  if (matchByAlias) {
    return pub.alias(config, resolve, reject, matchByAlias);
  }
  if (matchByVersion) {
    return pub.version(config, resolve, reject, matchByVersion);
  }

  throw new Error(`No fake adapter handler implemented for Assets API endpoint: ${config.url}`);
};

export default handler;
