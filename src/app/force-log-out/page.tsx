'use client';

import {useEffect} from 'react';
import {api} from '@/trpc/react';

export default function ForceSignOut() {
	const logOut = api.auth.logout.useMutation();

	useEffect(() => {
		logOut.mutate();
	}, []);

	return null;
}
