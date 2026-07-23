/* ==========================================================
   DevCanvas
   app.js
   Inicialização da Aplicação
========================================================== */

import { initializeStorage } from "./storage.js";

import { initializeTheme } from "./theme.js";

import { initializePreview } from "./preview.js";

import { initializeGenerator } from "./generator.js";

import { initializeClipboard } from "./clipboard.js";

import { initializeEvents, syncControls } from "./events.js";

/* ==========================================================
   START APPLICATION
========================================================== */

function initializeApp(){

    // 1. Carrega configurações salvas
    initializeStorage();

    // 2. Aplica o tema
    initializeTheme();

    // 3. Sincroniza os controles com o estado
    syncControls();

    // 4. Atualiza o preview
    initializePreview();

    // 5. Gera o CSS inicial
    initializeGenerator();

    // 6. Inicializa o botão de copiar
    initializeClipboard();

    // 7. Registra todos os eventos
    initializeEvents();

    console.log("✅ DevCanvas iniciado com sucesso!");

}

/* ==========================================================
   DOM READY
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    initializeApp

);