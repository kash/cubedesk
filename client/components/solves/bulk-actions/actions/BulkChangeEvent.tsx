import ConfirmDialog from '@/components/common/ConfirmDialog';
import {initAllSolves} from '@/components/layout/init';
import EventTypeSelector from '@/components/solves/bulk-actions/actions/EventTypeSelector';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {Solve} from '@/types/solve';
import {CubeType} from '@/util/cubes/cube_types';
import {toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React, {useMemo} from 'react';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkChangeEventSolvesButton(props: Props) {
	const [confirmDialog, setConfirmDialog] = React.useState<React.ComponentProps<
		typeof ConfirmDialog
	> | null>(null);
	const [eventTypeSelectorDialog, setEventTypeSelectorDialog] = React.useState<{
		props: React.ComponentProps<typeof EventTypeSelector>;
		onComplete: React.ComponentProps<typeof EventTypeSelector>['onComplete'];
	} | null>(null);

	const {solves, disabled} = props;

	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves, solves?.length]);

	function onSelectCubeType(cubeType: CubeType) {
		setConfirmDialog({
			buttonText: `Change event type`,
			title: 'Bulk change event type',
			description:
				'You are about to set the event type of the selected solves. This is irreversible. Be careful.',
			infoBoxes: [
				{label: 'Solves', value: solves.length.toLocaleString()},
				{label: 'New Event Type', value: cubeType.name},
			],
			triggerAction: run,
		});

		async function run() {
			const updateCount = await trpc.bulkActions.updateCubeType.mutate({
				cubeType: cubeType.id,
				solveIds,
			});

			await initAllSolves(true);

			const solvesUpdated = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(
				`Successfully changed the event type of ${solvesUpdated} to ${cubeType.name}.`,
			);
		}
	}

	function onClick() {
		setEventTypeSelectorDialog({props: {solves: solves}, onComplete: onSelectCubeType});
	}

	return (
		<>
			<Button variant="secondary" disabled={disabled} onClick={onClick}>
				{'Change Event'}
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
			<Dialog
				open={eventTypeSelectorDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setEventTypeSelectorDialog(null);
					}
				}}
			>
				{eventTypeSelectorDialog && (
					<DialogContent>
						<EventTypeSelector
							{...eventTypeSelectorDialog.props}
							onComplete={(...args) => {
								setEventTypeSelectorDialog((current) =>
									current === eventTypeSelectorDialog ? null : current,
								);
								eventTypeSelectorDialog.onComplete?.(...args);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
