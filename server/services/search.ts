import {Client} from '@elastic/elasticsearch';

let client: Client;

export function initSearch() {
	client = new Client({
		cloud: {
			id: process.env.ELASTICSEARCH_CLOUD_ID,
		},
		auth: {
			username: 'elastic',
			password: process.env.ELASTICSEARCH_ELASTIC_PASSWORD,
		},
	});
}

export function getSearchClient() {
	return client;
}
