globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, a as renderScript, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_BQtY0g0a.mjs';
import { c as cn, $ as $$Layout } from '../chunks/utils_DWh1gUMu.mjs';
import { r as redHorse, b as blueHorse, y as yellowHorse, g as greenHorse } from '../chunks/green_BAJewDlO.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BDX-qWvf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$PlayerCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PlayerCard;
  const { id, playerName, reverse = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`player-${id}-area`, "id")}${addAttribute(`flex ${reverse ? "flex-row-reverse" : ""}`, "class")}> <div class="w-15 h-15 rounded-md bg-white"> <figure> <img${addAttribute(`player-${id}-image`, "id")} class="size-full rounded-md aspect-square"${addAttribute(playerName, "alt")}> <figcaption${addAttribute(`player-${id}-name`, "id")} class="text-xs text-center mt-1">${playerName}</figcaption> </figure> </div> <div${addAttribute(`w-12 h-12 ${reverse ? "rounded-l-md" : "rounded-r-md"} mt-1.5 bg-gray-800`, "class")}> <img${addAttribute(`player-${id}-dice`, "id")} class="w-full p-1 player-dice"> </div> <img${addAttribute(`player-${id}-dice-arrow`, "id")}${addAttribute(`h-12 mt-1 ${reverse ? "" : "rotate-180"}`, "class")}> </div> ${renderScript($$result, "/Users/kusum/Documents/projects/ludo/src/components/game-board/player-card.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kusum/Documents/projects/ludo/src/components/game-board/player-card.astro", void 0);

const $$BoardBlueMiddlePath = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<table${addAttribute(cn(
    "path bg-gray-700",
    "[&_td]:border [&_td]:border-black [&_td]:w-[22.5px] [&_td]:h-[22.5px] [&_img]:w-[9px] [&_img]:mx-auto"
  ), "class")}> <tr> <td class="r11 b50 y24 g37"></td> <td class="r12 b51 y25 g38 bg-[url('/arrows/blue.png')] bg-contain"></td> <td class="r13 y26 g39"></td> </tr> <tr> <td class="r10 b49 y23 g36"></td> <td class="b52 bg-sky-300"></td> <td class="r14 b1 y27 g40 bg-sky-300"></td> </tr> <tr> <td class="r9 b48 y22 g35 bg-[url('/white-star.png')] bg-contain"></td> <td class="b53 bg-sky-300"></td> <td class="r15 b2 y28 g41"></td> </tr> <tr> <td class="r8 b47 y21 g34"></td> <td class="b54 bg-sky-300"></td> <td class="r16 b3 y29 g42"></td> </tr> <tr> <td class="r7 b46 y20 g33"></td> <td class="b55 bg-sky-300"></td> <td class="r17 b4 y30 g43"></td> </tr> <tr> <td class="r6 b45 y19 g32"></td> <td class="b56 bg-sky-300"></td> <td class="r18 b5 y31 g44"></td> </tr> </table>`;
}, "/Users/kusum/Documents/projects/ludo/src/components/game-board/board-blue-middle-path.astro", void 0);

const $$BoardGreenMiddlePath = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<table${addAttribute(cn(
    "middle-table path bg-gray-700",
    "[&_td]:border [&_td]:border-black [&_td]:w-[22.5px] [&_td]:h-[22.5px] [&_img]:w-[9px] [&_img]:mx-auto"
  ), "class")}> <tr> <td class="r19 b6 y32 g45"></td> <td class="r20 b7 y33 g46"></td> <td class="r21 b8 y34 g47"></td> <td class="r22 b9 y35 g48 bg-[url('/white-star.png')] bg-contain"></td> <td class="r23 b10 y36 g49"></td> <td class="r24 b11 y37 g50"></td> </tr> <tr> <td class="g56 bg-green-300"></td> <td class="g55 bg-green-300"></td> <td class="g54 bg-green-300"></td> <td class="g53 bg-green-300"></td> <td class="g52 bg-green-300"></td> <td class="r25 b12 y38 g51 bg-[url('/arrows/green.png')] bg-contain"></td> </tr> <tr> <td class="r31 b18 y44 g5"></td> <td class="r30 b17 y43 g4"></td> <td class="r29 b16 y42 g3"></td> <td class="r28 b15 y41 g2"></td> <td class="r27 b14 y40 g1 bg-green-300"></td> <td class="r26 b13 y39"></td> </tr> </table>`;
}, "/Users/kusum/Documents/projects/ludo/src/components/game-board/board-green-middle-path.astro", void 0);

