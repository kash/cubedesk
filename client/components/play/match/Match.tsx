import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import './Match.scss';
import {isSocketConnected, socketClient} from '../../../util/socket/socketio';
import Modal from '../../common/modal/Modal';
import Timer from '../../timer/Timer';
import ChatBox from '../../modules/chat/ChatBox';
import {Match as MatchSchema} from '../../../../server/schemas/Match.schema';
import {TimerProps} from '../../timer/@types/interfaces';
import {reactState} from '../../../@types/react';
import Listeners from './Listeners';
import {MatchConst} from '../../../shared/match/consts';
import {ChallengerProps} from '../target/challengers/challenger/Challenger';
import {openModal} from '../../../actions/general';
import History from '../../modules/history/History';
import {updateMatchState} from './helpers/state';
import {GameContext} from '../game/Game';
import {useMe} from '../../../util/hooks/useMe';
import Dropdown from '../../common/inputs/dropdown/Dropdown';
import {getMatchLinkBase} from './match_popup/custom_match/CustomMatch';
import {toastSuccess} from '../../../util/toast';
import {Prohibit, CaretDown, Copy, Flag} from 'phosphor-react';
import {copyText} from '../../common/copy_text/CopyText';
import MatchOver from './match_over/MatchOver';
import {MatchSession} from '../../../../server/schemas/MatchSession.schema';
import {PublicUserAccount} from '../../../../server/schemas/UserAccount.schema';
import {GameType} from '../../../../shared/match/consts';
import {Solve} from '../../../@types/generated/graphql';

interface MatchProps {
	matchPath: string;
	matchType: GameType;
	linkCode: string;
	onClose: () => void;
	minPlayers: number;
	maxPlayers: number;
	updateSolves: (solves: Solve[]) => void;
	cubeType: string;
	solveIndex: number;
	onSolve: (solve: Solve, match?: MatchSchema) => void;
	timerParams: TimerProps;
}

export interface IMatchContext extends MatchProps {
	// State
	scramble: string;
	setScramble: reactState<string>;
	inGame: boolean;
	setInGame: reactState<boolean>;
	matchOver: boolean;
	setMatchOver: reactState<boolean>;
	challengers: ChallengerProps[];
	timerDisabled: boolean;
	setTimerDisabled: reactState<boolean>;
	spectateQueueSize: number;
	setSpectateQueueSize: reactState<number>;
	rematchRoomSize: number;
	setRematchRoomSize: reactState<number>;
	spectating: boolean;
	setSpectating: reactState<boolean>;
	hideTimer: boolean;
	setHideTimer: reactState<boolean>;
	match: MatchSchema;
	setMatch: reactState<MatchSchema>;
	matchSession: MatchSession;
	setMatchSession: reactState<MatchSession>;

	// More
	winnerId: React.MutableRefObject<string>;
	watchingPlayerId: React.MutableRefObject<string>;
	matchLoaded: React.MutableRefObject<boolean>;
	exitMatch: () => void;
}

export const MatchContext = createContext<IMatchContext>(null);

