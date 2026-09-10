import type {PublicUserAccount} from '@/types/user';
import type {WcaProfile} from '@/types/wca';
import {trpc} from '@/util/trpc';
import {useEffect, useState} from 'react';

export function useWcaProfile(user?: PublicUserAccount) {
	const userId = user?.id;
	const integrationId = user?.integrations?.find(
		(integration) => integration.service_name === 'wca',
	)?.id;
	const [attempt, setAttempt] = useState(0);
	const [result, setResult] = useState<{key: string; data: WcaProfile | null} | null>(null);
	const key = userId && integrationId ? `${userId}:${integrationId}:${attempt}` : null;

	useEffect(() => {
		if (!key || !userId) return;
		let active = true;
		setResult(null);
		trpc.integration.wcaProfile
			.query({userId})
			.then((data) => {
				if (active) setResult({key, data});
			})
			.catch(() => {
				if (active) setResult({key, data: null});
			});
		return () => {
			active = false;
		};
	}, [key, userId]);

	return {
		linked: !!key,
		loading: !!key && result?.key !== key,
		data: key && result?.key === key ? result.data : null,
		retry: () => setAttempt((current) => current + 1),
	};
}
