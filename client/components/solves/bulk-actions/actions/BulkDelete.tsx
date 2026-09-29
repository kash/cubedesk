import {useTranslation} from 'react-i18next';
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
	const {t, i18n} = useTranslation();
	const [confirmDialog, setConfirmDialog] = React.useState<Omit<
		React.ComponentProps<typeof ConfirmDialog>,
		'labels'
	> | null>(null);

	const {solves, disabled} = props;
	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves, solves?.length]);

	function onClick() {
		setConfirmDialog({
			buttonText: t('solves.bulk.delete.button', {count: solves.length}),
			title: t('solves.bulk.delete.title'),
			description: t('solves.bulk.delete.description'),
			infoBoxes: [
				{label: t('solves.solves'), value: solves.length.toLocaleString(i18n.language)},
			],
			triggerAction: run,
		});

		async function run() {
			const deletedCount = await trpc.bulkActions.deleteSolves.mutate({
				solveIds,
			});

			await initAllSolves(true);

			toastSuccess(t('solves.bulk.delete.success', {count: deletedCount}));
		}
	}

	return (
		<>
			<Button variant="secondary" disabled={disabled} onClick={onClick}>
				{t('solves.bulk.delete.label')}
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
		</>
	);
}
