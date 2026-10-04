import {getActiveUserId, getDatabase} from '@/db/persist/database';
import {getSessionDb, initSessionDb} from '@/db/sessions/init';
import {getSolveDb, initSolveDb} from '@/db/solves/init';
import {clearAllSolveStatCache} from '@/db/solves/stats/solves/caching';
import {emitEvent} from '@/util/event_handler';

/**
 * Tells other tabs of the same user which records this tab committed to the local DB, so they can refresh their
 * in-memory copies. A tab never receives its own messages.
 */
type DbChangeMessage =
	| {
			type: 'changes';
			userId: string;
			solveIds: string[];
			sessionIds: string[];
	  }
	| {
			// Another tab rewrote the whole local copy from the server
			type: 'replaced';
			userId: string;
	  };

let channel: BroadcastChannel | null = null;

function getChannel(): BroadcastChannel | null {
	if (typeof BroadcastChannel === 'undefined') {
		return null;
	}

	channel ??= new BroadcastChannel('cubedesk-db');
	return channel;
}

export function postChanges(solveIds: string[], sessionIds: string[]) {
	const userId = getActiveUserId();
	if (!userId || (!solveIds.length && !sessionIds.length)) {
		return;
	}

	postMessage({type: 'changes', userId, solveIds, sessionIds});
}

export function postReplaced() {
	const userId = getActiveUserId();
	if (userId) {
		postMessage({type: 'replaced', userId});
	}
}

function postMessage(message: DbChangeMessage) {
	try {
		getChannel()?.postMessage(message);
	} catch (e) {
		console.error('Could not notify other tabs of local data changes', e);
	}
}

export function listenForOtherTabChanges() {
	const broadcastChannel = getChannel();
	if (!broadcastChannel) {
		return;
	}

	broadcastChannel.onmessage = (event: MessageEvent<DbChangeMessage>) => {
		applyOtherTabMessage(event.data).catch((e) => {
			console.error('Could not apply changes from another tab', e);
		});
	};
}

async function applyOtherTabMessage(message: DbChangeMessage) {
	const db = getDatabase();
	if (!db || message.userId !== getActiveUserId()) {
		return;
	}

	if (message.type === 'replaced') {
		const [solves, sessions] = await db.transaction('r', [db.solves, db.sessions], () =>
			Promise.all([db.solves.toArray(), db.sessions.toArray()])
		);
		initSolveDb(solves);
		initSessionDb(sessions);
		return;
	}

	const [solves, sessions] = await db.transaction('r', [db.solves, db.sessions], () =>
		Promise.all([db.solves.bulkGet(message.solveIds), db.sessions.bulkGet(message.sessionIds)])
	);

	// Records missing from the local DB were deleted
	message.solveIds.forEach((id, i) => {
		const solve = solves[i];
		if (solve) {
			getSolveDb().put(solve);
		} else {
			getSolveDb().remove(id);
		}
	});
	message.sessionIds.forEach((id, i) => {
		const session = sessions[i];
		if (session) {
			getSessionDb().put(session);
		} else {
			getSessionDb().remove(id);
		}
	});

	// Stats are recomputed lazily. PB events are deliberately not fired here, only in the tab that made the solve.
	clearAllSolveStatCache();
	if (message.solveIds.length) {
		emitEvent('solveDbUpdatedEvent');
	}
	if (message.sessionIds.length) {
		emitEvent('sessionsDbUpdatedEvent');
	}
}
