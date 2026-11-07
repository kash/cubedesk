import {readFileSync} from 'node:fs';
import path from 'node:path';

interface ManifestChunk {
	file: string;
	css?: string[];
	imports?: string[];
	isEntry?: boolean;
}

type Manifest = Record<string, ManifestChunk>;

export const CLIENT_MANIFEST_FILE = 'client-manifest.json';

const ENTRY_SOURCE = 'client/components/App.tsx';
const COMBINED_CSS_KEY = 'style.css';
const SOURCE_EXTENSIONS = ['.tsx', '.ts', '/index.tsx', '/index.ts'];

let manifest: Manifest | null | undefined;

function getManifest(): Manifest | null {
	if (manifest === undefined) {
		try {
			manifest = JSON.parse(readFileSync(path.join(__dirname, CLIENT_MANIFEST_FILE), 'utf8'));
		} catch {
			manifest = null;
		}
	}

	return manifest ?? null;
}

export function hasClientManifest(): boolean {
	return getManifest() !== null;
}

function getChunkKey(source: string, chunks: Manifest): string | null {
	if (chunks[source]) {
		return source;
	}

	for (const extension of SOURCE_EXTENSIONS) {
		if (chunks[source + extension]) {
			return source + extension;
		}
	}

	return null;
}

function collectStaticImports(chunks: Manifest, key: string, visited: Set<string>) {
	if (visited.has(key) || !chunks[key]) {
		return;
	}

	visited.add(key);
	for (const imported of chunks[key].imports || []) {
		collectStaticImports(chunks, imported, visited);
	}
}

export interface ClientEntryAssets {
	jsFile: string;
	cssFiles: string[];
}

export function getClientEntryAssets(): ClientEntryAssets | null {
	const chunks = getManifest();
	const entry = chunks?.[ENTRY_SOURCE];
	if (!entry) {
		return null;
	}

	const combinedCss = chunks[COMBINED_CSS_KEY]?.file;
	return {
		jsFile: entry.file,
		cssFiles: [...(entry.css || []), ...(combinedCss ? [combinedCss] : [])],
	};
}

export function getClientPreloadFiles(pageSources: string[]): string[] {
	const chunks = getManifest();
	if (!chunks?.[ENTRY_SOURCE]) {
		return [];
	}

	const keys = new Set<string>();
	collectStaticImports(chunks, ENTRY_SOURCE, keys);
	for (const source of pageSources) {
		const key = getChunkKey(source, chunks);
		if (key) {
			collectStaticImports(chunks, key, keys);
		}
	}

	keys.delete(ENTRY_SOURCE);
	return Array.from(keys, (key) => chunks[key].file);
}
