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

export default function BulkOkSolvesButton(props: Props) {
  const {solves, disabled} = props;
  const dispatch = useDispatch();
  
  const okMutation = api.bulkActions.okSolves.useMutation({
    onSuccess: async (updateCount) => {
      await initAllSolves(true);
      const solvesOk = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
      toastSuccess(`Successfully "okayed" ${solvesOk}.`);
    }
  });

  const solveIds = useMemo(() => {
    return solves.map((solve) => solve.id);
  }, [solves, solves?.length]);

  function onClick() {
    const solvesToOk = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

    dispatch(
      openModal(
        <ConfirmModal
          proOnly
          buttonText={`OK ${solvesToOk}`}
          title="Bulk OK solves"
          description="You are about to remove any +2 or DNF from the selected solves. This is irreversible. Be careful."
          infoBoxes={[{label: 'Solves', value: solves.length.toLocaleString()}]}
          triggerAction={run}
        />
      )
    );

    async function run() {
      await okMutation.mutateAsync({
        solveIds,
      });
    }
  }

  return <Button disabled={disabled || okMutation.isPending} text="Mark Ok" gray onClick={onClick} />;
}