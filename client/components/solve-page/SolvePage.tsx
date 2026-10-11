import Header from '@/components/layout/Header';
import SolveInfo from '@/components/solve-info/SolveInfo';
import {Solve} from '@/types/solve';
import {getEventTypeInfoById} from '@/util/cubes/util';
import {useSsr} from '@/util/hooks/useSsr';
import {getTimeString} from '@/util/time';
import React from 'react';
import {useRouteMatch} from 'react-router-dom';

export default function SolvePage() {
	const match = useRouteMatch<{shareCode: string}>();
	const shareCode = match.params.shareCode;
	const [solve] = useSsr<Solve>(shareCode);
	if (!solve) {
		return null;
	}

	const ct = getEventTypeInfoById(solve.event_type);
	const time = getTimeString(solve.time);
	const eventType = ct?.name ?? solve.event_type;
	const user = solve.user?.username;

	return (
		<div className="bg-background box-border flex min-h-screen w-full items-start justify-center pb-[100px] lg:pt-16">
			<Header
				path={`/solve/${shareCode}`}
				title={`${getTimeString(solve.time)} Solve for ${eventType} by ${user} | CubeDesk`}
				description={`View the details of this ${time} ${eventType} solve by ${user}. CubeDesk is the most advanced speedcubing timer, analytics, and trainer application.`}
			/>
			<div className="bg-module box-border w-full max-w-[600px] rounded-md px-5 py-[25px] lg:max-w-[900px] lg:px-10">
				<SolveInfo disabled fullPage solve={solve} solveId={solve.id} />
			</div>
		</div>
	);
}
