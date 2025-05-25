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
	allowedDevOrigins: ['sonar.test'],
	logging: false,
	output: 'standalone',
	async redirects() {
		return [
			{
				source: '/trainer',
				destination: '/trainer/333/OLL',
				permanent: true,
			},
			{
				source: '/trainer/:cubeType/:algoType',
				destination: '/trainer/333/OLL',
				permanent: true,
			},
			{
				source: '/trainer-3_oll',
				destination: '/trainer/333/OLL',
				permanent: true,
			},
			{
				source: '/settings',
				destination: '/settings/timer',
				permanent: true,
			},
			{
				source: '/account',
				destination: '/account/personal-info',
				permanent: true,
			},
			{
				source: '/timer',
				destination: '/',
				permanent: true,
			},
			{
				source: '/community',
				destination: '/community/leaderboards',
				permanent: true,
			},
			{
				source: '/community/friends',
				destination: '/community/friends/list',
				permanent: true,
			},
			{
				source: '/admin',
				destination: '/admin/reports',
				permanent: true,
			},
			{
				source: '/m/elimination/:linkCode',
				destination: '/play/elimination/:linkCode',
				permanent: true,
			},
			{
				source: '/m/head-to-head/:linkCode',
				destination: '/play/head-to-head/:linkCode',
				permanent: true,
			},
		];
	},
	webpack: (config) => {
		config.resolve.alias.canvas = false;
		config.resolve.alias['handlebars'] = path.resolve(
			'./node_modules/handlebars/dist/handlebars.js',
		);
		return config;
	},
};