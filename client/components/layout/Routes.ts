import App from '@/components/layout/App';
import Sessions from '@/components/sessions/Sessions';
import Stats from '@/components/stats/Stats';
import Settings from '@/components/settings/Settings';
import LoginWrapper from '@/components/login/LoginWrapper';
import Trainer from '@/components/trainer/Trainer';
import Account from '@/components/account/Account';
import Password from '@/components/account/Password';
import DangerZone from '@/components/account/DangerZone';
import PersonalInfo from '@/components/account/PersonalInfo';
import Community from '@/components/community/Community';
import Elimination from '@/components/play/logic/Elimination';
import Solves from '@/components/solves/SolvesList';
import Profile, {prefetchProfileData} from '@/components/profile/Profile';
import Admin from '@/components/admin/Admin';
import SolvePage, {prefetchSolveData} from '@/components/solve-page/SolvePage';
import Friends from '@/components/community/Friends';
import NotificationPreferences from '@/components/account/NotificationPreferences';
import Play from '@/components/play/Play';
import PublicCustomTrainers from '@/components/trainer/public-custom-trainers/PublicCustomTrainers';
import HeadToHead from '@/components/play/logic/HeadToHead';
import Privacy from '@/components/landing/legal/Privacy';
import Terms from '@/components/landing/legal/Terms';
import Landing from '@/components/landing/Landing';
import PlayWrapper from '@/components/play/PlayWrapper';
import Appearance from '@/components/settings/appearance/Appearance';
import TimerSettings from '@/components/settings/timer/TimerSettings';
import DataSettings from '@/components/settings/data/import-data/DataSettings';
import LinkedAccounts from '@/components/account/linked-accounts/LinkedAccounts';
import OAuthService from '@/components/oauth/OAuthService';
import ForceSignOut from '@/components/login/ForceSignOut';
import {Store} from 'redux';
import type {Request} from 'express';
import Reports from '@/components/admin/reports/Reports';
import LandingHome from '@/components/landing/home/LandingHome';
import DefaultTimer from '@/components/timer/DefaultTimer';
import AdminUsers from '@/components/admin/AdminUsers';
import UnsubEmails from '@/components/unsub/UnsubEmails';
import EloBoard from '@/components/community/EloBoard';
import DemoTimer from '@/components/timer/DemoTimer';
import AboutCubeDesk from '@/components/landing/about/AboutCubeDesk';

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
	route('/home', null, Landing, LandingHome, false, false, false, false, true),
	// route('/how-to-solve', null, Landing, HTSLanding, false, false, false, false, true),
	// route('/how-to-solve/:stepId', null, Landing, HTSLearn, false, false, false, false, true),
	route('/about', null, Landing, AboutCubeDesk, false, false, false, false, true),
	route('/demo', null, App, DemoTimer, false, false, false, false, true),
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
	routeRedirect('/community/friends', '/community/friends/list'),
	routeRedirect('/community', '/community/leaderboards'),
	routeRedirect('/admin', '/admin/reports'),
];
