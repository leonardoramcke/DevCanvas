/* ==========================================================
   DevCanvas
   dom.js
   Centralização dos Seletores do DOM
========================================================== */

import { CONTROLS } from "./controls.config.js";

/* ==========================================================
   ELEMENTOS FIXOS (não fazem parte do registro de controles)
========================================================== */

const FIXED = {

    /* HEADER */
    themeToggle:  document.getElementById("themeToggle"),
    resetButton:  document.getElementById("resetButton"),
    copyButton:   document.getElementById("copyCSS"),

    /* PREVIEW */
    previewBackground: document.getElementById("previewBackground"),
    previewCard:        document.getElementById("glassPreview"),

    /* CODE */
    cssOutput: document.getElementById("cssOutput"),

    /* PRESETS */
    presetButtons: document.querySelectorAll("[data-preset]")

};

/* ==========================================================
   ELEMENTOS DE CONTROLE (gerados a partir de controls.config.js)
========================================================== */

const CONTROL_ELEMENTS = {};

CONTROLS.forEach(control => {
    CONTROL_ELEMENTS[control.key] = document.getElementById(control.id);
});

/* ==========================================================
   EXPORT
========================================================== */

export const DOM = {
    ...FIXED,
    ...CONTROL_ELEMENTS
};
