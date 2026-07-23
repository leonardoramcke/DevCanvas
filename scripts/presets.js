/* ==========================================================
   DevCanvas
   presets.js
   Presets de Glassmorphism
========================================================== */

import { updateState, setPreset } from "./state.js";

/* ==========================================================
   PRESETS
========================================================== */

export const PRESETS = {

    custom:{},

    glassLight:{

        backgroundColor:"#6EA8FE",

        glassColor:"#FFFFFF",

        transparency:0.22,

        blur:18,

        borderRadius:24,

        borderWidth:1,

        borderOpacity:0.30,

        shadowX:0,

        shadowY:10,

        shadowBlur:30,

        shadowSpread:0,

        shadowOpacity:0.18,

        shadowColor:"#000000"

    },

    glassDark:{

        backgroundColor:"#0F172A",

        glassColor:"#0F172A",

        transparency:0.35,

        blur:24,

        borderRadius:24,

        borderWidth:1,

        borderOpacity:0.18,

        shadowX:0,

        shadowY:20,

        shadowBlur:45,

        shadowSpread:0,

        shadowOpacity:0.40,

        shadowColor:"#000000"

    },

    neonGlow:{

        backgroundColor:"#09090B",

        glassColor:"#7B61FF",

        transparency:0.18,

        blur:30,

        borderRadius:28,

        borderWidth:1,

        borderOpacity:0.45,

        shadowX:0,

        shadowY:0,

        shadowBlur:35,

        shadowSpread:5,

        shadowOpacity:0.60,

        shadowColor:"#7B61FF"

    },

    softLight:{

        backgroundColor:"#F5F7FB",

        glassColor:"#FFFFFF",

        transparency:0.55,

        blur:15,

        borderRadius:20,

        borderWidth:1,

        borderOpacity:0.45,

        shadowX:0,

        shadowY:12,

        shadowBlur:30,

        shadowSpread:0,

        shadowOpacity:0.10,

        shadowColor:"#000000"

    },

    aurora:{

        backgroundColor:"#14B8A6",

        glassColor:"#FFFFFF",

        transparency:0.20,

        blur:28,

        borderRadius:30,

        borderWidth:1,

        borderOpacity:0.28,

        shadowX:0,

        shadowY:15,

        shadowBlur:40,

        shadowSpread:0,

        shadowOpacity:0.20,

        shadowColor:"#14B8A6"

    },

    frostedBlue:{

        backgroundColor:"#3B82F6",

        glassColor:"#FFFFFF",

        transparency:0.18,

        blur:22,

        borderRadius:26,

        borderWidth:1,

        borderOpacity:0.35,

        shadowX:0,

        shadowY:14,

        shadowBlur:36,

        shadowSpread:0,

        shadowOpacity:0.22,

        shadowColor:"#2563EB"

    },

    minimal:{

        backgroundColor:"#E5E7EB",

        glassColor:"#FFFFFF",

        transparency:0.10,

        blur:12,

        borderRadius:16,

        borderWidth:1,

        borderOpacity:0.20,

        shadowX:0,

        shadowY:8,

        shadowBlur:18,

        shadowSpread:0,

        shadowOpacity:0.08,

        shadowColor:"#000000"

    },

    purpleDream:{

        backgroundColor:"#2E1065",

        glassColor:"#C4B5FD",

        transparency:0.16,

        blur:22,

        borderRadius:28,

        borderWidth:1,

        borderOpacity:0.30,

        shadowX:0,

        shadowY:18,

        shadowBlur:40,

        shadowSpread:0,

        shadowOpacity:0.35,

        shadowColor:"#7B61FF",

        useGradient:true,

        gradientColor1:"#7B61FF",

        gradientColor2:"#C084FC",

        gradientAngle:135

    }

};


/* ==========================================================
   APPLY
========================================================== */

export function applyPreset(name){

    const preset = PRESETS[name];

    if(!preset){

        console.warn("Preset inexistente:",name);

        return false;

    }

    updateState(preset);

    setPreset(name);

    return true;

}


/* ==========================================================
   GET
========================================================== */

export function getPreset(name){

    return PRESETS[name];

}


/* ==========================================================
   LIST
========================================================== */

export function getPresetNames(){

    return Object.keys(PRESETS);

}


/* ==========================================================
   EXISTS
========================================================== */

export function hasPreset(name){

    return name in PRESETS;

}


/* ==========================================================
   RESET
========================================================== */

export function resetPreset(){

    setPreset("custom");

}