import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useRouteMatch} from 'react-router-dom';
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
						<div className="mt-4">{navLinks}</div>
						<LoginNav collapsed={navClosed} />
					</div>
					<div className={b('bottom-section')}>
						<div className={b('social')}>
							<a href="https://discord.gg/wdVbhDnsQV" target="_blank">
								<i className="ph-discord-logo-fill" />
							</a>
							<a href="https://www.instagram.com/cubedesk/" target="_blank">
								<i className="ph-instagram-logo-fill" />
							</a>
							<a href="https://www.reddit.com/r/cubedesk" target="_blank">
								<i className="ph-reddit-logo-fill" />
							</a>
							<a href="/home" target="_blank">
								<i className="ph-globe-fill" />
							</a>
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
