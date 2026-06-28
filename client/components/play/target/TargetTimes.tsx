import React, {ReactNode, useContext} from 'react';
import {useDispatch} from 'react-redux';
import classNames from 'classnames';
import {getTimeString} from '@/util/time';
import {openModal} from '@/actions/general';
import SolveInfo from '@/components/solve-info/SolveInfo';
import {GameContext} from '@/components/play/game/Game';
import {MatchContext} from '@/components/play/match/Match';
import {PlayerStatus} from '@/shared/match/types';
import Button from '@/components/common/button/Button';
import {socketClient} from '@/util/socket/socketio';
import {updateSolveDb} from '@/db/solves/update';
import {useMe} from '@/util/hooks/useMe';
import {Solve} from '../../../../server/schemas/Solve.schema';

const solveInfoClasses = 'flex flex-row items-center p-0 text-right text-base font-bold whitespace-pre';

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

	function openSolve(solve) {
		dispatch(openModal(<SolveInfo disabled solveId={solve.id} />));
	}

	async function dnfSolve(solve: Solve) {
		solve.dnf = true;
		await updateSolveDb(
			solve,
			{
				dnf: true,
			},
			false
		);

		if (match) {
			socketClient().emit('playedDnfSolve', match.id, solve);
		}

		const newSolves = [...gameContext.solves];
		newSolves[newSolves.length - 1] = solve;
		gameContext.setSolves(newSolves);
	}

	async function plusTwoSolve(solve: Solve) {
		solve.plus_two = true;
		await updateSolveDb(
			solve,
			{
				plus_two: true,
			},
			false
		);

		if (match) {
			socketClient().emit('playerPlusTwoSolve', match.id, solve);
		}

		const newSolves = [...gameContext.solves];
		newSolves[newSolves.length - 1] = solve;
		gameContext.setSolves(newSolves);
	}

	const targetTimeCount = timeIndex + 1;
	const body = new Array(targetTimeCount);

	for (let i = 0; i < targetTimeCount; i += 1) {
		const {id, indexText, solveDescription, targetTime, solve, solveStatus} = getSolveRowInfo(
			me.id,
			i,
			solves,
			match
		);
		const failed = solveStatus === PlayerStatus.Lost;

		let actions: ReactNode = null;
		let solveInfo: ReactNode = <span />;
		if (solve) {
			let targetSuffix: ReactNode = null;
			if (targetTime) {
				targetSuffix = <span className="text-text/60"> / {getTimeString(targetTime)}</span>;
			}

			const time = getTimeString(solve.time);
			const dnf = solve.dnf;
			const plusTwo = solve.plus_two;
			const tie = solveStatus === PlayerStatus.Tie;

			solveInfo = (
				<button
					onClick={() => openSolve(solve)}
					className={classNames(solveInfoClasses, 'text-secondary', {
						'text-warning': plusTwo,
						'text-error': failed || dnf,
						'text-secondary': tie,
					})}
				>
					{time}
					{targetSuffix}
				</button>
			);

			if (i === timeIndex - 1) {
				const actionsDisabled = solve.plus_two || solve.dnf;
				actions = (
					<div className="flex flex-row items-center">
						<Button
							title="Plus two solve"
							hidden={actionsDisabled}
							text="+2"
							flat
							white
							warning={solve.plus_two}
							className="mr-[5px] opacity-30 transition-opacity duration-100 ease-in-out hover:opacity-70 !text-base"
							onClick={() => plusTwoSolve(solve)}
						/>
						<Button
							title="DNF solve"
							flat
							white
							text="DNF"
							hidden={actionsDisabled}
							danger={solve.dnf}
							className="mr-[5px] opacity-30 transition-opacity duration-100 ease-in-out hover:opacity-70 !text-base"
							onClick={() => dnfSolve(solve)}
						/>
					</div>
				);
			}
		} else if (targetTime) {
			solveInfo = <span className={classNames(solveInfoClasses, 'text-text/60')}>/ {getTimeString(targetTime)}</span>;
		}

		const content = (
			<div className="grid h-[30px] grid-cols-[1fr_135px] flex-row items-center justify-between px-1.5" key={id}>
				<div className="text-left font-semibold text-text">
					{indexText} <span className="text-inherit opacity-[0.45]">{solveDescription}</span>
				</div>
				<div className="flex flex-row items-center justify-end">
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
		<div className="flex h-full w-full flex-col justify-start">
			<div className="overflow-y-auto">{body}</div>
		</div>
	);
}
