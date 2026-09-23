import AvatarImage from '@/components/common/avatar/AvatarImage';
import ActionMenu from '@/components/common/inputs/ActionMenu';
import {ActionMenuOption} from '@/components/common/inputs/ActionMenu';
import {logOut} from '@/util/auth/logout';
import {useMe} from '@/util/hooks/useMe';
import React from 'react';
import {useI18n} from '@/i18n';

export default function AccountDropdown() {
	const me = useMe();
	const {t} = useI18n();

	if (!me) {
		return null;
	}

	const aviDropDownOptions: ActionMenuOption[] = [];

	aviDropDownOptions.push({link: '/account/personal-info', text: t('Account')});
	aviDropDownOptions.push({link: `/user/${me.username}`, text: t('Profile')});
	if (me.admin) {
		aviDropDownOptions.push({link: '/admin/metrics', text: t('Admin')});
	}
	aviDropDownOptions.push({link: '/settings/timer', text: t('Settings')});
	aviDropDownOptions.push({onClick: logOut, text: t('Log out')});

	return (
		<div>
			<ActionMenu
				openLeft
				noMargin
				options={aviDropDownOptions}
				triggerProps={{
					variant: 'ghost',
					size: 'icon-sm',
					className: 'rounded-full p-0 hover:bg-transparent',
				}}
				handle={
					<div>
						<AvatarImage small user={me} profile={me.profile} />
					</div>
				}
			/>
		</div>
	);
}
