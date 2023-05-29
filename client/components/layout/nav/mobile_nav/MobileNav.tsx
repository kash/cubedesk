import React from 'react';
import './MobileNav.scss';
import {List} from '@phosphor-icons/react';
import {useRouteMatch} from 'react-router-dom';
import Logo from '../../../common/logo/Logo';
import {NAV_LINKS} from '../Nav';
import Notifications from '../notifications/Notifications';
import {logOut} from '../../../../util/auth/logout';
import {useTheme} from '../../../../util/hooks/useTheme';
import {useMe} from '../../../../util/hooks/useMe';
import Dropdown from '../../../common/inputs/dropdown/Dropdown';

export default function MobileNav() {
	const me = useMe();
	const match = useRouteMatch();

	const moduleColor = useTheme('module_color');

	let navRight = <div />;
	if (me) {
		navRight = (
			<div className="cd-nav-mobile__right">
				<Notifications right />
				<Dropdown
					options={[
						{text: 'Account', link: '/account/personal-info'},
						{text: 'Admin', link: '/admin/reports', hidden: !me.admin},
						{text: 'Profile', link: `/user/${me.username}`},
						{text: 'Log out', onClick: logOut},
					]}
				/>
			</div>
		);
	}

	return (
		<div className="cd-nav-mobile">
			<div className="cd-nav-mobile__body">
				<div className="cd-nav-mobile__left">
					<Dropdown
						icon={<List />}
						openLeft
						options={NAV_LINKS.map((link) => ({
							link: link.link,
							text: link.name,
							icon: link.icon,
							disabled: link.match.test(match.path),
						}))}
					/>
				</div>
				<div className="cd-nav-mobile__center">
					<a href="/">
						<Logo large={false} dark={!moduleColor.isDark} />
					</a>
				</div>
				{navRight}
			</div>
			<span className="cd-nav-mobile__background" />
		</div>
	);
}
