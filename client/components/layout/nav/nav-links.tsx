import React, {ReactNode} from 'react';
import {
	ChartPie,
	LadderSimple,
	ListBullets,
	Rows,
	Sword,
	Timer,
	Users,
	Wrench,
} from 'phosphor-react';

export interface NavLinkProps {
	name: string;
	icon: ReactNode;
	match: RegExp;
	link: string;
	newTag?: boolean;
	loginRequired?: boolean;
}

export const NAV_LINKS: NavLinkProps[] = [
	{
		name: 'Timer',
		icon: <Timer weight="bold" />,
		match: /^\/$|^$/,
		link: '/',
	},
	{
		name: '1v1',
		icon: <Sword weight="bold" />,
		match: /^\/play/,
		link: '/play',
		loginRequired: true,
	},
	{
		name: 'Stats',
		icon: <ChartPie weight="bold" />,
		match: /^\/stats/,
		link: '/stats',
	},
	{
		name: 'Community',
		icon: <Users weight="bold" />,
		match: /^\/community|\/user\//,
		link: '/community/leaderboards',
	},
	{
		name: 'Trainer',
		icon: <LadderSimple weight="bold" />,
		match: /^\/trainer/,
		link: '/trainer/333/OLL',
		loginRequired: true,
	},
	{
		name: 'Solves',
		icon: <ListBullets weight="bold" />,
		match: /^\/solves/,
		link: '/solves',
	},
	{
		name: 'Sessions',
		icon: <Rows weight="bold" />,
		match: /^\/sessions/,
		link: '/sessions',
		loginRequired: true,
	},
	{
		name: 'Settings',
		icon: <Wrench weight="bold" />,
		match: /^\/settings/,
		link: '/settings/timer',
	},
];
