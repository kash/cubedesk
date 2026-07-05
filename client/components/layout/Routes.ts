import type {Request} from 'express';
import Account from '@/components/account/Account';
import DangerZone from '@/components/account/DangerZone';
import LinkedAccounts from '@/components/account/linked-accounts/LinkedAccounts';
import NotificationPreferences from '@/components/account/NotificationPreferences';
import Password from '@/components/account/Password';
import PersonalInfo from '@/components/account/PersonalInfo';
import Admin from '@/components/admin/Admin';
import AdminUsers from '@/components/admin/AdminUsers';
import Reports from '@/components/admin/reports/Reports';
import Community from '@/components/community/Community';
import EloBoard from '@/components/community/EloBoard';
import Friends from '@/components/community/Friends';
import AboutCubeDesk from '@/components/landing/about/AboutCubeDesk';
import Landing from '@/components/landing/Landing';
import Privacy from '@/components/landing/legal/Privacy';
import Terms from '@/components/landing/legal/Terms';
import App from '@/components/layout/App';
import ForceSignOut from '@/components/login/ForceSignOut';
import LoginWrapper from '@/components/login/LoginWrapper';
import OAuthService from '@/components/oauth/OAuthService';
import Elimination from '@/components/play/logic/Elimination';
import HeadToHead from '@/components/play/logic/HeadToHead';
import Play from '@/components/play/Play';
import PlayWrapper from '@/components/play/PlayWrapper';
import Profile, {prefetchProfileData} from '@/components/profile/Profile';
import Sessions from '@/components/sessions/Sessions';
import Appearance from '@/components/settings/appearance/Appearance';
import DataSettings from '@/components/settings/data/import-data/DataSettings';
import Settings from '@/components/settings/Settings';
import TimerSettings from '@/components/settings/timer/TimerSettings';
import SolvePage, {prefetchSolveData} from '@/components/solve-page/SolvePage';
import Solves from '@/components/solves/SolvesList';
import Stats from '@/components/stats/Stats';
import DefaultTimer from '@/components/timer/DefaultTimer';
import PublicCustomTrainers from '@/components/trainer/public-custom-trainers/PublicCustomTrainers';
import Trainer from '@/components/trainer/Trainer';
import UnsubEmails from '@/components/unsub/UnsubEmails';
import {Store} from 'redux';

interface PageOptions {
	restricted: boolean;
	standalone: boolean;
	admin: boolean;
	hideTopNav: boolean;
	noPadding: boolean;
	prefetchData?: ((store: Store<any>, req: Request) => Promise<any>)[];
}

export interface PageContext extends PageOptions {
	path: string;
	grandparent: any;
	parent: any;
	child: any;
}

export interface RedirectPath {
	path: string;
	redirect: string;
}

function route(
	path: string,
	grandparent: any,
	parent: any,
	child: any,
	restricted = true,
	standalone = false, // Standalone means that it wont be wrapped around the <Wrapper> class
	admin = false,
	hideTopNav = false,
	noPadding = false,
	prefetchData: ((store: Store<any>, req: Request) => Promise<any>)[] = []
): PageContext {
	return {
		path,
		grandparent,
		parent,
		child,
		restricted,
		standalone,
		admin,
		hideTopNav,
		noPadding,
		prefetchData,
	};
}

function routeRedirect(path: string, redirect: string): RedirectPath {
	return {
		path,
		redirect,
	};
}

// Order by importance (at least the public routes)
export const routes: (PageContext | RedirectPath)[] = [
	// Main tabs
	route('/', null, App, DefaultTimer, false, false, false, false, true),
	route('/signup', null, App, LoginWrapper, false, true, false, true),
	route('/login', null, App, LoginWrapper, false, true, false, true),
	route('/forgot', null, App, LoginWrapper, false, true, false, true),
	route('/sessions', null, App, Sessions, false),
	route('/solves', null, App, Solves, false),
	route('/stats', null, App, Stats, false),
	route('/force-log-out', null, App, ForceSignOut, false, true, false, true),

	// Settings
	route('/settings/timer', App, Settings, TimerSettings, false),
	route('/settings/appearance', App, Settings, Appearance, false),
	route('/settings/data', App, Settings, DataSettings, false),

	// Landing Pages
	// route('/how-to-solve', null, Landing, HTSLanding, false, false, false, false, true),
	// route('/how-to-solve/:stepId', null, Landing, HTSLearn, false, false, false, false, true),
	route('/about', null, Landing, AboutCubeDesk, false, false, false, false, true),
	route('/terms', null, Landing, Terms, false, true),
	route('/privacy', null, Landing, Privacy, false, true),

	// Public
	route('/solve/:shareCode', null, App, SolvePage, false, false, false, false, false, [prefetchSolveData]),
	route('/user/:username', null, App, Profile, false, false, false, false, false, [prefetchProfileData]),
	route('/unsub-emails', null, App, UnsubEmails, false, true, false, true, false),

	// Trainers
	route('/trainer/public-trainers', null, App, PublicCustomTrainers, false),
	route('/trainer/:cubeType/:algoType', null, App, Trainer, false),

	// Account
	route('/account/personal-info', App, Account, PersonalInfo),
	route('/account/danger-zone', App, Account, DangerZone),
	route('/account/password', App, Account, Password),
	route('/account/linked-accounts', App, Account, LinkedAccounts),
	route('/account/notifications', App, Account, NotificationPreferences),

	// Community
	route('/community/leaderboards', App, Community, EloBoard, false),
	route('/community/friends/list', App, Community, Friends),
	route('/community/friends/received', App, Community, Friends),
	route('/community/friends/sent', App, Community, Friends),

	// Play
	route('/play', App, PlayWrapper, Play, false),
	route('/play/elimination', App, PlayWrapper, Elimination),
	route('/play/elimination/:linkCode', App, PlayWrapper, Elimination),
	route('/play/head-to-head', App, PlayWrapper, HeadToHead),
	route('/play/head-to-head/:linkCode', App, PlayWrapper, HeadToHead),

	// Admin
	route('/admin/reports', App, Admin, Reports, true, false, true),
	route('/admin/users', App, Admin, AdminUsers, true, false, true),

	// OAuth
	route('/oauth/:integrationType', null, App, OAuthService, true, true, false, true),

	// Redirects
	routeRedirect('/trainer', '/trainer/333/OLL'),
	routeRedirect('/trainer/:cubeType/:algoType', '/trainer/333/OLL'),
	routeRedirect('/trainer-3_oll', '/trainer/333/OLL'),
	routeRedirect('/m/elimination/:linkCode', '/play/elimination/:linkCode'),
	routeRedirect('/m/head-to-head/:linkCode', '/play/head-to-head/:linkCode'),
	routeRedirect('/settings', '/settings/timer'),
	routeRedirect('/account', '/account/personal-info'),
	routeRedirect('/timer', '/'),
	routeRedirect('/home', '/'),
	routeRedirect('/demo', '/'),
	routeRedirect('/community/friends', '/community/friends/list'),
	routeRedirect('/community', '/community/leaderboards'),
	routeRedirect('/admin', '/admin/reports'),
];
