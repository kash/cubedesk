import React from 'react';
import {gql} from '@apollo/client/core';
import {gqlMutate} from '@/components/api';
import Button from '@/components/common/button/Button';

export default function DangerZone() {
	async function deleteAccount() {
		const query = gql`
			mutation Mutate {
				deleteUserAccount {
					id
				}
			}
		`;

		await gqlMutate(query);
		window.location.href = '/';
	}

	return (
		<div>
			<p>
				Be careful here. If you click the button below, you will delete your entire account. All of your solves,
				sessions, stats, etc. will get deleted forever. Proceed with caution.
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
