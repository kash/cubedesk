import React, {ReactNode} from 'react';
import './TargetSession.scss';
import History from '../../../../modules/history/History';
import Avatar from '../../../../common/avatar/Avatar';
import Emblem from '../../../../common/emblem/Emblem';
import LinkButton from '../../../../common/button/LinkButton';
import {useDispatch} from 'react-redux';
import {openModal} from '../../../../../actions/general';
import {getGameLink} from '../../../game/Game';
import Button from '../../../../common/button/Button';
import {GameSession} from '../../../../../../server/schemas/Game.schema';
import {GameType} from '../../../../../../shared/match/consts';

interface Props {
	gameType: GameType;
	session: GameSession;
}

export default function TargetSession(props: Props) {
	const {session, gameType} = props;

	const dispatch = useDispatch();

	const gameSolves = session.solves;

	function openSolves() {
		dispatch(
			openModal(
				<>
					<h1 className="gameSolves">Solves</h1>
					<History disabled solves={gameSolves} />
				</>,
				{
					width: 500,
				}
			)
		);
	}

	let players: ReactNode = [];
	if (session.match) {
		let rejoin = null;
		if (!session.match.ended_at) {
			rejoin = <LinkButton to={`${getGameLink(gameType)}/${session.match.link_code}`} text="Rejoin Match" />;
		}

		players = (
			<div className="cd-community__sessions__session__players">
				{rejoin}
				<div className="cd-community__sessions__session__players__list">
					{session.match.participants.map((p) => (
						<div className="cd-community__sessions__session__players__player">
							<div className="cd-community__sessions__session__players__player__emblems">
								{p.won ? <Emblem small text="Winner" green /> : null}
							</div>
							<Avatar small target="_blank" profile={p.user.profile} user={p.user} />
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="cd-community__sessions__session">
			{openModal}
			<div className="cd-community__sessions__session__info">
				<h4>
					<span>{gameSolves.length}</span>
					solve{gameSolves.length === 1 ? '' : 's'} completed
				</h4>
				<span>{new Date(session.created_at).toLocaleString()}</span>
			</div>
			<div className="cd-community__sessions__session__actions">
				<Button onClick={openSolves} text="View Solves" />
			</div>
			{players}
		</div>
	);
}
