import {NavLinkProps} from '@/components/layout/nav/nav-links';
import {Badge} from '@/components/ui/badge';
import {Tooltip} from '@/components/ui/tooltip';
import {useMe} from '@/util/hooks/useMe';
import {Lock} from 'phosphor-react';
import React, {ReactNode} from 'react';
import {Link} from 'react-router-dom';

interface Props extends NavLinkProps {
	collapsed?: boolean;
	selected?: boolean;
}

export default function NavLink(props: Props) {
	const {name, icon, newTag, loginRequired, collapsed, selected, link} = props;

	const me = useMe();

	let infoTag: ReactNode = null;
	if (loginRequired && !me) {
		infoTag = (
			<Badge variant="unfilled" size="sm" className="text-amber-600" aria-label="Restricted">
				<Lock weight="fill" />
			</Badge>
		);
	} else if (newTag) {
		infoTag = (
			<Badge variant="unfilled" size="sm" className="text-amber-600">
				new
			</Badge>
		);
	}

	const wrapperClasses = ['transition-all', 'group', 'rounded'];

	const linkClasses = [
		'transition-opacity',
		'w-full',
		'text-text',
		'h-12',
		'text-base',
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

	const linkContent = (
		<Link to={link} className={linkClasses.join(' ')} aria-label={collapsed ? name : undefined}>
			<span className="text-xl">{icon}</span>
			{navLabel}
		</Link>
	);
	return (
		<div className={wrapperClasses.join(' ')}>
			<div className="relative">
				{collapsed ? <Tooltip title={name}>{linkContent}</Tooltip> : linkContent}
				<div className="absolute top-1/2 right-0 -translate-y-1/2">{infoTag}</div>
			</div>
		</div>
	);
}
