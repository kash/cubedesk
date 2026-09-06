import {Combobox} from '@/components/ui/combobox';
import {useSessionDb} from '@/util/hooks/useSessionDb';
import {fetchSessionById, fetchSessions} from '@/db/sessions/query';
import {setCubeType, setCurrentSession} from '@/db/settings/update';
import {fetchLastCubeTypeForSession} from '@/db/solves/query';
import {Session} from '@/types/session';
import {useSettings} from '@/util/hooks/useSettings';
import {CaretDown} from 'phosphor-react';
import React, {useEffect, useMemo, useState} from 'react';

interface Props {
	stateless?: boolean;
	hideSessionName?: boolean; // Will just show "Session"
	onChange?: (session: Session) => void;
}

export default function SessionPicker(props: Props) {
	useSessionDb();
	const sessionId = useSettings('session_id');

	const [localSessionId, setLocalSessionId] = useState<string>();
    const {onChange, hideSessionName, stateless} = props;
    const selectedSession = fetchSessionById((stateless ? localSessionId : sessionId) || '');

	const options = fetchSessions().map((session) => ({value:session.id, text:session.name}));

	function switchSession(session: Session) {
		setLocalSessionId(session.id);
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
			<Combobox label="Session" value={selectedSession?.id || ''} text={sessionName} options={options} onValueChange={(id) => {const session = fetchSessionById(id); if (session) switchSession(session);}} />
		</div>
	);
}
