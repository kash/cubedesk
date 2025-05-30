import React, {useEffect, useState} from 'react';
import './TargetSessions.scss';
import TargetSession from './target_session/TargetSession';
import Empty from '@/components/common/empty/Empty';
import {getGameMetaData} from '@/components/play/Play';
import ModalHeader from '@/components/common/modal/modal_header/ModalHeader';
import {GameType} from '@/shared/match/consts';
import {GameSession} from '@/generated/zod';
import LoadingIcon from '@/components/common/LoadingIcon';
import {api} from '@/trpc/react';

interface Props {
	gameType: GameType;
}

export default function TargetSessions(props: Props) {
	const {gameType} = props;
	const {name} = getGameMetaData(gameType);

	const [sessions, setSessions] = useState(null);

	useEffect(() => {
		// TODO: Migrate to tRPC - need game.getGameSessions query
		// const gameSessionsQuery = api.game.getGameSessions.useQuery();
		// setSessions(gameSessionsQuery.data || []);

		setSessions([]);
	}, []);

	let body;
	if (sessions && sessions.length) {
		body = (
			<div className="cd-community__sessions__list">
				{sessions.map((s) => (
					<TargetSession session={s} gameType={gameType} />
				))}
			</div>
		);
	} else if (sessions && !sessions.length) {
		body = <Empty text="You don't have any sessions at the moment" />;
	} else {
		body = <LoadingIcon />;
	}

	return (
		<div className="cd-community__sessions">
			<ModalHeader title={`${name} Sessions`} />
			<div className="cd-community__sessions__body">{body}</div>
		</div>
	);
}