const $$BoardRedMiddlePath = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<table${addAttribute(cn(
    "middle-table path bg-gray-700",
    "[&_td]:border [&_td]:border-black [&_td]:w-[22.5px] [&_td]:h-[22.5px] [&_img]:w-[9px] [&_img]:mx-auto"
  ), "class")}> <tr> <td class="b39 y13 g26"></td> <td class="r1 b40 y14 g27 bg-red-300"></td> <td class="r2 b41 y15 g28"></td> <td class="r3 b42 y16 g29"></td> <td class="r4 b43 y17 g30"></td> <td class="r5 b44 y18 g31"></td> </tr> <tr> <td class="r51 b38 y12 g25 bg-[url('/arrows/red.png')] bg-contain"></td> <td class="r52 bg-red-300"></td> <td class="r53 bg-red-300"></td> <td class="r54 bg-red-300"></td> <td class="r55 bg-red-300"></td> <td class="r56 bg-red-300"></td> </tr> <tr> <td class="r50 b37 y11 g24"></td> <td class="r49 b36 y10 g23"></td> <td class="r48 b35 y9 g22 bg-[url('/white-star.png')] bg-contain"></td> <td class="r47 b34 y8 g21"></td> <td class="r46 b33 y7 g20"></td> <td class="r45 b32 y6 g19"></td> </tr> </table>`;
}, "/Users/kusum/Documents/projects/ludo/src/components/game-board/board-red-middle-path.astro", void 0);

const $$BoardYellowMiddlePath = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<table${addAttribute(cn(
    "path bg-gray-700",
    "[&_td]:border [&_td]:border-black [&_td]:w-[22.5px] [&_td]:h-[22.5px] [&_img]:w-[9px] [&_img]:mx-auto"
  ), "class")}> <tr> <td class="r44 b31 y5 g18"></td> <td class="y56 bg-yellow-300"></td> <td class="r32 b19 y45 g6"></td> </tr> <tr> <td class="r43 b30 y4 g17"></td> <td class="y55 bg-yellow-300"></td> <td class="r33 b20 y46 g7"></td> </tr> <tr> <td class="r42 b29 y3 g16"></td> <td class="y54 bg-yellow-300"></td> <td class="r34 b21 y47 g8"></td> </tr> <tr> <td class="r41 b28 y2 g15"></td> <td class="y53 bg-yellow-300"></td> <td class="r35 b22 y48 g9 bg-[url('/white-star.png')] bg-contain"></td> </tr> <tr> <td class="r40 b27 y1 g14 bg-yellow-300"></td> <td class="y52 bg-yellow-300"></td> <td class="r36 b23 y49 g10"></td> </tr> <tr> <td class="r39 b26 g13"></td> <td class="r38 b25 y51 g12 bg-[url('/arrows/yellow.png')] bg-contain"></td> <td class="r37 b24 y50 g11"></td> </tr> </table>`;
}, "/Users/kusum/Documents/projects/ludo/src/components/game-board/board-yellow-middle-path.astro", void 0);

