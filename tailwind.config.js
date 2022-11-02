/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./client/**/*.{ts,tsx,js,jsx,scss,css}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgba(var(--primary-color), <alpha-value>)',
				secondary: 'rgba(var(--secondary-color), <alpha-value>)',
				text: 'rgba(var(--text-color), <alpha-value>)',
				background: 'rgba(var(--background-color), <alpha-value>)',
				button: 'rgba(var(--button-color), <alpha-value>)',
				module: 'rgba(var(--module-color), <alpha-value>)',
				success: 'rgba(var(--success-color), <alpha-value>)',
				error: 'rgba(var(--error-color), <alpha-value>)',
				warning: 'rgba(var(--warning-color), <alpha-value>)',
				info: 'rgba(var(--info-color), <alpha-value>)',

				'tm-background': 'rgba(var(--theme-background), <alpha-value>)',
				'tmo-background': 'rgba(var(--theme-background-opposite), <alpha-value>)',
				'tm-module': 'rgba(var(--theme-module), <alpha-value>)',
				'tmo-module': 'rgba(var(--theme-module-opposite), <alpha-value>)',
				'tm-primary': 'rgba(var(--theme-primary), <alpha-value>)',
				'tmo-primary': 'rgba(var(--theme-primary-opposite), <alpha-value>)',
				'tm-secondary': 'rgba(var(--theme-secondary), <alpha-value>)',
				'tmo-secondary': 'rgba(var(--theme-secondary-opposite), <alpha-value>)',
				'tm-text': 'rgba(var(--theme-text), <alpha-value>)',
				'tmo-text': 'rgba(var(--theme-text-opposite), <alpha-value>)',
				'tm-button': 'rgba(var(--theme-button), <alpha-value>)',
				'tmo-button': 'rgba(var(--theme-button-opposite), <alpha-value>)',
			},
			boxShadow: {
				md: '0 2px 15px rgba(0, 0, 0, 0.1)',
			},
			fontFamily: {
				label: ['Source Sans Pro', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
};
