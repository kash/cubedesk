import React, {useEffect, useState} from 'react';
import {gql} from '@apollo/client';
import {gqlQuery} from '@/components/api';
import TargetSession from '@/components/play/target/target-sessions/TargetSession';
import Empty from '@/components/common/empty/Empty';
import {GAME_SESSION_FRAGMENT} from '@/util/graphql/fragments';
import {getGameMetaData} from '@/components/play/Play';
import ModalHeader from '@/components/common/modal/modal_header/ModalHeader';
import {GameSession} from '../../../../../server/schemas/Game.schema';
import {GameType} from '../../../../../shared/match/consts';
import LoadingIcon from '@/components/common/LoadingIcon';

interface Props {
	gameType: GameType;
}

export default function TargetSessions(props: Props) {
	const {gameType} = props;
	const {name} = getGameMetaData(gameType);

	const [sessions, setSessions] = useState<GameSession[] | null>(null);

	useEffect(() => {
		interface GameSessionQuery {
			gameSessions: GameSession[];
		}

		const query = gql`
			${GAME_SESSION_FRAGMENT}

			query Query {
				gameSessions {
					...GameSessionFragment
				}
			}
		`;

		gqlQuery<GameSessionQuery>(query).then((res) => {
			setSessions(res.data.gameSessions);
		});
	}, []);

	let body;
	if (sessions && sessions.length) {
		body = (
			<div className="max-h-[500px] overflow-y-auto">
				{sessions.map((s) => (
					<TargetSession session={s} gameType={gameType} />
				))}
			</div>
		);
	} else if (sessions && !sessions.length) {
		body = <Empty text="You don't have any sessions at the moment" />;
	} else {
		body = (
			<div className="mx-auto mb-[100px] mt-[70px] text-2xl text-text">
				<LoadingIcon />
			</div>
		);
	}

	return (
		<div>
			<ModalHeader title={`${name} Sessions`} />
			<div className="flex flex-col">{body}</div>
		</div>
	);
}
