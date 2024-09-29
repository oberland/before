import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  ...pluginVue.configs["flat/strongly-recommended"],
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "error",
      "vue/max-attributes-per-line": ["error", {
        "singleline": {
          "max": 1
        },
        "multiline": {
          "max": 1
        }
      }],
      "vue/html-self-closing": ["never", {
      "html": {
        "void": "never",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
    }
  },
];