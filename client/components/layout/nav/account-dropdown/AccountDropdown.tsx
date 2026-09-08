import AvatarImage from '@/components/common/avatar/AvatarImage';
import ActionMenu from '@/components/common/inputs/ActionMenu';
import {ActionMenuOption} from '@/components/common/inputs/ActionMenu';
import {logOut} from '@/util/auth/logout';
import {useMe} from '@/util/hooks/useMe';
import React from 'react';

export default function AccountDropdown() {
	const me = useMe();

	if (!me) {
		return null;
	}

	const aviDropDownOptions: ActionMenuOption[] = [];

	aviDropDownOptions.push({link: '/account/personal-info', text: 'Account'});
	aviDropDownOptions.push({link: `/user/${me.username}`, text: 'Profile'});
	if (me.admin) {
		aviDropDownOptions.push({link: '/admin/metrics', text: 'Admin'});
	}
	aviDropDownOptions.push({link: '/settings/timer', text: 'Settings'});
	aviDropDownOptions.push({onClick: logOut, text: 'Log out'});

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
