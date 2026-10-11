const SOLVE_MARKER = '"id":';
const PROGRESS_EMIT_MS = 50;

export interface SolveDownloadProgress {
	received: number;
	total: number;
}

let current: SolveDownloadProgress | null = null;
const listeners = new Set<() => void>();

export function getSolveDownloadProgress(): SolveDownloadProgress | null {
	return current;
}

export function getServerSolveDownloadProgress(): SolveDownloadProgress | null {
	return null;
}

export function subscribeSolveDownloadProgress(listener: () => void) {
	listeners.add(listener);
	return () => {
		listeners.delete(listener);
	};
}

export function clearSolveDownloadProgress() {
	setSolveDownloadProgress(null);
}

function setSolveDownloadProgress(progress: SolveDownloadProgress | null) {
	if (current === progress) {
		return;
	}
	if (
		current &&
		progress &&
		current.received === progress.received &&
		current.total === progress.total
	) {
		return;
	}
	current = progress;
	for (const listener of listeners) {
		listener();
	}
}

export function countSolveMarkers(chunk: string, carry: string): {count: number; carry: string} {
	const data = carry + chunk;
	let count = 0;
	let from = 0;
	while (from <= data.length - SOLVE_MARKER.length) {
		const at = data.indexOf(SOLVE_MARKER, from);
		if (at === -1) {
			break;
		}
		count += 1;
		from = at + SOLVE_MARKER.length;
	}
	const tailStart = Math.max(from, data.length - (SOLVE_MARKER.length - 1));
	return {count, carry: data.slice(tailStart)};
}

function isSolveListUrl(url: RequestInfo | URL): boolean {
	const value = typeof url === 'string' ? url : url instanceof URL ? url.href : url.url;
	try {
		return new URL(value, 'http://localhost').pathname.endsWith('/trpc/solve.list');
	} catch {
		return false;
	}
}

type FetchType = (url: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

export function fetchWithSolveDownloadProgress(fetchImpl: FetchType): FetchType {
	return async (url, init) => {
		const response = await fetchImpl(url, init);
		if (!isSolveListUrl(url) || !response.ok || !response.body) {
			return response;
		}

		const total = Number(response.headers.get('x-solve-total'));
		if (!Number.isFinite(total) || total <= 0) {
			return response;
		}

		return readSolveList(response, total);
	};
}

async function readSolveList(response: Response, total: number): Promise<Response> {
	const reader = response.body!.getReader();
	const decoder = new TextDecoder();
	const chunks: BlobPart[] = [];
	let received = 0;
	let carry = '';
	let lastEmit = 0;

	setSolveDownloadProgress({received: 0, total});

	const emit = (force: boolean) => {
		const now = Date.now();
		if (!force && now - lastEmit < PROGRESS_EMIT_MS) {
			return;
		}
		lastEmit = now;
		setSolveDownloadProgress({received: Math.min(received, total), total});
	};

	try {
		while (true) {
			const {done, value} = await reader.read();
			if (done) {
				break;
			}
			chunks.push(value);
			const counted = countSolveMarkers(decoder.decode(value, {stream: true}), carry);
			carry = counted.carry;
			received += counted.count;
			emit(received >= total);
		}
		const flushed = countSolveMarkers(decoder.decode(), carry);
		received += flushed.count;
		emit(true);
	} catch (error) {
		clearSolveDownloadProgress();
		throw error;
	}

	const headers = new Headers(response.headers);
	headers.delete('content-encoding');
	headers.delete('content-length');

	return new Response(new Blob(chunks), {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