const $$LudoHome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-[68.5px] h-[68.5px] bg-[url('/ludo-home.jpg')] bg-contain [&_img]:w-[9px] [&_img]:mx-auto"> <table id="win"> <tr> <td></td> <td class="b57 w-[23px] h-[23px]"></td> <td></td> </tr> <tr> <td class="r57 w-[23px] h-[23px]"></td> <td></td> <td class="g57 w-[23px] h-[23px]"></td> </tr> <tr> <td></td> <td class="y57 w-[23px] h-[23px]"></td> <td></td> </tr> </table> </div>`;
}, "/Users/kusum/Documents/projects/ludo/src/components/game-board/ludo-home.astro", void 0);

const $$Astro$1 = createAstro();
const $$PlayerHome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlayerHome;
  const { id, horseImg, horseColor } = Astro2.props;
  const firstColorLetter = horseColor.charAt(0);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`player-${id}`, "id")}${addAttribute(cn(
    "w-[135px] h-[135px] text-gray-500 text-sm box-content flex justify-center items-center",
    `bg-ludon-${horseColor} border-ludon-${horseColor}`,
    id === 1 && "border-t-2 border-l-2 rounded-tl-[5px]",
    id === 2 && "border-t-2 border-r-2 rounded-tr-[5px]",
    id === 3 && "border-b-2 border-l-2 rounded-bl-[5px]",
    id === 4 && "border-b-2 border-r-2 rounded-br-[5px]"
  ), "class")}> <table${addAttribute(cn(
    "block p-2.5 rounded-sm bg-white bg-shadow",
    "[&_td]:flex [&_td]:justify-center [&_td]:items-center",
    "[&_td]:w-9 [&_td]:h-9 [&_td]:rounded-full [&_td]:bg-gray-200",
    "[&_img]:w-3 [&_tr]:flex"
  ), "class")}> <tr class="mb-1.5"> <td class="mr-1.5"${addAttribute(`${firstColorLetter}h1`, "id")}>${renderComponent($$result, "Image", $$Image, { "class": `${firstColorLetter}h1`, "src": horseImg, "alt": "Player Horse" })}</td> <td${addAttribute(`${firstColorLetter}h2`, "id")}>${renderComponent($$result, "Image", $$Image, { "class": `${firstColorLetter}h2`, "src": horseImg, "alt": "Player Horse" })}</td> </tr> <tr> <td class="mr-1.5"${addAttribute(`${firstColorLetter}h3`, "id")}>${renderComponent($$result, "Image", $$Image, { "class": `${firstColorLetter}h3`, "src": horseImg, "alt": "Player Horse" })}</td> <td${addAttribute(`${firstColorLetter}h4`, "id")}>${renderComponent($$result, "Image", $$Image, { "class": `${firstColorLetter}h4`, "src": horseImg, "alt": "Player Horse" })}</td> </tr> </table> </div>`;
}, "/Users/kusum/Documents/projects/ludo/src/components/game-board/player-home.astro", void 0);

const $$LudoBoard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="ludo-board" class="mt-10 mb-5"> <div class="flex justify-center w-full game-row" id="top-game-row"> ${renderComponent($$result, "PlayerHome", $$PlayerHome, { "id": 1, "horseImg": redHorse, "horseColor": "red" })} ${renderComponent($$result, "BoardBlueMiddlePath", $$BoardBlueMiddlePath, {})} ${renderComponent($$result, "PlayerHome", $$PlayerHome, { "id": 2, "horseImg": blueHorse, "horseColor": "blue" })} </div> <div id="middle-game-row" class="flex w-full justify-center"> ${renderComponent($$result, "BoardRedMiddlePath", $$BoardRedMiddlePath, {})} ${renderComponent($$result, "LudoHome", $$LudoHome, {})} ${renderComponent($$result, "BoardGreenMiddlePath", $$BoardGreenMiddlePath, {})} </div> <div class="flex justify-center w-full game-row" id="bottom-game-row"> ${renderComponent($$result, "PlayerHome", $$PlayerHome, { "id": 3, "horseImg": yellowHorse, "horseColor": "yellow" })} ${renderComponent($$result, "BoardYellowMiddlePath", $$BoardYellowMiddlePath, {})} ${renderComponent($$result, "PlayerHome", $$PlayerHome, { "id": 4, "horseImg": greenHorse, "horseColor": "green" })} </div> </section>`;
}, "/Users/kusum/Documents/projects/ludo/src/components/game-board/ludo-board.astro", void 0);

