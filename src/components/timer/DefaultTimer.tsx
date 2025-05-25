import React from 'react';
import Timer from './Timer';
import {useSettings} from '../../lib/util/hooks/useSettings';
import {useSolveDb} from '../../lib/util/hooks/useSolveDb';

export default function DefaultTimer() {
	const cubeType = useSettings('cube_type');
	const sessionId = useSettings('session_id');

	useSolveDb();

	const timerSolveData = {
		session_id: sessionId,
		from_timer: true,
		cube_type: cubeType,
	};

	return <Timer solvesFilter={timerSolveData} />;
}
