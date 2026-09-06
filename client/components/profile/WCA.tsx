import Emblem from '@/components/common/Emblem';
import {Button} from '@/components/ui/button';
import {WcaAccount} from '@/types/integration';
import {trpc} from '@/util/trpc';
import {Check} from 'phosphor-react';
import React, {useEffect, useState} from 'react';

interface Props {
	myProfile?: boolean;
	user?: any;
}

function getWcaIntegration(user?: any) {
	for (const integration of user?.integrations || []) {
		if (integration.service_name === 'wca') {
			return integration;
		}
	}

	return null;
}

const WCA = Object.assign(
	function WCA(props: Props) {
		const {myProfile, user} = props;
		const [wcaMe, setWcaMe] = useState<WcaAccount | null>(null);
		const wcaInt = getWcaIntegration(user);

		useEffect(() => {
			let mounted = true;

			async function fetchWcaMe() {
				const res = await trpc.integration.wcaMe.query();

				if (mounted) {
					setWcaMe(res);
				}
			}

			fetchWcaMe();

			return () => {
				mounted = false;
			};
		}, []);

		let body: React.ReactNode = null;

		if (wcaInt) {
			if (wcaMe) {
				body = (
					<a target="_blank" href={wcaMe.url || undefined}>
						<Emblem text="WCA Profile Linked" icon={<Check weight="bold" />} green />
					</a>
				);
			}
		} else if (myProfile) {
			let url = 'https://www.cubedesk.io/oauth/wca';
			if (window.location.hostname.indexOf('localhost') > -1) {
				url = 'https://localhost:3000/oauth/wca';
			}

			const link = `https://www.worldcubeassociation.org/oauth/authorize?client_id=p_XZ2OvzijIXX-y8SZmQFa0w5m-B6u4U7PkrRWhojrs&redirect_uri=${url}&response_type=code&scope=public`;

			body = (
				<Button variant="outline" size="sm" asChild>
					<a href={link}>{'Link WCA Account'}</a>
				</Button>
			);
		}

		return <div className="relative">{body}</div>;
	},
	{getWcaIntegration},
);

export default WCA;
