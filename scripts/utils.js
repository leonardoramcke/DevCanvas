/* ==========================================================
   DevCanvas
   utils.js
   Funções Utilitárias
========================================================== */

/* ==========================================================
   HEX -> RGBA
========================================================== */

export function hexToRGBA(hex, opacity = 1){

    if(!hex) return `rgba(255,255,255,${opacity})`;

    const value = hex.replace("#","");

    const bigint = parseInt(value,16);

    const r = (bigint >> 16) & 255;

    const g = (bigint >> 8) & 255;

    const b = bigint & 255;

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;

}


/* ==========================================================
   CLAMP
========================================================== */

export function clamp(value,min,max){

    return Math.min(Math.max(value,min),max);

}


/* ==========================================================
   ROUND
========================================================== */

export function round(value,decimals=2){

    return Number(Number(value).toFixed(decimals));

}


/* ==========================================================
   DEBOUNCE
========================================================== */

export function debounce(callback,delay=150){

    let timeout;

    return (...args)=>{

        clearTimeout(timeout);

        timeout = setTimeout(()=>{

            callback(...args);

        },delay);

    };

}


/* ==========================================================
   THROTTLE
========================================================== */

export function throttle(callback,limit=100){

    let waiting = false;

    return (...args)=>{

        if(waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(()=>{

            waiting = false;

        },limit);

    };

}


/* ==========================================================
   RANDOM ID
========================================================== */

export function randomID(length=8){

    return Math.random()

        .toString(36)

        .substring(2,2+length);

}


/* ==========================================================
   COPY STRING
========================================================== */

export async function copy(text){

    try{

        await navigator.clipboard.writeText(text);

        return true;

    }

    catch(error){

        console.error(error);

        return false;

    }

}


/* ==========================================================
   CSS VALUE
========================================================== */

export function px(value){

    return `${value}px`;

}

export function percent(value){

    return `${value}%`;

}


/* ==========================================================
   FORMAT NUMBER
========================================================== */

export function format(value){

    return Number(value).toLocaleString("pt-BR");

}


/* ==========================================================
   GET CSS VARIABLE
========================================================== */

export function getCSSVariable(name){

    return getComputedStyle(document.documentElement)

        .getPropertyValue(name)

        .trim();

}


/* ==========================================================
   SET CSS VARIABLE
========================================================== */

export function setCSSVariable(name,value){

    document.documentElement

        .style

        .setProperty(name,value);

}


/* ==========================================================
   TOGGLE CLASS
========================================================== */

export function toggleClass(element,className){

    element.classList.toggle(className);

}


/* ==========================================================
   ADD CLASS
========================================================== */

export function addClass(element,className){

    element.classList.add(className);

}


/* ==========================================================
   REMOVE CLASS
========================================================== */

export function removeClass(element,className){

    element.classList.remove(className);

}


/* ==========================================================
   CREATE ELEMENT
========================================================== */

export function create(tag,classes=""){

    const element = document.createElement(tag);

    if(classes){

        element.className = classes;

    }

    return element;

}


/* ==========================================================
   IS DARK MODE
========================================================== */

export function isDark(){

    return document.body.classList.contains("dark");

}


/* ==========================================================
   DOWNLOAD FILE
========================================================== */

export function download(filename,content){

    const blob = new Blob([content],{

        type:"text/plain"

    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = filename;

    link.click();

    URL.revokeObjectURL(url);

}


/* ==========================================================
   WAIT
========================================================== */

export function wait(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}


/* ==========================================================
   LERP
========================================================== */

export function lerp(start,end,amount){

    return start + (end-start)*amount;

}


/* ==========================================================
   MAP
========================================================== */

export function map(value,inMin,inMax,outMin,outMax){

    return (

        (value-inMin)*(outMax-outMin)

    )/

    (inMax-inMin)

    +

    outMin;

}


/* ==========================================================
   CAPITALIZE
========================================================== */

export function capitalize(text){

    if(!text) return "";

    return text.charAt(0).toUpperCase()

    +

    text.slice(1);

}


/* ==========================================================
   TOAST PLACEHOLDER
========================================================== */

export function toast(message){

    console.log("[DevCanvas]",message);

}