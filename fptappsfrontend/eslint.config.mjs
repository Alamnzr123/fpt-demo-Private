import globals from "globals";
const { amd } = globals;
// eslint.config.js

const customGlobals = {
  TomSelect: "readable",
}

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        myCustomGlobal: "readonly",
        React: false,
        PropTypes: false,
        amd: false,
        axios: false,
        moment: false,
        showFormattedDate: false,
        useNavigate: false,
        NotesList: false,
        NoteInput: false,
        AppHeader: false,
        AppBody: false,
        AppFooter: false,
        ...globals,
        ...globals.browser,
        ...globals.jquery,
        ...customGlobals,
        ...globals.node,
      }
    },
    extends: "eslint:recommended",
    rules: {
      semi: ["warn", "always"]
    },
  }
];