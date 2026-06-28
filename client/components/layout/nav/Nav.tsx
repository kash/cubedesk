import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link, useRouteMatch} from 'react-router-dom';
import {setSetting} from '@/db/settings/update';
import {setGeneral} from '@/actions/general';
import {
	ArrowLeft,
	Sword,
	ChartPie,
	LadderSimple,
	Users,
	ListBullets,
	Rows,
	Wrench,
	Timer,
	ArrowRight,
} from 'phosphor-react';
import Notifications from '@/components/layout/nav/notifications/Notifications';
import Logo from '@/components/common/logo/Logo';
import MobileNav from '@/components/layout/nav/MobileNav';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useWindowListener} from '@/util/hooks/useListener';
import {useSettings} from '@/util/hooks/useSettings';
import {useTheme} from '@/util/hooks/useTheme';
import AccountDropdown from '@/components/layout/nav/account-dropdown/AccountDropdown';
import {useMe} from '@/util/hooks/useMe';
import NavLink from '@/components/layout/nav/NavLink';
import Button from '@/components/common/button/Button';
import LoginNav from '@/components/layout/nav/LoginNav';
import {resourceUri} from '@/util/storage';

export interface NavLinkProps {
	name: string;
	icon: JSX.Element;
	match: RegExp;
	link: string;
	newTag?: boolean;
	loginRequired?: boolean;
}

