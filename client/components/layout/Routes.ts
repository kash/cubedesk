import App from './App';
import Sessions from '../sessions/Sessions';
import Stats from '../stats/Stats';
import Settings from '../settings/Settings';
import LoginWrapper from '../login/LoginWrapper';
import Trainer from '../trainer/Trainer';
import Account from '../account/Account';
import Password from '../account/password/Password';
import DangerZone from '../account/danger_zone/DangerZone';
import PersonalInfo from '../account/personal_info/PersonalInfo';
import Community from '../community/Community';
import Elimination from '../play/logic/Elimination';
import Solves from '../solves/SolvesList';
import Profile, {prefetchProfileData} from '../profile/Profile';
import Admin from '../admin/Admin';
import SolvePage, {prefetchSolveData} from '../solve_page/SolvePage';
import Friends from '../community/friends/Friends';
import NotificationPreferences from '../account/notification_preferences/NotificationPreferences';
import Play from '../play/Play';
import PublicCustomTrainers from '../trainer/public_custom_trainers/PublicCustomTrainers';
import HeadToHead from '../play/logic/HeadToHead';
import Privacy from '../landing/legal/Privacy';
import Terms from '../landing/legal/Terms';
import Landing from '../landing/Landing';
import PlayWrapper from '../play/PlayWrapper';
import Appearance from '../settings/appearance/Appearance';
import TimerSettings from '../settings/timer/TimerSettings';
import DataSettings from '../settings/data/DataSettings';
import Membership from '../account/membership/Membership';
import LinkedAccounts from '../account/linked_accounts/LinkedAccounts';
import OAuthService from '../oauth/OAuthService';
import ForceSignOut from '../login/force_sign_out/ForceSignOut';
import {Store} from 'redux';
import Reports from '../admin/reports/Reports';
import LandingHome from '../landing/home/LandingHome';
import DefaultTimer from '../timer/DefaultTimer';
import AdminUsers from '../admin/users/AdminUsers';
import UnsubEmails from '../unsub/UnsubEmails';
import EloBoard from '../community/EloBoard';
import DemoTimer from '../timer/DemoTimer';
import AboutCubeDesk from '../landing/about/AboutCubeDesk';

interface PageOptions {
	restricted: boolean;
	standalone: boolean;
	admin: boolean;
	hideTopNav: boolean;
	noPadding: boolean;
	prefetchData: ((store: Store<any>, req: Request) => Promise<any>)[];
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
	prefetchData = null
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
	route('/account/pro', App, Account, Membership),
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
