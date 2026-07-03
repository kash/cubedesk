import React, {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import Tag from '@/components/common/Tag';
import {Lock} from 'phosphor-react';
import {useMe} from '@/util/hooks/useMe';
import {NavLinkProps} from '@/components/layout/nav/nav-links';

interface Props extends NavLinkProps {
	collapsed?: boolean;
	selected?: boolean;
}

export default function NavLink(props: Props) {
	const {name, icon, newTag, loginRequired, collapsed, selected} = props;
	let link = props.link;

	const me = useMe();

	let infoTag: ReactNode = null;
	if (loginRequired && !me) {
		infoTag = <Tag icon={<Lock weight="fill" />} textColor="orange" />;
	} else if (newTag) {
		infoTag = <Tag text="new" textColor="orange" />;
	}

	if (link === '/' && !me) {
		link = '/demo';
	}

	const wrapperClasses = ['transition-all', 'group', 'rounded'];

	const linkClasses = [
		'transition-opacity',
		'w-full',
		'text-text',
		'h-12',
		'text-lg',
		'flex',
		'flex-row',
		'items-center',
		'py-3',
		'rounded',
	];

	if (!selected) {
		linkClasses.push('opacity-40');
		linkClasses.push('group-hover:opacity-100');
	}

	let navLabel: ReactNode = <span className="font-roboto text-text ml-4">{name}</span>;
	if (collapsed) {
		navLabel = null;
		infoTag = null;
		linkClasses.push('justify-center');
	}

	return (
		<div className={wrapperClasses.join(' ')}>
			<div className="relative">
				<Link to={link} className={linkClasses.join(' ')}>
					<span className="text-xl">{icon}</span>
					{navLabel}
				</Link>
				<div className="absolute top-1/2 right-0 -translate-y-1/2">{infoTag}</div>
			</div>
		</div>
	);
}
