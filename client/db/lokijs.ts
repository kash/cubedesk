import _ from 'lodash';
import Loki from 'lokijs';
import LokiIndexDbAdaptor from 'lokijs/src/loki-indexed-adapter.js';

export interface LokiFetchOptions {
	sortBy?: string;
	sortInverse?: boolean;
	limit?: number;
	offset?: number;
}

let db: Loki;
export function initLokiDb(op?: Partial<LokiConfigOptions>) {
	let options: Partial<LokiConfigOptions> | undefined = undefined;
	let autoSave = true;

	let adapter: LokiPersistenceAdapter | null = null;
	if (typeof indexedDB === 'undefined') {
		autoSave = false;
	} else {
		adapter = new LokiIndexDbAdaptor();
	}

	if (typeof localStorage !== 'undefined') {
		options = {
			adapter,
			autosave: autoSave,
			autosaveInterval: 4000,
			...op,
		};

		options = _.omitBy(options, _.isNil);
	}

	db = new Loki('cubedesk.db', options);
}

export function getLokiDb() {
	return db;
}

export function stripLokiJsMetadata(record) {
	const cleanRec = {...record};
	delete cleanRec['meta'];
	delete cleanRec['$loki'];
	return cleanRec;
}
