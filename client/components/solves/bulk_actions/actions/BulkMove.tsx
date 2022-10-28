import React, {useMemo} from 'react';
import {openModal} from '../../../../actions/general';
import ConfirmModal from '../../../common/confirm_modal/ConfirmModal';
import {toastSuccess} from '../../../../util/toast';
import {Solve} from '../../../../../server/schemas/Solve.schema';
import {useDispatch} from 'react-redux';
import {useMutation} from '@apollo/client';
import {Mutation, MutationBulkMoveSolvesToSessionArgs} from '../../../../@types/generated/graphql';
import {BULK_CHANGE_SOLVES_SESSION_MUT} from '../mutations';
import Button from '../../../common/button/Button';
import SessionSelector from './SessionSelector';
import {Session} from '../../../../../server/schemas/Session.schema';
import {initAllSolves} from '../../../layout/init';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkMoveSolvesButton(props: Props) {
	const {solves, disabled} = props;
	const dispatch = useDispatch();
	const [mutate] = useMutation<
		{bulkMoveSolvesToSession: Mutation['bulkMoveSolvesToSession']},
		MutationBulkMoveSolvesToSessionArgs
	>(BULK_CHANGE_SOLVES_SESSION_MUT);

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
			const res = await mutate({
				variables: {
					sessionId: session.id,
					solveIds,
				},
			});

			await initAllSolves(true);

			const updateCount = res.data.bulkMoveSolvesToSession;
			const solvesMoved = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully moved ${solvesMoved} to ${session.name}.`);
		}
	}

	function onClick() {
		dispatch(
			openModal(<SessionSelector solves={solves} />, {
				onComplete: onSelectSession,
			})
		);
	}

	return <Button disabled={disabled} text="Change Session" gray onClick={onClick} />;
}
