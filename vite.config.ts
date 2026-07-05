import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
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
			const isClientCss = file.endsWith('.css') && file.includes(`${path.sep}client${path.sep}`);
			const isTailwindEntry = file.endsWith(`${path.sep}client${path.sep}styles${path.sep}index.css`);

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
const env = process.env.ENV || process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const distBase = process.env.DIST_BASE_URI || '/dist';
const resourceBase = process.env.RESOURCES_BASE_URI || '/public';
const baseUri = process.env.BASE_URI || '';
const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	appType: 'custom',
	base: isDev ? '/' : withTrailingSlash(distBase),
	build: {
		cssCodeSplit: false,
		emptyOutDir: true,
		outDir: 'dist',
		rollupOptions: {
			input: path.resolve(rootDir, 'client/components/App.tsx'),
			output: {
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
		sourcemap: true,
	},
	define: {
		'process.env.BASE_URI': JSON.stringify(baseUri),
		'process.env.ENV': JSON.stringify(env),
		'process.env.RELEASE_NAME': JSON.stringify(process.env.RELEASE_NAME || '1.0'),
		'process.env.RESOURCES_BASE_URI': JSON.stringify(resourceBase),
	},
	plugins: [legacyCssLayerPlugin(), react(), tailwindcss()],
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
});
