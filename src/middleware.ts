import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (ctx, next) => {
  return next();
});