/* ==========================================================
   DevCanvas
   state.js
   Estado Global da Aplicação
========================================================== */

/*
    Todas as configurações atuais do gerador ficam armazenadas
    neste objeto. Os demais módulos (preview, generator,
    storage, presets...) trabalham sempre sobre ele.
*/

export const state = {

    /* ======================================================
       TEMA
    ====================================================== */

    theme: "light",

    /* ======================================================
       BACKGROUND
    ====================================================== */

    backgroundColor: "#5B7FFF",

    /* ======================================================
       GLASS
    ====================================================== */

    glassColor: "#FFFFFF",

    transparency: 0.20,

    blur: 20,

    borderRadius: 24,

    borderWidth: 1,

    borderOpacity: 0.25,

    /* ======================================================
       SHADOW
    ====================================================== */

    shadowX: 0,

    shadowY: 12,

    shadowBlur: 32,

    shadowSpread: 0,

    shadowOpacity: 0.18,

    shadowColor: "#000000",

    /* ======================================================
       GRADIENT
    ====================================================== */

    useGradient: false,

    gradientColor1: "#5B7FFF",

    gradientColor2: "#7B61FF",

    gradientAngle: 135,

    /* ======================================================
       EXPORTAÇÃO
    ====================================================== */

    css: "",

    /* ======================================================
       PRESET
    ====================================================== */

    currentPreset: "custom"

};


/* ==========================================================
   GETTERS
========================================================== */

export function getState(){

    return structuredClone(state);

}


/* ==========================================================
   UPDATE
========================================================== */

export function updateState(values){

    Object.assign(state, values);

}


/* ==========================================================
   RESET
========================================================== */

export function resetState(){

    Object.assign(state, {

        theme: "light",

        backgroundColor: "#5B7FFF",

        glassColor: "#FFFFFF",

        transparency: 0.20,

        blur: 20,

        borderRadius: 24,

        borderWidth: 1,

        borderOpacity: 0.25,

        shadowX: 0,

        shadowY: 12,

        shadowBlur: 32,

        shadowSpread: 0,

        shadowOpacity: 0.18,

        shadowColor: "#000000",

        useGradient: false,

        gradientColor1: "#5B7FFF",

        gradientColor2: "#7B61FF",

        gradientAngle: 135,

        css: "",

        currentPreset: "custom"

    });

}


/* ==========================================================
   HELPERS
========================================================== */

export function setTheme(theme){

    state.theme = theme;

}

export function setPreset(name){

    state.currentPreset = name;

}

export function setCSS(css){

    state.css = css;

}