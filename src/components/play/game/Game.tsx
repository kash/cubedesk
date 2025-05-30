import React, {createContext, ReactNode, useEffect, useState, useCallback} from 'react';
import './Game.scss';
import {getGameMetaData} from '@/app/play/page';
import {useDispatch} from 'react-redux';
import {openModal} from '@/lib/actions/general';
import TargetSessions from '@/components/play/target/target_sessions/TargetSessions';
import {getExistingMatch} from '@/components/play/helpers/match';
import {useParams} from 'next/navigation';
import GameChallenger from '@/components/play/game/game_challenger/GameChallenger';
import GameTimer from '@/components/play/game/game_timer/GameTimer';
import {Dispatch, SetStateAction} from 'react';
import {useMe} from '@/lib/util/hooks/useMe';
import {PlayerStatus} from '@/lib/shared/match/types';
import Button from '@/components/common/button/Button';
import {getNewScramble} from '@/components/timer/helpers/scramble';
import {getCubeTypeInfoById} from '@/lib/util/cubes/util';
// Solve and Match types will need to be imported from generated/zod once available
import {GameType} from '@/shared/match/consts';
import classNames from 'classnames';

export interface GameSolveRow {
	id: string;
	index: number;
	indexText: string;
	solveStatus: PlayerStatus;
	solveTime?: number;
	solve: any;
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

export type SolveRowInfo = (myId: string, timeIndex: number, solves: any[], match?: any) => GameSolveRow;
export type PlayerStatusFn = (myId: string, timeIndex: number, solves: any[], match?: any) => PlayerStatusInfo;

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
	setShowTimer: Dispatch<SetStateAction<boolean>>;
	timeIndex: number;
	setTimeIndex: Dispatch<SetStateAction<number>>;
	scramble: string;
	setScramble: Dispatch<SetStateAction<string>>;
	solves: Solve[];
	setSolves: Dispatch<SetStateAction<Solve[]>>;
	sessionId: string;
	setSessionId: Dispatch<SetStateAction<string>>;
	matchOpen: boolean;
	setMatchOpen: Dispatch<SetStateAction<boolean>>;
	cubeType: string;
	setCubeType: Dispatch<SetStateAction<string>>;

	// More
	toggleTimer: () => void;
	closeTimer: () => void;
	linkCode: string;
	updateScramble: () => void;
	retrySolve: () => void;
}

export const GameContext = createContext<IGameContext>(null);

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
	const [solves, setSolves] = useState<any[]>([]);
	const [sessionId, setSessionId] = useState(null);
	const [matchOpen, setMatchOpen] = useState(false);

	const dispatch = useDispatch();
	const params = useParams();
	const linkCode = params.linkCode as string;

	const openSessions = useCallback(() => {
		dispatch(openModal(<TargetSessions gameType={gameType} />));
	}, [dispatch, gameType]);

	const updateScramble = useCallback(() => {
		let scramble;
		if (getScramble) {
			scramble = getScramble(timeIndex);
		} else {
			const ct = getCubeTypeInfoById(cubeType);
			scramble = getNewScramble(ct.scramble);
		}

		setScramble(scramble);
	}, [getScramble, timeIndex, cubeType]);

	const toggleTimer = useCallback(() => {
		setShowTimer(!showTimer);
		setSessionId(null);
		setTimeIndex(0);
		setSolves([]);
		setMatchOpen(false);
		updateScramble();
	}, [showTimer, updateScramble]);

	const closeTimer = useCallback(() => {
		setShowTimer(false);
		setSessionId(null);
		setTimeIndex(0);
		setSolves([]);
		setMatchOpen(false);
		updateScramble();
	}, [updateScramble]);

	// TODO FUTURE handle this on the DB side
	const retrySolve = useCallback(() => {
		const solvesRep = [...solves];
		solvesRep.pop();
		setTimeIndex(solvesRep.length);
		setSolves(solvesRep);
	}, [solves]);

	useEffect(() => {
		updateScramble();

		getExistingMatch(me.id, linkCode, true).then((existingMatch) => {
			if (existingMatch) {
				setCubeType(existingMatch?.match_session?.game_options?.cube_type || defaultCubeType);
				setMatchOpen(true);
			}
		});
	}, [updateScramble, me?.id, linkCode, defaultCubeType]);

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

	let playButton = (
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
							<i className={classNames(icon, 'text-4xl')} />
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
