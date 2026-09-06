import Avatar from '@/components/common/avatar/Avatar';
import Emblem from '@/components/common/Emblem';
import History from '@/components/modules/history/History';
import {getGameLink} from '@/components/play/game/Game';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogHeader} from '@/components/ui/dialog';
import {GameType} from '@/shared/match/consts';
import {GameSessionWithRelations} from '@/types/game';
import {Serialized} from '@/types/serialized';
import {Solve} from '@/types/solve';
import React, {ReactNode} from 'react';
import {Link} from 'react-router-dom';

interface Props {
	gameType: GameType;
	session: Serialized<GameSessionWithRelations>;
}

export default function TargetSession(props: Props) {
	const [historyDialog, setHistoryDialog] = React.useState<{
		props: React.ComponentProps<typeof History>;
		width: number;
		title: React.ReactNode;
	} | null>(null);

	const {session, gameType} = props;

	// Game-session rows have Prisma nullability (raw_time etc. nullable) that the
	// shared Solve shape doesn't model; History only reads display fields
	const gameSolves = (session.solves || []) as unknown as Serialized<Solve>[];

	function openSolves() {
		setHistoryDialog({
			props: {disabled: true, solves: gameSolves},
			width: 500,
			title: 'Solves',
		});
	}

	let players: ReactNode = [];
	if (session.match) {
		const participants = session.match.participants || [];
		let rejoin: ReactNode = null;
		if (!session.match.ended_at) {
			rejoin = (
				<Button variant="default" asChild>
					<Link to={`${getGameLink(gameType)}/${session.match.link_code}`}>
						{'Rejoin Match'}
					</Link>
				</Button>
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
		<>
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
					<Button variant="secondary" onClick={openSolves}>
						{'View Solves'}
					</Button>
				</div>
				{players}
			</div>
			<Dialog
				open={historyDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setHistoryDialog(null);
					}
				}}
			>
				{historyDialog && (
					<DialogContent width={historyDialog.width}>
						<DialogHeader title={historyDialog.title} />
						<History {...historyDialog.props} />
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
