import {LogoBrandmark, LogoLockup} from '@/components/common/Logo';
import AccountDropdown from '@/components/layout/nav/account-dropdown/AccountDropdown';
import GithubContributors, {
	GithubContributorsPanel,
	useGithubContributors,
} from '@/components/layout/nav/GithubContributors';
import ImportTimesPrompt from '@/components/layout/nav/ImportTimesPrompt';
import LoginNav from '@/components/layout/nav/LoginNav';
import MobileNav from '@/components/layout/nav/MobileNav';
import {NAV_LINKS} from '@/components/layout/nav/nav-links';
import NavLink from '@/components/layout/nav/NavLink';
import Notifications from '@/components/layout/nav/notifications/Notifications';
import {Button} from '@/components/ui/button';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {setSetting} from '@/db/settings/update';
import {useLocale} from '@/i18n';
import {cn} from '@/util/cn';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useMe} from '@/util/hooks/useMe';
import {useSettings} from '@/util/hooks/useSettings';
import {useTheme} from '@/util/hooks/useTheme';
import {resourceUri} from '@/util/storage';
import {GearSix, SidebarSimple} from 'phosphor-react';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Link, useRouteMatch} from 'react-router-dom';

export default function Nav() {
	const match = useRouteMatch();
	const me = useMe();
	const {t} = useTranslation();

	const focusMode = useSettings('focus_mode');
	const moduleColor = useTheme('module_color');
	const [contributorsOpen, setContributorsOpen] = useState(false);
	const {contributors, error, loadContributors, loading} = useGithubContributors();

	const navCollapsed = useSettings('nav_collapsed');
	const mobileMode = useGeneral('mobile_mode');
	const forceNavCollapsed = useGeneral('force_nav_collapsed');

	function toggleCollapse() {
		setSetting('nav_collapsed', !navCollapsed);
	}

	let pathname = '';
	if (match) {
		pathname = match.path;
	}

	const navClosed = navCollapsed || forceNavCollapsed;
	const settingsLabel = t('settings.settings');

	function showContributors() {
		setContributorsOpen(true);
		loadContributors();
	}

	if (focusMode && !mobileMode) {
		return null;
	}

	if (mobileMode) {
		return <MobileNav />;
	}

	const navLinks = NAV_LINKS.map((link) => (
		<NavLink
			{...link}
			key={link.name}
			collapsed={navClosed}
			selected={link.match.test(pathname)}
		/>
	));

	const navClasses = [
		'sticky',
		'left-0',
		'top-0',
		'z-[1000]',
		'box-border',
		'flex',
		'h-screen',
		'supports-[height:100dvh]:h-dvh',
		navClosed ? 'w-20' : 'w-64',
		'transition-[width] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
		'flex-col',
		'items-center',
		'bg-module',
		'border-r',
		'border-tmo-module/10',
		'pt-5',
	];

	const headerClasses = [
		'w-full',
		'mb-2.5',
		'box-border',
		'flex',
		'overflow-hidden',
		'transition-[height]',
		'duration-300',
		'ease-out',
		navClosed ? 'flex-col' : 'flex-row',
		'items-center',
		navClosed ? 'h-[68px] justify-start' : 'h-8 justify-between',
	];
	const headerActionsClasses = [
		'flex',
		navClosed ? 'flex-col' : 'flex-row',
		'items-center',
		'gap-0',
	];
	const headerIconClasses =
		'size-6 text-text/70 transition-colors hover:bg-tmo-module/10 hover:text-text';
	const footerIconClasses =
		'size-5 text-text/70 transition-colors hover:bg-tmo-module/10 hover:text-text';
	const socialClasses = [
		'flex',
		'flex-1',
		'justify-start',
		'gap-1',
		'box-border',
	];

	return (
		<div className={navClasses.join(' ')}>
			<div className="box-border flex h-full w-full flex-col justify-center px-5">
				<div className="flex h-full w-full flex-col justify-between">
					<div className="flex w-full flex-col justify-center">
						<div className={headerClasses.join(' ')}>
							<div
								className={cn(
									'flex shrink-0 overflow-hidden transition-[max-width,opacity,transform] duration-300 ease-out',
									{
										'max-w-0 -translate-x-2 opacity-0': navClosed,
										'max-w-[120px] translate-x-0 opacity-100': !navClosed,
									},
								)}
							>
								<LogoLockup dark={!moduleColor.isDark} />
							</div>
							<div
								className={cn(
									'flex shrink-0 overflow-hidden transition-[max-height,max-width,margin,opacity] duration-300 ease-out',
									{
										'mb-5 max-h-6 max-w-6 opacity-100': navClosed,
										'mb-0 max-h-0 max-w-0 opacity-0': !navClosed,
									},
								)}
							>
								<LogoBrandmark dark={!moduleColor.isDark} />
							</div>
							<div className={headerActionsClasses.join(' ')}>
								{forceNavCollapsed ? null : (
									<Button
										variant="ghost"
										type="button"
										onClick={toggleCollapse}
										size="icon-xs"
										className={headerIconClasses}
									>
										<SidebarSimple
											weight="bold"
											className={cn('transition-transform duration-300 ease-in-out', {
												'rotate-180': navCollapsed,
											})}
										/>
									</Button>
								)}
							</div>
						</div>
						<div className="mt-4">{navLinks}</div>
						<LoginNav collapsed={navClosed} />
					</div>
			<div className="flex flex-col items-start gap-0 pb-5">
				{me && !navClosed ? <ImportTimesPrompt key={me.id} /> : null}
				<div
					className={cn(
						'w-full rounded-lg border border-transparent p-1.5 pb-0 transition-[border-color] duration-300 ease-out',
						{
							'border-tmo-module/5': !navClosed,
						},
					)}
				>
					<div
						className={cn('grid w-full transition-[grid-template-columns,gap] duration-300 ease-out', {
							'grid-cols-1 justify-items-center gap-0.5': navClosed,
							'grid-cols-[minmax(0,1fr)_auto] items-center gap-1.5': !navClosed,
						})}
					>
						{navClosed ? (
							me ? <Notifications className={cn(footerIconClasses, 'shrink-0')} /> : null
						) : (
							<div className="order-2 flex flex-col items-center gap-0.5">
								{me ? <Notifications className={cn(footerIconClasses, 'shrink-0')} /> : null}
								<Button
									asChild
									variant="ghost"
									size="icon-xs"
									className={cn(footerIconClasses, {
										'bg-tmo-module/10 text-text': /^\/settings/.test(pathname),
									})}
									aria-label={settingsLabel}
								>
									<Link to="/settings/timer">
										<GearSix weight="bold" />
									</Link>
								</Button>
							</div>
						)}
						<div
							className={cn('min-w-0', {
								'flex-1 order-1': !navClosed,
							})}
						>
							<AccountDropdown collapsed={navClosed} />
						</div>
					</div>
					<div
						className={cn(
							'relative w-full border-t transition-[max-height,margin,padding,border-color,opacity] duration-300 ease-out',
							{
								'mt-0 max-h-0 overflow-hidden border-transparent pt-0 opacity-0 pointer-events-none': navClosed,
								'mt-1.5 max-h-16 overflow-visible border-tmo-module/5 pt-1.5 opacity-100': !navClosed,
							},
						)}
						onMouseLeave={() => setContributorsOpen(false)}
					>
						<div
							className={cn(
								'absolute bottom-full left-0 z-10 w-full overflow-hidden bg-gradient-to-t from-module via-module to-module/95 pb-3 pt-2 transition-all duration-200 ease-out',
								{
									'pointer-events-none max-h-0 opacity-0': !contributorsOpen,
									'max-h-40 opacity-100': contributorsOpen,
								},
							)}
						>
							<GithubContributorsPanel
								contributors={contributors}
								error={error}
								loading={loading}
							/>
						</div>
						<div className="flex w-full items-center">
						<div className={cn('pl-1', socialClasses.join(' '))}>
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
							<GithubContributors
								href="https://github.com/kash/cubedesk"
								darkPath={resourceUri('/images/logos/github_logo_white.svg')}
								lightPath={resourceUri('/images/logos/github_logo_black.svg')}
								name="GitHub"
									onHover={showContributors}
								/>
							</div>
							<LanguagePicker />
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
		</div>
	);
}

function LanguagePicker() {
	const {locale, setLocale} = useLocale();
	const {t} = useTranslation();

	return (
		<Select value={locale} onValueChange={(value) => setLocale(value as typeof locale)}>
			<SelectTrigger
				className="h-7 w-7 min-w-0 shrink-0 justify-center gap-0 rounded-md border-0 bg-transparent p-0 text-lg leading-none shadow-none hover:bg-tmo-module/10 [&>svg]:hidden"
				aria-label={t('settings.language')}
			>
				<SelectValue>{locale === 'es' ? '🇪🇸' : '🇬🇧'}</SelectValue>
			</SelectTrigger>
			<SelectContent align="end">
				<SelectItem value="es">🇪🇸 {t('common.spanish')}</SelectItem>
				<SelectItem value="en">🇬🇧 {t('common.english')}</SelectItem>
			</SelectContent>
		</Select>
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
			className="hover:bg-tmo-module/10 box-border flex flex-col items-center justify-center rounded-[5px] bg-transparent p-1.5 font-semibold opacity-70 transition-all duration-100 ease-in-out hover:opacity-100"
			href={href}
			target="_blank"
		>
			<img className="size-4 shrink-0 object-contain" src={path} alt={`${name} logo`} />
		</a>
	);
}
