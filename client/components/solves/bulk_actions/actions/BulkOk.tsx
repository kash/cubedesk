import React, {useMemo} from 'react';
import {openModal} from '../../../../actions/general';
import ConfirmModal from '../../../common/confirm_modal/ConfirmModal';
import {toastSuccess} from '../../../../util/toast';
import {Solve} from '../../../../../server/schemas/Solve.schema';
import {useDispatch} from 'react-redux';
import {useMutation} from '@apollo/client';
import {Mutation, MutationBulkOkSolvesArgs} from '../../../../@types/generated/graphql';
import {BULK_OK_SOLVES_MUT} from '../mutations';
import Button from '../../../common/button/Button';
import {initAllSolves} from '../../../layout/init';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkOkSolvesButton(props: Props) {
	const {solves, disabled} = props;
	const dispatch = useDispatch();
	const [mutate] = useMutation<{bulkOkSolves: Mutation['bulkOkSolves']}, MutationBulkOkSolvesArgs>(
		BULK_OK_SOLVES_MUT
	);

	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves, solves?.length]);

	function onClick() {
		const solvesToActOn = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

		dispatch(
			openModal(
				<ConfirmModal
					proOnly
					buttonText={`OK ${solvesToActOn}`}
					title="Bulk OK solves"
					description="You are about to remove any +2 or DNF from the selected solves. This is irreversible. Be careful."
					infoBoxes={[{label: 'Solves', value: solves.length.toLocaleString()}]}
					triggerAction={run}
				/>
			)
		);

		async function run() {
			const res = await mutate({
				variables: {
					solveIds,
				},
			});

			await initAllSolves(true);

			const updateCount = res.data.bulkOkSolves;
			const solvesUpdated = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully "okayed" ${solvesUpdated}.`);
		}
	}

	return <Button disabled={disabled} text="Mark Ok" gray onClick={onClick} />;
}
