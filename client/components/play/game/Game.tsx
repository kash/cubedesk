import {reactState} from '@/@types/react';
import {openModal} from '@/actions/general';
import {PlayerStatus} from '@/client/shared/match/types';
import Button from '@/components/common/Button';
import GameChallenger from '@/components/play/game/GameChallenger';
import GameTimer from '@/components/play/game/GameTimer';
import {getExistingMatch} from '@/components/play/helpers/match';
import {getGameMetaData} from '@/components/play/Play';
import TargetSessions from '@/components/play/target/target-sessions/TargetSessions';
import {getNewScramble} from '@/components/timer/helpers/scramble';
import {GameType} from '@/shared/match/consts';
import {Match} from '@/types/match';
import {Solve} from '@/types/solve';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useMe} from '@/util/hooks/useMe';
import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useRouteMatch} from 'react-router-dom';

export interface GameSolveRow {
	id: string;
	index: number;
	indexText: string;
	solveStatus: PlayerStatus;
	solveTime?: number;
	solve: Solve;
	targetTime?: number;
	solveDescription?: string;
}

export interface PlayerStatusInfo {
	status: PlayerStatus;
	statusBody: string;
	points: number;
	statusSubHeader?: string;
	statusPrompt: string;
}

export type SolveRowInfo = (
	myId: string,
	timeIndex: number,
	solves: Solve[],
	match?: Match,
) => GameSolveRow;
export type PlayerStatusFn = (
	myId: string,
	timeIndex: number,
	solves: Solve[],
	match?: Match,
) => PlayerStatusInfo;

interface GameProps {
	gameType: GameType;
	defaultCubeType: string;
	loaded: boolean;
	getMetaId?: (timeIndex: number) => string;
	getScramble?: (timeIndex: number) => string;
	getPlayerStatusInfo: PlayerStatusFn;
	getSolveRowInfo: SolveRowInfo;
	visual1?: ReactNode;
	visual2?: ReactNode;
	visual3?: (context: IGameContext) => ReactNode;
	multiplayer?: boolean;
	multiplayerOnly?: boolean;
}

export interface IGameContext extends GameProps {
	// State
	showTimer: boolean;
	setShowTimer: reactState<boolean>;
	timeIndex: number;
	setTimeIndex: reactState<number>;
	scramble: string;
	setScramble: reactState<string>;
	solves: Solve[];
	setSolves: reactState<Solve[]>;
	sessionId: string | null;
	setSessionId: reactState<string | null>;
	matchOpen: boolean;
	setMatchOpen: reactState<boolean>;
	cubeType: string;
	setCubeType: reactState<string>;

	// More
	toggleTimer: () => void;
	closeTimer: () => void;
	linkCode?: string;
	updateScramble: () => void;
	retrySolve: () => void;
}

export const GameContext = createContext<IGameContext>({} as IGameContext);

export function getGameLink(gameType: GameType, linkCode?: string) {
	const gameMetaData = getGameMetaData(gameType);
	const base = `/play/${gameMetaData.id}`;
	if (linkCode) {
		return `${base}/${linkCode}`;
	}
	return base;
}

export default function Game(props: GameProps) {
	interface MatchParams {
		linkCode?: string;
	}

	const {getScramble, multiplayerOnly, defaultCubeType, gameType, loaded} = props;
	const {color, name, description, icon} = getGameMetaData(gameType);

	if (!loaded) {
		return null;
	}

	const me = useMe();

	const [cubeType, setCubeType] = useState(defaultCubeType);
	const [showTimer, setShowTimer] = useState(false);
	const [timeIndex, setTimeIndex] = useState(0);
	const [scramble, setScramble] = useState('');
	const [solves, setSolves] = useState<Solve[]>([]);
	const [sessionId, setSessionId] = useState<string | null>(null);
	const [matchOpen, setMatchOpen] = useState(false);

	const dispatch = useDispatch();
	const routeMatch = useRouteMatch<MatchParams>();
	const linkCode = routeMatch.params.linkCode;

	useEffect(() => {
		updateScramble();

		getExistingMatch(me.id, linkCode, true).then((existingMatch) => {
			if (existingMatch) {
				setCubeType(
					existingMatch?.match_session?.game_options?.cube_type || defaultCubeType,
				);
				setMatchOpen(true);
			}
		});
	}, []);

	function openSessions() {
		dispatch(openModal(<TargetSessions gameType={gameType} />));
	}

	function updateScramble() {
		let scramble;
		if (getScramble) {
			scramble = getScramble(timeIndex);
		} else {
			const ct = getCubeTypeInfoById(cubeType);
			scramble = getNewScramble(ct?.scramble ?? cubeType);
		}

		setScramble(scramble);
	}

	function toggleTimer() {
		setShowTimer(!showTimer);
		setSessionId(null);
		setTimeIndex(0);
		setSolves([]);
		setMatchOpen(false);
		updateScramble();
	}

	function closeTimer() {
		setShowTimer(false);
		setSessionId(null);
		setTimeIndex(0);
		setSolves([]);
		setMatchOpen(false);
		updateScramble();
	}

	// TODO FUTURE handle this on the DB side
	function retrySolve() {
		const solvesRep = [...solves];
		solvesRep.pop();
		setTimeIndex(solvesRep.length);
		setSolves(solvesRep);
	}

	const contextValue: IGameContext = {
		...props,
		cubeType,
		setCubeType,
		showTimer,
		setShowTimer,
		timeIndex,
		setTimeIndex,
		scramble,
		setScramble,
		solves,
		setSolves,
		sessionId,
		setSessionId,
		matchOpen,
		setMatchOpen,
		multiplayerOnly,
		linkCode,
		closeTimer,
		updateScramble,
		toggleTimer,
		retrySolve,
	};

	let playButton: ReactNode = (
		<Button fullWidth large primary onClick={toggleTimer}>
			Play {name}
		</Button>
	);
	if (multiplayerOnly) {
		playButton = null;
	}

	return (
		<GameContext.Provider value={contextValue}>
			<div className="h-full">
				<GameTimer />

				<div className="flex h-full flex-col justify-between">
					<div className="flex flex-col items-start gap-3" style={{color}}>
						<div className="flex flex-row items-center gap-2">
							<span className="text-4xl leading-none">{icon}</span>
							<h2 className="text-4xl">{name}</h2>
						</div>
						<p className="text-xl">{description}</p>
					</div>

					<div className="flex flex-col gap-3">
						{playButton}
						<GameChallenger />
					</div>
				</div>
			</div>
		</GameContext.Provider>
	);
}
