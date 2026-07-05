import {logger} from '@/server/services/logger';

const AIRTABLE_BASE_ID = 'app7tTyFM9gRZsI95';

const MAX_ATTEMPTS = 3;
const RETRY_DELAY = 1000;

interface AirtableResponse {
	records: any[];
	offset?: string;
}

export async function getAllAirtableResults<T>(table: string): Promise<T[]> {
	let offset: string | undefined;

	let results: T[] = [];

	do {
		try {
			const response = await getAirtableResults(table, offset);
			results = results.concat(response.records.map((r) => r.fields));
			offset = response.offset;
		} catch (e) {
			logger.error('Could not fetch data from Airtable', {
				error: e,
				table,
				offset,
			});
			offset = undefined;
		}
	} while (offset);

	return results;
}

async function getAirtableResults(table: string, offset?: string): Promise<AirtableResponse> {
	let url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${table}`;

	if (offset) {
		url += `?offset=${offset}`;
	}

	const bearerToken = process.env.AIRTABLE_BEARER_TOKEN;
	const headers = {
		Authorization: `Bearer ${bearerToken}`,
	};

	console.time('Airtable API Call');
	try {
		return await fetchWithRetry(url, {headers}, MAX_ATTEMPTS);
	} finally {
		console.timeEnd('Airtable API Call');
	}
}

async function fetchWithRetry(url: string, init: RequestInit, attemptsLeft: number): Promise<AirtableResponse> {
	try {
		const response = await fetch(url, init);

		// Retry on server errors (HTTP or network error strategy)
		if (response.status >= 500 && attemptsLeft > 1) {
			await delay(RETRY_DELAY);
			return fetchWithRetry(url, init, attemptsLeft - 1);
		}

		return (await response.json()) as AirtableResponse;
	} catch (e) {
		if (attemptsLeft > 1) {
			await delay(RETRY_DELAY);
			return fetchWithRetry(url, init, attemptsLeft - 1);
		}
		throw e;
	}
}

function delay(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
