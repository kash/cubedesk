import {useTranslation} from 'react-i18next';
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
	const {t} = useTranslation();
	const [confirmDialog, setConfirmDialog] = React.useState<Omit<
		React.ComponentProps<typeof ConfirmDialog>,
		'labels'
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
		setConfirmDialog({
			buttonText: t('solves.bulk.move.button', {count: solves.length}),
			title: t('solves.bulk.move.title'),
			description: t('solves.bulk.move.description'),
			infoBoxes: [
				{label: t('solves.solves'), value: solves.length.toLocaleString()},
				{label: t('sessions.newSession2'), value: session.name},
			],
			triggerAction: run,
		});

		async function run() {
			const updateCount = await trpc.bulkActions.moveSolvesToSession.mutate({
				sessionId: session.id,
				solveIds,
			});

			await initAllSolves(true);

			toastSuccess(t('solves.bulk.move.success', {count: updateCount, name: session.name}));
		}
	}

	function onClick() {
		setSessionSelectorDialog({props: {solves: solves}, onComplete: onSelectSession});
	}

	return (
		<>
			<Button variant="secondary" disabled={disabled} onClick={onClick}>
				{t('solves.bulk.move.label')}
			</Button>
			{confirmDialog && (
				<ConfirmDialog
					labels={{
						cancel: t('common.cancel'),
						inputPrompt: t('common.confirmInputPrompt', {
							word: t('common.confirmWord'),
						}),
						confirmWord: t('common.confirmWord'),
						genericError: t('common.genericError'),
						defaultDescription: t('common.confirmDescription'),
					}}
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
					<DialogContent closeLabel={t('common.closeDialog')}>
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
