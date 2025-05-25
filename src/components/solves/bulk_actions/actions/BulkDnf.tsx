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

export default function BulkDnfSolvesButton(props: Props) {
  const {solves, disabled} = props;
  const dispatch = useDispatch();
  
  const dnfMutation = api.bulkActions.dnfSolves.useMutation({
    onSuccess: async (updateCount) => {
      await initAllSolves(true);
      const solvesDNFed = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
      toastSuccess(`Successfully DNF'd ${solvesDNFed}.`);
    }
  });

  const solveIds = useMemo(() => {
    return solves.map((solve) => solve.id);
  }, [solves, solves?.length]);

  function onClick() {
    const solvesToDnf = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

    dispatch(
      openModal(
        <ConfirmModal
          proOnly
          buttonText={`DNF ${solvesToDnf}`}
          title="Bulk DNF solves"
          description="You are about to DNF the selected solves. This is irreversible. Be careful."
          infoBoxes={[{label: 'Solves', value: solves.length.toLocaleString()}]}
          triggerAction={run}
        />
      )
    );

    async function run() {
      await dnfMutation.mutateAsync({
        solveIds,
      });
    }
  }

  return <Button disabled={disabled || dnfMutation.isPending} text="Mark DNF" gray onClick={onClick} />;
}