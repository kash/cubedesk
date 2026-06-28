import React, {useMemo} from 'react';
import {AlignLeft} from 'phosphor-react';
import Emblem from '@/components/common/emblem/Emblem';
import History from '@/components/modules/history/History';
import {getTimeString} from '@/util/time';
import SolvesText from '@/components/modules/solves-text/SolvesText';
import Button, {CommonType} from '@/components/common/button/Button';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useToggle} from '@/util/hooks/useToggle';
import Checkbox from '@/components/common/checkbox/Checkbox';
import {Solve} from '../../../../server/schemas/Solve.schema';

interface Props {
	solves: Solve[];
	description: string;
	time?: number;
	disabled?: boolean;
	showAsText?: boolean;
}

export default function HistoryModal(props: Props) {
	const {description, disabled, time, showAsText} = props;
	const [showText, toggleShowText] = useToggle(showAsText);
	const [reverseOrder, toggleReverseOrder] = useToggle(false);
	const timeString = getTimeString(time);

	const solves = useMemo(() => {
		return props.solves.sort((a, b) => b.started_at - a.started_at);
	}, [props.solves]);

	const cubeTypes = useMemo(() => {
		const types = new Set<string>();
		for (const solve of solves) {
			types.add(solve.cube_type);
		}

		const output = [];
		for (const type of types) {
			const cubeName = getCubeTypeInfoById(type).name;
			output.push(cubeName);
		}

		return output;
	}, [solves, solves?.length]);

	const lastSolve = solves[solves.length - 1];

	let body;
	if (showText) {
		body = <SolvesText reverseOrder={reverseOrder} description={description} time={time} solves={solves} />;
	} else {
		body = <History reverseOrder={reverseOrder} disabled={disabled} solves={solves} listClassName="max-h-[500px]" />;
	}

	let timeBody;
	if (time && timeString) {
		timeBody = (
			<>
				: <span className="text-secondary">{timeString}</span>
			</>
		);
	}

	return (
		<div className="relative flex flex-col items-center pt-[50px]">
			<div className="absolute top-0 left-0">
				<Button
					primary
					icon={<AlignLeft />}
					text={showText ? 'View as list' : 'View as text'}
					onClick={() => toggleShowText()}
					theme={showText ? CommonType.WHITE : CommonType.GRAY}
				/>
			</div>
			<div className="flex w-full flex-col items-start">
				<h2 className="mb-0.5 capitalize">
					{description}
					{timeBody}
				</h2>
				<p className="text-[1.1rem]">{new Date(lastSolve.started_at).toLocaleDateString()}</p>
				<div>
					{cubeTypes.map((ct) => (
						<Emblem key={ct} text={ct} />
					))}
				</div>
			</div>
			<div className="mt-10 w-full">
				<Checkbox
					text="Reverse order"
					checked={reverseOrder}
					onChange={(e) => toggleReverseOrder(e.target.checked)}
				/>
				{body}
			</div>
		</div>
	);
}
