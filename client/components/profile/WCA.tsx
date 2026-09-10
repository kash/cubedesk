import LinkAccountButton from '@/components/oauth/LinkAccountButton';
import {LINKED_SERVICES} from '@/shared/integration';
import {PublicUserAccount} from '@/types/user';
import {cn} from '@/util/cn';
import {ArrowUpRight, Check} from 'phosphor-react';
import React from 'react';

interface Props {
	myProfile?: boolean;
	user?: PublicUserAccount;
	profileUrl?: string | null;
}

function getWcaIntegration(user?: PublicUserAccount) {
	for (const integration of user?.integrations || []) {
		if (integration.service_name === 'wca') {
			return integration;
		}
	}

	return null;
}

const WCA = Object.assign(
	function WCA(props: Props) {
		const {myProfile, user, profileUrl} = props;
		const wcaInt = getWcaIntegration(user);

		let body: React.ReactNode = null;

		if (wcaInt) {
			const className = cn(
				'border-tmo-module/10 bg-tmo-module/[0.025] text-text inline-flex h-9 items-center gap-2 rounded-lg border px-2.5 text-xs font-medium whitespace-nowrap',
				{
					'hover:border-tmo-module/20 hover:bg-tmo-module/5 focus-visible:outline-text/50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2':
						!!profileUrl,
				},
			);
			const badge = (
				<>
					<img
						src={LINKED_SERVICES.wca.logoSrc}
						alt=""
						className="size-5 shrink-0 object-contain"
					/>
					<span>WCA linked</span>
					<span className="bg-success/10 text-success inline-flex size-4 items-center justify-center rounded-full">
						<Check size={10} weight="bold" aria-hidden="true" />
					</span>
					{profileUrl ? (
						<ArrowUpRight size={12} className="text-text/40" aria-hidden="true" />
					) : null}
				</>
			);
			body = profileUrl ? (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={profileUrl}
					className={className}
					aria-label="WCA account linked. View WCA profile (opens in a new tab)"
					title="View WCA profile"
				>
					{badge}
				</a>
			) : (
				<span className={className} title="WCA account linked">
					{badge}
				</span>
			);
		} else if (myProfile) {
			body = (
				<LinkAccountButton integrationType="wca" variant="outline" size="sm">
					Link WCA Account
				</LinkAccountButton>
			);
		}

		return <div className="relative">{body}</div>;
	},
	{getWcaIntegration},
);

export default WCA;
