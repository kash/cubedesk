import {getMatchClientEvent} from '@/client/shared/match/client-events';
import {MatchClientEvent} from '@/client/shared/match/events';
import {MatchStanding, PlayerStatus} from '@/client/shared/match/types';
import Avatar from '@/components/common/avatar/Avatar';
import Emblem from '@/components/common/Emblem';
import {MatchContext} from '@/components/play/match/Match';
import {Solve} from '@/types/solve';
import {PublicUserAccount} from '@/types/user';
import {addEventListener} from '@/util/event_handler';
import {useMe} from '@/util/hooks/useMe';
import {getTimeString} from '@/util/time';
import classNames from 'classnames';
import {Check, Clock, Placeholder, Trophy, WifiSlash, X} from 'phosphor-react';
import React, {useContext, useEffect, useRef, useState} from 'react';

export interface ChallengerProps {
	solves: Solve[];
	challenger: PublicUserAccount;
	onSelect: (userId: string) => void;
	selectedChallengerId: string;
	winnerId: string;
	selectable: boolean;
	clickChallengerActionButton: (challenger: PublicUserAccount, solves: Solve[]) => void;
}

const statusIconMap = {
	[PlayerStatus.None]: <Emblem small icon={<Placeholder weight="bold" />} />,
	[PlayerStatus.Disconnected]: <Emblem small red icon={<WifiSlash weight="bold" />} />,
	[PlayerStatus.Waiting]: <Emblem small green icon={<Check weight="bold" />} />,
	[PlayerStatus.Playing]: <Emblem small orange icon={<Clock weight="bold" />} />,
	[PlayerStatus.Lost]: <Emblem small red icon={<X weight="bold" />} />,
	[PlayerStatus.Won]: <Emblem small green icon={<Trophy weight="bold" />} />,
};

