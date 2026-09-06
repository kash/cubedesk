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

export default function BulkOkSolvesButton(props: Props) {
	const [confirmDialog, setConfirmDialog] = React.useState<React.ComponentProps<
		typeof ConfirmDialog
	> | null>(null);

	const {solves, disabled} = props;

	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves, solves?.length]);

	function onClick() {
		const solvesToActOn = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

		setConfirmDialog({
			buttonText: `OK ${solvesToActOn}`,
			title: 'Bulk OK solves',
			description:
				'You are about to remove any +2 or DNF from the selected solves. This is irreversible. Be careful.',
			infoBoxes: [{label: 'Solves', value: solves.length.toLocaleString()}],
			triggerAction: run,
		});

		async function run() {
			const updateCount = await trpc.bulkActions.okSolves.mutate({
				solveIds,
			});

			await initAllSolves(true);

			const solvesUpdated = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully "okayed" ${solvesUpdated}.`);
		}
	}

	return (
		<>
			<Button variant="secondary" disabled={disabled} onClick={onClick}>
				{'Mark Ok'}
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
