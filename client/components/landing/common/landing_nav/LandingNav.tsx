import React, {useEffect, useState} from 'react';
import './LandingNav.scss';
import {Link} from 'react-router-dom';
import block from '../../../../styles/bem';
import {resourceUri} from '../../../../util/storage';
import {useWindowListener} from '../../../../util/hooks/useListener';
import {ColorName} from '../../../../../shared/colors';
import Dropdown from '../../../common/inputs/dropdown/Dropdown';
import {IDropdownOption} from '../../../common/inputs/dropdown/dropdown_option/DropdownOption';
import {CaretDown} from '@phosphor-icons/react';

const b = block('landing-nav');

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
		label: 'Play 1v1',
		link: '/play/head-to-head',
		color: 'green',
		dropDownOnly: true,
	},
	{
		label: 'About',
		link: '/about',
	},
	{
		label: 'Log in',
		link: '/login',
		permanent: true,
	},
	{
		label: 'Sign up',
		link: '/signup',
		color: 'primary',
		permanent: true,
	},
];

export default function LandingNav(props: Props) {
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

	const dropDownOptions: IDropdownOption[] = [];
	const showNavLinks = [];

	for (const nav of NAV_REST_LINKS) {
		const {dropDownOnly, label, link, color, permanent} = nav;

		if (permanent || (!navSmall && !dropDownOnly)) {
			const linkClasses = ['text-base', 'font-label', 'font-bold', 'border-solid', 'border-b-2'];

			if (color) {
				linkClasses.push(`text-${color}-500`);
			}

			showNavLinks.push(
				<a key={link} href={link} className={linkClasses.join(' ')}>
					{label}
				</a>
			);
		} else {
			dropDownOptions.push({
				text: label,
				link,
			});
		}
	}

	return (
		<div className={b({scrolled})}>
			<div className={b('body')}>
				<div className={b('logo')}>
					<Link to="/home">
						<img src={resourceUri(`/images/logos/cubedesk_logo_black.svg`)} alt="CubeDesk Logo" />
					</Link>
				</div>
				<div className={b('links')}>
					<Dropdown flat icon={<CaretDown weight="fill" />} options={dropDownOptions} />
					{showNavLinks}
				</div>
			</div>
		</div>
	);
}
