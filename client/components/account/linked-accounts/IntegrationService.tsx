import ConfirmDialog from '@/components/common/ConfirmDialog';
import Loading from '@/components/common/Loading';
import LinkAccountButton from '@/components/oauth/LinkAccountButton';
import {Button} from '@/components/ui/button';
import {IntegrationType, LINKED_SERVICES} from '@/shared/integration';
import {SafeIntegration} from '@/types/integration';
import {Serialized} from '@/types/serialized';
import {toastError} from '@/util/toast';
import {trpc} from '@/util/trpc';
import {ArrowClockwise, ArrowRight, Check} from 'phosphor-react';
import React, {useEffect, useState} from 'react';

interface Props {
	integrationType: IntegrationType;
}

export default function IntegrationService(props: Props) {
	const {integrationType} = props;
	const [integration, setIntegration] = useState<Serialized<SafeIntegration> | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let mounted = true;
		function loadIntegration() {
			trpc.integration.get
				.query({integrationType})
				.then((res) => {
					if (mounted) setIntegration(res);
				})
				.catch(toastError)
				.finally(() => {
					if (mounted) setLoading(false);
				});
		}
		loadIntegration();
		window.addEventListener('focus', loadIntegration);
		return () => {
			mounted = false;
			window.removeEventListener('focus', loadIntegration);
		};
	}, [integrationType]);

	const service = LINKED_SERVICES[integrationType];

	async function removeIntegration() {
		await trpc.integration.delete.mutate({integrationType});
		setIntegration(null);
		window.location.reload();
	}

	if (loading) {
		return <Loading />;
	}

	return (
		<section
			aria-labelledby={`${integrationType}-title`}
			className="border-tmo-module/10 bg-module overflow-hidden rounded-xl border"
		>
			<div className="p-5">
				<div className="flex items-center gap-3">
					<div className="border-tmo-module/5 bg-tmo-module/5 flex size-12 shrink-0 items-center justify-center rounded-xl border">
						<img className="size-8 object-contain" alt="" src={service.logoSrc} />
					</div>
					<h2
						id={`${integrationType}-title`}
						className="m-0 flex-1 text-base font-semibold"
					>
						{service.name}
					</h2>
					{integration ? (
						<span className="bg-success/10 text-success inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium">
							<Check size={12} weight="bold" />
							Linked
						</span>
					) : null}
				</div>
				<p className="text-text/60 mt-4 mb-0 text-sm leading-relaxed">
					{service.description}
				</p>
			</div>
			<div className="border-tmo-module/10 bg-tmo-module/[0.025] flex items-center justify-between gap-2 border-t px-5 py-3">
				{integration ? (
					<>
						<LinkAccountButton
							integrationType={integrationType}
							variant="ghost"
							size="sm"
							className="text-text/70 -ml-2"
						>
							<ArrowClockwise />
							Relink
						</LinkAccountButton>
						<ConfirmDialog
							hideInput
							title={`Unlink ${service.name} account`}
							description="Are you sure you want to unlink this account?"
							buttonText="Unlink account"
							triggerAction={removeIntegration}
						>
							<Button
								variant="ghost"
								size="sm"
								className="text-text/50 hover:bg-error/10 hover:text-error ml-auto"
							>
								Unlink
							</Button>
						</ConfirmDialog>
					</>
				) : (
					<LinkAccountButton
						integrationType={integrationType}
						variant="outline"
						size="sm"
						className="ml-auto"
					>
						Link account
						<ArrowRight />
					</LinkAccountButton>
				)}
			</div>
		</section>
	);
}
