import React, {useMemo} from 'react';
import {openModal} from '@/lib/actions/general';
import ConfirmModal from '@/components/common/confirm_modal/ConfirmModal';
import {toastSuccess} from '@/lib/util/toast';
import {Solve} from '@/server/schemas/Solve.schema';
import {useDispatch} from 'react-redux';
import Button from '@/components/common/button/Button';
import {CubeType} from '@/lib/util/cubes/cube_types';
import EventTypeSelector from './EventTypeSelector';
import {initAllSolves} from '@/components/layout/init';
import {api} from '@/trpc/react';

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
      const cubeTypes = await import('@/lib/util/cubes/cube_types').then(m => m.getDefaultCubeTypes());
      const cubeType = cubeTypes.find(ct => ct.id === cubeTypeId);
      const cubeTypeName = cubeType?.name || cubeTypeId;
      
      const solvesUpdated = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
      toastSuccess(`Successfully changed the event type of ${solvesUpdated} to ${cubeTypeName}.`);
    }
  });

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
      await updateCubeTypeMutation.mutateAsync({
        cubeType: cubeType.id,
        solveIds,
      });
    }
  }

  function onClick() {
    dispatch(
      openModal(<EventTypeSelector solves={solves} />, {
        onComplete: onSelectCubeType,
      })
    );
  }

  return <Button disabled={disabled || updateCubeTypeMutation.isPending} text="Change Event" gray onClick={onClick} />;
}