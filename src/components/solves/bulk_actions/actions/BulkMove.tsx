import ConfirmModal from '@/components/common/confirm_modal/ConfirmModal';
import {initAllSolves} from '@/components/layout/init';
import {Button} from '@/components/ui/button';
import {Session, Solve} from '@/generated/zod';
import {openModal} from '@/lib/actions/general';
import {toastSuccess} from '@/lib/util/toast';
import {api} from '@/trpc/react';
import React, {useCallback, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import SessionSelector from './SessionSelector';

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
			const session = sessions.find((s) => s.id === sessionId);
			const sessionName = session?.name || 'new session';

			const solvesMoved = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully moved ${solvesMoved} to ${sessionName}.`);
		},
	});

	// Get all sessions for displaying the session name in the success message
	const {data: sessions = []} = api.session.getAll.useQuery();

	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves]);

	const onSelectSession = useCallback((session: Session) => {
		const solvesToActOn = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

		const run = async () => {
			await moveMutation.mutateAsync({
				sessionId: session.id,
				solveIds,
			});
		};

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
				/>,
			),
		);
	}, [solves.length, moveMutation, solveIds, dispatch]);

	const onClick = useCallback(() => {
		dispatch(
			openModal(<SessionSelector solves={solves} />, {
				onComplete: onSelectSession,
			}),
		);
	}, [dispatch, solves, onSelectSession]);

	return (
		<Button variant="secondary" disabled={disabled || moveMutation.isPending} onClick={onClick}>
			Change Session
		</Button>
	);
}
