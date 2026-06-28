import React, {ReactNode} from 'react';
import History from '@/components/modules/history/History';
import Avatar from '@/components/common/avatar/Avatar';
import Emblem from '@/components/common/emblem/Emblem';
import LinkButton from '@/components/common/button/LinkButton';
import {useDispatch} from 'react-redux';
import {openModal} from '@/actions/general';
import {getGameLink} from '@/components/play/game/Game';
import Button from '@/components/common/button/Button';
import {GameSession} from '../../../../../server/schemas/Game.schema';
import {GameType} from '../../../../../shared/match/consts';

interface Props {
	gameType: GameType;
	session: GameSession;
}

export default function TargetSession(props: Props) {
	const {session, gameType} = props;

	const dispatch = useDispatch();

	const gameSolves = session.solves || [];

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
		const participants = session.match.participants || [];
		let rejoin: ReactNode = null;
		if (!session.match.ended_at) {
			rejoin = <LinkButton to={`${getGameLink(gameType)}/${session.match.link_code}`} text="Rejoin Match" />;
		}

		players = (
			<div className="mt-[15px] flex w-full flex-col items-start">
				{rejoin}
				<div className="mt-[15px] flex w-full flex-col items-start">
					{participants.map((p, index) => {
						if (!p.user) {
							return null;
						}

						return (
							<div
								key={p.user.id}
								className={`relative w-full py-2 ${index < participants.length - 1 ? 'border-b border-button' : ''}`}
							>
								<div className="absolute right-[5px] top-2.5">
									{p.won ? <Emblem small text="Winner" green /> : null}
								</div>
								<Avatar small target="_blank" profile={p.user.profile} user={p.user} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}

	return (
		<div className="relative mb-5 box-border rounded border-2 border-button p-2.5">
			<div className="flex flex-col">
				<h4 className="text-[1.4rem] text-text">
					<span className="mr-[5px] inline-block font-bold text-primary">{gameSolves.length}</span>
					solve{gameSolves.length === 1 ? '' : 's'} completed
				</h4>
				<span className="mt-[5px] text-[0.9rem] text-text opacity-70">
					{new Date(session.created_at).toLocaleString()}
				</span>
			</div>
			<div className="absolute right-2.5 top-2.5">
				<Button onClick={openSolves} text="View Solves" />
			</div>
			{players}
		</div>
	);
}
