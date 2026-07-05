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

export default function BulkDeleteSolvesButton(props: Props) {
	const dispatch = useDispatch();

	const {solves, disabled} = props;
	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves, solves?.length]);

	function onClick() {
		const solvesToDelete = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

		dispatch(
			openModal(
				<ConfirmModal
					buttonText={`Delete ${solvesToDelete}`}
					title="Bulk delete solves"
					description="You are about to do a bulk deletion of solves. This is irreversible. Be careful."
					infoBoxes={[{label: 'Solves', value: solves.length.toLocaleString()}]}
					triggerAction={run}
				/>,
			),
		);

		async function run() {
			const deletedCount = await trpc.bulkActions.deleteSolves.mutate({
				solveIds,
			});

			await initAllSolves(true);

			const solvesDeleted = `${deletedCount} solve${deletedCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully deleted ${solvesDeleted}.`);
		}
	}

	return <Button disabled={disabled} text="Delete" gray onClick={onClick} />;
}
