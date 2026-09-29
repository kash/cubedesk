import {useTranslation} from 'react-i18next';
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
	const {t, i18n} = useTranslation();
	const [confirmDialog, setConfirmDialog] = React.useState<Omit<
		React.ComponentProps<typeof ConfirmDialog>,
		'labels'
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
			buttonText: t('solves.bulk.changeEvent.button'),
			title: t('solves.bulk.changeEvent.title'),
			description: t('solves.bulk.changeEvent.description'),
			infoBoxes: [
				{label: t('solves.solves'), value: solves.length.toLocaleString(i18n.language)},
				{label: t('solves.bulk.changeEvent.newType'), value: cubeType.name},
			],
			triggerAction: run,
		});

		async function run() {
			const updateCount = await trpc.bulkActions.updateCubeType.mutate({
				cubeType: cubeType.id,
				solveIds,
			});

			await initAllSolves(true);

			toastSuccess(
				t('solves.bulk.changeEvent.success', {count: updateCount, name: cubeType.name}),
			);
		}
	}

	function onClick() {
		setEventTypeSelectorDialog({props: {solves: solves}, onComplete: onSelectCubeType});
	}

	return (
		<>
			<Button variant="secondary" disabled={disabled} onClick={onClick}>
				{t('solves.bulk.changeEvent.label')}
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
				open={eventTypeSelectorDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setEventTypeSelectorDialog(null);
					}
				}}
			>
				{eventTypeSelectorDialog && (
					<DialogContent closeLabel={t('common.closeDialog')}>
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
