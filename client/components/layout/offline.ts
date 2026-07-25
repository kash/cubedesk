import {getLokiDb, initLokiDb} from '@/db/lokijs';
import {UserAccount} from '@/types/user';
import {deleteLocalStorage, getLocalStorage, setLocalStorage} from '@/util/data/local_storage';
import {trpc} from '@/util/trpc';
import {v4 as uuid} from 'uuid';

export async function initOfflineData(me, callback) {
	const offlineData = !(await shouldFetchDataFromDb(me));

	if (!offlineData) {
		callback(false);
		return;
	}

	// If for whatever reason this is not resolved, fallback to db
	const fallbackTimeout = setTimeout(async () => {
		callback(false);
	}, 5000);

	initLokiDb({autoload: true});

	getLokiDb().loadDatabase(undefined, (err) => {
		clearTimeout(fallbackTimeout);

		const requiredCollections = ['solves', 'trainer', 'settings', 'sessions'];
		const requiredCollectionsExist = requiredCollections.every((name) => !!getLokiDb().getCollection(name));

		if (!err && requiredCollectionsExist) {
			callback(true);
		} else {
			callback(false);
		}
	});
}

async function shouldFetchDataFromDb(me: UserAccount): Promise<boolean> {
	if (typeof indexedDB === 'undefined' || typeof localStorage === 'undefined') {
		return true;
	}

	const offlineHash = getLocalStorage('offlineHash');

	return me.offline_hash !== offlineHash;
}

export async function updateOfflineHash(nonInternal = false) {
	setTimeout(() => {
		if (nonInternal) {
			getLokiDb().saveDatabase();
		} else {
			// saveDatabaseInternal bypasses the safe default callback set up in
			// initLokiDb, so it needs an explicit one to avoid an uncatchable throw.
			getLokiDb().saveDatabaseInternal((err) => {
				if (err) {
					console.error('Failed to save local database', err);
				}
			});
		}
	});

	try {
		const hash = uuid();
		setLocalStorage('offlineHash', hash);

		await trpc.user.updateOfflineHash.mutate({
			hash,
		});
	} catch (e) {
		console.error(e);
	}
}

export async function clearOfflineData() {
	return new Promise((resolve) => {
		deleteLocalStorage('offlineHash');
		if (getLokiDb() && getLokiDb().listCollections().length) {
			getLokiDb().deleteDatabase(() => {
				resolve(null);
			});
		} else {
			resolve(null);
		}
	});
}
