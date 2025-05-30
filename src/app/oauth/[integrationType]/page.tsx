'use client';

import React, {useEffect} from 'react';
import {toastError} from '../../../lib/util/toast';
import {useMe} from '../../../lib/util/hooks/useMe';
import {useParams} from 'next/navigation';
import {api} from '@/trpc/react';

export default function OAuthPage() {
	const me = useMe();
	const params = useParams();
	const integrationType = params?.integrationType as string;

	const createIntegration = api.integration.createIntegration.useMutation();

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get('code');

		createIntegration.mutate({
			code: code ?? '',
			integrationType: integrationType as 'discord' | 'wca',
		});
	}, []);

	return (
		<div>
			<p>Linking account...</p>
		</div>
	);
}
