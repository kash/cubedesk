import eslint from '@eslint/js';
import next from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
	eslint.configs.recommended,

	...tseslint.configs.recommended,
	prettier,
	{
		ignores: ['*.config.*', '.next/', '**/generated/'],
	},
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			perfectionist: perfectionist,
			'@next/next': next,
			'react-hooks': reactHooks,
			'unused-imports': unusedImports,
			react: react,
		},
		rules: {
			'no-unreachable': 'warn',
			'perfectionist/sort-imports': ['error', {newlinesBetween: 'never'}],
			'perfectionist/sort-named-imports': 'error',
			'no-async-promise-executor': 'off',
			'react/no-unescaped-entities': 'off',
			'@next/next/no-img-element': 'off',
			'react-hooks/exhaustive-deps': 'error',
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'react/jsx-boolean-value': 'error',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					caughtErrors: 'none',
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
	},
];
