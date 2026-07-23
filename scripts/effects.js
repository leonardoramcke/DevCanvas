/* ==========================================================
   DevCanvas
   effects.js
   Fonte Única dos Efeitos (usada por generator.js e preview.js)
========================================================== */

import { hexToRGBA } from "./utils.js";

/*
    Cada builder recebe `state` e devolve um objeto plano com
    os valores de CSS já calculados (sem se importar se serão
    usados como texto ou como style inline). Isso é o que
    permite adicionar um novo efeito no futuro sem duplicar
    lógica entre o preview e o gerador de código.
*/

/* ==========================================================
   BACKGROUND DO CARD (sólido ou gradiente)
========================================================== */

export function buildCardBackground(state){

    if(state.useGradient){
        return `linear-gradient(${state.gradientAngle}deg, ` +
            `${hexToRGBA(state.gradientColor1, state.transparency)}, ` +
            `${hexToRGBA(state.gradientColor2, state.transparency)})`;
    }

    return hexToRGBA(state.glassColor, state.transparency);

}

/* ==========================================================
   BORDA DO GLASS
========================================================== */

export function buildGlassBorder(state){
    return `${state.borderWidth}px solid ${hexToRGBA("#FFFFFF", state.borderOpacity)}`;
}

/* ==========================================================
   SOMBRA
========================================================== */

export function buildShadow(state){
    return `${state.shadowX}px ${state.shadowY}px ${state.shadowBlur}px ` +
        `${state.shadowSpread}px ${hexToRGBA(state.shadowColor, state.shadowOpacity)}`;
}

/* ==========================================================
   BLUR (backdrop-filter)
========================================================== */

export function buildBackdropFilter(state){
    return `blur(${state.blur}px)`;
}

/* ==========================================================
   CONJUNTO COMPLETO DO CARD
   (usado pelo preview para aplicar style inline)
========================================================== */

export function buildGlassStyles(state){
    return {
        background: buildCardBackground(state),
        backdropFilter: buildBackdropFilter(state),
        webkitBackdropFilter: buildBackdropFilter(state),
        border: buildGlassBorder(state),
        borderRadius: `${state.borderRadius}px`,
        boxShadow: buildShadow(state)
    };
}
