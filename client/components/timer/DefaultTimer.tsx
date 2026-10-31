import Timer from '@/components/timer/Timer';
import {useMe} from '@/util/hooks/useMe';
import {useSettings} from '@/util/hooks/useSettings';
import React, {useMemo} from 'react';

export default function DefaultTimer() {
	const me = useMe();
	const eventType = useSettings('event_type');
	const sessionId = useSettings('session_id');

	const loggedIn = !!me;
	const timerSolveData = useMemo(
		() => ({
			session_id: loggedIn ? sessionId : 'demo',
			from_timer: true,
			event_type: eventType,
		}),
		[loggedIn, sessionId, eventType],
	);

	return <Timer demoMode={!loggedIn} solvesFilter={timerSolveData} />;
}
