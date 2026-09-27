import AvatarImage from '@/components/common/avatar/AvatarImage';
import ActionMenu from '@/components/common/inputs/ActionMenu';
import {ActionMenuOption} from '@/components/common/inputs/ActionMenu';
import {logOut} from '@/util/auth/logout';
import {useMe} from '@/util/hooks/useMe';
import React from 'react';
import {useTranslation} from 'react-i18next';

export default function AccountDropdown() {
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
		<div>
			<ActionMenu
				menuLabel={t('navigation.account')}
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
