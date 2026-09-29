import AvatarImage from '@/components/common/avatar/AvatarImage';
import ActionMenu from '@/components/common/inputs/ActionMenu';
import {ActionMenuOption} from '@/components/common/inputs/ActionMenu';
import {logOut} from '@/util/auth/logout';
import {cn} from '@/util/cn';
import {useMe} from '@/util/hooks/useMe';
import {CircleWavyCheck} from 'phosphor-react';
import React from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
	collapsed?: boolean;
}

export default function AccountDropdown({collapsed = false}: Props) {
	const me = useMe();
	const {t} = useTranslation();

	if (!me) {
		return null;
	}

	const aviDropDownOptions: ActionMenuOption[] = [];

	aviDropDownOptions.push({link: '/account/personal-info', text: t('navigation.account')});
	aviDropDownOptions.push({link: `/user/${me.username}`, text: t('navigation.profile')});
	if (me.admin) {
		aviDropDownOptions.push({link: '/admin/metrics', text: t('admin.admin')});
	}
	aviDropDownOptions.push({link: '/settings/timer', text: t('settings.settings')});
	aviDropDownOptions.push({onClick: logOut, text: t('auth.logOut')});

	return (
		<div className={cn('w-full', { 'flex justify-center': collapsed })}>
			<ActionMenu
				menuLabel={t('navigation.account')}
				openLeft
				openUp
				noMargin
				fullWidth={!collapsed}
				options={aviDropDownOptions}
				triggerProps={{
					variant: 'ghost',
					size: collapsed ? 'icon-sm' : 'default',
					className: cn(
						'rounded-lg p-2 transition-[padding,width,height,background-color] duration-300 ease-out hover:bg-tmo-module/10',
						{
						'size-10 p-0': collapsed,
						'justify-start': !collapsed,
						},
					),
				}}
				handle={
					<div
						className={cn(
							'flex min-w-0 items-center overflow-hidden transition-[gap] duration-300 ease-out',
							{
								'justify-center gap-0': collapsed,
								'gap-3': !collapsed,
							},
						)}
					>
						<AvatarImage small user={me} profile={me.profile} />
						<div
							className={cn(
								'overflow-hidden text-left transition-[max-width,opacity,transform] duration-300 ease-out',
								{
									'max-w-0 translate-x-1 opacity-0': collapsed,
									'min-w-0 flex-1 max-w-[180px] translate-x-0 opacity-100': !collapsed,
								},
							)}
						>
							<span className="flex min-w-0 items-center text-sm font-medium text-text">
								<span className="truncate">@{me.username || t('common.user')}</span>
								{me.verified ? (
									<span
										className="text-info ml-1 inline-flex shrink-0"
										aria-label={t('profile.verified')}
										title={t('profile.verified')}
									>
										<CircleWavyCheck weight="fill" className="size-4" />
									</span>
								) : null}
							</span>
							<span className="block truncate text-xs text-text/60">
								{me.email}
							</span>
						</div>
					</div>
				}
			/>
		</div>
	);
}
