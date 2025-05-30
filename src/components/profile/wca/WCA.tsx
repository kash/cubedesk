import React, { useState, useEffect } from 'react';
import './WCA.scss';
import { Button } from '@/components/ui/button';
import Emblem from '@/components/common/emblem/Emblem';
import { Check } from '@phosphor-icons/react/dist/ssr';
import { UserAccount, PublicUserAccount, UserAccountForAdmin, Integration } from '@/generated/zod';

interface WCAProps {
	myProfile?: boolean;
	user: UserAccount | PublicUserAccount | UserAccountForAdmin;
}

interface WCAMe {
	url: string;
}

export default function WCA(props: WCAProps) {
	const [wcaMe, setWcaMe] = useState<WCAMe | null>(null);
	const { myProfile, user } = props;

	useEffect(() => {
		// TODO: Migrate to tRPC - need wca.me query
		// const fetchWcaMe = async () => {
		// 	const wcaMe = await wcaMeQuery();
		// 	setWcaMe(wcaMe);
		// };
		// fetchWcaMe();

		setWcaMe(null);
	}, []);

	const wcaInt = WCA.getWcaIntegration(user);

	let body: React.ReactNode = null;

	if (wcaInt) {
		if (wcaMe) {
			body = (
				<a target="_blank" href={wcaMe.url || '#'} rel="noopener noreferrer">
					<Emblem text="WCA Profile Linked" icon={<Check weight="bold" />} green />
				</a>
			);
		}
	} else if (myProfile) {
		let url = 'https://www.cubedesk.io/oauth/wca';
		if (typeof window !== 'undefined' && window.location.hostname.indexOf('localhost') > -1) {
			url = 'https://localhost:3000/oauth/wca';
		}

		const link = `https://www.worldcubeassociation.org/oauth/authorize?client_id=p_XZ2OvzijIXX-y8SZmQFa0w5m-B6u4U7PkrRWhojrs&redirect_uri=${url}&response_type=code&scope=public`;

		body = (
			<a href={link}>
				<Button variant="default">Link WCA Account</Button>
			</a>
		);
	}

	return <div className="cd-profile__wca">{body}</div>;
}

WCA.getWcaIntegration = (user: UserAccount | PublicUserAccount | UserAccountForAdmin): Integration | null => {
	for (const int of user?.integrations || []) {
		if (int.service_name === 'wca') {
			return int;
		}
	}

	return null;
};
