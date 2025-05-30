import ConfirmModal from '@/components/common/confirm_modal/ConfirmModal';
import {initAllSolves} from '@/components/layout/init';
import {Button} from '@/components/ui/button';
import {openModal} from '@/lib/actions/general';
import {CubeType} from '@/lib/util/cubes/cube_types';
import {toastSuccess} from '@/lib/util/toast';
import {Solve} from '@/generated/zod';
import {api} from '@/trpc/react';
import React, {useCallback, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import EventTypeSelector from './EventTypeSelector';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkChangeEventSolvesButton(props: Props) {
	const {solves, disabled} = props;
	const dispatch = useDispatch();

	const updateCubeTypeMutation = api.bulkActions.updateCubeType.useMutation({
		onSuccess: async (updateCount, variables) => {
			await initAllSolves(true);

			// Find the cube type name for the success message
			const cubeTypeId = variables.cubeType;
			const cubeTypes = await import('@/lib/util/cubes/cube_types').then((m) =>
				m.getDefaultCubeTypes(),
			);
			const cubeType = cubeTypes.find((ct) => ct.id === cubeTypeId);
			const cubeTypeName = cubeType?.name || cubeTypeId;

			const solvesUpdated = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(
				`Successfully changed the event type of ${solvesUpdated} to ${cubeTypeName}.`,
			);
		},
	});

	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves, solves?.length]);

	const onSelectCubeType = useCallback((cubeType: CubeType) => {
		const run = async () => {
			await updateCubeTypeMutation.mutateAsync({
				cubeType: cubeType.id,
				solveIds,
			});
		};

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
	}, [dispatch, solves.length, updateCubeTypeMutation, solveIds]);

	const onClick = useCallback(() => {
		dispatch(
			openModal(<EventTypeSelector solves={solves} />, {
				onComplete: onSelectCubeType,
			}),
		);
	}, [dispatch, solves, onSelectCubeType]);

	return (
		<Button
			variant="secondary"
			disabled={disabled || updateCubeTypeMutation.isPending}
			onClick={onClick}
		>
			Change Event
		</Button>
	);
}
