import {toastError} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React, {useEffect} from 'react';
import {useRouteMatch} from 'react-router-dom';

export default function OAuthService() {
	const match = useRouteMatch() as any;
	const integrationType = match?.params?.integrationType;

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get('code');

		if (!code) {
			toastError('Missing authorization code');
			return;
		}

		trpc.integration.create
			.mutate({
				code,
				integrationType,
			})
			.then(() => {
				window.location.href = `/account/linked-accounts`;
			})
			.catch((e) => {
				toastError(e);
			});
	}, []);

	return (
		<div>
			<p>Linking account...</p>
		</div>
	);
}
