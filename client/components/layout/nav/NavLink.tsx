import React from 'react';
import {Link} from 'react-router-dom';
import Tag from '../../common/tag/Tag';
import {useMe} from '../../../util/hooks/useMe';
import {NavLinkProps} from './Nav';

interface Props extends NavLinkProps {
	collapsed?: boolean;
	selected?: boolean;
}

export default function NavLink(props: Props) {
	const {name, icon, newTag, loginRequired, collapsed, selected} = props;
	let link = props.link;

	const me = useMe();

	let infoTag = null;
	if (loginRequired && !me) {
		infoTag = <Tag icon="ph-lock-fill" textColor="orange" />;
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

	let navLabel = <span className="ml-4 text-text font-roboto">{name}</span>;
	if (collapsed) {
		navLabel = null;
		infoTag = null;
		linkClasses.push('justify-center');
	}

	return (
		<div className={wrapperClasses.join(' ')}>
			<div className="relative">
				<Link to={link} className={linkClasses.join(' ')}>
					<i className={`text-xl ${icon}`} />
					{navLabel}
				</Link>
				<div className="absolute right-0 top-1/2 -translate-y-1/2">{infoTag}</div>
			</div>
		</div>
	);
}
