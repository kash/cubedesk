import ConfirmDialog from '@/components/common/ConfirmDialog';
import {initAllSolves} from '@/components/layout/init';
import {Button} from '@/components/ui/button';
import {Solve} from '@/generated/zod';
import {toastSuccess} from '@/lib/util/toast';
import {api} from '@/trpc/react';
import React, {useCallback, useMemo} from 'react';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkDeleteSolvesButton(props: Props) {
	const deleteMutation = api.bulkActions.deleteSolves.useMutation({
		onSuccess: async (deletedCount) => {
			await initAllSolves(true);
			const solvesDeleted = `${deletedCount} solve${deletedCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully deleted ${solvesDeleted}.`);
		},
	});

	const {solves, disabled} = props;
	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves]);

	const solvesToDelete = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

	const run = useCallback(async () => {
		await deleteMutation.mutateAsync({
			solveIds,
		});
	}, [deleteMutation, solveIds]);

	return (
		<ConfirmDialog
			title="Bulk delete solves"
			description="You are about to do a bulk deletion of solves. This is irreversible. Be careful."
			buttonText={`Delete ${solvesToDelete}`}
			infoBoxes={[{label: 'Solves', value: solves.length.toLocaleString()}]}
			triggerAction={run}
		>
			<Button disabled={disabled || deleteMutation.isPending} variant="secondary">
				Delete
			</Button>
		</ConfirmDialog>
	);
}
