import React, {useMemo} from 'react';
import {openModal} from '@/lib/actions/general';
import ConfirmModal from '@/components/common/confirm_modal/ConfirmModal';
import {toastSuccess} from '@/lib/util/toast';
import {Solve} from '@/server/schemas/Solve.schema';
import {useDispatch} from 'react-redux';
import Button from '@/components/common/button/Button';
import {initAllSolves} from '@/components/layout/init';
import {api} from '@/trpc/react';

interface Props {
  disabled?: boolean;
  solves: Solve[];
}

export default function BulkDeleteSolvesButton(props: Props) {
  const dispatch = useDispatch();
  const deleteMutation = api.bulkActions.deleteSolves.useMutation({
    onSuccess: async (deletedCount) => {
      await initAllSolves(true);
      const solvesDeleted = `${deletedCount} solve${deletedCount === 1 ? '' : 's'}`;
      toastSuccess(`Successfully deleted ${solvesDeleted}.`);
    }
  });

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
      await deleteMutation.mutateAsync({
        solveIds,
      });
    }
  }

  return <Button disabled={disabled || deleteMutation.isPending} text="Delete" gray onClick={onClick} />;
}