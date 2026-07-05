import Button from '@/components/common/Button';
import {api} from '@/util/api';
import React from 'react';

export default function DangerZone() {
	const deleteAccountMutation = api.user.deleteAccount.useMutation();

	async function deleteAccount() {
		await deleteAccountMutation.mutateAsync();
		window.location.href = '/';
	}

	return (
		<div>
			<p>
				Be careful here. If you click the button below, you will delete your entire account.
				All of your solves, sessions, stats, etc. will get deleted forever. Proceed with
				caution.
			</p>
			<Button
				danger
				large
				glow
				text="Delete Account"
				confirmModalProps={{
					title: 'Delete account',
					description:
						"Be careful here. You're about to delete your entire account. All of your CubeDesk will be deleted and will not be recoverable.",
					triggerAction: deleteAccount,
					buttonText: 'Delete account and all data',
				}}
			/>
		</div>
	);
}