export default function Match(props: MatchProps) {
	const {linkCode, matchType, matchPath, onSolve, timerParams} = props;

	const gameContext = useContext(GameContext);
	const dispatch = useDispatch();
	const matchLoaded = useRef(false);

	const [scramble, setScramble] = useState<string>(null);
	const [matchOver, setMatchOver] = useState<boolean>(false);

	const [inGame, setInGame] = useState(false);
	const [timerDisabled, setTimerDisabled] = useState(false);
	const [spectateQueueSize, setSpectateQueueSize] = useState(0);
	const [rematchRoomSize, setRematchRoomSize] = useState(0);
	const [spectating, setSpectating] = useState(linkCode && linkCode.startsWith(MatchConst.SPECTATE_LINK_CODE_PREFIX));
	const [hideTimer, setHideTimer] = useState(false);
	const [match, setMatch] = useState<MatchSchema>(null);
	const [matchSession, setMatchSession] = useState<MatchSession>(null);

	const winnerId = useRef('');
	const watchingPlayerId = useRef('');

	const me = useMe();

	function exitMatch() {
		history.replaceState({}, null, window.location.origin + matchPath);
		window.location.reload();
	}

	useEffect(() => {
		if (matchOver) {
			dispatch(
				openModal(<MatchOver exitMatch={exitMatch} match={match} matchType={matchType} />, {
					noPadding: true,
				})
			);
		}
	}, [matchOver]);

	// Send heartbeat every 2 seconds
	useEffect(() => {
		const heartbeatInterval = setInterval(() => {
			if (!match) {
				return;
			}
			socketClient().emit('matchHeartbeat', match?.id);
		}, 2000);

		return () => {
			clearInterval(heartbeatInterval);
		};
	}, [match]);

	function clickChallengerActionButton(challenger: PublicUserAccount, solves: Solve[]) {
		dispatch(
			openModal(<History disabled solves={solves} />, {
				width: 600,
				title: `${challenger.username}'s Times`,
			})
		);
	}

	function getChallengers() {
		const challengers: ChallengerProps[] = [];

		if (!match || !match.participants || !match.participants.length) {
			return challengers;
		}

		for (const player of match.participants) {
			const challengerProps: ChallengerProps = {
				solves: player.solves || [],
				challenger: player.user,
				onSelect: (userId: string) => {
					watchingPlayerId.current = userId;
					updateMatchState(
						match,
						matchOver,
						watchingPlayerId.current,
						gameContext,
						setMatch,
						setMatchSession,
						setMatchOver,
						true
					);
				},
				selectedChallengerId: watchingPlayerId.current,
				winnerId: winnerId.current,
				selectable: spectating,
				clickChallengerActionButton,
			};

			if (player.user_id === me.id) {
				challengers.unshift(challengerProps);
			} else {
				challengers.push(challengerProps);
			}
		}

		return challengers;
	}

	async function matchOnSolve(solve: Solve) {
		solve.match_id = match?.id;

		if (onSolve) {
			await onSolve(solve, match);
		}

		socketClient().emit('playerSolveSaved', match?.id, solve);
	}

	function resignGame() {
		socketClient().emit('playerResignedMatch', match?.id);
	}

	function abortGame() {
		socketClient().emit('playerAbortedMatch', match?.id);
	}

	function copySpectateLink() {
		const link = getMatchLinkBase(matchType) + match.spectate_code;
		copyText(link);
		toastSuccess('Successfully copied Spectate link');
	}

	function copyPlayLink() {
		const link = getMatchLinkBase(matchType) + match.link_code;
		copyText(link);
		toastSuccess('Successfully copied Play link');
	}

	// Timer
	let timer = null;

	const anySolves = match?.participants?.some((p) => p.solves && p.solves.length);

	const params: TimerProps = {
		...timerParams,
		headerOptions: {
			...timerParams.headerOptions,
			customHeadersLeft: (
				<Dropdown
					openLeft
					text="Match Options"
					icon={<CaretDown weight="bold" />}
					options={[
						{text: 'Copy Spectate Link', icon: <Copy weight="bold" />, onClick: copySpectateLink},
						{text: 'Copy Play Link', icon: <Copy weight="bold" />, onClick: copyPlayLink},
						{
							text: 'Resign',
							disabled: !!match?.ended_at,
							icon: <Flag weight="bold" />,
							onClick: resignGame,
						},
						{
							text: 'Abort',
							disabled: anySolves || !!match?.ended_at,
							icon: <Prohibit weight="bold" />,
							onClick: abortGame,
						},
					]}
				/>
			),
		},
	};

	if (timerDisabled || winnerId.current || match?.ended_at || !isSocketConnected()) {
		params.disabled = true;
	}

	if (spectating) {
		params.hideTime = true;
	}

	if (match) {
		let timerBody = <div />;

		if (!hideTimer) {
			params.timerCustomFooterModules[params.timerCustomFooterModules.length - 1] = {
				hideAllOptions: true,
				customBody: () => {
					return {
						module: (
							<ChatBox
								matchType={matchType}
								messages={matchSession?.chat_messages || []}
								match={match}
								disabled={spectating}
							/>
						),
					};
				},
			};

			timerBody = (
				<Timer
					{...params}
					onSolve={matchOnSolve}
					scramble={params.disabled ? ' ' : scramble}
					disabled={params.disabled || spectating}
					hideScramble={params.disabled}
				/>
			);
		}

		timer = (
			<Modal onClose={exitMatch} width={1500} zIndex={2000} overFlowHidden fullSize>
				{timerBody}
			</Modal>
		);
	}

	const context: IMatchContext = {
		...props,
		scramble,
		setScramble,
		watchingPlayerId,
		inGame,
		setInGame,
		matchOver,
		setMatchOver,
		timerDisabled,
		exitMatch,
		setTimerDisabled,
		spectateQueueSize,
		challengers: getChallengers(),
		setSpectateQueueSize,
		rematchRoomSize,
		setRematchRoomSize,
		spectating,
		winnerId,
		setSpectating,
		matchLoaded,
		hideTimer,
		setHideTimer,
		match,
		setMatch,
		matchSession,
		setMatchSession,
	};

	return (
		<MatchContext.Provider value={context}>
			<Listeners>
				<div className="cd-match">{timer}</div>;
			</Listeners>
		</MatchContext.Provider>
	);
}
