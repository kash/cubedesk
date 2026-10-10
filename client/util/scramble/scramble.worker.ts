import {generateScramble} from '@/util/scramble/generate';

export interface ScrambleWorkerRequest {
	id: number;
	scrambleTypeId: string;
}

export interface ScrambleWorkerResponse {
	id: number;
	scramble: string | null;
}

self.onmessage = (event: MessageEvent<ScrambleWorkerRequest>) => {
	const {id, scrambleTypeId} = event.data;

	let scramble: string | null = null;
	try {
		scramble = generateScramble(scrambleTypeId);
	} catch {
		// The main thread falls back to generating it itself
	}

	const response: ScrambleWorkerResponse = {id, scramble};
	self.postMessage(response);
};
