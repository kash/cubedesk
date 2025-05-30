import Emblem from '@/components/common/emblem/Emblem';
import WCA from '@/components/profile/wca/WCA';
import {PublicUserAccount, UserAccount, UserAccountForAdmin} from '@/generated/zod';
import {getDateFromNow} from '@/lib/util/dates';
import React from 'react';

interface BadgesProps {
	user: UserAccountForAdmin | PublicUserAccount | UserAccount;
	small?: boolean;
	limit?: number;
}

export default function Badges(props: BadgesProps) {
	const {user, small, limit} = props;

	let ems: React.ReactElement[] = [];
	const wca = WCA.getWcaIntegration(user);

	if (
		(user as UserAccountForAdmin).banned_forever ||
		(user as UserAccountForAdmin).banned_until
	) {
		let text: string;
		if ((user as UserAccountForAdmin).banned_forever) {
			text = 'Banned Forever';
		} else if ((user as UserAccountForAdmin).banned_until) {
			const until = getDateFromNow((user as UserAccountForAdmin).banned_until!, true);
			text = `Banned for ${until}`;
		}

		ems.push(<Emblem small={small} key="banned" text={text} color="#444" />);
	}

	if ((user as UserAccountForAdmin).admin) {
		ems.push(<Emblem small={small} key="admin" text="Admin" red />);
	}

	if (wca) {
		ems.push(<Emblem small={small} key={wca.id} text="WCA Profile" green />);
	}

	const badges = [...((user as UserAccountForAdmin).badges || [])].sort(
		(a, b) => a.priority - b.priority,
	);

	for (const badge of badges) {
		const type = badge.badge_type;
		ems.push(<Emblem key={type.id} text={type.name} color={type.color} small={small} />);
	}

	const maxSize = limit;
	const emsSize = ems.length;
	if (limit && emsSize > maxSize) {
		ems = ems.slice(0, maxSize);
		ems.push(<Emblem small={small} key="more" text={`+${emsSize - maxSize}`} color="#333" />);
	}

	if (ems.length) {
		return <div className="cd-avatar__emblems">{ems}</div>;
	}

	return null;
}
