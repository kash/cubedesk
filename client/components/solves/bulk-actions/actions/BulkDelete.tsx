import React, {useMemo} from 'react';
import {openModal} from '../../../../actions/general';
import ConfirmModal from '../../../common/confirm_modal/ConfirmModal';
import {toastSuccess} from '../../../../util/toast';
import {Solve} from '../../../../../server/schemas/Solve.schema';
import {useDispatch} from 'react-redux';
import {useMutation} from '@apollo/client';
import {Mutation, MutationBulkDeleteSolvesArgs} from '../../../../@types/generated/graphql';
import {DELETE_SOLVES_MUT} from '../mutations';
import Button from '../../../common/button/Button';
import {initAllSolves} from '../../../layout/init';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkDeleteSolvesButton(props: Props) {
	const dispatch = useDispatch();
	const [deleteMut] = useMutation<{bulkDeleteSolves: Mutation['bulkDeleteSolves']}, MutationBulkDeleteSolvesArgs>(
		DELETE_SOLVES_MUT
	);

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
				/>
			)
		);

		async function run() {
			const updateCount = await deleteMut({
				variables: {
					solveIds,
				},
			});

			await initAllSolves(true);

			const deletedCount = updateCount.data.bulkDeleteSolves;
			const solvesDeleted = `${deletedCount} solve${deletedCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully deleted ${solvesDeleted}.`);
		}
	}

	return <Button disabled={disabled} text="Delete" gray onClick={onClick} />;
}
