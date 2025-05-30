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

export default function BulkOkSolvesButton(props: Props) {
	const {solves, disabled} = props;

	const okMutation = api.bulkActions.okSolves.useMutation({
		onSuccess: async (updateCount) => {
			await initAllSolves(true);
			const solvesOk = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully "okayed" ${solvesOk}.`);
		},
	});

	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves]);

	const solvesToOk = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

	const run = useCallback(async () => {
		await okMutation.mutateAsync({
			solveIds,
		});
	}, [okMutation, solveIds]);

	return (
		<ConfirmDialog
			title="Bulk OK solves"
			description="You are about to remove any +2 or DNF from the selected solves. This is irreversible. Be careful."
			buttonText={`OK ${solvesToOk}`}
			infoBoxes={[{label: 'Solves', value: solves.length.toLocaleString()}]}
			triggerAction={run}
		>
			<Button disabled={disabled || okMutation.isPending} variant="secondary">
				Mark Ok
			</Button>
		</ConfirmDialog>
	);
}
