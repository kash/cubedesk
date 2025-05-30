/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
	useTabs: true,
	singleQuote: true,
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: false,
	tabWidth: 4,
	printWidth: 100,
	plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-prisma'],
};

export default config;
