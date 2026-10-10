import type {Request} from 'express';
import {DOC_PAGES} from '@/components/docs/doc-pages';
import App from '@/components/layout/App';
import {isLazyPage, lazyPage} from '@/components/layout/lazy-page';
import {prefetchProfileData} from '@/components/profile/profile-data';
import {prefetchSolveData} from '@/components/solve-page/solve-data';
import {matchPath} from 'react-router-dom';
import {Store} from 'redux';

// Every page is split into its own chunk so a visit only downloads the code for the page it shows
const Account = lazyPage(() => import('@/components/account/Account'));
const DangerZone = lazyPage(() => import('@/components/account/DangerZone'));
const LinkedAccounts = lazyPage(
	() => import('@/components/account/linked-accounts/LinkedAccounts'),
);
const NotificationPreferences = lazyPage(
	() => import('@/components/account/NotificationPreferences'),
);
const Password = lazyPage(() => import('@/components/account/Password'));
const PersonalInfo = lazyPage(() => import('@/components/account/PersonalInfo'));
const Admin = lazyPage(() => import('@/components/admin/Admin'));
const AdminMetrics = lazyPage(() => import('@/components/admin/AdminMetrics'));
const AdminTrainer = lazyPage(() => import('@/components/admin/AdminTrainer'));
const AdminUsers = lazyPage(() => import('@/components/admin/AdminUsers'));
const Reports = lazyPage(() => import('@/components/admin/reports/Reports'));
const Community = lazyPage(() => import('@/components/community/Community'));
const EloBoard = lazyPage(() => import('@/components/community/EloBoard'));
const Friends = lazyPage(() => import('@/components/community/Friends'));
const DocsLayout = lazyPage(() => import('@/components/docs/DocsLayout'));
const ForceSignOut = lazyPage(() => import('@/components/login/ForceSignOut'));
const LoginWrapper = lazyPage(() => import('@/components/login/LoginWrapper'));
const OAuthService = lazyPage(() => import('@/components/oauth/OAuthService'));
const Elimination = lazyPage(() => import('@/components/play/logic/Elimination'));
const HeadToHead = lazyPage(() => import('@/components/play/logic/HeadToHead'));
const Play = lazyPage(() => import('@/components/play/Play'));
const PlayWrapper = lazyPage(() => import('@/components/play/PlayWrapper'));
const Profile = lazyPage(() => import('@/components/profile/Profile'));
const Sessions = lazyPage(() => import('@/components/sessions/Sessions'));
const Appearance = lazyPage(() => import('@/components/settings/appearance/Appearance'));
const DataSettings = lazyPage(() => import('@/components/settings/data/import-data/DataSettings'));
const Settings = lazyPage(() => import('@/components/settings/Settings'));
const TimerSettings = lazyPage(() => import('@/components/settings/timer/TimerSettings'));
const SolvePage = lazyPage(() => import('@/components/solve-page/SolvePage'));
const Solves = lazyPage(() => import('@/components/solves/SolvesList'));
const Stats = lazyPage(() => import('@/components/stats/Stats'));
const DefaultTimer = lazyPage(() => import('@/components/timer/DefaultTimer'));
const PublicCustomTrainers = lazyPage(
	() => import('@/components/trainer/public-custom-trainers/PublicCustomTrainers'),
);
const Trainer = lazyPage(() => import('@/components/trainer/Trainer'));
const UnsubEmails = lazyPage(() => import('@/components/unsub/UnsubEmails'));

interface PageOptions {
	restricted: boolean;
	standalone: boolean;
	admin: boolean;
	hideTopNav: boolean;
	noPadding: boolean;
	noIndex: boolean;
	// Render the page right away, on the server and before the app's local data (solves, settings) loads
	renderBeforeAppLoad: boolean;
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
	prefetchData: ((store: Store<any>, req: Request) => Promise<any>)[] = [],
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
		noIndex: false,
		renderBeforeAppLoad: false,
		prefetchData,
	};
}

// Personal or utility pages that shouldn't show up in search results
function noIndex(page: PageContext): PageContext {
	return {...page, noIndex: true};
}

// Public pages that don't need the app's local data. They're fully server-rendered and show up immediately
function renderBeforeAppLoad(page: PageContext): PageContext {
	return {...page, renderBeforeAppLoad: true};
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
	...DOC_PAGES.map((page) =>
		route(page.path, App, DocsLayout, page.component, false, true, false, true),
	),
	route('/signup', null, App, LoginWrapper, false, true, false, true),
	route('/login', null, App, LoginWrapper, false, true, false, true),
	noIndex(route('/forgot', null, App, LoginWrapper, false, true, false, true)),
	noIndex(route('/sessions', null, App, Sessions, false)),
	noIndex(route('/solves', null, App, Solves, false)),
	noIndex(route('/stats', null, App, Stats, false)),
	noIndex(route('/force-log-out', null, App, ForceSignOut, false, true, false, true)),

	// Settings
	noIndex(route('/settings/timer', App, Settings, TimerSettings, false)),
	noIndex(route('/settings/appearance', App, Settings, Appearance, false)),
	noIndex(route('/settings/data', App, Settings, DataSettings, false)),

	// Public
	route('/solve/:shareCode', null, App, SolvePage, false, false, false, false, false, [
		prefetchSolveData,
	]),
	renderBeforeAppLoad(
		route('/user/:username', null, App, Profile, false, false, false, false, false, [
			prefetchProfileData,
		]),
	),
	noIndex(route('/unsub-emails', null, App, UnsubEmails, false, true, false, true, false)),

	// Trainers
	route('/trainer/public-trainers', null, App, PublicCustomTrainers, false),
	route('/trainer/:eventType/:algoType', null, App, Trainer, false),

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
	route('/admin/metrics', App, Admin, AdminMetrics, true, false, true),
	route('/admin/reports', App, Admin, Reports, true, false, true),
	route('/admin/users', App, Admin, AdminUsers, true, false, true),
	route('/admin/trainer', App, Admin, AdminTrainer, true, false, true),

	// OAuth
	route('/oauth/:integrationType', null, App, OAuthService, true, true, false, true),

	// Redirects
	routeRedirect('/trainer', '/trainer/333/OLL'),
	routeRedirect('/trainer/:eventType/:algoType', '/trainer/333/OLL'),
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

export function findPage(pathname: string): PageContext | undefined {
	return routes.find(
		(page): page is PageContext =>
			!('redirect' in page) && Boolean(matchPath(pathname, {path: page.path, exact: true})),
	);
}

// Loads the code for every component of a page, so it renders without suspending
export async function loadPage(page: PageContext) {
	const components = [page.grandparent, page.parent, page.child].filter(isLazyPage);
	await Promise.all(components.map((component) => component.load()));
}
