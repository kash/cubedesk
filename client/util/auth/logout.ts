import {clearLocalData} from '@/db/persist/sync';
import {trpc} from '@/util/trpc';

export async function logOut() {
	await trpc.auth.logOut.mutate();
	// Don't leave this account's solves on a shared device
	await clearLocalData();

	window.location.href = '/';
}
