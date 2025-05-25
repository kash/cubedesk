import React, {useEffect} from 'react';
import {gqlMutate} from '../api';
import {gql} from '@apollo/client';
import {toastError} from '../../lib/util/toast';
import {useMe} from '../../lib/util/hooks/useMe';
import {useParams} from 'next/navigation';

export default function OAuthService() {
	const me = useMe();
	const params = useParams();
	const integrationType = params?.integrationType as string;

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get('code');

		const query = gql`
			mutation Mutate($code: String!, $integrationType: IntegrationType) {
				createIntegration(code: $code, integrationType: $integrationType) {
					id
				}
			}
		`;

		gqlMutate(query, {
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
