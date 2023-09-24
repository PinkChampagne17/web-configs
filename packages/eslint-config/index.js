// @ts-check
const { rules, linterOptions = {} } = require("./flat/base.js");
const { reportUnusedDisableDirectives } = linterOptions;

/** @type {import("eslint").Linter.Config} */
module.exports = {
	rules,
	plugins: ["simple-import-sort", "import"],
	reportUnusedDisableDirectives,
};
