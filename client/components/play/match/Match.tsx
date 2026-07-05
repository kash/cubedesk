import {reactState} from '@/@types/react';
import {openModal} from '@/actions/general';
import {copyText} from '@/components/common/CopyText';
import Dropdown from '@/components/common/inputs/dropdown/Dropdown';
import Modal from '@/components/common/modal/Modal';
import ChatBox from '@/components/modules/chat/ChatBox';
import History from '@/components/modules/history/History';
import {GameContext} from '@/components/play/game/Game';
import {updateMatchState} from '@/components/play/match/helpers/state';
import Listeners from '@/components/play/match/Listeners';
import MatchOver from '@/components/play/match/match-over/MatchOver';
import {getMatchLinkBase} from '@/components/play/match/match-popup/custom-match/CustomMatch';
import {ChallengerProps} from '@/components/play/target/challengers/Challenger';
import {TimerProps} from '@/components/timer/@types/interfaces';
import Timer from '@/components/timer/Timer';
import {MatchConst} from '@/client/shared/match/consts';
import {MatchUpdateChat} from '@/client/shared/match/types';
import {Match as MatchSchema} from '@/types/match';
import {MatchSession} from '@/types/match';
import {Solve} from '@/types/solve';
import {PublicUserAccount} from '@/types/user';
import {useMe} from '@/util/hooks/useMe';
import {isSocketConnected, socketClient} from '@/util/socket/socketio';
import {toastSuccess} from '@/util/toast';
import {CaretDown, Copy, Flag, Prohibit} from 'phosphor-react';
import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {GameType} from '@/shared/match/consts';

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
	scramble: string | null;
	setScramble: reactState<string | null>;
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
	match: MatchSchema | null;
	setMatch: reactState<MatchSchema | null>;
	matchSession: MatchSession | null;
	setMatchSession: reactState<MatchSession | null>;

	// More
	winnerId: React.MutableRefObject<string>;
	watchingPlayerId: React.MutableRefObject<string>;
	matchLoaded: React.MutableRefObject<boolean>;
	exitMatch: () => void;
}

export const MatchContext = createContext<IMatchContext | null>(null);

export function useMatchContext(): IMatchContext {
	const ctx = useContext(MatchContext);
	if (!ctx) {
		throw new Error('useMatchContext must be used within MatchContext.Provider');
	}
	return ctx;
}

export default function Match(props: MatchProps) {
	const {linkCode, matchType, matchPath, onSolve, timerParams} = props;

	const gameContext = useContext(GameContext);
	const dispatch = useDispatch();
	const matchLoaded = useRef(false);

	const [scramble, setScramble] = useState<string | null>(null);
	const [matchOver, setMatchOver] = useState<boolean>(false);

	const [inGame, setInGame] = useState(false);
	const [timerDisabled, setTimerDisabled] = useState(false);
	const [spectateQueueSize, setSpectateQueueSize] = useState(0);
	const [rematchRoomSize, setRematchRoomSize] = useState(0);
	const [spectating, setSpectating] = useState(
		!!(linkCode && linkCode.startsWith(MatchConst.SPECTATE_LINK_CODE_PREFIX))
	);
	const [hideTimer, setHideTimer] = useState(false);
	const [match, setMatch] = useState<MatchSchema | null>(null);
	const [matchSession, setMatchSession] = useState<MatchSession | null>(null);

	const winnerId = useRef('');
	const watchingPlayerId = useRef('');

	const me = useMe();

	function exitMatch() {
		history.replaceState({}, '', window.location.origin + matchPath);
		window.location.reload();
	}

	useEffect(() => {
		if (matchOver && match) {
			dispatch(
				openModal(<MatchOver exitMatch={exitMatch} match={match} matchType={matchType} />, {
					noPadding: true,
				})
			);
		}
	}, [matchOver, match]);

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
			openModal(<History disabled solves={solves as any} />, {
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
			if (!player.user) {
				continue;
			}

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
				selectable: !!spectating,
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
		if (match?.id) {
			solve.match_id = match.id;
		}

		if (onSolve) {
			await onSolve(solve, match ?? undefined);
		}

		if (match?.id) {
			socketClient().emit('playerSolveSaved', match.id, solve as any);
		}
	}

	function resignGame() {
		if (!match?.id) {
			return;
		}
		socketClient().emit('playerResignedMatch', match.id);
	}

	function abortGame() {
		if (!match?.id) {
			return;
		}
		socketClient().emit('playerAbortedMatch', match.id);
	}

	function copySpectateLink() {
		if (!match?.spectate_code) {
			return;
		}
		const link = getMatchLinkBase(matchType) + match.spectate_code;
		copyText(link);
		toastSuccess('Successfully copied Spectate link');
	}

	function copyPlayLink() {
		if (!match?.link_code) {
			return;
		}
		const link = getMatchLinkBase(matchType) + match.link_code;
		copyText(link);
		toastSuccess('Successfully copied Play link');
	}

	// Timer
	let timer: React.ReactNode = null;

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
			const footerModules = params.timerCustomFooterModules;
			if (footerModules?.length) {
				footerModules[footerModules.length - 1] = {
					hideAllOptions: true,
					customBody: () => {
						const chatMessages: MatchUpdateChat[] = (matchSession?.chat_messages || [])
							.filter((msg) => msg.user)
							.map((msg) => ({
								id: msg.id,
								message: msg.message,
								user: msg.user!,
							}));

						return {
							module: (
								<ChatBox
									matchType={matchType}
									messages={chatMessages}
									match={match}
									disabled={!!spectating}
								/>
							),
						};
					},
				};
			}

			timerBody = (
				<Timer
					{...params}
					onSolve={matchOnSolve}
					scramble={params.disabled ? ' ' : scramble || ''}
					disabled={!!params.disabled || !!spectating}
					hideScramble={!!params.disabled}
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
				<div>{timer}</div>;
			</Listeners>
		</MatchContext.Provider>
	);
}
