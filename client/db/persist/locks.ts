import {v4 as uuid} from 'uuid';

export const TAB_ID = uuid();

const TAB_LOCK_PREFIX = 'cubedesk-tab-';

function getLocks(): LockManager | null {
	if (typeof navigator === 'undefined' || !navigator.locks) {
		return null;
	}
	return navigator.locks;
}

/**
 * Holds a lock for as long as this tab is open, so other tabs can tell whether it is still alive. The browser
 * releases it when the tab closes or crashes.
 */
export function holdTabLock() {
	getLocks()?.request(TAB_LOCK_PREFIX + TAB_ID, () => new Promise<void>(() => {}));
}

/**
 * Returns the ids of tabs that are known to be open. Returns null when that can't be determined, in which case
 * callers should assume every tab may still be alive.
 */
export async function getLiveTabIds(): Promise<Set<string> | null> {
	const locks = getLocks();
	if (!locks) {
		return null;
	}

	try {
		const {held = []} = await locks.query();
		const ids = new Set<string>([TAB_ID]);
		for (const lock of held) {
			if (lock.name?.startsWith(TAB_LOCK_PREFIX)) {
				ids.add(lock.name.slice(TAB_LOCK_PREFIX.length));
			}
		}
		return ids;
	} catch {
		return null;
	}
}

/**
 * Runs the callback while holding an exclusive lock shared by every tab, or directly when Web Locks are unsupported
 */
export async function withLock<T>(name: string, callback: () => Promise<T>): Promise<T> {
	const locks = getLocks();
	if (!locks) {
		return callback();
	}

	return locks.request(name, callback);
}
