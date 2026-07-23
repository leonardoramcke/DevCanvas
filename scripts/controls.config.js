/* ==========================================================
   DevCanvas
   controls.config.js
   Registro Único de Controles (state <-> DOM <-> tipo)
========================================================== */

/*
    Cada entrada descreve UM controle da interface:

    - key:  propriedade correspondente em state.js
    - id:   id do elemento no index.html
    - type: como o valor deve ser lido/escrito
              "color"    -> string hex, sem conversão
              "number"   -> Number(value), sem conversão
              "percent"  -> input manda 0-100, state guarda 0-1
              "checkbox" -> input.checked (boolean)

    Para adicionar um novo efeito (ex: text-shadow, clip-path):
      1. Adicione os campos no state.js (com valor padrão)
      2. Adicione os inputs correspondentes no index.html
      3. Registre cada input aqui embaixo
      4. Crie o builder em effects.js
    Nenhum outro arquivo precisa ser tocado — dom.js, events.js
    e storage.js leem tudo a partir deste registro.
*/

export const CONTROLS = [

    /* ================= BACKGROUND (preview) ================= */
    { key: "backgroundColor", id: "backgroundColor", type: "color" },

    /* ================= GLASSMORPHISM ================= */
    { key: "glassColor",    id: "glassColor",    type: "color" },
    { key: "transparency",  id: "glassOpacity",  type: "percent" },
    { key: "blur",          id: "glassBlur",     type: "number" },
    { key: "borderOpacity", id: "borderOpacity", type: "percent" },
    { key: "borderWidth",   id: "borderWidth",   type: "number" },

    /* ================= SHADOW ================= */
    { key: "shadowX",      id: "shadowX",      type: "number" },
    { key: "shadowY",      id: "shadowY",      type: "number" },
    { key: "shadowBlur",   id: "shadowBlur",   type: "number" },
    { key: "shadowSpread", id: "shadowSpread", type: "number" },
    { key: "shadowColor",  id: "shadowColor",  type: "color" },

    /* ================= GRADIENT ================= */
    { key: "useGradient",    id: "useGradient",    type: "checkbox" },
    { key: "gradientColor1", id: "gradientColor1", type: "color" },
    { key: "gradientColor2", id: "gradientColor2", type: "color" },
    { key: "gradientAngle",  id: "gradientAngle",  type: "number" },

    /* ================= SHAPE ================= */
    { key: "borderRadius", id: "borderRadius", type: "number" }

];


/* ==========================================================
   HELPERS DE CONVERSÃO
========================================================== */

export function readControlValue(control, element){

    if(control.type === "checkbox"){
        return element.checked;
    }

    if(control.type === "percent"){
        return Number(element.value) / 100;
    }

    if(control.type === "number"){
        return Number(element.value);
    }

    return element.value;

}

export function writeControlValue(control, element, stateValue){

    if(control.type === "checkbox"){
        element.checked = Boolean(stateValue);
        return;
    }

    if(control.type === "percent"){
        element.value = Math.round(Number(stateValue) * 100);
        return;
    }

    element.value = stateValue;

}
