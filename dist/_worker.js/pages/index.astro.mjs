globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, b as renderTemplate, r as renderComponent, a as renderScript } from '../chunks/astro/server_BQtY0g0a.mjs';
import { c as cn, $ as $$Layout } from '../chunks/utils_DWh1gUMu.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$GameButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GameButton;
  const { text, class: className, color = "db5c4c", ...props } = Astro2.props;
  function generateColorVariants(baseColor) {
    const hexColor = baseColor.startsWith("#") ? baseColor : "#db5c4c";
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const darken = (amount) => {
      return `#${Math.max(0, Math.floor(r * amount)).toString(16).padStart(2, "0")}${Math.max(0, Math.floor(g * amount)).toString(16).padStart(2, "0")}${Math.max(0, Math.floor(b * amount)).toString(16).padStart(2, "0")}`;
    };
    const shadowColor = darken(0.7);
    const deepShadowColor = darken(0.5);
    const borderColor = `rgba(${Math.floor(r * 0.7)},${Math.floor(g * 0.7)},${Math.floor(b * 0.7)},0.5)`;
    return {
      baseColor: hexColor,
      shadowColor,
      deepShadowColor,
      borderColor
    };
  }
  const colors = generateColorVariants(color);
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(cn(
    "game-button rounded-lg px-4 py-2 relative -top-[10px] w-28 h-16 my-3 text-white",
    "before:absolute before:top-[5%] before:left-[40%] before:bg-white before:w-[40%] before:h-1 before:rounded-full",
    "after:absolute after:top-[5%] after:left-[85%] after:bg-white after:w-[10%] after:h-1 after:rounded-full",
    className
  ), "class")}${spreadAttributes(props)}${addAttribute(`--base-color:${colors.baseColor};--shadow-color:${colors.shadowColor};--deep-shadow-color:${colors.deepShadowColor};--border-color:${colors.borderColor};`, "style")}> ${text} </button> `;
}, "/Users/kusum/Documents/projects/ludo/src/components/game-button.astro", void 0);

const $$ShareButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Button", $$GameButton, { "id": "share-btn", "class": "w-fit !h-10 mx-auto block", "text": "Share Now!", "color": "#db5c4c" })} ${renderScript($$result, "/Users/kusum/Documents/projects/ludo/src/components/share-button.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kusum/Documents/projects/ludo/src/components/share-button.astro", void 0);

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex justify-center items-center h-dvh p-2"> <div class="rounded-2xl shadow-md bg-white px-5 sm:px-10 py-5 w-full max-w-lg space-y-5"> <div> <img class="block mx-auto min-h-28 h-28 mb-2" draggable="false" src="/logo.png" alt="Ludon logo" loading="eager"> <h2 class="text-center font-semibold text-lg">Roll the Dice, Rule the Board!</h2> </div> <div class="grid grid-cols-2 gap-8"> <a href="/pass-and-play"> ${renderComponent($$result2, "GameButton", $$GameButton, { "id": "pass-and-play", "class": "w-full", "text": "Pass & Play", "color": "#629e76" })}</a> <a href="/computer"> ${renderComponent($$result2, "GameButton", $$GameButton, { "id": "computer", "class": "w-full", "text": "Computer", "color": "#3ebbf7" })}</a> </div> <div> <p class="text-center font-medium mb-5">Share Ludon with your friends</p> ${renderComponent($$result2, "ShareButton", $$ShareButton, {})} </div> <p class="text-center">
Created by
<a class="underline font-medium" href="https://x.com/yourcodebuddy">Yourcodebuddy</a> </p> </div> </main> ` })} ${renderScript($$result, "/Users/kusum/Documents/projects/ludo/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kusum/Documents/projects/ludo/src/pages/index.astro", void 0);

const $$file = "/Users/kusum/Documents/projects/ludo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
