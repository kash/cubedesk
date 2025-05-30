'use client';

import {api} from '@/trpc/react';
import {useCallback} from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {Button} from '@/components/ui/button';

export default function DangerZonePage() {
	const deleteAccount = api.userAccount.delete.useMutation();

	const handleDeleteAccount = useCallback(async () => {
		await deleteAccount.mutateAsync();
		window.location.href = '/';
	}, [deleteAccount]);

	return (
		<div>
			<p>
				Be careful here. If you click the button below, you will delete your entire account.
				All of your solves, sessions, stats, etc. will get deleted forever. Proceed with
				caution.
			</p>
			<Dialog>
				<DialogTrigger asChild>
					<Button
						onClick={handleDeleteAccount}
						loading={deleteAccount.isPending}
						variant="destructive"
						size="lg"
					>
						Delete Account
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Delete Account</DialogTitle>
						<DialogDescription>
							There is no going back. Your account and all your data will be deleted
							forever if you click the button below.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}
