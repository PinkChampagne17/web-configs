/** @type {import("prettier").Config} */
module.exports = {
	endOfLine: "auto",
	useTabs: true,
	overrides: [
		{
			files: "package.json",
			options: {
				useTabs: false,
			},
		},
	],
};
