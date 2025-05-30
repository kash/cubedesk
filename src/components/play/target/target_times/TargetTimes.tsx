import React, {ReactNode, useContext, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import './TargetTimes.scss';
import {getTimeString} from '../../../../lib/util/time';
import {openModal} from '../../../../lib/actions/general';
import SolveInfo from '../../../solve-info/SolveInfo';
import {GameContext} from '../../game/Game';
import block from '../../../../styles/bem';
import {MatchContext} from '../../match/Match';
import {PlayerStatus} from '../../../../lib/shared/match/types';
import {Button} from '@/components/ui/button';
import {socketClient} from '../../../../lib/util/socket/socketio';
import {updateSolveDb} from '../../../../lib/db/solves/update';
import {useMe} from '../../../../lib/util/hooks/useMe';
import {Solve} from '@/generated/zod';

const b = block('target-times');

interface Props {
	reverse?: boolean;
}

// Left-most module that shows list of times
export default function TargetTimes(props: Props) {
	const dispatch = useDispatch();
	const gameContext = useContext(GameContext);
	const matchContext = useContext(MatchContext);
	const me = useMe();

	const {reverse} = props;
	const match = matchContext?.match;
	const {timeIndex, getSolveRowInfo, solves} = gameContext;

	const openSolve = useCallback((solve) => {
		dispatch(openModal(<SolveInfo disabled solveId={solve.id} />));
	}, [dispatch]);

	const dnfSolve = useCallback(async (solve: Solve) => {
		solve.dnf = true;
		await updateSolveDb(
			solve,
			{
				dnf: true,
			},
			false,
		);

		if (match) {
			socketClient().emit('playedDnfSolve', match.id, solve);
		}

		const newSolves = [...gameContext.solves];
		newSolves[newSolves.length - 1] = solve;
		gameContext.setSolves(newSolves);
	}, [match, gameContext]);

	const plusTwoSolve = useCallback(async (solve: Solve) => {
		solve.plus_two = true;
		await updateSolveDb(
			solve,
			{
				plus_two: true,
			},
			false,
		);

		if (match) {
			socketClient().emit('playerPlusTwoSolve', match.id, solve);
		}

		const newSolves = [...gameContext.solves];
		newSolves[newSolves.length - 1] = solve;
		gameContext.setSolves(newSolves);
	}, [match, gameContext]);

	const targetTimeCount = timeIndex + 1;
	const body = new Array(targetTimeCount);

	for (let i = 0; i < targetTimeCount; i += 1) {
		const {id, indexText, solveDescription, targetTime, solve, solveStatus} = getSolveRowInfo(
			me.id,
			i,
			solves,
			match,
		);
		const failed = solveStatus === PlayerStatus.Lost;

		let actions = null;
		let solveInfo: ReactNode = <span />;
		if (solve) {
			let targetSuffix = null;
			if (targetTime) {
				targetSuffix = <span className={b('target')}> / {getTimeString(targetTime)}</span>;
			}

			const time = getTimeString(solve.time);
			const dnf = solve.dnf;
			const plusTwo = solve.plus_two;
			const tie = solveStatus === PlayerStatus.Tie;

			solveInfo = (
				<button
					onClick={() => openSolve(solve)}
					className={b('button', {dnf, plusTwo, failed, tie})}
				>
					{time}
					{targetSuffix}
				</button>
			);

			if (i === timeIndex - 1) {
				const actionsDisabled = solve.plus_two || solve.dnf;
				actions = (
					<div className={b('actions')}>
						<Button
							title="Plus two solve"
							hidden={actionsDisabled}
							text="+2"
							flat
							white
							warning={solve.plus_two}
							onClick={() => plusTwoSolve(solve)}
						/>
						<Button
							title="DNF solve"
							flat
							white
							text="DNF"
							hidden={actionsDisabled}
							danger={solve.dnf}
							onClick={() => dnfSolve(solve)}
						/>
					</div>
				);
			}
		} else if (targetTime) {
			solveInfo = <span className={b('target')}>/ {getTimeString(targetTime)}</span>;
		}

		const content = (
			<div className={b('row', {unsolved: false})} key={id}>
				<div className={b('desc')}>
					{indexText} <span>{solveDescription}</span>
				</div>
				<div className={b('solve-info')}>
					{actions}
					{solveInfo}
				</div>
			</div>
		);

		if (reverse) {
			body[targetTimeCount - i - 1] = content;
		} else {
			body[i] = content;
		}

		if (
			i === targetTimeCount - 2 &&
			solveStatus !== PlayerStatus.Won &&
			solveStatus !== PlayerStatus.Lost &&
			solveStatus !== PlayerStatus.Tie
		) {
			break;
		}
	}

	return (
		<div className={b()}>
			<div className={b('wrapper')}>{body}</div>
		</div>
	);
}
