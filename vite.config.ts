import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {sentryVitePlugin} from '@sentry/vite-plugin';
import {readFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {defineConfig, type Plugin} from 'vite';

function withTrailingSlash(value: string) {
	return value.endsWith('/') ? value : `${value}/`;
}

function legacyCssLayerPlugin(): Plugin {
	return {
		name: 'cubedesk-legacy-css-layer',
		enforce: 'pre',
		transform(source, id) {
			const file = id.split('?')[0];
			const isClientCss =
				file.endsWith('.css') && file.includes(`${path.sep}client${path.sep}`);
			const isTailwindEntry = file.endsWith(
				`${path.sep}client${path.sep}styles${path.sep}index.css`,
			);

			if (!isClientCss || isTailwindEntry) {
				return null;
			}

			return {
				code: `@layer theme, base, components, utilities;\n@layer components {\n${source}\n}`,
				map: null,
			};
		},
	};
}

const deploymentId = process.env.DEPLOYMENT_ID || 'app';
const distBase = process.env.DIST_BASE_URI || '/dist';
const resourceBase = process.env.RESOURCES_BASE_URI || '/public';
const baseUri = process.env.BASE_URI || '';
const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({command, isSsrBuild}) => {
	const env = process.env.ENV || (command === 'build' ? 'production' : 'development');
	const outDir = isSsrBuild ? 'build/server' : 'dist';

	return {
		appType: 'custom',
		base: command === 'serve' ? '/' : withTrailingSlash(distBase),
		build: {
			copyPublicDir: false,
			cssCodeSplit: false,
			emptyOutDir: true,
			outDir,
			...(isSsrBuild ? {target: 'node24', minify: false} : {}),
			rollupOptions: {
				input: path.resolve(
					rootDir,
					isSsrBuild ? 'server/app.ts' : 'client/components/App.tsx',
				),
				output: isSsrBuild
					? {
							format: 'cjs',
							interop: 'auto',
							entryFileNames: 'app.cjs',
							chunkFileNames: '[name]-[hash].cjs',
						}
					: {
							assetFileNames(assetInfo) {
								if (assetInfo.name?.endsWith('.css')) {
									return `${deploymentId}.min.css`;
								}

								return 'assets/[name]-[hash][extname]';
							},
							chunkFileNames: 'assets/[name]-[hash].js',
							entryFileNames: `${deploymentId}.min.js`,
						},
			},
			sourcemap: 'hidden',
		},
		define: isSsrBuild
			? {}
			: {
					'process.env.BASE_URI': JSON.stringify(baseUri),
					'process.env.ENV': JSON.stringify(env),
					'process.env.RELEASE_NAME': JSON.stringify(process.env.RELEASE_NAME || '1.0'),
					'process.env.RESOURCES_BASE_URI': JSON.stringify(resourceBase),
				},
		plugins: [
			legacyCssLayerPlugin(),
			react(),
			tailwindcss(),
			isSsrBuild && {
				name: 'cubedesk-server-resources',
				generateBundle() {
					this.emitFile({
						type: 'asset',
						fileName: 'resources/not_found.html',
						source: readFileSync(
							path.resolve(rootDir, 'server/resources/not_found.html'),
						),
					});
				},
			},
			command === 'build' &&
				Boolean(process.env.SENTRY_AUTH_TOKEN) &&
				sentryVitePlugin({
					org: 'cubedesk',
					project: isSsrBuild ? 'backend' : 'frontend',
					authToken: process.env.SENTRY_AUTH_TOKEN,
					release: {
						name: process.env.RELEASE_NAME,
						// CI checks out with fetch-depth 1, so there's no history to associate.
						setCommits: false,
					},
					sourcemaps: {assets: `${outDir}/**/*`},
					errorHandler(error) {
						throw error;
					},
					telemetry: false,
				}),
		],
		// Bundle every dependency into the server build so the runtime image needs no node_modules
		...(isSsrBuild
			? {
					ssr: {
						noExternal: true,
						// vite is only imported by the dev middleware
						external: ['vite'],
					},
				}
			: {}),
		resolve: {
			alias: [
				{find: '@/generated', replacement: path.resolve(rootDir, 'generated')},
				{find: '@/types', replacement: path.resolve(rootDir, 'types')},
				{find: '@/server', replacement: path.resolve(rootDir, 'server')},
				{find: '@/client/shared', replacement: path.resolve(rootDir, 'client/shared')},
				{find: '@/shared', replacement: path.resolve(rootDir, 'shared')},
				{find: '@', replacement: path.resolve(rootDir, 'client')},
				{find: 'client', replacement: path.resolve(rootDir, 'client')},
				{find: 'generated', replacement: path.resolve(rootDir, 'generated')},
				{find: 'shared', replacement: path.resolve(rootDir, 'shared')},
				{find: 'types', replacement: path.resolve(rootDir, 'types')},
			],
		},
	};
});
