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

export default function BulkDnfSolvesButton(props: Props) {
	const {solves, disabled} = props;

	const dnfMutation = api.bulkActions.dnfSolves.useMutation({
		onSuccess: async (updateCount) => {
			await initAllSolves(true);
			const solvesDNFed = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully DNF'd ${solvesDNFed}.`);
		},
	});

	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves]);

	const solvesToDnf = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

	const run = useCallback(async () => {
		await dnfMutation.mutateAsync({
			solveIds,
		});
	}, [dnfMutation, solveIds]);

	return (
		<ConfirmDialog
			title="Bulk DNF solves"
			description="You are about to DNF the selected solves. This is irreversible. Be careful."
			buttonText={`DNF ${solvesToDnf}`}
			infoBoxes={[{label: 'Solves', value: solves.length.toLocaleString()}]}
			triggerAction={run}
		>
			<Button disabled={disabled || dnfMutation.isPending} variant="secondary">
				Mark DNF
			</Button>
		</ConfirmDialog>
	);
}
