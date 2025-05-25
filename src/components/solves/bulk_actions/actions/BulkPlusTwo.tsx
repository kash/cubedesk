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

export default function BulkPlusTwoSolvesButton(props: Props) {
  const {solves, disabled} = props;
  const dispatch = useDispatch();
  
  const plusTwoMutation = api.bulkActions.plusTwoSolves.useMutation({
    onSuccess: async (updateCount) => {
      await initAllSolves(true);
      const solvesPlusTwo = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
      toastSuccess(`Successfully +2'd ${solvesPlusTwo}.`);
    }
  });

  const solveIds = useMemo(() => {
    return solves.map((solve) => solve.id);
  }, [solves, solves?.length]);

  function onClick() {
    const solvesToPlusTwo = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

    dispatch(
      openModal(
        <ConfirmModal
          proOnly
          buttonText={`+2 ${solvesToPlusTwo}`}
          title="Bulk +2 solves"
          description="You are about to +2 the selected solves. This is irreversible. Be careful."
          infoBoxes={[{label: 'Solves', value: solves.length.toLocaleString()}]}
          triggerAction={run}
        />
      )
    );

    async function run() {
      await plusTwoMutation.mutateAsync({
        solveIds,
      });
    }
  }

  return <Button disabled={disabled || plusTwoMutation.isPending} text="Mark +2" gray onClick={onClick} />;
}