export const NAV_LINKS: NavLinkProps[] = [
	{
		name: 'Timer',
		icon: <Timer weight="bold" />,
		match: /(^\/$|^$)|(^\/demo$|^$)/,
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

export default function Nav() {
	const dispatch = useDispatch();

	const match = useRouteMatch();
	const me = useMe();

	const focusMode = useSettings('focus_mode');
	const moduleColor = useTheme('module_color');

	const navCollapsed = useSettings('nav_collapsed');
	const mobileMode = useGeneral('mobile_mode');
	const forceNavCollapsed = useGeneral('force_nav_collapsed');

	useWindowListener('resize', windowResize, [navCollapsed, mobileMode, forceNavCollapsed]);

	useEffect(() => {
		windowResize();
	}, []);

	function windowResize() {
		if (window.innerWidth <= 1080 && !forceNavCollapsed) {
			dispatch(setGeneral('force_nav_collapsed', true));
		} else if (window.innerWidth > 1080 && forceNavCollapsed) {
			dispatch(setGeneral('force_nav_collapsed', false));
		}

		if (window.innerWidth <= 750 && !mobileMode) {
			dispatch(setGeneral('mobile_mode', true));
		} else if (window.innerWidth > 750 && mobileMode) {
			dispatch(setGeneral('mobile_mode', false));
		}
	}

	function toggleCollapse() {
		setSetting('nav_collapsed', !navCollapsed);
	}

	let pathname = '';
	if (match) {
		pathname = match.path;
	}

	const navClosed = navCollapsed || forceNavCollapsed;

	if (focusMode && !mobileMode) {
		return null;
	}

	let notifications = <Notifications />;
	if (!me) {
		notifications = null;
	}

	if (mobileMode) {
		return <MobileNav />;
	}

	const navLinks = NAV_LINKS.map((link) => (
		<NavLink {...link} key={link.name} collapsed={navClosed} selected={link.match.test(pathname)} />
	));

	let getPro = null;
	if (!me?.is_pro && !navClosed) {
		getPro = (
			<Link
				to="/account/pro"
				className="mt-0.5 mb-1 flex w-full flex-row items-center justify-center rounded bg-primary py-2 px-3"
			>
				<div className="flex flex-row items-center gap-1 font-bold text-tmo-primary">
					<span className="table">Get CubeDesk Pro</span>
					<ArrowRight weight="bold" />
				</div>
			</Link>
		);
	}

	const navClasses = [
		'sticky',
		'left-0',
		'top-0',
		'z-[1000]',
		'box-border',
		'flex',
		'h-screen',
		'h-[100dvh]',
		navClosed ? 'w-20' : 'w-72',
		'flex-col',
		'items-center',
		'bg-module',
		'pt-5',
	];

	const headerClasses = [
		'mb-2.5',
		'box-border',
		'flex',
		navClosed ? 'flex-col' : 'flex-row',
		'items-center',
		navClosed ? 'justify-center' : 'justify-between',
	];
	const headerActionsClasses = ['flex', navClosed ? 'flex-col' : 'flex-row', 'items-center', 'gap-2.5'];
	const socialClasses = [
		'mx-auto',
		'mb-2.5',
		'grid',
		'w-[95%]',
		'max-w-[200px]',
		navClosed ? 'grid-cols-1' : 'grid-cols-5',
		'gap-[5px]',
		'box-border',
	];

	return (
		<div className={navClasses.join(' ')}>
			<div className="box-border flex h-full w-full flex-col justify-center px-5">
				<div className="flex h-full w-full flex-col justify-between">
					<div className="flex w-full flex-col justify-center">
						<div className={headerClasses.join(' ')}>
							<span className={navClosed ? 'hidden' : 'block'}>
								<Logo large={true} dark={!moduleColor.isDark} />
							</span>
							<span className={navClosed ? 'block' : 'hidden'}>
								<Logo dark={!moduleColor.isDark} />
							</span>
							<div className={headerActionsClasses.join(' ')}>
								{notifications}
								<AccountDropdown />
							</div>
						</div>
						{getPro}
						<div className="mt-4">{navLinks}</div>
						<LoginNav collapsed={navClosed} />
					</div>
					<div className="flex flex-col items-center pb-[30px] opacity-70">
						<div className={socialClasses.join(' ')}>
							<SocialIcon
								href="https://discord.gg/wdVbhDnsQV"
								darkPath={resourceUri('/images/logos/discord_logo_white.svg')}
								lightPath={resourceUri('/images/logos/discord_logo_black.svg')}
								name="Discord"
							/>
							<SocialIcon
								href="https://www.instagram.com/cubedesk/"
								darkPath={resourceUri('/images/logos/instagram_logo_white.svg')}
								lightPath={resourceUri('/images/logos/instagram_logo_black.svg')}
								name="Instagram"
							/>
							<SocialIcon
								href="https://www.reddit.com/r/cubedesk"
								darkPath={resourceUri('/images/logos/reddit_logo_white.svg')}
								lightPath={resourceUri('/images/logos/reddit_logo_black.svg')}
								name="Reddit"
							/>

							<SocialIcon
								href="https://github.com/kash/cubedesk"
								darkPath={resourceUri('/images/logos/github_logo_white.svg')}
								lightPath={resourceUri('/images/logos/github_logo_black.svg')}
								name="GitHub"
							/>
							<SocialIcon
								href="/home"
								darkPath={resourceUri('/images/logos/globe_logo_white.svg')}
								lightPath={resourceUri('/images/logos/globe_logo_black.svg')}
								name="Globe"
							/>
						</div>
						<Button
							large
							iconFirst
							hidden={forceNavCollapsed}
							text={navCollapsed ? '' : 'Collapse'}
							icon={navCollapsed ? <ArrowRight weight="fill" /> : <ArrowLeft weight="fill" />}
							transparent
							type="button"
							onClick={toggleCollapse}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

interface SocialIconInterface {
	name: string;
	href: string;
	darkPath: string;
	lightPath: string;
}

function SocialIcon(props: SocialIconInterface) {
	const {darkPath, name, href, lightPath} = props;
	const moduleColor = useTheme('module_color');

	let path = darkPath;
	if (!moduleColor.isDark) {
		path = lightPath;
	}

	return (
		<a
			className="box-border flex flex-col items-center justify-center rounded-[5px] bg-transparent p-2 font-semibold opacity-70 transition-all duration-100 ease-in-out hover:bg-tmo-module/10 hover:opacity-100"
			href={href}
			target="_blank"
		>
			<img className="w-full" src={path} alt={`${name} logo`} />
		</a>
	);
}
