globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as defineMiddleware, s as sequence } from './chunks/index_Dfy_e-gP.mjs';
import './chunks/astro-designed-error-pages_CHEBw8N2.mjs';
import './chunks/astro/server_BQtY0g0a.mjs';

const onRequest$2 = defineMiddleware(async (ctx, next) => {
  return next();
});

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	onRequest$2
	
);

export { onRequest };
