import {Button} from '@/components/ui/button';
import {Spinner} from '@/components/ui/spinner';
import {LINKED_SERVICES} from '@/shared/integration';
import {trpc} from '@/util/trpc';
import {WarningCircle} from 'phosphor-react';
import React, {useEffect, useRef, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';

export default function OAuthService() {
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
			setError('This account service is not supported.');
			return;
		}
		if (urlParams.has('error')) {
			setError('Authorization was cancelled. You can try again from linked accounts.');
			return;
		}
		if (!code || !state) {
			setError(
				'This linking request is incomplete. Please start again from linked accounts.',
			);
			return;
		}

		trpc.integration.create
			.mutate({code, state, integrationType})
			.then(() => {
				window.location.replace('/account/linked-accounts');
			})
			.catch((e: Error) => {
				setError(e.message || 'Could not link your account. Please try again.');
			});
	}, [integrationType]);

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
					{error ? 'Unable to link account' : `Linking ${service?.name || 'account'}…`}
				</h1>
				<p className="text-text/60 mt-2 mb-0 text-sm leading-relaxed">
					{error || 'Just a moment while we connect your account.'}
				</p>
				{error ? (
					<Button variant="outline" className="mt-6" asChild>
						<a href="/account/linked-accounts">Back to linked accounts</a>
					</Button>
				) : null}
			</div>
		</div>
	);
}
