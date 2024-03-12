module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: ["@nuxtjs/eslint-config-typescript"],
    plugins: [],
    rules: {
        semi: ["error", "always", { "omitLastInOneLineBlock": true}],
        quotes: ["error", "single", { "avoidEscape": true }],
        "comma-dangle": ["error", "always-multiline"],
        "object-curly-spacing": ["error", "always"],
        "vue/multi-word-component-names": ["error", {
            "ignores": ["index"]
        }],
    },
};
