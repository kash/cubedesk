import React from 'react';
import Timer from '@/components/timer/Timer';
import {useSettings} from '@/util/hooks/useSettings';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {useMe} from '@/util/hooks/useMe';

export default function DefaultTimer() {
	const me = useMe();
	const cubeType = useSettings('cube_type');
	const sessionId = useSettings('session_id');

	useSolveDb();

	const timerSolveData = {
		session_id: sessionId,
		from_timer: true,
		cube_type: cubeType,
	};

	return <Timer demoMode={!me} solvesFilter={timerSolveData} />;
}
