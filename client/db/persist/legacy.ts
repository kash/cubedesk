// The local data used to be stored by LokiJS: as one serialized blob in the "LokiCatalog" IndexedDB database, and in
// localStorage under "cubedesk.db" when demo mode fell back to Loki's localStorage adapter. Its freshness check
// lived in localStorage under "offlineHash". All of it is now unused. The server is the source of truth, so nothing
// is migrated; the new local DB is filled from the server instead.
const LEGACY_IDB_NAME = 'LokiCatalog';
const LEGACY_LOCAL_STORAGE_KEYS = ['offlineHash', 'cubedesk.db'];
const CLEANUP_DONE_KEY = 'cubedesk.lokiCleanupDone';

export function removeLegacyLocalData() {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		// Tabs still running the old version keep rewriting these, so remove them on every load
		for (const key of LEGACY_LOCAL_STORAGE_KEYS) {
			localStorage.removeItem(key);
		}
	} catch {
		// Storage unavailable
	}

	if (typeof indexedDB === 'undefined') {
		return;
	}

	if (!isCleanupDone()) {
		deleteLegacyDatabase();
		return;
	}

	// An old-version tab may have saved the database again after it was deleted
	indexedDB
		.databases?.()
		.then((databases) => {
			if (databases.some((database) => database.name === LEGACY_IDB_NAME)) {
				deleteLegacyDatabase();
			}
		})
		.catch(() => {});
}

function deleteLegacyDatabase() {
	const request = indexedDB.deleteDatabase(LEGACY_IDB_NAME);

	request.onsuccess = () => {
		try {
			localStorage.setItem(CLEANUP_DONE_KEY, '1');
		} catch {
			// Retried on next load
		}
	};
	// Old-version tabs keep their connection open, so deletion waits until they close. It completes on its own then.
	request.onblocked = () => {
		console.info('Removal of old local data is waiting for other CubeDesk tabs to close');
	};
	request.onerror = () => {
		console.error('Could not remove old local data', request.error);
	};
}

function isCleanupDone() {
	try {
		return localStorage.getItem(CLEANUP_DONE_KEY) === '1';
	} catch {
		return false;
	}
}
