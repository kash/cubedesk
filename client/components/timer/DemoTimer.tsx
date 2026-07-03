import React from 'react';
import Timer from '@/components/timer/Timer';
import {useSettings} from '@/util/hooks/useSettings';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import Header from '@/components/layout/Header';

export default function DemoTimer() {
	const cubeType = useSettings('cube_type');
	const sessionId = useSettings('session_id');

	useSolveDb();

	const timerSolveData = {
		from_timer: true,
		cube_type: cubeType,
		session_id: sessionId,
	};

	return (
		<>
			<Header path="/demo" title="CubeDesk Demo" />
			<Timer demoMode solvesFilter={timerSolveData} />;
		</>
	);
}
