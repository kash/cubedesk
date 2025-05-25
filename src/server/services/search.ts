import {Client} from '@elastic/elasticsearch';

let client: Client;

export function initSearch() {
	try {
		client = new Client({
			cloud: {
				id: process.env.ELASTICSEARCH_CLOUD_ID,
			},
			auth: {
				username: 'elastic',
				password: process.env.ELASTICSEARCH_ELASTIC_PASSWORD,
			},
		});
	} catch (e) {
		console.error('Could not initiate Elasticsearch client');
	}
}

export function getSearchClient() {
	return client;
}
