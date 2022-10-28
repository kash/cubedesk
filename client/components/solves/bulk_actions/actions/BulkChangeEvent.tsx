import React, {useMemo} from 'react';
import {openModal} from '../../../../actions/general';
import ConfirmModal from '../../../common/confirm_modal/ConfirmModal';
import {toastSuccess} from '../../../../util/toast';
import {Solve} from '../../../../../server/schemas/Solve.schema';
import {useDispatch} from 'react-redux';
import {useMutation} from '@apollo/client';
import {Mutation, MutationBulkUpdateSolvesCubeTypeArgs} from '../../../../@types/generated/graphql';
import {BULK_UPDATE_SOLVES_EVENT_MUT} from '../mutations';
import Button from '../../../common/button/Button';
import {CubeType} from '../../../../util/cubes/cube_types';
import EventTypeSelector from './EventTypeSelector';
import {initAllSolves} from '../../../layout/init';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkChangeEventSolvesButton(props: Props) {
	const {solves, disabled} = props;
	const dispatch = useDispatch();
	const [mutate] = useMutation<
		{bulkUpdateSolvesCubeType: Mutation['bulkUpdateSolvesCubeType']},
		MutationBulkUpdateSolvesCubeTypeArgs
	>(BULK_UPDATE_SOLVES_EVENT_MUT);

	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves, solves?.length]);

	function onSelectCubeType(cubeType: CubeType) {
		dispatch(
			openModal(
				<ConfirmModal
					proOnly
					buttonText={`Change event type`}
					title="Bulk change event type"
					description="You are about to set the event type of the selected solves. This is irreversible. Be careful."
					infoBoxes={[
						{label: 'Solves', value: solves.length.toLocaleString()},
						{label: 'New Event Type', value: cubeType.name},
					]}
					triggerAction={run}
				/>
			)
		);

		async function run() {
			const res = await mutate({
				variables: {
					cubeType: cubeType.id,
					solveIds,
				},
			});

			await initAllSolves(true);

			const updateCount = res.data.bulkUpdateSolvesCubeType;
			const solvesUpdated = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully changed the event type of ${solvesUpdated} to ${cubeType.name}.`);
		}
	}

	function onClick() {
		dispatch(
			openModal(<EventTypeSelector solves={solves} />, {
				onComplete: onSelectCubeType,
			})
		);
	}

	return <Button disabled={disabled} text="Change Event" gray onClick={onClick} />;
}
