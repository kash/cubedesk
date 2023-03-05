import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link, useRouteMatch} from 'react-router-dom';
import './Nav.scss';
import {setSetting} from '../../../db/settings/update';
import {setGeneral} from '../../../actions/general';
import Notifications from './notifications/Notifications';
import Logo from '../../common/logo/Logo';
import MobileNav from './mobile_nav/MobileNav';
import {useGeneral} from '../../../util/hooks/useGeneral';
import {useWindowListener} from '../../../util/hooks/useListener';
import {useSettings} from '../../../util/hooks/useSettings';
import {useTheme} from '../../../util/hooks/useTheme';
import block from '../../../styles/bem';
import AccountDropdown from './account_dropdown/AccountDropdown';
import {useMe} from '../../../util/hooks/useMe';
import NavLink from './NavLink';
import Button from '../../common/button/Button';
import LoginNav from './LoginNav';
import {resourceUri} from '../../../util/storage';

const b = block('nav');

export interface NavLinkProps {
	name: string;
	icon: string;
	match: RegExp;
	link: string;
	newTag?: boolean;
	loginRequired?: boolean;
}

export const NAV_LINKS: NavLinkProps[] = [
	{
		name: 'Timer',
		icon: 'ph-timer-bold',
		match: /(^\/$|^$)|(^\/demo$|^$)/,
		link: '/',
	},
	{
		name: '1v1',
		icon: 'ph-sword-bold',
		match: /^\/play/,
		link: '/play',
		loginRequired: true,
	},
	{
		name: 'Stats',
		icon: 'ph-chart-pie-bold',
		match: /^\/stats/,
		link: '/stats',
	},
	{
		name: 'Community',
		icon: 'ph-users-bold',
		match: /^\/community|\/user\//,
		link: '/community/leaderboards',
	},
	{
		name: 'Trainer',
		icon: 'ph-ladder-simple-bold',
		match: /^\/trainer/,
		link: '/trainer/333/OLL',
		loginRequired: true,
	},
	{
		name: 'Solves',
		icon: 'ph-list-bullets-bold',
		match: /^\/solves/,
		link: '/solves',
	},
	{
		name: 'Sessions',
		icon: 'ph-rows-bold',
		match: /^\/sessions/,
		link: '/sessions',
		loginRequired: true,
	},
	{
		name: 'Settings',
		icon: 'ph-wrench-bold',
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
					<i className="ph-arrow-right-bold" />
				</div>
			</Link>
		);
	}

	return (
		<div className={b({collapsed: navClosed})}>
			<div className={b('wrapper')}>
				<div className={b('body')}>
					<div className={b('top-section')}>
						<div className={b('header')}>
							<Logo large={true} dark={!moduleColor.isDark} />
							<Logo dark={!moduleColor.isDark} />
							<div className={b('header-actions')}>
								{notifications}
								<AccountDropdown />
							</div>
						</div>
						{getPro}
						<div className="mt-4">{navLinks}</div>
						<LoginNav collapsed={navClosed} />
					</div>
					<div className={b('bottom-section')}>
						<div className={b('social')}>
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
							icon={navCollapsed ? 'ph-arrow-right-fill' : 'ph-arrow-left-fill'}
							transparent
							className={b('collapse-button')}
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
		<a href={href} target="_blank">
			<img src={path} alt={`${name} logo`} />
		</a>
	);
}
