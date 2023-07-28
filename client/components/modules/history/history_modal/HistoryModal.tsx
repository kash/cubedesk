import React, {useMemo} from 'react';
import './HistoryModal.scss';
import {AlignLeft} from 'phosphor-react';
import block from '../../../../styles/bem';
import Emblem from '../../../common/emblem/Emblem';
import History from '../History';
import {getTimeString} from '../../../../util/time';
import SolvesText from '../../solves_text/SolvesText';
import Button, {CommonType} from '../../../common/button/Button';
import {getCubeTypeInfoById} from '../../../../util/cubes/util';
import {useToggle} from '../../../../util/hooks/useToggle';
import Checkbox from '../../../common/checkbox/Checkbox';
import {Solve} from '../../../../../server/schemas/Solve.schema';

const b = block('history-modal');

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
		body = <History reverseOrder={reverseOrder} disabled={disabled} solves={solves} />;
	}

	let timeBody;
	if (time && timeString) {
		timeBody = (
			<>
				: <span>{timeString}</span>
			</>
		);
	}

	return (
		<div className={b()}>
			<div className={b('toggle-text')}>
				<Button
					primary
					icon={<AlignLeft />}
					text={showText ? 'View as list' : 'View as text'}
					onClick={() => toggleShowText()}
					theme={showText ? CommonType.WHITE : CommonType.GRAY}
				/>
			</div>
			<div className={b('header')}>
				<h2>
					{description}
					{timeBody}
				</h2>
				<p>{new Date(lastSolve.started_at).toLocaleDateString()}</p>
				<div className={b('cube-types')}>
					{cubeTypes.map((ct) => (
						<Emblem key={ct} text={ct} />
					))}
				</div>
			</div>
			<div className={b('body')}>
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
