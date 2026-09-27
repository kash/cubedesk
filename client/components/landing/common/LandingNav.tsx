import ActionMenu from '@/components/common/inputs/ActionMenu';
import {ActionMenuOption} from '@/components/common/inputs/ActionMenu';
import AuthDialog from '@/components/login/AuthDialog';
import {ColorName} from '@/shared/colors';
import {useWindowListener} from '@/util/hooks/useListener';
import {resourceUri} from '@/util/storage';
import {CaretDown} from 'phosphor-react';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const MAX_NAV_WIDTH = 1200;

interface Props {
	showBorder?: boolean;
}

interface NavLinkProps {
	label: string;
	link: string;
	color?: ColorName;
	dropDownOnly?: boolean;
	permanent?: boolean;
}

const NAV_REST_LINKS: NavLinkProps[] = [
	{
		label: 'community.play1v1',
		link: '/play/head-to-head',
		color: 'green',
		dropDownOnly: true,
	},
	{
		label: 'auth.logIn',
		link: '/login',
		permanent: true,
	},
	{
		label: 'auth.signUp',
		link: '/signup',
		color: 'primary',
		permanent: true,
	},
];

export default function LandingNav(props: Props) {
	const {t} = useTranslation();
	const {showBorder} = props;

	const [navSmall, setNavSmall] = useState(false);
	const [scrolled, setScrolled] = useState(showBorder);

	useWindowListener('scroll', windowScroll);
	useWindowListener('resize', windowResize);

	useEffect(() => {
		windowScroll();
		windowResize();
	}, []);

	function windowResize() {
		if (window.innerWidth <= MAX_NAV_WIDTH && !navSmall) {
			setNavSmall(true);
		} else if (window.innerWidth > MAX_NAV_WIDTH && navSmall) {
			setNavSmall(false);
		}
	}

	function windowScroll() {
		if (showBorder || typeof window === 'undefined') {
			return;
		}

		if (window.scrollY > 0 && !scrolled) {
			setScrolled(true);
		} else if (window.scrollY === 0 && scrolled) {
			setScrolled(false);
		}
	}

	const dropDownOptions: ActionMenuOption[] = [];
	const showNavLinks: React.ReactNode[] = [];

	for (const nav of NAV_REST_LINKS) {
		const {dropDownOnly, label, link, color, permanent} = nav;

		if (permanent || (!navSmall && !dropDownOnly)) {
			const linkClasses = [
				'border-b-2',
				'border-solid',
				'font-label',
				'text-base',
				'font-bold',
			];

			if (color) {
				linkClasses.push(`text-${color}-500`);
			}

			showNavLinks.push(
				link === '/login' || link === '/signup' ? (
					<AuthDialog key={link} view={link === '/login' ? 'login' : 'signup'}>
						<button type="button" className={linkClasses.join(' ')}>
							{t(label)}
						</button>
					</AuthDialog>
				) : (
					<a key={link} href={link} className={linkClasses.join(' ')}>
						{t(label)}
					</a>
				),
			);
		} else {
			dropDownOptions.push({
				text: t(label),
				link,
			});
		}
	}

	return (
		<div
			className={[
				'fixed top-0 left-0 z-[10000] box-border w-full border-b-2 border-solid bg-white py-[14px] text-[#444] transition-all duration-100 ease-in-out',
				scrolled ? 'border-[#eee]' : 'border-transparent',
			].join(' ')}
		>
			<div className="mx-auto flex w-[calc(100%_-_30px)] max-w-[1600px] flex-row items-center justify-between text-inherit">
				<div className="shrink-0">
					<Link
						to="/"
						className="flex min-h-8 items-center justify-center rounded-md focus-visible:ring-2 focus-visible:ring-current"
					>
						<img
							className="h-auto w-[120px] sm:w-[144px]"
							src={resourceUri('/images/branding/cubedesk-lockup-black.svg')}
							alt={t('common.logoAlt')}
						/>
					</Link>
				</div>
				<div className="flex shrink-0 flex-row items-center gap-4 text-inherit sm:gap-[25px]">
					<ActionMenu
						flat
						icon={<CaretDown weight="fill" />}
						menuLabel={t('common.openMenu')}
						options={dropDownOptions}
					/>
					{showNavLinks}
				</div>
			</div>
		</div>
	);
}
