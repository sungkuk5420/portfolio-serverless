module.exports = {
  root: true,
  extends: ["standard", "plugin:vue/essential", "plugin:prettier/recommended"],
  plugins: ["vue"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: true,
        trailingComma: "es5"
      }
    ]
  }
};
