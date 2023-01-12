module.exports = {
  defaultSeverity: "warning",
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
  rules: {
    "max-nesting-depth": [
      3,
      {
        ignore: ["pseudo-classes"],
      },
    ],
    "selector-pseudo-element-no-unknown": true,
    "no-empty-source": null,
  },
};
