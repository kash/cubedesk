import React from 'react';
import Dropdown, {DropdownProps} from '../../inputs/dropdown/Dropdown';
import {copyText} from '../../copy_text/CopyText';
import {CaretDown, User, Copy, Flag, Pen, GearSix} from '@phosphor-icons/react';
import {toastSuccess} from '../../../../util/toast';
import {openModal} from '../../../../actions/general';
import UserView from '../../../admin/manage_user/ManageUser';
import {useDispatch} from 'react-redux';
import {PublicUserAccount, UserAccount, UserAccountForAdmin} from '../../../../../server/schemas/UserAccount.schema';
import ReportUser from '../../../profile/report/ReportUser';
import EditProfile from '../../../profile/edit_profile/EditProfile';
import {useMe} from '../../../../util/hooks/useMe';

interface Props {
	mini?: boolean;
	user: UserAccountForAdmin | PublicUserAccount | UserAccount;
	dropdownProps?: DropdownProps;
}

export default function AvatarDropdown(props: Props) {
	const {user, mini, dropdownProps} = props;

	const me = useMe();
	const dispatch = useDispatch();

	const amAdmin = me?.admin;
	const profile = user.profile;
	const myProfile = me?.id === user.id;

	function copyProfileLink() {
		const link = window.location.href;
		copyText(link);
		toastSuccess(`Copied profile link for ${user.username}`);
	}

	function manageUser() {
		dispatch(
			openModal(<UserView userId={user.id} />, {
				width: 1200,
			})
		);
	}

	function reportProfile() {
		dispatch(openModal(<ReportUser user={user} />));
	}

	function editProfile() {
		dispatch(
			openModal(<EditProfile profile={profile} />, {
				title: 'Edit Profile',
			})
		);
	}

	return (
		<Dropdown
			noMargin
			icon={<CaretDown weight="bold" />}
			dropdownButtonProps={{
				transparent: mini,
				small: mini,
				gray: false,
			}}
			options={[
				{text: 'View Profile', link: `/user/${user.username}`, icon: <User weight="bold" />},
				{text: 'Copy Profile Link', onClick: copyProfileLink, icon: <Copy weight="bold" />},
				{text: 'Report', onClick: reportProfile, icon: <Flag weight="bold" />, hidden: myProfile || !me},
				{text: 'Edit', onClick: editProfile, icon: <Pen weight="bold" />, hidden: !myProfile},
				{text: 'Manage User', onClick: manageUser, icon: <GearSix weight="bold" />, hidden: !amAdmin},
			]}
			{...dropdownProps}
		/>
	);
}
