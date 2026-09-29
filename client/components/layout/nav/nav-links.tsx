import {
	ChartPie,
	LadderSimple,
	ListBullets,
	Rows,
	Sword,
	Timer,
	Users,
} from 'phosphor-react';
import React, {ReactElement} from 'react';

export interface NavLinkProps {
	name: string;
	icon: ReactElement;
	match: RegExp;
	link: string;
	newTag?: boolean;
	loginRequired?: boolean;
}

export const NAV_LINKS: NavLinkProps[] = [
	{
		name: 'timer.timer',
		icon: <Timer weight="bold" />,
		match: /^\/$|^$/,
		link: '/',
	},
	{
		name: 'common.value1v1',
		icon: <Sword weight="bold" />,
		match: /^\/play/,
		link: '/play',
		loginRequired: true,
	},
	{
		name: 'stats.stats',
		icon: <ChartPie weight="bold" />,
		match: /^\/stats/,
		link: '/stats',
	},
	{
		name: 'community.community',
		icon: <Users weight="bold" />,
		match: /^\/community|\/user\//,
		link: '/community/leaderboards',
	},
	{
		name: 'trainer.trainer',
		icon: <LadderSimple weight="bold" />,
		match: /^\/trainer/,
		link: '/trainer/333/OLL',
		loginRequired: true,
	},
	{
		name: 'solves.solves',
		icon: <ListBullets weight="bold" />,
		match: /^\/solves/,
		link: '/solves',
	},
	{
		name: 'sessions.sessions',
		icon: <Rows weight="bold" />,
		match: /^\/sessions/,
		link: '/sessions',
		loginRequired: true,
	},
];
