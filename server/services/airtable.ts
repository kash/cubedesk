import request from 'requestretry';
import {logger} from './logger';

const AIRTABLE_BASE_ID = 'app7tTyFM9gRZsI95';

interface AirtableResponse {
	records: any[];
	offset?: string;
}

export async function getAllAirtableResults<T>(table: string): Promise<T[]> {
	let offset = null;

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
			offset = null;
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

	const options = {
		url,
		json: true,
		maxAttempts: 3,
		retryDelay: 1000,
		retryStrategy: request.RetryStrategies.HTTPOrNetworkError,
		headers: {
			Authorization: `Bearer ${bearerToken}`,
		},
	};

	return new Promise((resolve, reject) => {
		console.time('Airtable API Call');
		request(options, (error, response, body) => {
			if (error) {
				reject(error);
				return;
			}

			console.timeEnd('Airtable API Call');
			resolve(body);
		});
	});
}
