import {DotsThreeOutlineVertical} from '@phosphor-icons/react/dist/ssr';
import React, {useCallback} from 'react';
import './Session.scss';
import {useDispatch} from 'react-redux';
import {SortableHandle} from 'react-sortable-hoc';
import {v4 as uuid} from 'uuid';
import {reactState} from '../../../../client/@types/react';
import {openModal} from '../../../lib/actions/general';
import {fetchSessionById} from '../../../lib/db/sessions/query';
import {createSessionDb, deleteSessionDb, mergeSessionsDb} from '../../../lib/db/sessions/update';
import {setCubeType, setCurrentSession} from '../../../lib/db/settings/update';
import {fetchLastCubeTypeForSession} from '../../../lib/db/solves/query';
import {getDateFromNow} from '../../../lib/util/dates';
import {useSettings} from '../../../lib/util/hooks/useSettings';
import {toastSuccess} from '../../../lib/util/toast';
import {Session as SessionSchema} from '@/generated/zod';
import block from '../../../styles/bem';
import ConfirmModal from '../../common/confirm_modal/ConfirmModal';
import Dropdown from '../../common/inputs/dropdown/Dropdown';

const b = block('session-row');

interface Props {
	setSelectedSessionId: reactState<string>;
	selectedSessionId: string;
	session: SessionSchema;
	selectSession: (e, id) => void;
}

export default function Session(props: Props) {
	const currentSessionId = useSettings('session_id');
	const dispatch = useDispatch();

	const {session, selectedSessionId, selectSession} = props;

	const currentSession = fetchSessionById(currentSessionId);
	const sessionIsSelected = selectedSessionId === session.id;
	const isCurrentSession = session.id === currentSessionId;

	const lastCubeType = fetchLastCubeTypeForSession(session.id) || '333';

	const makeCurrent = useCallback(() => {
		setCurrentSession(session.id);
		setCubeType(lastCubeType);
	}, [session.id, lastCubeType]);

	const mergeSessions = useCallback(async () => {
		dispatch(
			openModal(
				<ConfirmModal
					title="Merge sessions"
					description={`Be careful here. You are about to merge "${session.name}" into "${currentSession.name}". "${session.name}" will be deleted after the merge.`}
					triggerAction={async () => {
						await mergeSessionsDb(session.id, currentSessionId);
						props.setSelectedSessionId(currentSessionId);
					}}
					buttonText="Merge sessions"
					buttonProps={{
						danger: true,
					}}
				/>,
			),
		);
	}, [dispatch, session.name, session.id, currentSession.name, currentSessionId, props]);

	const deleteSession = useCallback(async () => {
		const triggerAction = async () => {
			const id = session.id;
			const name = session.name;
			let updatedSessionId = currentSessionId;
			if (currentSessionId === id) {
				const newId = uuid();

				await createSessionDb({
					name: 'New Session',
					id: newId,
				});

				setCurrentSession(newId);
				setCubeType('333');

				updatedSessionId = newId;
			}

			props.setSelectedSessionId(updatedSessionId);
			await deleteSessionDb(session);
			toastSuccess(`Successfully deleted session "${name}"`);
		};

		dispatch(
			openModal(
				<ConfirmModal
					title="Delete session"
					description={`Be careful here. You are about to delete "${session.name}." This action is irreversible.`}
					triggerAction={triggerAction}
					buttonText="Delete session"
				/>,
			),
		);
	}, [dispatch, session, currentSessionId, props]);

	let dropdown = null;

	if (!isCurrentSession) {
		dropdown = (
			<Dropdown
				dropdownButtonProps={{
					transparent: true,
				}}
				options={[
					{
						text: 'Make current',
						onClick: makeCurrent,
					},
					{
						text: 'Merge session',
						onClick: mergeSessions,
					},
					{
						text: 'Delete session',
						onClick: deleteSession,
					},
				]}
			/>
		);
	}

	const DragHandle = SortableHandle(() => (
		<span tabIndex={0}>
			<button tabIndex={-1} style={{pointerEvents: 'none'}} className={b('handle')}>
				<DotsThreeOutlineVertical weight="fill" />
			</button>
		</span>
	));

	return (
		<div
			key={session.id}
			className={b({selected: sessionIsSelected})}
			onClick={(e) => selectSession(e, session.id)}
		>
			<div className={b('left')}>
				<DragHandle />
				<div className={b('info')}>
					<h4>{session.name}</h4>
					<span>Created {getDateFromNow(session.created_at)}</span>
				</div>
			</div>

			{isCurrentSession ? <span className={b('current')}>Current</span> : null}
			{dropdown}
		</div>
	);
}