export default function Challenger(props: ChallengerProps) {
	const {challenger, onSelect, selectedChallengerId, selectable} = props;

	const matchContext = useContext(MatchContext);
	const [standing, setStanding] = useState<MatchStanding | null>(null);
	const [leaveCounter, setLeaveCounter] = useState<number | null>(null);
	const [solves, setSolves] = useState(props.solves);
	const [time, setTime] = useState(0);

	const me = useMe();
	const timerStopped = useRef(false);
	const timerCounter = useRef<NodeJS.Timeout>(null);
	const leaveCountdown = useRef<NodeJS.Timeout>(null);

	const rated = matchContext?.match?.match_session?.rated;
	const userId = challenger.id;

	useEffect(() => {
		addEventListener<any>(
			getMatchClientEvent(MatchClientEvent.START_OPPONENT_TIME, userId),
			startTimer,
		);
		addEventListener<any>(
			getMatchClientEvent(MatchClientEvent.STOP_OPPONENT_TIME, userId),
			stopTimer,
		);
		addEventListener<any>(
			getMatchClientEvent(MatchClientEvent.OPPONENT_SOLVE_UPDATED, userId),
			updateLastSolve,
		);
		addEventListener<any>(
			getMatchClientEvent(MatchClientEvent.UPDATE_OPPONENT_STATUS, userId),
			updateStanding,
		);
		addEventListener<any>(
			getMatchClientEvent(MatchClientEvent.OPPONENT_TIME_SAVED, userId),
			solveAddedToHistory,
		);
		addEventListener<any>(
			getMatchClientEvent(MatchClientEvent.OPPONENT_REJOINED_MATCH, userId),
			rejoinedMatch,
		);
		addEventListener<any>(
			getMatchClientEvent(MatchClientEvent.OPPONENT_LEFT_MATCH, userId),
			leaveMatch,
		);
		addEventListener<any>(
			getMatchClientEvent(MatchClientEvent.OPPONENT_FORFEITED_MATCH, userId),
			forfeitedMatch,
		);
		addEventListener<any>(
			getMatchClientEvent(MatchClientEvent.OPPONENT_RESIGNED_MATCH, userId),
			resignedMatch,
		);
	}, []);

	function forfeitedMatch() {
		if (leaveCountdown.current) {
			clearInterval(leaveCountdown.current);
		}
		setLeaveCounter(null);
	}

	function resignedMatch() {
		if (leaveCountdown.current) {
			clearInterval(leaveCountdown.current);
		}
		setLeaveCounter(null);
	}

	function leaveMatch({secondsToReturn}) {
		if (!secondsToReturn) {
			return;
		}

		setLeaveCounter(secondsToReturn);
		leaveCountdown.current = setInterval(() => {
			setLeaveCounter((val) => Math.max((val || 0) - 1, 0));
		}, 1000);
	}

	function rejoinedMatch() {
		if (leaveCountdown.current) {
			clearInterval(leaveCountdown.current);
		}
		leaveCountdown.current = null;
		setLeaveCounter(null);
	}

	function updateLastSolve({solve}) {
		const newSolves = [...solves];
		newSolves.pop();
		newSolves.push(solve);

		setSolves(newSolves);
		setTime(solve.time);
	}

	function solveAddedToHistory({solve}) {
		const newSolves = [...solves];
		newSolves.push(solve);

		setSolves(newSolves);
		setTime(solve.time);
	}

	function updateStanding(data: MatchStanding) {
		// If user had left, but is now back, rejoin them
		if (data.inRoom && leaveCountdown.current) {
			rejoinedMatch();
		}

		setStanding(data);
	}

	function startTimer({startedAt}) {
		if (timerCounter.current) {
			return;
		}
		timerCounter.current = setInterval(() => {
			const now = new Date();
			const newTime = (now.getTime() - new Date(startedAt).getTime()) / 1000;

			if (timerStopped.current) return;

			setTime(newTime);
		}, 10);
	}

	function stopTimer(data) {
		if (!timerCounter.current) {
			return;
		}
		setTime(data.finalTime);
		timerStopped.current = true;
		setTimeout(() => {
			timerStopped.current = false;
			if (timerCounter.current) {
				clearInterval(timerCounter.current);
			}
			timerCounter.current = null;
		});
	}

	let sub = '-';
	if (standing) {
		sub = `${standing.points} point${standing.points === 1 ? '' : 's'}`;
	}

	let displayTime = time;
	if (time < 0) {
		displayTime = 0;
	}

	let timeStr = getTimeString(displayTime, 2);
	let statusIcon = statusIconMap[standing?.status || PlayerStatus.Playing] || null;
	if (leaveCounter) {
		statusIcon = <Emblem small red icon={<WifiSlash weight="bold" />} text={leaveCounter} />;
	}

	const solving = timerCounter.current && displayTime && rated;
	if (solving) {
		timeStr = 'solving';
	}

	const done = standing?.status === PlayerStatus.Waiting;
	if (done) {
		timeStr = 'done';
	}

	return (
		<div
			onClick={() => {
				if (!selectable) return;

				onSelect(challenger.id);
			}}
			className={classNames(
				'bg-background relative box-border flex h-full w-full flex-col justify-between rounded-[5px] border-[3px] border-transparent p-2.5',
				{
					'cursor-pointer': selectable,
					'border-primary/90': userId === me.id,
					'border-info': selectedChallengerId === challenger.id,
				},
			)}
		>
			<div className="flex flex-row items-start justify-between">
				<div className="flex flex-col items-start">
					<Avatar
						hideBadges
						showEloType="333"
						target="_blank"
						small
						user={challenger}
						profile={challenger.profile}
					/>
				</div>
				<div className="flex flex-col items-end">
					<div className="mb-[3px] flex flex-col items-end">
						<span className="text-text mb-0.5 text-center text-[1.7rem] leading-[1.7rem] font-bold">
							{standing?.points || 0}
						</span>
						<span className="text-text text-center text-[0.67rem] font-black opacity-60">
							POINT{standing?.points === 1 ? '' : 'S'}
						</span>
					</div>
				</div>
			</div>
			<div className="border-t-tmo-button/10 mt-[5px] flex flex-row items-center justify-between border-t-2 pt-[5px]">
				<div className="flex [zoom:0.7] flex-row items-center">
					<div className="mr-2 flex">{statusIcon}</div>
				</div>
				<div>
					<span
						className={classNames(
							"text-text font-['Roboto_Mono',monospace] text-[1.1rem] font-bold opacity-70",
							{
								'text-success opacity-100': solving || done,
							},
						)}
					>
						{timeStr}
					</span>
				</div>
			</div>
		</div>
	);
}
