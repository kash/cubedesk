import React, {useMemo} from 'react';
import {openModal} from '../../../../actions/general';
import ConfirmModal from '@/components/common/ConfirmModal';
import {toastSuccess} from '../../../../util/toast';
import {Solve} from '@/types/solve';
import {useDispatch} from 'react-redux';
import {trpc} from '@/util/trpc';
import Button from '../../../common/Button';
import {initAllSolves} from '../../../layout/init';

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
					proOnly
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
