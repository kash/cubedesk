import { api } from '../../../trpc/react';

export async function logOut() {
	try {
		await api.userAccount.logOut.mutate();
	} catch (e) {
		// Continue with logout even if API call fails
	}

	window.location.href = '/';
}
