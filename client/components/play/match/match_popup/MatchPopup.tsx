import React, {createContext, useEffect, useState} from 'react';
import {socketClient} from '../../../../util/socket/socketio';
import {getGameLink} from '../../game/Game';
import {reactState} from '../../../../@types/react';
import JoinOptions from './join_options/JoinOptions';
import Lobby from './lobby/Lobby';
import CustomMatch from './custom_match/CustomMatch';
import CustomMatchOptions from './custom_match/custom_match_options/CustomMatchOptions';
import {GameType} from '../../../../../shared/match/consts';

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

export const MatchPopupContext = createContext<IMatchPopupContext>(null);

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

	let body = null;
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
