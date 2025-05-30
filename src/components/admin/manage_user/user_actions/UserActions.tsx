import {Button} from '@/components/ui/button';
import './UserActions.scss';
import {openModal} from '@/lib/actions/general';
import {toastSuccess} from '@/lib/util/toast';
import {UserAccountForAdmin} from '@/types/admin';
import block from '@/styles/bem';
import {api} from '@/trpc/react';
import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import BanUser from '../ban_user/BanUser';

const b = block('manage-user-actions');

interface Props {
	user: UserAccountForAdmin;
	updateUser: () => void;
}

export default function UserActions(props: Props) {
	const dispatch = useDispatch();

	const {user, updateUser} = props;
	const banned = user.banned_forever || user.banned_until;

	const unbanUserMutation = api.admin.unbanUserAccount.useMutation({
		onSuccess: () => {
			updateUser();
			toastSuccess('Successfully unbanned user');
		},
	});

	const setVerifiedStatusMutation = api.admin.setVerifiedStatus.useMutation({
		onSuccess: () => {
			updateUser();
			let flagMessage = 'verified';
			if (user.verified) {
				flagMessage = 'unverified';
			}
			toastSuccess(`Successfully ${flagMessage} user`);
		},
	});

	const unbanUser = useCallback(async () => {
		await unbanUserMutation.mutateAsync({
			userId: user.id,
		});
	}, [unbanUserMutation, user.id]);

	const toggleVerifyUser = useCallback(async () => {
		await setVerifiedStatusMutation.mutateAsync({
			userId: user.id,
			verified: !user.verified,
		});
	}, [setVerifiedStatusMutation, user.id, user.verified]);

	const toggleBan = useCallback(() => {
		if (banned) {
			unbanUser();
		} else {
			dispatch(
				openModal(<BanUser user={user} />, {
					onComplete: updateUser,
				}),
			);
		}
	}, [banned, unbanUser, dispatch, user, updateUser]);

	return (
		<div className={b()}>
			<Button
				text={banned ? 'Unban user' : 'Ban user'}
				onClick={toggleBan}
				danger
				loading={unbanUserMutation.isPending}
			/>
			<Button
				text={user.verified ? 'Unverify user' : 'Verify user'}
				primary={!user.verified}
				warning={user.verified}
				onClick={toggleVerifyUser}
				loading={setVerifiedStatusMutation.isPending}
			/>
		</div>
	);
}
