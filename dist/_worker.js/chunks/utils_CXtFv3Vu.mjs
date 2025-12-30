globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as renderScript, b as renderTemplate, d as createAstro, e as addAttribute, k as renderHead, l as renderSlot, r as renderComponent, n as clsx } from './astro/server_Cqmuhjlt.mjs';
/* empty css                            */

const $$CustomCursor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/kusum/Documents/projects/ludon-main/src/scripts/custom-cursor.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kusum/Documents/projects/ludon-main/src/scripts/custom-cursor.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/icon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Ludon - Roll the Dice, Rule the Board!</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-ludon-yellow/50"> ${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "/Users/kusum/Documents/projects/ludon-main/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} <div class="bg-ludon-blue bg-ludon-red bg-ludon-green bg-ludon-yellow border-ludon-blue border-ludon-red border-ludon-green border-ludon-yellow"></div>  ${renderComponent($$result, "CustomCursor", $$CustomCursor, {})}</body></html>`;
}, "/Users/kusum/Documents/projects/ludon-main/src/layouts/Layout.astro", void 0);

function cn(...inputs) {
  return clsx(inputs);
}

export { $$Layout as $, cn as c };
