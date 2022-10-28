import React from 'react';
import './AccountDropdown.scss';
import block from '../../../../styles/bem';
import AvatarImage from '../../../common/avatar/avatar_image/AvatarImage';
import Dropdown from '../../../common/inputs/dropdown/Dropdown';
import {IDropdownOption} from '../../../common/inputs/dropdown/dropdown_option/DropdownOption';
import {logOut} from '../../../../util/auth/logout';
import {useMe} from '../../../../util/hooks/useMe';

const b = block('nav-account-dropdown');

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
		<div className={b()}>
			<Dropdown
				openLeft
				noMargin
				options={aviDropDownOptions}
				handle={
					<div className={b('pfp')}>
						<AvatarImage small user={me} profile={me.profile} />
					</div>
				}
			/>
		</div>
	);
}
