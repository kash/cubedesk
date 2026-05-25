import {trpc} from '../trpc';

export async function logOut() {
	await trpc.auth.logOut.mutate();

	window.location.href = '/';
}
