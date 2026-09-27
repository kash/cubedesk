import ActionMenu from '@/components/common/inputs/ActionMenu';
import {LogoBrandmark} from '@/components/common/Logo';
import {NAV_LINKS} from '@/components/layout/nav/nav-links';
import Notifications from '@/components/layout/nav/notifications/Notifications';
import {logOut} from '@/util/auth/logout';
import {useMe} from '@/util/hooks/useMe';
import {useTheme} from '@/util/hooks/useTheme';
import {List} from 'phosphor-react';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useRouteMatch} from 'react-router-dom';

export default function MobileNav() {
	const {t} = useTranslation();
	const me = useMe();
	const match = useRouteMatch();

	const moduleColor = useTheme('module_color');

	let navRight = <div />;
	if (me) {
		navRight = (
			<div className="relative z-[100] flex w-[30%] flex-row justify-end gap-2.5">
				<Notifications right />
				<ActionMenu
					menuLabel={t('common.openMenu')}
					options={[
						{text: t('navigation.account'), link: '/account/personal-info'},
						{text: t('admin.admin'), link: '/admin/reports', hidden: !me.admin},
						{text: t('navigation.profile'), link: `/user/${me.username}`},
						{text: t('auth.logOut'), onClick: logOut},
					]}
				/>
			</div>
		);
	}

	return (
		<div className="fixed top-0 left-0 z-[100000] flex h-[55px] w-full justify-center">
			<div className="box-border flex w-full items-center justify-between px-[13px]">
				<div className="relative z-[100] w-[30%]">
					<ActionMenu
						menuLabel={t('common.openMenu')}
						icon={<List />}
						openLeft
						options={NAV_LINKS.map((link) => ({
							link: link.link,
							text: t(link.name),
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
			<span className="bg-module absolute top-0 left-0 z-0 h-full w-full" />
		</div>
	);
}
