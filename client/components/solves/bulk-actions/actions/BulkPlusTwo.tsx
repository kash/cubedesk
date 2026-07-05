import ConfirmModal from '@/components/common/ConfirmModal';
import {Solve} from '@/types/solve';
import {trpc} from '@/util/trpc';
import React, {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {openModal} from '@/actions/general';
import {toastSuccess} from '@/util/toast';
import Button from '@/components/common/Button';
import {initAllSolves} from '@/components/layout/init';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkPlusTwoSolvesButton(props: Props) {
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
					buttonText={`+2 ${solvesToActOn}`}
					title="Bulk +2 solves"
					description="You are about to +2 the selected solves. This is irreversible. Be careful."
					infoBoxes={[{label: 'Solves', value: solves.length.toLocaleString()}]}
					triggerAction={run}
				/>,
			),
		);

		async function run() {
			const updateCount = await trpc.bulkActions.plusTwoSolves.mutate({
				solveIds,
			});

			await initAllSolves(true);

			const solvesUpdated = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully +2'd ${solvesUpdated}.`);
		}
	}

	return <Button disabled={disabled} text="Mark +2" gray onClick={onClick} />;
}
