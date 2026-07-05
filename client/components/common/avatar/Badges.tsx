import Emblem from '@/components/common/Emblem';
import WCA from '@/components/profile/WCA';
import {getDateFromNow} from '@/util/dates';
import {ReactNode} from 'react';

interface Props {
	user: any;
	small?: boolean;
	limit?: number;
}

export default function Badges({user, small, limit}: Props) {
	let ems: ReactNode[] = [];
	const wca = WCA.getWcaIntegration(user);

	if (user.banned_forever || user.banned_until) {
		let text: string | undefined;
		if (user.banned_forever) {
			text = 'Banned Forever';
		} else if (user.banned_until) {
			const until = getDateFromNow(user.banned_until, true);
			text = `Banned for ${until}`;
		}

		ems.push(<Emblem className="mb-0" small={small} key="banned" text={text} color="#444" />);
	}

	if (user.admin) {
		ems.push(<Emblem className="mb-0" small={small} key="admin" text="Admin" red />);
	}

	if (wca) {
		ems.push(<Emblem className="mb-0" small={small} key={wca.id} text="WCA Profile" green />);
	}

	const badges = [...(user.badges || [])].sort((a: any, b: any) => a.priority - b.priority);

	for (const badge of badges) {
		const type = (badge as any).badge_type;
		ems.push(
			<Emblem
				className="mb-0"
				key={type.id}
				text={type.name}
				color={type.color}
				small={small}
			/>,
		);
	}

	const maxSize = limit;
	const emsSize = ems.length;
	if (limit && maxSize && emsSize > maxSize) {
		ems = ems.slice(0, maxSize);
		ems.push(
			<Emblem
				className="mb-0"
				small={small}
				key="more"
				text={`+${emsSize - maxSize}`}
				color="#333"
			/>,
		);
	}

	if (ems.length) {
		return <div className="mt-2 flex flex-row flex-wrap gap-1.5">{ems}</div>;
	}

	return null;
}
