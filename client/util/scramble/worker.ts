import type {ScrambleWorkerResponse} from '@/util/scramble/scramble.worker';

// Scrambow builds its lookup tables on the first scramble of each type, which blocks the main thread for over a second
// on phones. The worker builds them instead, and keeps them for every later scramble.
let workerPromise: Promise<Worker | null> | null = null;
let nextId = 1;
const pending = new Map<number, (scramble: string | null) => void>();

function getWorker(): Promise<Worker | null> {
	if (!workerPromise) {
		workerPromise = startWorker();
	}

	return workerPromise;
}

async function startWorker(): Promise<Worker | null> {
	if (typeof window === 'undefined' || typeof Worker === 'undefined') {
		return null;
	}

	let worker: Worker;
	try {
		// Imported lazily because the dev server runs this file in Node, which can't resolve Vite's ?worker&url
		const {default: workerUrl} = await import('./scramble.worker?worker&url');
		const url = new URL(workerUrl, window.location.href);

		if (url.origin === window.location.origin) {
			worker = new Worker(url, {
				// The dev server serves the worker as an ES module, the build bundles it into a classic script
				type: process.env.ENV === 'development' ? 'module' : 'classic',
			});
		} else {
			// The build is served from the CDN, and browsers only start workers from the page's own origin
			const loader = new Blob([`importScripts(${JSON.stringify(url.href)});`], {
				type: 'text/javascript',
			});
			worker = new Worker(URL.createObjectURL(loader));
		}
	} catch {
		return null;
	}

	worker.onmessage = (event: MessageEvent<ScrambleWorkerResponse>) => {
		const {id, scramble} = event.data;
		pending.get(id)?.(scramble);
		pending.delete(id);
	};
	worker.onerror = () => {
		worker.terminate();
		workerPromise = Promise.resolve(null);

		for (const resolve of pending.values()) {
			resolve(null);
		}
		pending.clear();
	};

	return worker;
}

/**
 * Generates a scramble off the main thread. Resolves to null when workers aren't available, so the caller can
 * generate it itself.
 */
export async function generateScrambleInWorker(scrambleTypeId: string): Promise<string | null> {
	const worker = await getWorker();
	if (!worker) {
		return null;
	}

	const id = nextId++;
	return new Promise((resolve) => {
		pending.set(id, resolve);
		worker.postMessage({id, scrambleTypeId});
	});
}
