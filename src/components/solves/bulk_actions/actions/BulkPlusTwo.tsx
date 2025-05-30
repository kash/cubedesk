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

export default function BulkPlusTwoSolvesButton(props: Props) {
	const {solves, disabled} = props;

	const plusTwoMutation = api.bulkActions.plusTwoSolves.useMutation({
		onSuccess: async (updateCount) => {
			await initAllSolves(true);
			const solvesPlusTwo = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully +2'd ${solvesPlusTwo}.`);
		},
	});

	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves]);

	const solvesToPlusTwo = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

	const run = useCallback(async () => {
		await plusTwoMutation.mutateAsync({
			solveIds,
		});
	}, [plusTwoMutation, solveIds]);

	return (
		<ConfirmDialog
			title="Bulk +2 solves"
			description="You are about to +2 the selected solves. This is irreversible. Be careful."
			buttonText={`+2 ${solvesToPlusTwo}`}
			infoBoxes={[{label: 'Solves', value: solves.length.toLocaleString()}]}
			triggerAction={run}
		>
			<Button disabled={disabled || plusTwoMutation.isPending} variant="secondary">
				Mark +2
			</Button>
		</ConfirmDialog>
	);
}
