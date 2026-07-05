import {reactState} from '@/@types/react';
import {getGameLink} from '@/components/play/game/Game';
import CustomMatch from '@/components/play/match/match-popup/custom-match/CustomMatch';
import CustomMatchOptions from '@/components/play/match/match-popup/custom-match/CustomMatchOptions';
import JoinOptions from '@/components/play/match/match-popup/JoinOptions';
import Lobby from '@/components/play/match/match-popup/Lobby';
import {socketClient} from '@/util/socket/socketio';
import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {GameType} from '@/shared/match/consts';

export enum MatchPopupPage {
	HOME = 'home',
	LOBBY = 'lobby',
	CUSTOM_OPTIONS = 'custom_options',
	CUSTOM = 'custom',
}

interface Props {
	joinLobby?: boolean;
	matchType: GameType;
	cubeType: string;
	minPlayers: number;
	maxPlayers: number;
}

export interface IMatchPopupContext extends Props {
	page: MatchPopupPage;
	setPage: reactState<MatchPopupPage>;

	setMinPlayers: reactState<number>;
	setMaxPlayers: reactState<number>;
	setCubeType: reactState<string>;
}

export const MatchPopupContext = createContext<IMatchPopupContext | null>(null);

export function useMatchPopupContext(): IMatchPopupContext {
	const ctx = useContext(MatchPopupContext);
	if (!ctx) {
		throw new Error('useMatchPopupContext must be used within MatchPopupContext.Provider');
	}
	return ctx;
}

export default function MatchPopup(props: Props) {
	const {matchType} = props;

	const [page, setPage] = useState<MatchPopupPage>(props.joinLobby ? MatchPopupPage.LOBBY : MatchPopupPage.HOME);
	const [minPlayers, setMinPlayers] = useState<number>(props.minPlayers);
	const [maxPlayers, setMaxPlayers] = useState<number>(props.maxPlayers);
	const [cubeType, setCubeType] = useState<string>(props.cubeType);

	useEffect(() => {
		socketClient().on('matchUpdated', (data) => {
			window.location.href = getGameLink(matchType, data.match.link_code);
		});
	}, []);

	const context: IMatchPopupContext = {
		...props,
		page,
		setPage,
		minPlayers,
		setMinPlayers,
		maxPlayers,
		setMaxPlayers,
		cubeType,
		setCubeType,
	};

	let body: ReactNode = null;
	switch (page) {
		case MatchPopupPage.HOME: {
			body = <JoinOptions />;
			break;
		}
		case MatchPopupPage.LOBBY: {
			body = <Lobby onCancel={() => setPage(MatchPopupPage.HOME)} matchType={matchType} />;
			break;
		}
		case MatchPopupPage.CUSTOM_OPTIONS: {
			body = <CustomMatchOptions />;
			break;
		}
		case MatchPopupPage.CUSTOM: {
			body = <CustomMatch />;
			break;
		}
	}

	return <MatchPopupContext.Provider value={context}>{body}</MatchPopupContext.Provider>;
}
