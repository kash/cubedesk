import ActionMenu from '@/components/common/inputs/ActionMenu';
import {LogoBrandmark} from '@/components/common/Logo';
import {NAV_LINKS} from '@/components/layout/nav/nav-links';
import Notifications from '@/components/layout/nav/notifications/Notifications';
import {logOut} from '@/util/auth/logout';
import {useMe} from '@/util/hooks/useMe';
import {useTheme} from '@/util/hooks/useTheme';
import {List} from 'phosphor-react';
import React from 'react';
import {useRouteMatch} from 'react-router-dom';

export default function MobileNav() {
	const me = useMe();
	const match = useRouteMatch();

	const moduleColor = useTheme('module_color');

	let navRight = <div />;
	if (me) {
		navRight = (
			<div className="relative z-[100] flex w-[30%] flex-row justify-end gap-2.5">
				<Notifications right />
				<ActionMenu
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
		<div className="fixed left-0 top-0 z-[100000] flex h-[55px] w-full justify-center">
			<div className="box-border flex w-full items-center justify-between px-[13px]">
				<div className="relative z-[100] w-[30%]">
					<ActionMenu
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
				<div className="relative z-[100] flex w-[30%] flex-row justify-center">
					<a
						className="flex size-11 shrink-0 items-center justify-center rounded-md focus-visible:ring-2 focus-visible:ring-current"
						href="/"
					>
						<span className="w-6">
							<LogoBrandmark dark={!moduleColor.isDark} />
						</span>
					</a>
				</div>
				{navRight}
			</div>
			<span className="absolute left-0 top-0 z-0 h-full w-full bg-module" />
		</div>
	);
}
