/* ==========================================================
   DevCanvas
   preview.js
   Atualização do Preview
========================================================== */

import { DOM } from "./dom.js";

import { state } from "./state.js";

import { buildGlassStyles } from "./effects.js";

/* ==========================================================
   UPDATE PREVIEW
========================================================== */

export function updatePreview(){

    if(!DOM.previewCard) return;

    updateBackground();

    updateGlass();

}

/* ==========================================================
   BACKGROUND (fundo da cena, atrás do card)
========================================================== */

function updateBackground(){

    if(!DOM.previewBackground) return;

    DOM.previewBackground.style.background = state.backgroundColor;

}

/* ==========================================================
   GLASS CARD
========================================================== */

function updateGlass(){

    const glass = DOM.previewCard;

    const styles = buildGlassStyles(state);

    Object.assign(glass.style, styles);

}

/* ==========================================================
   RESET PREVIEW
========================================================== */

export function resetPreview(){
    updatePreview();
}

/* ==========================================================
   UPDATE SINGLE PROPERTY
========================================================== */

export function updateProperty(property, value){
    state[property] = value;
    updatePreview();
}

/* ==========================================================
   APPLY PRESET
========================================================== */

export function applyPreview(values){
    Object.assign(state, values);
    updatePreview();
}

/* ==========================================================
   INITIALIZE
========================================================== */

export function initializePreview(){
    updatePreview();
}
