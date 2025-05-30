import Loading from '@/components/common/loading/Loading';
import './IntegrationService.scss';
import {Button} from '@/components/ui/button';
import {toastError} from '@/lib/util/toast';
import {IntegrationType, LINKED_SERVICES, LinkedServiceData} from '@/shared/integration';
import block from '@/styles/bem';
import {api} from '@/trpc/react';
import {ArrowRight, Check} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React, {useCallback, useMemo} from 'react';

const b = block('integration');

interface Props {
	integrationType: IntegrationType;
}

export default function IntegrationService(props: Props) {
	const {integrationType} = props;
	const revokeIntegration = api.integration.deleteIntegration.useMutation();
	const {data: integration, isLoading: loading} = api.integration.integration.useQuery({
		integrationType,
	});

	const service = LINKED_SERVICES[integrationType];

	const getServiceUri = useCallback(
		(ser: LinkedServiceData) => {
			const base = ser.authEndpoint;
			const scope = ser.scope.join(' ');
			const redirectUri = `${window.origin}/oauth/${integrationType}`;

			const data = {
				client_id: ser.clientId,
				response_type: ser.responseType,
				scope,
				redirect_uri: redirectUri,
			};

			const queryParams = (Object.keys(data) as (keyof typeof data)[])
				.map((key) => key + '=' + encodeURIComponent(data[key]))
				.join('&');

			return `${base}?${queryParams}`;
		},
		[integrationType],
	);

	const serviceUri = useMemo(() => {
		return getServiceUri(service);
	}, [getServiceUri, service]);

	const removeIntegration = useCallback(async () => {
		try {
			await revokeIntegration.mutateAsync({integrationType});
			window.location.reload();
		} catch (e: unknown) {
			toastError(e);
		}
	}, [revokeIntegration, integrationType]);

	if (loading) {
		return <Loading />;
	}

	let revokeButton = null;
	if (integration) {
		revokeButton = (
			<Button
				variant="destructive"
				confirmModalProps={{
					hideInput: true,
					title: `Unlink ${service.name} account`,
					description: 'Are you sure you want to unlink this account?',
					buttonText: 'Unlink account',
					triggerAction: removeIntegration,
				}}
			>
				Revoke
			</Button>
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
				<Link href={serviceUri} className="w-full">
					<Button className="w-full" size="lg" variant="default" disabled={!!integration}>
						{integration ? <Check className="mr-2" /> : <ArrowRight className="mr-2" />}
						{integration ? 'Account Linked' : 'Link Account'}
					</Button>
				</Link>
				{revokeButton}
			</div>
		</div>
	);
}
