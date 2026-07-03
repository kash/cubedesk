import React, {useMemo} from 'react';
import {openModal} from '../../../../actions/general';
import ConfirmModal from '@/components/common/ConfirmModal';
import {toastSuccess} from '../../../../util/toast';
import {Solve} from '@/types/solve';
import {useDispatch} from 'react-redux';
import {trpc} from '@/util/trpc';
import Button from '../../../common/Button';
import SessionSelector from './SessionSelector';
import {Session} from '@/types/session';
import {initAllSolves} from '../../../layout/init';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkMoveSolvesButton(props: Props) {
	const {solves, disabled} = props;
	const dispatch = useDispatch();

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
				/>,
			),
		);

		async function run() {
			const updateCount = await trpc.bulkActions.moveSolvesToSession.mutate({
				sessionId: session.id,
				solveIds,
			});

			await initAllSolves(true);

			const solvesMoved = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully moved ${solvesMoved} to ${session.name}.`);
		}
	}

	function onClick() {
		dispatch(
			openModal(<SessionSelector solves={solves} />, {
				onComplete: onSelectSession,
			}),
		);
	}

	return <Button disabled={disabled} text="Change Session" gray onClick={onClick} />;
}
