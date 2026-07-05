import {openModal} from '@/actions/general';
import Button from '@/components/common/Button';
import ConfirmModal from '@/components/common/ConfirmModal';
import {initAllSolves} from '@/components/layout/init';
import {Solve} from '@/types/solve';
import {toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React, {useMemo} from 'react';
import {useDispatch} from 'react-redux';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkDnfSolvesButton(props: Props) {
	const {solves, disabled} = props;
	const dispatch = useDispatch();

	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves, solves?.length]);

	function onClick() {
		const solvesToActOn = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

		dispatch(
			openModal(
				<ConfirmModal
					buttonText={`DNF ${solvesToActOn}`}
					title="Bulk DNF solves"
					description="You are about to DNF the selected solves. This is irreversible. Be careful."
					infoBoxes={[{label: 'Solves', value: solves.length.toLocaleString()}]}
					triggerAction={run}
				/>,
			),
		);

		async function run() {
			const updateCount = await trpc.bulkActions.dnfSolves.mutate({
				solveIds,
			});

			await initAllSolves(true);

			const solvesUpdated = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully DNF'd ${solvesUpdated}.`);
		}
	}

	return <Button disabled={disabled} text="Mark DNF" gray onClick={onClick} />;
}
