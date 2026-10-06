import Timer from '@/components/timer/Timer';
import {useMe} from '@/util/hooks/useMe';
import {useSettings} from '@/util/hooks/useSettings';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import React from 'react';

export default function DefaultTimer() {
	const me = useMe();
	const eventType = useSettings('event_type');
	const sessionId = useSettings('session_id');

	useSolveDb();

	const timerSolveData = {
		session_id: me ? sessionId : 'demo',
		from_timer: true,
		event_type: eventType,
	};

	return <Timer demoMode={!me} solvesFilter={timerSolveData} />;
}
