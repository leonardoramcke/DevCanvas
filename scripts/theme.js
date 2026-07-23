/* ==========================================================
   DevCanvas
   theme.js
   Gerenciamento de Tema
========================================================== */

import { DOM } from "./dom.js";

import { state, setTheme } from "./state.js";

import { saveState } from "./storage.js";

/* ==========================================================
   CONSTANTES
========================================================== */

const LIGHT = "light";

const DARK = "dark";

/* ==========================================================
   APPLY THEME
========================================================== */

export function applyTheme(){

    document.body.classList.toggle(

        "dark",

        state.theme === DARK

    );

    updateButton();

}

/* ==========================================================
   TOGGLE
========================================================== */

export function toggleTheme(){

    const theme =

        state.theme === LIGHT

            ? DARK

            : LIGHT;

    setTheme(theme);

    applyTheme();

    saveState();

}

/* ==========================================================
   SET THEME
========================================================== */

export function changeTheme(theme){

    if(

        theme !== LIGHT &&

        theme !== DARK

    ){

        return;

    }

    setTheme(theme);

    applyTheme();

    saveState();

}

/* ==========================================================
   BUTTON
========================================================== */

function updateButton(){

    if(!DOM.themeToggle) return;

    if(state.theme === DARK){

        DOM.themeToggle.textContent = "☀️ Light Mode";

    }

    else{

        DOM.themeToggle.textContent = "🌙 Dark Mode";

    }

}

/* ==========================================================
   SYSTEM THEME
========================================================== */

export function detectSystemTheme(){

    return window.matchMedia(

        "(prefers-color-scheme: dark)"

    ).matches

        ? DARK

        : LIGHT;

}

/* ==========================================================
   INITIALIZE
========================================================== */

export function initializeTheme(){

    if(

        state.theme !== LIGHT &&

        state.theme !== DARK

    ){

        setTheme(

            detectSystemTheme()

        );

    }

    applyTheme();

}