module.exports = {
	useTabs: true,
	singleQuote: true,
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: false,
	tabWidth: 4,
	printWidth: 120,
	plugins: [require('prettier-plugin-tailwindcss')],
	tailwindConfig: './tailwind.config.js'
};
