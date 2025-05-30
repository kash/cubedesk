import path from 'path';

/** @type {import('next').NextConfig} */
const config = {
	experimental: {
		optimizePackageImports: ['@phosphor-icons/react'],
		cssChunking: true,
	},
	turbopack: {
		resolveAlias: {
			handlebars: 'handlebars/dist/handlebars.js',
		},
	},
	serverExternalPackages: ['pdf-parse', 'sharp'],
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
	allowedDevOrigins: ['sonar.dev'],
	logging: false,
	output: 'standalone',
	webpack: (config) => {
		config.resolve.alias.canvas = false;
		config.resolve.alias['handlebars'] = path.resolve(
			'./node_modules/handlebars/dist/handlebars.js',
		);
		return config;
	},
};