const $$GameAudio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<audio preload="auto" style="display: none"> <source src="/audio/game-start.wav" type="audio/wav"> <source src="/audio/dice-roll.wav" type="audio/wav"> <source src="/audio/horse-home.wav" type="audio/wav"> <source src="/audio/horse-kill.wav" type="audio/wav"> <source src="/audio/horse-move.wav" type="audio/wav"> <source src="/audio/horse-safe.wav" type="audio/wav">
Your browser does not support the audio element.
</audio>`;
}, "/Users/kusum/Documents/projects/ludo/src/components/game-audio.astro", void 0);

const $$WinnersModel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="winners" class="w-full max-w-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-lg z-100 hidden"> <img class="h-24 mx-auto mb-2" src="/logo.png"> <h1 class="text-base text-center">Congratulations!</h1> <div class="flex flex-col items-center gap-3 my-4"> <div id="winner-1" class="flex items-center w-full border-2 border-ludon-blue rounded-xl bg-white p-3 shadow-md hover:shadow-lg transition-shadow"> <div class="flex items-center justify-center bg-ludon-blue text-white rounded-full w-8 h-8 mr-3"> <span class="text-lg font-bold">1</span> </div> <div class="flex items-center gap-2 flex-1"> <img id="winner-1-image" class="w-[35px] h-[35px] rounded-full object-cover" alt="Player 1"> <span id="winner-1-name" class="text-lg font-semibold">Player 1</span> </div> <div class="flex-shrink-0"> <span class="bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full font-bold text-xs">GOLD</span> </div> </div> <div id="winner-2" class="flex items-center w-full border-2 border-gray-500 rounded-xl bg-white p-3 shadow-md hover:shadow-lg transition-shadow"> <div class="flex items-center justify-center bg-gray-500 text-white rounded-full w-8 h-8 mr-3"> <span class="text-lg font-bold">2</span> </div> <div class="flex items-center gap-2 flex-1"> <img id="winner-2-image" class="w-[35px] h-[35px] rounded-full object-cover" alt="Player 2"> <span id="winner-2-name" class="text-lg font-semibold">Player 2</span> </div> <div class="flex-shrink-0"> <span class="bg-gray-200 text-gray-600 px-2 py-1 rounded-full font-bold text-xs">SILVER</span> </div> </div> <div id="winner-3" class="flex items-center w-full border-2 border-amber-700 rounded-xl bg-white p-3 shadow-md hover:shadow-lg transition-shadow"> <div class="flex items-center justify-center bg-amber-700 text-white rounded-full w-8 h-8 mr-3"> <span class="text-lg font-bold">3</span> </div> <div class="flex items-center gap-2 flex-1"> <img id="winner-3-image" class="w-[35px] h-[35px] rounded-full object-cover" alt="Player 3"> <span id="winner-3-name" class="text-lg font-semibold">Player 3</span> </div> <div class="flex-shrink-0"> <span class="bg-orange-200 text-amber-800 px-2 py-1 rounded-full font-bold text-xs">BRONZE</span> </div> </div> <div id="winner-4" class="flex items-center w-full border-2 border-gray-400 rounded-xl bg-white p-3 shadow-md hover:shadow-lg transition-shadow"> <div class="flex items-center justify-center bg-gray-400 text-gray-600 rounded-full w-8 h-8 mr-3"> <span class="text-lg font-bold">4</span> </div> <div class="flex items-center gap-2 flex-1"> <img id="winner-4-image" class="w-[35px] h-[35px] rounded-full object-cover" alt="Player 4"> <span id="winner-4-name" class="text-lg font-semibold">Player 4</span> </div> </div> </div> <div class="flex gap-3 justify-center"> <button type="button" onclick="location.href='/'" class="bg-ludon-blue text-white px-4 py-2 rounded-lg font-medium transition-colors">Menu</button> </div> </div>`;
}, "/Users/kusum/Documents/projects/ludo/src/components/game-board/winners-model.astro", void 0);

