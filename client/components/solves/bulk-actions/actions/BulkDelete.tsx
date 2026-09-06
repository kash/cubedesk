import ConfirmDialog from '@/components/common/ConfirmDialog';
import {initAllSolves} from '@/components/layout/init';
import {Button} from '@/components/ui/button';
import {Solve} from '@/types/solve';
import {toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React, {useMemo} from 'react';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkDeleteSolvesButton(props: Props) {
	const [confirmDialog, setConfirmDialog] = React.useState<React.ComponentProps<
		typeof ConfirmDialog
	> | null>(null);

	const {solves, disabled} = props;
	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves, solves?.length]);

	function onClick() {
		const solvesToDelete = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

		setConfirmDialog({
			buttonText: `Delete ${solvesToDelete}`,
			title: 'Bulk delete solves',
			description:
				'You are about to do a bulk deletion of solves. This is irreversible. Be careful.',
			infoBoxes: [{label: 'Solves', value: solves.length.toLocaleString()}],
			triggerAction: run,
		});

		async function run() {
			const deletedCount = await trpc.bulkActions.deleteSolves.mutate({
				solveIds,
			});

			await initAllSolves(true);

			const solvesDeleted = `${deletedCount} solve${deletedCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully deleted ${solvesDeleted}.`);
		}
	}

	return (
		<>
			<Button variant="secondary" disabled={disabled} onClick={onClick}>
				{'Delete'}
			</Button>
			{confirmDialog && (
				<ConfirmDialog
					open={confirmDialog !== null}
					onOpenChange={(open) => {
						if (!open) {
							setConfirmDialog(null);
						}
					}}
					{...confirmDialog}
					onComplete={() => {
						setConfirmDialog((current) => (current === confirmDialog ? null : current));
					}}
				/>
			)}
		</>
	);
}
