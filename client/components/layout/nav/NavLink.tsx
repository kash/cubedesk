import {NavLinkProps} from '@/components/layout/nav/nav-links';
import {Badge} from '@/components/ui/badge';
import {Tooltip} from '@/components/ui/tooltip';
import {cn} from '@/util/cn';
import {useMe} from '@/util/hooks/useMe';
import {Lock} from 'phosphor-react';
import React, {ReactNode} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

interface Props extends NavLinkProps {
	collapsed?: boolean;
	selected?: boolean;
}

export default function NavLink(props: Props) {
	const {name, icon, newTag, loginRequired, collapsed, selected, link} = props;

	const me = useMe();
	const {t} = useTranslation();
	const translatedName = t(name);

	let infoTag: ReactNode = null;
	if (loginRequired && !me) {
		infoTag = (
			<Badge
				variant="unfilled"
				size="sm"
				className="text-amber-600"
				aria-label={t('navigation.restricted')}
			>
				<Lock weight="fill" />
			</Badge>
		);
	} else if (newTag) {
		infoTag = (
			<Badge variant="unfilled" size="sm" className="text-amber-600">
				{t('navigation.new')}
			</Badge>
		);
	}

	const wrapperClasses = ['transition-all', 'duration-200', 'group', 'rounded'];

	const linkClasses = [
		'w-full',
		'text-text',
		'h-12',
		'text-base',
		'flex',
		'flex-row',
		'justify-start',
		'items-center',
		'py-3',
		'rounded',
		'transition-[padding,opacity]',
		'duration-300',
	];

	if (!selected) {
		linkClasses.push('opacity-40');
		linkClasses.push('group-hover:opacity-100');
	}

	const navLabel: ReactNode = (
		<span
			className={cn(
				'font-roboto text-text overflow-hidden whitespace-nowrap transition-[max-width,margin,opacity,transform] duration-300 ease-out',
				{
					'ml-0 max-w-0 -translate-x-2 opacity-0': collapsed,
					'ml-4 max-w-[160px] opacity-100 delay-75': !collapsed,
				},
			)}
			aria-hidden={collapsed}
		>
			{translatedName}
		</span>
	);
	if (collapsed) {
		infoTag = null;
	}

	const linkContent = (
		<Link
			to={link}
			className={cn(linkClasses.join(' '), {
				'pl-2.5': collapsed,
				'pl-0': !collapsed,
			})}
			aria-label={collapsed ? translatedName : undefined}
		>
			<span className="text-xl">{icon}</span>
			{navLabel}
		</Link>
	);
	return (
		<div className={wrapperClasses.join(' ')}>
			<div className="relative">
				{collapsed ? <Tooltip title={translatedName}>{linkContent}</Tooltip> : linkContent}
				<div className="absolute top-1/2 right-0 -translate-y-1/2">{infoTag}</div>
			</div>
		</div>
	);
}
