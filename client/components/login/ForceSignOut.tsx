import {logOut} from '@/util/auth/logout';
import {useEffect} from 'react';

export default function ForceSignOut() {
	useEffect(() => {
		logOut();
	}, []);

	return null;
}
