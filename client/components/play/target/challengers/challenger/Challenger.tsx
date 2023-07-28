import React, {useContext, useEffect, useRef, useState} from 'react';
import './Challenger.scss';
import {Placeholder, WifiSlash, Check, Clock, X, Trophy} from 'phosphor-react';
import {addEventListener} from '../../../../../util/event_handler';
import {getTimeString} from '../../../../../util/time';
import Avatar from '../../../../common/avatar/Avatar';
import Emblem from '../../../../common/emblem/Emblem';
import {getMatchClientEvent} from '../../../../../shared/match/client_events';
import {MatchClientEvent} from '../../../../../shared/match/events';
import block from '../../../../../styles/bem';
import {MatchStanding, PlayerStatus} from '../../../../../shared/match/types';
import {MatchContext} from '../../../match/Match';
import {Solve} from '../../../../../../server/schemas/Solve.schema';
import {PublicUserAccount} from '../../../../../../server/schemas/UserAccount.schema';
import {useMe} from '../../../../../util/hooks/useMe';

const b = block('challenger');

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
	const [standing, setStanding] = useState<MatchStanding>(null);
	const [leaveCounter, setLeaveCounter] = useState(null);
	const [solves, setSolves] = useState(props.solves);
	const [time, setTime] = useState(0);

	const me = useMe();
	const timerStopped = useRef(false);
	const timerCounter = useRef<NodeJS.Timeout>(null);
	const leaveCountdown = useRef<NodeJS.Timeout>(null);

	const rated = matchContext?.match?.match_session?.rated;
	const userId = challenger.id;

	useEffect(() => {
		addEventListener<any>(getMatchClientEvent(MatchClientEvent.START_OPPONENT_TIME, userId), startTimer);
		addEventListener<any>(getMatchClientEvent(MatchClientEvent.STOP_OPPONENT_TIME, userId), stopTimer);
		addEventListener<any>(getMatchClientEvent(MatchClientEvent.OPPONENT_SOLVE_UPDATED, userId), updateLastSolve);
		addEventListener<any>(getMatchClientEvent(MatchClientEvent.UPDATE_OPPONENT_STATUS, userId), updateStanding);
		addEventListener<any>(getMatchClientEvent(MatchClientEvent.OPPONENT_TIME_SAVED, userId), solveAddedToHistory);
		addEventListener<any>(getMatchClientEvent(MatchClientEvent.OPPONENT_REJOINED_MATCH, userId), rejoinedMatch);
		addEventListener<any>(getMatchClientEvent(MatchClientEvent.OPPONENT_LEFT_MATCH, userId), leaveMatch);
		addEventListener<any>(getMatchClientEvent(MatchClientEvent.OPPONENT_FORFEITED_MATCH, userId), forfeitedMatch);
		addEventListener<any>(getMatchClientEvent(MatchClientEvent.OPPONENT_RESIGNED_MATCH, userId), resignedMatch);
	}, []);

	function forfeitedMatch() {
		clearInterval(leaveCountdown.current);
		setLeaveCounter(null);
	}

	function resignedMatch() {
		clearInterval(leaveCountdown.current);
		setLeaveCounter(null);
	}

	function leaveMatch({secondsToReturn}) {
		if (!secondsToReturn) {
			return;
		}

		setLeaveCounter(secondsToReturn);
		leaveCountdown.current = setInterval(() => {
			setLeaveCounter((val) => Math.max(val - 1, 0));
		}, 1000);
	}

	function rejoinedMatch() {
		clearInterval(leaveCountdown.current);
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
			clearInterval(timerCounter.current);
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
			className={b({
				selectable,
				me: userId === me.id,
				selected: selectedChallengerId === challenger.id,
			})}
		>
			<div className={b('info')}>
				<div className={b('user')}>
					<Avatar
						hideBadges
						showEloType="333"
						target="_blank"
						small
						user={challenger}
						profile={challenger.profile}
					/>
				</div>
				<div className={b('data')}>
					<div className={b('points')}>
						<span className={b('points-val')}>{standing?.points || 0}</span>
						<span className={b('points-label')}>POINT{standing?.points === 1 ? '' : 'S'}</span>
					</div>
				</div>
			</div>
			<div className={b('footer')}>
				<div className={b('status')}>{statusIcon}</div>
				<div>
					<span className={b('time', {solving: solving || done})}>{timeStr}</span>
				</div>
			</div>
		</div>
	);
}
