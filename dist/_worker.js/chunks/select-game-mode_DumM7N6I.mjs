globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderScript, b as renderTemplate } from './astro/server_Cqmuhjlt.mjs';
import { c as cn } from './utils_CXtFv3Vu.mjs';

const $$SelectGameMode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="space-y-5 border-b border-gray-300 pb-5 mb-5"> <h2 class="text-center text-xl">Choose a mode</h2> <div${addAttribute(cn(
    "grid grid-cols-3 justify-center border-2 border-ludon-green rounded-full w-full h-[45px] font-bold mx-auto",
    "*:flex *:justify-center *:items-center",
    "*:aria-selected:bg-ludon-green *:aria-selected:text-white"
  ), "class")}> <div id="one-vs-one" aria-selected="true" class="rounded-l-full border-r border-ludon-green">1 vs 1</div> <div id="one-vs-two">1 vs 2</div> <div id="one-vs-three" class="rounded-r-full border-l border-ludon-green">1 vs 3</div> </div> </div> ${renderScript($$result, "/Users/kusum/Documents/projects/ludon-main/src/components/select-game-mode.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kusum/Documents/projects/ludon-main/src/components/select-game-mode.astro", void 0);

export { $$SelectGameMode as $ };
