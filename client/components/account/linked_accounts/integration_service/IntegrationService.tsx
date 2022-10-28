import React, {useMemo} from 'react';
import './IntegrationService.scss';
import {Integration} from '../../../../@types/generated/graphql';
import block from '../../../../styles/bem';
import Button from '../../../common/button/Button';
import {gql, useMutation, useQuery} from '@apollo/client';
import {INTEGRATION_FRAGMENT} from '../../../../util/graphql/fragments';
import Loading from '../../../common/loading/Loading';
import {IntegrationType, LINKED_SERVICES, LinkedServiceData} from '../../../../../shared/integration';
import {toastError} from '../../../../util/toast';

const b = block('integration');

const INTEGRATION_QUERY = gql`
	${INTEGRATION_FRAGMENT}

	query Query($integrationType: IntegrationType!) {
		integration(integrationType: $integrationType) {
			...IntegrationFragment
		}
	}
`;

const REVOKE_INTEGRATION_MUTATION = gql`
	${INTEGRATION_FRAGMENT}

	mutation Mutate($integrationType: IntegrationType!) {
		deleteIntegration(integrationType: $integrationType) {
			...IntegrationFragment
		}
	}
`;

interface Props {
	integrationType: IntegrationType;
}

export default function IntegrationService(props: Props) {
	const {integrationType} = props;
	const [revokeMutate] = useMutation(REVOKE_INTEGRATION_MUTATION);
	const {data, loading} = useQuery<{integration: Integration}>(INTEGRATION_QUERY, {
		variables: {integrationType},
	});

	const service = LINKED_SERVICES[integrationType];
	const integration = data?.integration;

	const serviceUri = useMemo(() => {
		return getServiceUri(service);
	}, [integrationType]);

	function getServiceUri(ser: LinkedServiceData) {
		const base = ser.authEndpoint;
		const scope = ser.scope.join(' ');
		const redirectUri = `${window.origin}/oauth/${integrationType}`;

		const data = {
			client_id: ser.clientId,
			response_type: ser.responseType,
			scope,
			redirect_uri: redirectUri,
		};

		const queryParams = Object.keys(data)
			.map((key) => key + '=' + encodeURIComponent(data[key]))
			.join('&');

		return `${base}?${queryParams}`;
	}

	async function removeIntegration() {
		try {
			await revokeMutate({variables: {integrationType}});
			window.location.reload();
		} catch (e) {
			toastError(e);
		}
	}

	if (loading) {
		return <Loading />;
	}

	let revokeButton = null;
	if (integration) {
		revokeButton = (
			<Button
				text="Revoke"
				flat
				danger
				confirmModalProps={{
					hideInput: true,
					title: `Unlink ${service.name} account`,
					description: 'Are you sure you want to unlink this account?',
					buttonText: 'Unlink account',
					triggerAction: removeIntegration,
				}}
			/>
		);
	}

	return (
		<div className={b()}>
			<div className={b('name')}>
				<img alt={`Logo for ${service.name}`} src={service.logoSrc} />
				<h4>{service.name}</h4>
			</div>
			<div className={b('description')}>
				<p>{service.description}</p>
			</div>
			<div className={b('actions')}>
				<Button
					fullWidth
					large
					primary
					disabled={!!integration}
					text={integration ? 'Account Linked' : 'Link Account'}
					icon={integration ? 'ph-check' : 'ph-arrow-right'}
					to={serviceUri}
				/>
				{revokeButton}
			</div>
		</div>
	);
}
