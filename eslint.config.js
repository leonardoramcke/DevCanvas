import globals from "globals";
import prettierConfig from "eslint-config-prettier";

export default [
    {
        files: ["scripts/**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error",
            "no-console": ["warn", { allow: ["warn", "error"] }],
            eqeqeq: "error",
            "prefer-const": "warn",
            "no-var": "error"
        }
    },
    prettierConfig
];
