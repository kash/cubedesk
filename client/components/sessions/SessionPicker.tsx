import React, {useEffect, useMemo, useState} from 'react';
import {setCubeType, setCurrentSession} from '../../db/settings/update';
import {fetchSessionById, fetchSessions} from '../../db/sessions/query';
import {fetchLastCubeTypeForSession} from '../../db/solves/query';
import {useSettings} from '../../util/hooks/useSettings';
import Dropdown from '../common/inputs/dropdown/Dropdown';
import {Session} from '../../../server/schemas/Session.schema';

interface Props {
	stateless?: boolean;
	hideSessionName?: boolean; // Will just show "Session"
	onChange?: (session: Session) => void;
}

export default function SessionPicker(props: Props) {
	const sessionId = useSettings('session_id');

	const [selectedSession, setSelectedSession] = useState<Session>();
	const {onChange, hideSessionName, stateless} = props;

	useEffect(() => {
		if (stateless) {
			return;
		}

		const currentSession = fetchSessionById(sessionId);
		setSelectedSession(currentSession);
	}, [sessionId]);

	const options = useMemo(() => {
		return fetchSessions().map((ses) => ({
			text: ses.name,
			disabled: selectedSession?.id === ses.id,
			onClick: () => switchSession(ses),
		}));
	}, [selectedSession]);

	function switchSession(session: Session) {
		setSelectedSession(session);
		if (onChange) {
			onChange(session);
		}

		if (stateless) {
			return;
		}

		setCurrentSession(session.id);

		const lastCubeType = fetchLastCubeTypeForSession(session.id);
		setCubeType(lastCubeType || '333');
	}

	let sessionName = 'Select Session';
	if (selectedSession && !hideSessionName) {
		sessionName = selectedSession.name;
	}

	return (
		<div>
			<Dropdown noMargin openLeft text={sessionName} icon="ph-caret-down" options={options} />
		</div>
	);
}
