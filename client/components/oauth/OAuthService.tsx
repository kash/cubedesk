import {useTranslation} from 'react-i18next';
import {Button} from '@/components/ui/button';
import {Spinner} from '@/components/ui/spinner';
import {LINKED_SERVICES} from '@/shared/integration';
import {trpc} from '@/util/trpc';
import {WarningCircle} from 'phosphor-react';
import React, {useEffect, useRef, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';

export default function OAuthService() {
	const {t} = useTranslation();
	const match = useRouteMatch<{integrationType: string}>();
	const integrationType = match.params.integrationType;
	const service =
		integrationType === 'wca' || integrationType === 'discord'
			? LINKED_SERVICES[integrationType]
			: null;
	const [error, setError] = useState<string | null>(null);
	const started = useRef(false);

	useEffect(() => {
		if (started.current) return;
		started.current = true;
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get('code');
		const state = urlParams.get('state');

		if (integrationType !== 'wca' && integrationType !== 'discord') {
			setError(t('auth.oauth.unsupportedService'));
			return;
		}
		if (urlParams.has('error')) {
			setError(t('auth.oauth.cancelled'));
			return;
		}
		if (!code || !state) {
			setError(t('auth.oauth.incompleteRequest'));
			return;
		}

		trpc.integration.create
			.mutate({code, state, integrationType})
			.then(() => {
				window.location.replace('/account/linked-accounts');
			})
			.catch((e: Error) => {
				setError(e.message || t('auth.oauth.linkFailed'));
			});
	}, [integrationType, t]);

	return (
		<div className="flex min-h-[70vh] items-center justify-center px-5 py-12">
			<div
				className="border-tmo-module/10 bg-module w-full max-w-sm rounded-2xl border p-8 text-center"
				aria-live="polite"
			>
				<div className="bg-tmo-module/5 mx-auto mb-5 flex size-14 items-center justify-center rounded-xl">
					{error ? (
						<WarningCircle className="text-text/60 size-7" />
					) : (
						<Spinner className="size-7" />
					)}
				</div>
				<h1 className="text-lg font-semibold">
					{error
						? t('auth.oauth.unableToLink')
						: t('auth.oauth.linkingService', {
								name: service?.name || t('navigation.account'),
							})}
				</h1>
				<p className="text-text/60 mt-2 mb-0 text-sm leading-relaxed">
					{error || t('auth.oauth.connecting')}
				</p>
				{error ? (
					<Button variant="outline" className="mt-6" asChild>
						<a href="/account/linked-accounts">{t('auth.backToLinkedAccounts')}</a>
					</Button>
				) : null}
			</div>
		</div>
	);
}
