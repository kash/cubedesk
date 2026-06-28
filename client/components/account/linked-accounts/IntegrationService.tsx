import React, {ReactNode, useMemo} from 'react';
import {Integration} from '@/@types/generated/graphql';
import Button from '@/components/common/button/Button';
import {Check, ArrowRight} from 'phosphor-react';
import {gql, useMutation, useQuery} from '@apollo/client';
import {INTEGRATION_FRAGMENT} from '@/util/graphql/fragments';
import Loading from '@/components/common/loading/Loading';
import {IntegrationType, LINKED_SERVICES, LinkedServiceData} from '../../../../shared/integration';
import {toastError} from '@/util/toast';

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

	let revokeButton: ReactNode = null;
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
		<div className="relative flex w-full flex-col items-center">
			<div className="flex flex-col items-center">
				<img className="h-auto w-16" alt={`Logo for ${service.name}`} src={service.logoSrc} />
				<h4 className="mt-2.5 opacity-90">{service.name}</h4>
			</div>
			<div className="mb-2.5 mt-1.5 opacity-70">
				<p>{service.description}</p>
			</div>
			<div className="flex w-full flex-col items-center gap-1.5">
				<Button
					fullWidth
					large
					primary
					disabled={!!integration}
					text={integration ? 'Account Linked' : 'Link Account'}
					icon={integration ? <Check /> : <ArrowRight />}
					to={serviceUri}
				/>
				{revokeButton}
			</div>
		</div>
	);
}
