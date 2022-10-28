/* eslint-disable */

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/no-explicit-any': 0,
				'@typescript-eslint/no-inferrable-types': 0,
			},
		},
		{
			files: ['*.d.ts'],
			rules: {
				'no-var': 0,
			},
		},
	],
};
