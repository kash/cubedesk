import {api} from '@/trpc/react';

export async function logOut() {
	try {
		await api.auth.logout.mutate();
		window.location.href = '/login';
	} catch (error) {
		// If logout fails, still redirect to login page
		console.error('Logout error:', error);
		window.location.href = '/login';
	}
}