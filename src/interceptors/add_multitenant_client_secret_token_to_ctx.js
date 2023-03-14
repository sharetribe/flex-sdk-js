/**
   Read `multitenantClientSecret` and `hostname` from `ctx`. Then construct a
   signed JWT and add it to the context for use later in the interceptor chain.

   Changes to `ctx`:

   - Add `multitenantClientSecretToken`
*/
import jwt from 'jsonwebtoken';

const signingOpts = {
  algorithm: 'HS256',
  expiresIn: 60, // seconds, should be enough for possible clock skew, but not too long
};

export default class AddMultitenantClientSecretTokenToCtx {
  enter(ctx) {
    const { multitenantClientSecret, hostname } = ctx;

    const multitenantClientSecretToken = jwt.sign(
      { hostname },
      multitenantClientSecret,
      signingOpts
    );

    return { ...ctx, multitenantClientSecretToken };
  }
}
