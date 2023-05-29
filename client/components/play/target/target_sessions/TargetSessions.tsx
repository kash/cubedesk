import React, {useEffect, useState} from 'react';
import {gql} from '@apollo/client';
import './TargetSessions.scss';
import {gqlQuery} from '../../../api';
import TargetSession from './target_session/TargetSession';
import Empty from '../../../common/empty/Empty';
import {GAME_SESSION_FRAGMENT} from '../../../../util/graphql/fragments';
import {getGameMetaData} from '../../Play';
import ModalHeader from '../../../common/modal/modal_header/ModalHeader';
import {GameType} from '../../../../../shared/match/consts';
import {GameSession} from '../../../../../server/schemas/Game.schema';
import LoadingIcon from '../../../common/LoadingIcon';

interface Props {
	gameType: GameType;
}

export default function TargetSessions(props: Props) {
	const {gameType} = props;
	const {name} = getGameMetaData(gameType);

	const [sessions, setSessions] = useState(null);

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
