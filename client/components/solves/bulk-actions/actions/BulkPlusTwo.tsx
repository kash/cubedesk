import React, {useMemo} from 'react';
import {openModal} from '../../../../actions/general';
import ConfirmModal from '../../../common/confirm_modal/ConfirmModal';
import {toastSuccess} from '../../../../util/toast';
import {Solve} from '../../../../../server/schemas/Solve.schema';
import {useDispatch} from 'react-redux';
import {useMutation} from '@apollo/client';
import {Mutation, MutationBulkPlusTwoSolvesArgs} from '../../../../@types/generated/graphql';
import {BULK_PLUS_TWO_SOLVES_MUT} from '../mutations';
import Button from '../../../common/button/Button';
import {initAllSolves} from '../../../layout/init';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkPlusTwoSolvesButton(props: Props) {
	const {solves, disabled} = props;
	const dispatch = useDispatch();
	const [mutate] = useMutation<{bulkPlusTwoSolves: Mutation['bulkPlusTwoSolves']}, MutationBulkPlusTwoSolvesArgs>(
		BULK_PLUS_TWO_SOLVES_MUT
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
					buttonText={`+2 ${solvesToActOn}`}
					title="Bulk +2 solves"
					description="You are about to +2 the selected solves. This is irreversible. Be careful."
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

			const updateCount = res.data.bulkPlusTwoSolves;
			const solvesUpdated = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully +2'd ${solvesUpdated}.`);
		}
	}

	return <Button disabled={disabled} text="Mark +2" gray onClick={onClick} />;
}
