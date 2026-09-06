import {PlayerStatus} from '@/client/shared/match/types';
import {GameContext} from '@/components/play/game/Game';
import {MatchContext} from '@/components/play/match/Match';
import SolveInfo from '@/components/solve-info/SolveInfo';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogTitle} from '@/components/ui/dialog';
import {updateSolveDb} from '@/db/solves/update';
import {Solve} from '@/types/solve';
import {cn} from '@/util/cn';
import {useMe} from '@/util/hooks/useMe';
import {socketClient} from '@/util/socket/socketio';
import {getTimeString} from '@/util/time';
import classNames from 'classnames';
import React, {ReactNode, useContext} from 'react';

const solveInfoClasses =
	'flex flex-row items-center p-0 text-right text-base font-bold whitespace-pre';

interface Props {
	reverse?: boolean;
}

// Left-most module that shows list of times
export default function TargetTimes(props: Props) {
	const [solveInfoDialog, setSolveInfoDialog] = React.useState<React.ComponentProps<
		typeof SolveInfo
	> | null>(null);

	const gameContext = useContext(GameContext);
	const matchContext = useContext(MatchContext);
	const me = useMe();

	const {reverse} = props;
	const match = matchContext?.match ?? undefined;
	const {timeIndex, getSolveRowInfo, solves} = gameContext;

	function openSolve(solve) {
		setSolveInfoDialog({disabled: true, solveId: solve.id});
	}

	async function dnfSolve(solve: Solve) {
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
	}

	async function plusTwoSolve(solve: Solve) {
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
	}

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
				<Button
					variant="ghost"
					onClick={() => openSolve(solve)}
					className={cn(
						'h-auto p-0 font-normal whitespace-normal hover:bg-transparent',
						classNames(solveInfoClasses, 'text-secondary', {
							'text-warning': plusTwo,
							'text-error': failed || dnf,
							'text-secondary': tie,
						}),
					)}
				>
					{time}
					{targetSuffix}
				</Button>
			);

			if (i === timeIndex - 1) {
				const actionsDisabled = solve.plus_two || solve.dnf;
				actions = (
					<div className="flex flex-row items-center">
						{actionsDisabled ? null : (
							<Button
								variant="ghost"
								title="Plus two solve"
								onClick={() => plusTwoSolve(solve)}
								size="sm"
								aria-pressed={plusTwo}
								className={cn({'text-warning': plusTwo})}
							>
								{'+2'}
							</Button>
						)}
						{actionsDisabled ? null : (
							<Button
								variant="ghost"
								title="DNF solve"
								onClick={() => dnfSolve(solve)}
								size="sm"
								aria-pressed={dnf}
								className={cn({'text-error': dnf})}
							>
								{'DNF'}
							</Button>
						)}
					</div>
				);
			}
		} else if (targetTime) {
			solveInfo = (
				<span className={classNames(solveInfoClasses, 'text-text/60')}>
					/ {getTimeString(targetTime)}
				</span>
			);
		}

		const content = (
			<div
				className="grid h-[30px] grid-cols-[1fr_135px] flex-row items-center justify-between px-1.5"
				key={id}
			>
				<div className="text-text text-left font-semibold">
					{indexText}{' '}
					<span className="text-inherit opacity-[0.45]">{solveDescription}</span>
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
		<>
			<div className="flex h-full w-full flex-col justify-start">
				<div className="overflow-y-auto">{body}</div>
			</div>
			<Dialog
				open={solveInfoDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setSolveInfoDialog(null);
					}
				}}
			>
				{solveInfoDialog && (
					<DialogContent>
						<DialogTitle className="sr-only">Solve details</DialogTitle>
						<SolveInfo
							{...solveInfoDialog}
							onComplete={() => {
								setSolveInfoDialog((current) =>
									current === solveInfoDialog ? null : current,
								);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
