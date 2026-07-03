import React, {useMemo} from 'react';
import {openModal} from '../../../../actions/general';
import ConfirmModal from '@/components/common/ConfirmModal';
import {toastSuccess} from '../../../../util/toast';
import {Solve} from '@/types/solve';
import {useDispatch} from 'react-redux';
import {trpc} from '@/util/trpc';
import {CubeType} from '../../../../util/cubes/cube_types';
import EventTypeSelector from './EventTypeSelector';
import {initAllSolves} from '../../../layout/init';
import Button from '@/components/common/Button';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkChangeEventSolvesButton(props: Props) {
	const {solves, disabled} = props;
	const dispatch = useDispatch();

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
				/>,
			),
		);

		async function run() {
			const updateCount = await trpc.bulkActions.updateCubeType.mutate({
				cubeType: cubeType.id,
				solveIds,
			});

			await initAllSolves(true);

			const solvesUpdated = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(
				`Successfully changed the event type of ${solvesUpdated} to ${cubeType.name}.`,
			);
		}
	}

	function onClick() {
		dispatch(
			openModal(<EventTypeSelector solves={solves} />, {
				onComplete: onSelectCubeType,
			}),
		);
	}

	return <Button disabled={disabled} text="Change Event" gray onClick={onClick} />;
}