const $$Astro = createAstro();
const $$GameStartCountdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GameStartCountdown;
  const { countdownFrom = 3 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="game-start-countdown" class="fixed inset-0 flex items-center justify-center bg-black/80 z-50"> <div class="bg-white rounded-lg p-5 text-center shadow-lg"> <p id="countdown-text" class="text-4xl font-bold text-ludon-blue">${countdownFrom}</p> <p class="text-sm mt-2 text-gray-700">Get ready to play!</p> <div class="mt-3 flex justify-center space-x-1"> <span class="w-2 h-2 bg-ludon-red rounded-full animate-pulse"></span> <span class="w-2 h-2 bg-ludon-blue rounded-full animate-pulse animation-delay-300"></span> <span class="w-2 h-2 bg-ludon-green rounded-full animate-pulse animation-delay-600"></span> <span class="w-2 h-2 bg-ludon-yellow rounded-full animate-pulse animation-delay-900"></span> </div> </div> </div> ${renderScript($$result, "/Users/kusum/Documents/projects/ludo/src/components/game-board/game-start-countdown.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kusum/Documents/projects/ludo/src/components/game-board/game-start-countdown.astro", void 0);

const $$GameAssets = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Preload dice images --><link rel="preload" href="/dice/dice-1.png" as="image"><link rel="preload" href="/dice/dice-2.png" as="image"><link rel="preload" href="/dice/dice-3.png" as="image"><link rel="preload" href="/dice/dice-4.png" as="image"><link rel="preload" href="/dice/dice-5.png" as="image"><link rel="preload" href="/dice/dice-6.png" as="image"><link rel="preload" href="/horses/red.png" as="image"><link rel="preload" href="/horses/blue.png" as="image"><link rel="preload" href="/horses/green.png" as="image"><link rel="preload" href="/horses/yellow.png" as="image"><link rel="preload" href="/gifs/dice-roll.gif" as="image"><link rel="preload" href="/gifs/horse-circle.gif" as="image"><link rel="preload" href="/gifs/arrow1.gif" as="image">`;
}, "/Users/kusum/Documents/projects/ludo/src/components/game-assets.astro", void 0);

const $$GameBoard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex justify-center items-center h-dvh p-2"> ${renderComponent($$result2, "WinnersModel", $$WinnersModel, {})} <section id="game-container" class="transform-origin-center"> <section class="flex justify-between w-[320px] mx-auto player-area"> ${renderComponent($$result2, "PlayerCard", $$PlayerCard, { "id": 1, "playerName": "Player 1" })} ${renderComponent($$result2, "PlayerCard", $$PlayerCard, { "id": 2, "playerName": "Player 2", "reverse": true })} </section> ${renderComponent($$result2, "LudoBoard", $$LudoBoard, {})} <section class="flex justify-between w-[320px] mx-auto player-area"> ${renderComponent($$result2, "PlayerCard", $$PlayerCard, { "id": 3, "playerName": "Player 3" })} ${renderComponent($$result2, "PlayerCard", $$PlayerCard, { "id": 4, "playerName": "Player 4", "reverse": true })} </section> </section> ${renderComponent($$result2, "GameAudio", $$GameAudio, {})} ${renderComponent($$result2, "GameAssets", $$GameAssets, {})} ${renderComponent($$result2, "GameStartCountdown", $$GameStartCountdown, {})} </main> ` })} ${renderScript($$result, "/Users/kusum/Documents/projects/ludo/src/pages/game-board.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kusum/Documents/projects/ludo/src/pages/game-board.astro", void 0);

const $$file = "/Users/kusum/Documents/projects/ludo/src/pages/game-board.astro";
const $$url = "/game-board";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GameBoard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
