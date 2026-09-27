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

export default function BulkPlusTwoSolvesButton(props: Props) {
	const {t} = useTranslation();
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
			buttonText: t('solves.bulk.plusTwo.button', {count: solves.length}),
			title: t('solves.bulk.plusTwo.title'),
			description: t('solves.bulk.plusTwo.description'),
			infoBoxes: [{label: t('solves.solves'), value: solves.length.toLocaleString()}],
			triggerAction: run,
		});

		async function run() {
			const updateCount = await trpc.bulkActions.plusTwoSolves.mutate({
				solveIds,
			});

			await initAllSolves(true);

			toastSuccess(t('solves.bulk.plusTwo.success', {count: updateCount}));
		}
	}

	return (
		<>
			<Button variant="secondary" disabled={disabled} onClick={onClick}>
				{t('solves.bulk.plusTwo.label')}
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
