import {useTranslation} from 'react-i18next';
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
	const {t} = useTranslation();
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
		if (!(await copyText(link, t('common.copyError')))) return;
		toastSuccess(t('profile.copiedProfileLink', {name: user.username}));
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

		setEditProfileDialog({props: {profile: profile}, title: t('profile.editProfile')});
	}

	return (
		<>
			<ActionMenu
				menuLabel={t('common.openMenu')}
				noMargin
				icon={<CaretDown weight="bold" />}
				triggerProps={{
					variant: mini ? 'ghost' : 'outline',
					size: mini ? 'sm' : 'default',
				}}
				options={[
					{
						text: t('profile.viewProfile'),
						link: `/user/${user.username}`,
						icon: <User weight="bold" />,
					},
					{
						text: t('profile.copyProfileLink'),
						onClick: copyProfileLink,
						icon: <Copy weight="bold" />,
					},
					{
						text: t('profile.report'),
						onClick: reportProfile,
						icon: <Flag weight="bold" />,
						hidden: myProfile || !me,
					},
					{
						text: t('common.edit'),
						onClick: editProfile,
						icon: <Pen weight="bold" />,
						hidden: !myProfile,
					},
					{
						text: t('profile.manageUser'),
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
					<DialogContent
						closeLabel={t('common.closeDialog')}
						width={userViewDialog.width}
					>
						<DialogTitle className="sr-only">{t('admin.manageUser')}</DialogTitle>
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
					<DialogContent closeLabel={t('common.closeDialog')}>
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
					<DialogContent closeLabel={t('common.closeDialog')}>
						<DialogHeader title={editProfileDialog.title} />
						<EditProfile {...editProfileDialog.props} />
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
