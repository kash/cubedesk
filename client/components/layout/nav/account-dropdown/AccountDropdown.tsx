import React from 'react';
import AvatarImage from '@/components/common/avatar/avatar_image/AvatarImage';
import Dropdown from '@/components/common/inputs/dropdown/Dropdown';
import {IDropdownOption} from '@/components/common/inputs/dropdown/dropdown_option/DropdownOption';
import {logOut} from '@/util/auth/logout';
import {useMe} from '@/util/hooks/useMe';

export default function AccountDropdown() {
	const me = useMe();

	if (!me) {
		return null;
	}

	const aviDropDownOptions: IDropdownOption[] = [];

	aviDropDownOptions.push({link: '/account/personal-info', text: 'Account'});
	aviDropDownOptions.push({link: `/account/pro`, text: 'Pro'});
	aviDropDownOptions.push({link: `/user/${me.username}`, text: 'Profile'});
	if (me.admin) {
		aviDropDownOptions.push({link: '/admin/reports', text: 'Admin'});
	}
	aviDropDownOptions.push({link: '/settings/timer', text: 'Settings'});
	aviDropDownOptions.push({onClick: logOut, text: 'Log out'});

	return (
		<div>
			<Dropdown
				openLeft
				noMargin
				options={aviDropDownOptions}
				handle={
					<div>
						<AvatarImage small user={me} profile={me.profile} />
					</div>
				}
			/>
		</div>
	);
}
