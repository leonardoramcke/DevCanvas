/* ==========================================================
   DevCanvas
   clipboard.js
   Área de Transferência
========================================================== */

import { DOM } from "./dom.js";

import { state } from "./state.js";


/* ==========================================================
   CONFIG
========================================================== */

const DEFAULT_TEXT = "📋 Copiar CSS";

const SUCCESS_TEXT = "✅ Copiado!";

const ERROR_TEXT = "❌ Erro";

const SUCCESS_CLASS = "is-success";

const ERROR_CLASS = "is-error";


/* ==========================================================
   COPY CSS
========================================================== */

export async function copyCSS(){

    if(!state.css){

        console.warn("Nenhum CSS foi gerado.");

        return false;

    }

    try{

        await navigator.clipboard.writeText(state.css);

        success();

        return true;

    }

    catch(error){

        console.error(error);

        fallbackCopy(state.css);

    }

}


/* ==========================================================
   FALLBACK
========================================================== */

function fallbackCopy(text){

    const textarea = document.createElement("textarea");

    textarea.value = text;

    textarea.style.position = "fixed";

    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);

    textarea.focus();

    textarea.select();

    try{

        document.execCommand("copy");

        success();

    }

    catch(error){

        console.error(error);

        failure();

    }

    finally{

        textarea.remove();

    }

}


/* ==========================================================
   SUCCESS
========================================================== */

function success(){

    if(!DOM.copyButton) return;

    DOM.copyButton.classList.remove(ERROR_CLASS);

    DOM.copyButton.classList.add(SUCCESS_CLASS);

    DOM.copyButton.textContent = SUCCESS_TEXT;

    DOM.copyButton.disabled = true;

    setTimeout(resetButton,1800);

}


/* ==========================================================
   FAILURE
========================================================== */

function failure(){

    if(!DOM.copyButton) return;

    DOM.copyButton.classList.remove(SUCCESS_CLASS);

    DOM.copyButton.classList.add(ERROR_CLASS);

    DOM.copyButton.textContent = ERROR_TEXT;

    DOM.copyButton.disabled = true;

    setTimeout(resetButton,1800);

}


/* ==========================================================
   RESET BUTTON
========================================================== */

function resetButton(){

    if(!DOM.copyButton) return;

    DOM.copyButton.disabled = false;

    DOM.copyButton.classList.remove(

        SUCCESS_CLASS,

        ERROR_CLASS

    );

    DOM.copyButton.textContent = DEFAULT_TEXT;

}


/* ==========================================================
   PUBLIC RESET
========================================================== */

export function initializeClipboard(){

    resetButton();

}