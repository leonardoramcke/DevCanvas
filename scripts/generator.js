/* ==========================================================
   DevCanvas
   generator.js
   Gerador de CSS
========================================================== */

import { state, setCSS } from "./state.js";

import { DOM } from "./dom.js";

import {
    buildCardBackground,
    buildGlassBorder,
    buildShadow,
    buildBackdropFilter
} from "./effects.js";

/* ==========================================================
   GENERATE CSS
========================================================== */

export function generateCSS(){

    const css = buildCSS();

    setCSS(css);

    updateOutput(css);

    return css;

}

/* ==========================================================
   BUILD CSS
========================================================== */

function buildCSS(){

    return `/* ==========================================
   DevCanvas CSS Generator
   https://github.com/leonardoramcke/DevCanvas
========================================== */

.glass {
    background: ${buildCardBackground(state)};
    backdrop-filter: ${buildBackdropFilter(state)};
    -webkit-backdrop-filter: ${buildBackdropFilter(state)};
    border: ${buildGlassBorder(state)};
    border-radius: ${state.borderRadius}px;
    box-shadow: ${buildShadow(state)};
}
${gradientComment()}`;

}

/* ==========================================================
   COMENTÁRIO EXPLICATIVO (só aparece quando gradiente ativo)
========================================================== */

function gradientComment(){

    if(!state.useGradient) return "";

    return `
/* Dica: o background acima usa um gradiente linear de
   ${state.gradientAngle}deg entre ${state.gradientColor1} e ${state.gradientColor2}.
   Desative "Usar gradiente" no painel para voltar à cor sólida. */
`;

}

/* ==========================================================
   UPDATE OUTPUT
========================================================== */

function updateOutput(css){
    if(!DOM.cssOutput) return;
    DOM.cssOutput.value = css;
}

/* ==========================================================
   EXPORT CSS
========================================================== */

export function exportCSS(){
    return buildCSS();
}

/* ==========================================================
   GENERATE MINIFIED
========================================================== */

export function generateMinifiedCSS(){
    return `.glass{background:${buildCardBackground(state)};backdrop-filter:${buildBackdropFilter(state)};-webkit-backdrop-filter:${buildBackdropFilter(state)};border:${buildGlassBorder(state)};border-radius:${state.borderRadius}px;box-shadow:${buildShadow(state)};}`;
}

/* ==========================================================
   GENERATE JSON (export de preset)
========================================================== */

export function exportPreset(){

    return JSON.stringify({
        theme: state.theme,
        backgroundColor: state.backgroundColor,
        glassColor: state.glassColor,
        transparency: state.transparency,
        blur: state.blur,
        borderRadius: state.borderRadius,
        borderWidth: state.borderWidth,
        borderOpacity: state.borderOpacity,
        shadowX: state.shadowX,
        shadowY: state.shadowY,
        shadowBlur: state.shadowBlur,
        shadowSpread: state.shadowSpread,
        shadowOpacity: state.shadowOpacity,
        shadowColor: state.shadowColor,
        useGradient: state.useGradient,
        gradientColor1: state.gradientColor1,
        gradientColor2: state.gradientColor2,
        gradientAngle: state.gradientAngle
    }, null, 4);

}

/* ==========================================================
   INITIALIZE
========================================================== */

export function initializeGenerator(){
    generateCSS();
}
