import {CaretDown} from '@phosphor-icons/react/dist/ssr';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {fetchSessionById, fetchSessions} from '../../lib/db/sessions/query';
import {setCubeType, setCurrentSession} from '../../lib/db/settings/update';
import {fetchLastCubeTypeForSession} from '../../lib/db/solves/query';
import {useSettings} from '../../lib/util/hooks/useSettings';
import {Session} from '@/generated/zod';
import Dropdown from '../common/inputs/dropdown/Dropdown';

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
	}, [selectedSession, switchSession]);

	const switchSession = useCallback((session: Session) => {
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
	}, [onChange, stateless]);

	let sessionName = 'Select Session';
	if (selectedSession && !hideSessionName) {
		sessionName = selectedSession.name;
	}

	return (
		<div>
			<Dropdown noMargin openLeft text={sessionName} icon={<CaretDown />} options={options} />
		</div>
	);
}
