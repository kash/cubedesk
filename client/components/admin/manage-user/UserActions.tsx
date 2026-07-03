import React from 'react';
import {openModal} from '@/actions/general';
import BanUser from '@/components/admin/manage-user/BanUser';
import Button from '@/components/common/Button';
import {toastSuccess} from '@/util/toast';
import {useDispatch} from 'react-redux';
import {trpc} from '@/util/trpc';
import {AdminUser} from '@/types/admin';
import {Serialized} from '@/types/serialized';

interface Props {
	user: Serialized<AdminUser>;
	updateUser: () => void;
}

export default function UserActions(props: Props) {
	const dispatch = useDispatch();

	const {user, updateUser} = props;
	const banned = user.banned_forever || user.banned_until;

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
			dispatch(
				openModal(<BanUser user={user} />, {
					onComplete: updateUser,
				}),
			);
		}
	}

	return (
		<div className="my-[15px] flex w-full flex-row flex-wrap items-start gap-[7px]">
			<Button text={banned ? 'Unban user' : 'Ban user'} onClick={toggleBan} danger />
			<Button
				text={user.verified ? 'Unverify user' : 'Verify user'}
				primary={!user.verified}
				warning={user.verified}
				onClick={toggleVerifyUser}
			/>
		</div>
	);
}
