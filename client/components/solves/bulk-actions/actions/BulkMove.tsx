import ConfirmDialog from '@/components/common/ConfirmDialog';
import {initAllSolves} from '@/components/layout/init';
import SessionSelector from '@/components/solves/bulk-actions/actions/SessionSelector';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {Session} from '@/types/session';
import {Solve} from '@/types/solve';
import {toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React, {useMemo} from 'react';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkMoveSolvesButton(props: Props) {
	const [confirmDialog, setConfirmDialog] = React.useState<React.ComponentProps<
		typeof ConfirmDialog
	> | null>(null);
	const [sessionSelectorDialog, setSessionSelectorDialog] = React.useState<{
		props: React.ComponentProps<typeof SessionSelector>;
		onComplete: React.ComponentProps<typeof SessionSelector>['onComplete'];
	} | null>(null);

	const {solves, disabled} = props;

	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves, solves?.length]);

	function onSelectSession(session: Session) {
		const solvesToActOn = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

		setConfirmDialog({
			buttonText: `Move ${solvesToActOn}`,
			title: 'Bulk move solves',
			description:
				'You are about to do a bulk move of solves. This is irreversible. Be careful.',
			infoBoxes: [
				{label: 'Solves', value: solves.length.toLocaleString()},
				{label: 'New Session', value: session.name},
			],
			triggerAction: run,
		});

		async function run() {
			const updateCount = await trpc.bulkActions.moveSolvesToSession.mutate({
				sessionId: session.id,
				solveIds,
			});

			await initAllSolves(true);

			const solvesMoved = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully moved ${solvesMoved} to ${session.name}.`);
		}
	}

	function onClick() {
		setSessionSelectorDialog({props: {solves: solves}, onComplete: onSelectSession});
	}

	return (
		<>
			<Button variant="secondary" disabled={disabled} onClick={onClick}>
				{'Change Session'}
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
				open={sessionSelectorDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setSessionSelectorDialog(null);
					}
				}}
			>
				{sessionSelectorDialog && (
					<DialogContent>
						<SessionSelector
							{...sessionSelectorDialog.props}
							onComplete={(...args) => {
								setSessionSelectorDialog((current) =>
									current === sessionSelectorDialog ? null : current,
								);
								sessionSelectorDialog.onComplete?.(...args);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
