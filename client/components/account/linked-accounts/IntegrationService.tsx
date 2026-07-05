import Button from '@/components/common/Button';
import Loading from '@/components/common/Loading';
import {SafeIntegration} from '@/types/integration';
import {Serialized} from '@/types/serialized';
import {toastError} from '@/util/toast';
import {trpc} from '@/util/trpc';
import {ArrowRight, Check} from 'phosphor-react';
import React, {ReactNode, useEffect, useMemo, useState} from 'react';
import {IntegrationType, LINKED_SERVICES, LinkedServiceData} from '../../../../shared/integration';

interface Props {
	integrationType: IntegrationType;
}

export default function IntegrationService(props: Props) {
	const {integrationType} = props;
	const [integration, setIntegration] = useState<Serialized<SafeIntegration> | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		trpc.integration.get
			.query({integrationType})
			.then((res) => {
				setIntegration(res);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [integrationType]);

	const service = LINKED_SERVICES[integrationType];

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
			await trpc.integration.delete.mutate({integrationType});
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
				<img
					className="h-auto w-16"
					alt={`Logo for ${service.name}`}
					src={service.logoSrc}
				/>
				<h4 className="mt-2.5 opacity-90">{service.name}</h4>
			</div>
			<div className="mt-1.5 mb-2.5 opacity-70">
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
