const postCssPlugin = require('esbuild-style-plugin');
const {sassPlugin} = require('esbuild-sass-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const deploying = process.env.DEPLOYING;
const releaseName = process.env.RELEASE_NAME || '1.0';
const deploymentId = process.env.DEPLOYMENT_ID || 'app';
const resourceBaseUri = process.env.RESOURCES_BASE_URI || '/public';

const dev = nodeEnv === 'development';

let watch = {
	onRebuild(error, result) {
		if (error) {
			console.error('watch build failed:', error);
		}
	},
};

if (deploying) {
	watch = false;
}

require('esbuild')
	.build({
		entryPoints: ['client/components/App.tsx'],
		outfile: `dist/${deploymentId}.min.js`,
		bundle: true,
		logLevel: 'error',
		minify: !dev,
		define: {
			'process.env.RESOURCES_BASE_URI': JSON.stringify(resourceBaseUri),
			'process.env.RELEASE_NAME': JSON.stringify(releaseName),
			'process.env.ENV': JSON.stringify(nodeEnv),
		},
		loader: {'.js': 'jsx'},
		plugins: [
			// sassPlugin({
			// 	type: 'style',
			// }),
			postCssPlugin({
				postcss: {
					plugins: [require('tailwindcss'), require('autoprefixer')],
				},
			}),
		],
		watch,
	})
	.then((result) => {
		console.info('Watching...');
	});
