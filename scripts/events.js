/* ==========================================================
   DevCanvas
   events.js
   Controlador de Eventos
========================================================== */

import { DOM } from "./dom.js";

import { updateState, resetState } from "./state.js";

import { updatePreview } from "./preview.js";

import { generateCSS } from "./generator.js";

import { copyCSS } from "./clipboard.js";

import { saveState } from "./storage.js";

import { applyPreset } from "./presets.js";

import { toggleTheme } from "./theme.js";

import { state } from "./state.js";

import { CONTROLS, readControlValue, writeControlValue } from "./controls.config.js";

/* ==========================================================
   REGISTRA TODOS OS INPUTS
   (o mesmo handler serve pra qualquer efeito registrado em
   controls.config.js — adicionar um efeito novo não exige
   tocar neste arquivo)
========================================================== */

function registerControls(){

    CONTROLS.forEach(control => {

        const element = DOM[control.key];

        if(!element) return;

        const eventName = control.type === "checkbox" ? "change" : "input";

        element.addEventListener(eventName, () => {

            const value = readControlValue(control, element);

            updateState({ [control.key]: value });

            updatePreview();
            generateCSS();
            saveState();

        });

    });

}

/* ==========================================================
   BOTÃO COPIAR
========================================================== */

function registerCopy(){
    if(!DOM.copyButton) return;
    DOM.copyButton.addEventListener("click", copyCSS);
}

/* ==========================================================
   BOTÃO RESET
========================================================== */

function registerReset(){

    if(!DOM.resetButton) return;

    DOM.resetButton.addEventListener("click", () => {
        resetState();
        syncControls();
        updatePreview();
        generateCSS();
        saveState();
    });

}

/* ==========================================================
   PRESETS
========================================================== */

function registerPresets(){

    DOM.presetButtons.forEach(button => {

        button.addEventListener("click", () => {
            const preset = button.dataset.preset;
            applyPreset(preset);
            syncControls();
            updatePreview();
            generateCSS();
            saveState();
        });

    });

}

/* ==========================================================
   DARK MODE
========================================================== */

function registerTheme(){
    if(!DOM.themeToggle) return;
    DOM.themeToggle.addEventListener("click", toggleTheme);
}

/* ==========================================================
   SINCRONIZA CONTROLES (state -> DOM)
========================================================== */

export function syncControls(){

    CONTROLS.forEach(control => {

        const element = DOM[control.key];

        if(!element) return;

        writeControlValue(control, element, state[control.key]);

    });

}

/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

export function initializeEvents(){
    registerControls();
    registerCopy();
    registerReset();
    registerPresets();
    registerTheme();
}
