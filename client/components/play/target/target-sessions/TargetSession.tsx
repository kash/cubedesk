import {openModal} from '@/actions/general';
import Avatar from '@/components/common/avatar/Avatar';
import Button from '@/components/common/Button';
import Emblem from '@/components/common/Emblem';
import LinkButton from '@/components/common/LinkButton';
import History from '@/components/modules/history/History';
import {getGameLink} from '@/components/play/game/Game';
import {GameSessionWithRelations} from '@/types/game';
import {Serialized} from '@/types/serialized';
import {Solve} from '@/types/solve';
import React, {ReactNode} from 'react';
import {useDispatch} from 'react-redux';
import {GameType} from '../../../../../shared/match/consts';

interface Props {
	gameType: GameType;
	session: Serialized<GameSessionWithRelations>;
}

export default function TargetSession(props: Props) {
	const {session, gameType} = props;

	const dispatch = useDispatch();

	// Game-session rows have Prisma nullability (raw_time etc. nullable) that the
	// shared Solve shape doesn't model; History only reads display fields
	const gameSolves = (session.solves || []) as unknown as Serialized<Solve>[];

	function openSolves() {
		dispatch(
			openModal(
				<>
					<h1 className="gameSolves">Solves</h1>
					<History disabled solves={gameSolves} />
				</>,
				{
					width: 500,
				},
			),
		);
	}

	let players: ReactNode = [];
	if (session.match) {
		const participants = session.match.participants || [];
		let rejoin: ReactNode = null;
		if (!session.match.ended_at) {
			rejoin = (
				<LinkButton
					to={`${getGameLink(gameType)}/${session.match.link_code}`}
					text="Rejoin Match"
				/>
			);
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
								className={`relative w-full py-2 ${index < participants.length - 1 ? 'border-button border-b' : ''}`}
							>
								<div className="absolute top-2.5 right-[5px]">
									{p.won ? <Emblem small text="Winner" green /> : null}
								</div>
								<Avatar small target="_blank" user={p.user} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}

	return (
		<div className="border-button relative mb-5 box-border rounded border-2 p-2.5">
			<div className="flex flex-col">
				<h4 className="text-text text-[1.4rem]">
					<span className="text-primary mr-[5px] inline-block font-bold">
						{gameSolves.length}
					</span>
					solve{gameSolves.length === 1 ? '' : 's'} completed
				</h4>
				<span className="text-text mt-[5px] text-[0.9rem] opacity-70">
					{new Date(session.created_at).toLocaleString()}
				</span>
			</div>
			<div className="absolute top-2.5 right-2.5">
				<Button onClick={openSolves} text="View Solves" />
			</div>
			{players}
		</div>
	);
}
