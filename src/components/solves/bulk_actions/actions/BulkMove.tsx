import React, {useMemo} from 'react';
import {openModal} from '@/lib/actions/general';
import ConfirmModal from '@/components/common/confirm_modal/ConfirmModal';
import {toastSuccess} from '@/lib/util/toast';
import {Solve} from '@/server/schemas/Solve.schema';
import {useDispatch} from 'react-redux';
import Button from '@/components/common/button/Button';
import SessionSelector from './SessionSelector';
import {Session} from '@/server/schemas/Session.schema';
import {initAllSolves} from '@/components/layout/init';
import {api} from '@/trpc/react';

interface Props {
  disabled?: boolean;
  solves: Solve[];
}

export default function BulkMoveSolvesButton(props: Props) {
  const {solves, disabled} = props;
  const dispatch = useDispatch();
  
  const moveMutation = api.bulkActions.moveSolvesToSession.useMutation({
    onSuccess: async (updateCount, variables) => {
      await initAllSolves(true);
      
      // We need to find the session name for the success message
      // This is a bit of a hack since we don't get the session name back from the mutation
      const sessionId = variables.sessionId;
      const session = sessions.find(s => s.id === sessionId);
      const sessionName = session?.name || "new session";
      
      const solvesMoved = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
      toastSuccess(`Successfully moved ${solvesMoved} to ${sessionName}.`);
    }
  });

  // Get all sessions for displaying the session name in the success message
  const { data: sessions = [] } = api.session.getAll.useQuery();

  const solveIds = useMemo(() => {
    return solves.map((solve) => solve.id);
  }, [solves, solves?.length]);

  function onSelectSession(session: Session) {
    const solvesToActOn = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

    dispatch(
      openModal(
        <ConfirmModal
          proOnly
          buttonText={`Move ${solvesToActOn}`}
          title="Bulk move solves"
          description="You are about to do a bulk move of solves. This is irreversible. Be careful."
          infoBoxes={[
            {label: 'Solves', value: solves.length.toLocaleString()},
            {label: 'New Session', value: session.name},
          ]}
          triggerAction={run}
        />
      )
    );

    async function run() {
      await moveMutation.mutateAsync({
        sessionId: session.id,
        solveIds,
      });
    }
  }

  function onClick() {
    dispatch(
      openModal(<SessionSelector solves={solves} />, {
        onComplete: onSelectSession,
      })
    );
  }

  return <Button disabled={disabled || moveMutation.isPending} text="Change Session" gray onClick={onClick} />;
}