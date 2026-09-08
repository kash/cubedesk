import BanUser from '@/components/admin/manage-user/BanUser';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {AdminUser} from '@/types/admin';
import {Serialized} from '@/types/serialized';
import {toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React from 'react';

interface Props {
	user: Serialized<AdminUser>;
	updateUser: () => void;
}

export default function UserActions(props: Props) {
	const [banUserDialog, setBanUserDialog] = React.useState<{
		props: React.ComponentProps<typeof BanUser>;
		onComplete: React.ComponentProps<typeof BanUser>['onComplete'];
	} | null>(null);

	const {user, updateUser} = props;
	const banned =
		user.banned_forever ||
		Boolean(user.banned_until && new Date(user.banned_until).getTime() > Date.now());

	async function unbanUser() {
		await trpc.admin.unbanUser.mutate({
			userId: user.id,
		});

		updateUser();
		toastSuccess('Successfully unbanned user');
	}

	async function toggleVerifyUser() {
		await trpc.admin.setVerifiedStatus.mutate({
			userId: user.id,
			verified: !user.verified,
		});

		updateUser();
		let flagMessage = 'verified';
		if (user.verified) {
			flagMessage = 'unverified';
		}
		toastSuccess(`Successfully ${flagMessage} user`);
	}

	function toggleBan() {
		if (banned) {
			unbanUser();
		} else {
			setBanUserDialog({props: {user: user}, onComplete: updateUser});
		}
	}

	return (
		<>
			<div className="flex shrink-0 flex-wrap items-center gap-2">
				<Button variant="destructive" onClick={toggleBan}>
					{banned ? 'Unban user' : 'Ban user'}
				</Button>
				<Button variant="outline" onClick={toggleVerifyUser}>
					{user.verified ? 'Unverify user' : 'Verify user'}
				</Button>
			</div>
			<Dialog
				open={banUserDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setBanUserDialog(null);
					}
				}}
			>
				{banUserDialog && (
					<DialogContent>
						<BanUser
							{...banUserDialog.props}
							onComplete={(...args) => {
								setBanUserDialog((current) =>
									current === banUserDialog ? null : current,
								);
								banUserDialog.onComplete?.(...args);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
