import UserView from '@/components/admin/manage_user/ManageUser';
import {copyText} from '@/components/common/copy_text/CopyText';
import Dropdown, {DropdownProps} from '@/components/common/inputs/dropdown/Dropdown';
import EditProfile from '@/components/profile/edit_profile/EditProfile';
import ReportUser from '@/components/profile/report/ReportUser';
import {PublicUserAccount, UserAccount, UserAccountForAdmin} from '@/generated/zod';
import {openModal} from '@/lib/actions/general';
import {useMe} from '@/lib/util/hooks/useMe';
import {toastSuccess} from '@/lib/util/toast';
import {CaretDown, Copy, Flag, GearSix, Pen, User} from '@phosphor-icons/react/dist/ssr';
import React from 'react';
import {useDispatch} from 'react-redux';

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
			}),
		);
	}

	function reportProfile() {
		dispatch(openModal(<ReportUser user={user} />));
	}

	function editProfile() {
		dispatch(
			openModal(<EditProfile profile={profile} />, {
				title: 'Edit Profile',
			}),
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
				{
					text: 'View Profile',
					link: `/user/${user.username}`,
					icon: <User weight="bold" />,
				},
				{text: 'Copy Profile Link', onClick: copyProfileLink, icon: <Copy weight="bold" />},
				{
					text: 'Report',
					onClick: reportProfile,
					icon: <Flag weight="bold" />,
					hidden: myProfile || !me,
				},
				{
					text: 'Edit',
					onClick: editProfile,
					icon: <Pen weight="bold" />,
					hidden: !myProfile,
				},
				{
					text: 'Manage User',
					onClick: manageUser,
					icon: <GearSix weight="bold" />,
					hidden: !amAdmin,
				},
			]}
			{...dropdownProps}
		/>
	);
}
