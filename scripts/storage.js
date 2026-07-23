/* ==========================================================
   DevCanvas
   storage.js
   Persistência de Dados (localStorage)
========================================================== */

import { state, updateState } from "./state.js";

/* ==========================================================
   CONFIG
========================================================== */

const STORAGE_KEY = "devcanvas-state";

/* ==========================================================
   SAVE
========================================================== */

export function saveState(){

    try{

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(state)

        );

    }

    catch(error){

        console.error(

            "Erro ao salvar estado:",

            error

        );

    }

}

/* ==========================================================
   LOAD
========================================================== */

export function loadState(){

    try{

        const saved = localStorage.getItem(

            STORAGE_KEY

        );

        if(!saved){

            return false;

        }

        const data = JSON.parse(saved);

        updateState(data);

        return true;

    }

    catch(error){

        console.error(

            "Erro ao carregar estado:",

            error

        );

        return false;

    }

}

/* ==========================================================
   CLEAR
========================================================== */

export function clearState(){

    localStorage.removeItem(

        STORAGE_KEY

    );

}

/* ==========================================================
   EXISTS
========================================================== */

export function hasSavedState(){

    return localStorage.getItem(

        STORAGE_KEY

    ) !== null;

}

/* ==========================================================
   EXPORT
========================================================== */

export function exportState(){

    return JSON.stringify(

        state,

        null,

        4

    );

}

/* ==========================================================
   IMPORT
========================================================== */

export function importState(json){

    try{

        const data = JSON.parse(json);

        updateState(data);

        saveState();

        return true;

    }

    catch(error){

        console.error(error);

        return false;

    }

}

/* ==========================================================
   AUTO SAVE
========================================================== */

export function autoSave(){

    saveState();

}

/* ==========================================================
   INITIALIZE
========================================================== */

export function initializeStorage(){

    loadState();

}