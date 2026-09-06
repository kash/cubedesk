import UserView from '@/components/admin/manage-user/ManageUser';
import {copyText} from '@/components/common/CopyText';
import ActionMenu, {ActionMenuProps} from '@/components/common/inputs/ActionMenu';
import EditProfile from '@/components/profile/EditProfile';
import ReportUser from '@/components/profile/ReportUser';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {PublicUserAccount, UserAccount, UserAccountForAdmin} from '@/types/user';
import {useMe} from '@/util/hooks/useMe';
import {toastSuccess} from '@/util/toast';
import {CaretDown, Copy, Flag, GearSix, Pen, User} from 'phosphor-react';
import React from 'react';

interface Props {
	mini?: boolean;
	user: UserAccountForAdmin | PublicUserAccount | UserAccount;
	menuProps?: Partial<ActionMenuProps>;
}

export default function AvatarDropdown(props: Props) {
	const [userViewDialog, setUserViewDialog] = React.useState<{
		props: React.ComponentProps<typeof UserView>;
		width: number;
	} | null>(null);
	const [reportUserDialog, setReportUserDialog] = React.useState<React.ComponentProps<
		typeof ReportUser
	> | null>(null);
	const [editProfileDialog, setEditProfileDialog] = React.useState<{
		props: React.ComponentProps<typeof EditProfile>;
		title: React.ReactNode;
	} | null>(null);

	const {user, mini, menuProps} = props;

	const me = useMe();

	const amAdmin = me?.admin;
	const profile = user.profile;
	const myProfile = me?.id === user.id;

	async function copyProfileLink() {
		const link = window.location.href;
		if (!(await copyText(link))) return;
		toastSuccess(`Copied profile link for ${user.username}`);
	}

	function manageUser() {
		setUserViewDialog({props: {userId: user.id}, width: 1200});
	}

	function reportProfile() {
		setReportUserDialog({user: user});
	}

	function editProfile() {
		if (!profile) {
			return;
		}

		setEditProfileDialog({props: {profile: profile}, title: 'Edit Profile'});
	}

	return (
		<>
			<ActionMenu
				noMargin
				icon={<CaretDown weight="bold" />}
				triggerProps={{
					variant: mini ? 'ghost' : 'outline',
					size: mini ? 'sm' : 'default',
				}}
				options={[
					{
						text: 'View Profile',
						link: `/user/${user.username}`,
						icon: <User weight="bold" />,
					},
					{
						text: 'Copy Profile Link',
						onClick: copyProfileLink,
						icon: <Copy weight="bold" />,
					},
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
				{...menuProps}
			/>
			<Dialog
				open={userViewDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setUserViewDialog(null);
					}
				}}
			>
				{userViewDialog && (
					<DialogContent width={userViewDialog.width}>
						<DialogTitle className="sr-only">Manage user</DialogTitle>
						<UserView {...userViewDialog.props} />
					</DialogContent>
				)}
			</Dialog>
			<Dialog
				open={reportUserDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setReportUserDialog(null);
					}
				}}
			>
				{reportUserDialog && (
					<DialogContent>
						<ReportUser
							{...reportUserDialog}
							onComplete={() => {
								setReportUserDialog((current) =>
									current === reportUserDialog ? null : current,
								);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
			<Dialog
				open={editProfileDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setEditProfileDialog(null);
					}
				}}
			>
				{editProfileDialog && (
					<DialogContent>
						<DialogHeader title={editProfileDialog.title} />
						<EditProfile {...editProfileDialog.props} />
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
