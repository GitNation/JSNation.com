module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jquery":  true,
  },
  "globals": {
    "google": "readonly",
    "YT": "readonly",
  },
  "rules": {
    "no-undef": 1,
    "no-unused-vars": 1,
    "eqeqeq": [2, "smart"],
    "no-floating-decimal": 2,
    "no-multi-spaces": [2, {
      "exceptions": {
        "ImportDeclaration": true,
        "VariableDeclarator": true
      }
    }],
    "no-multi-str": 2,
    "camelcase": 1,
    "eol-last": 1,
    "indent": [2, 2, {
      "SwitchCase": 1,
      "VariableDeclarator": 1
    }],
    "quotes": [2, "single", "avoid-escape"],
    "semi": [2, "always"],
    "space-before-blocks": 2,
    "space-before-function-paren": [2, "never"],
    "constructor-super": 2,
    "arrow-spacing": 2,
  }
}
