import React, {useEffect} from 'react';
import {logOut} from '../../../util/auth/logout';

export default function ForceSignOut() {
	useEffect(() => {
		logOut();
	}, []);

	return null;
}
