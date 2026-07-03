import React, {ReactNode, useMemo, useState} from 'react';
import classNames from 'classnames';
import {Sword} from 'phosphor-react';
import Button from '@/components/common/Button';
import Avatar from '@/components/common/avatar/Avatar';
import {useMe} from '@/util/hooks/useMe';
import {socketClient} from '@/util/socket/socketio';
import {Match} from '@/types/match';
import Lobby from '@/components/play/match/match-popup/Lobby';
import {IModalProps} from '@/components/common/modal/Modal';
import EloChange from '@/components/play/match/match-over/EloChange';
import {GameType} from '../../../../../shared/match/consts';
import {MatchEndedBy} from '@/shared/match/types';

interface Props extends IModalProps {
	match: Match;
	matchType: GameType;
	exitMatch: () => void;
}

export default function MatchOver(props: Props) {
	const me = useMe();

	const [rematchRequested, setRematchRequested] = useState(false);
	const [newMatch, setNewMatch] = useState(false);
	const {match, matchType, exitMatch} = props;

	const endReason = useMemo(() => {
		if (match.aborted) {
			return MatchEndedBy.ABORT;
		}

		for (const part of match.participants) {
			if (!part.lost) {
				continue;
			}

			if (part.forfeited) {
				return MatchEndedBy.FORFEITURE;
			} else if (part.resigned) {
				return MatchEndedBy.RESIGNATION;
			}
		}

		return MatchEndedBy.LOSS;
	}, []);

	const winner = useMemo(() => {
		for (const part of match.participants) {
			if (part.won) {
				return part.user;
			}
		}

		return null;
	}, []);

	const isWinner = winner?.id === me.id;

	function requestRematch() {
		if (rematchRequested) {
			return;
		}

		socketClient().emit('playerJoinedRematchQueue', match.id);

		setRematchRequested(true);
	}

	function exitModal() {
		exitMatch();
	}

	if (newMatch) {
		return (
			<div className="box-border p-5">
				<Lobby matchType={matchType} onCancel={() => setNewMatch(false)} />
			</div>
		);
	}

	const participants = match?.participants || [];
	const players = participants.map((player, index) => (
		<div
			key={player.id}
			className={classNames(
				'box-border flex h-full w-full items-center justify-center rounded-md border-[3px] p-2.5',
				player.won
					? 'border-success bg-success/20 shadow-[0_0_13px_rgba(var(--success-color),0.5)]'
					: 'border-transparent',
				{
					'mr-2.5': index !== participants.length - 1,
				},
			)}
		>
			<Avatar hideBadges showEloType="333" target="_blank" vertical user={player.user} />
		</div>
	));

	let header;
	if (match.aborted) {
		header = 'Game aborted';
	} else if (isWinner) {
		header = 'You won!';
	} else if (winner) {
		header = `${winner.username} won!`;
	} else {
		header = 'Match over';
	}

	let endedBy: ReactNode = null;
	switch (endReason) {
		case MatchEndedBy.RESIGNATION: {
			endedBy = 'by resignation';
			break;
		}
		case MatchEndedBy.FORFEITURE: {
			endedBy = 'by forfeiture';
			break;
		}
	}

	if (endedBy) {
		endedBy = <span className="text-text text-base opacity-80">{endedBy}</span>;
	}

	let rematchText = 'Rematch';
	let rematchDisabled = false;
	if (rematchRequested) {
		rematchText = 'Rematch requested';
		rematchDisabled = true;
	} else if (!match?.ended_at) {
		rematchDisabled = true;
	}

	const headerClass = classNames(
		'absolute flex h-[100px] w-full flex-col items-center justify-center py-[50px]',
		match.aborted ? 'bg-tm-background/10' : isWinner ? 'bg-success/10' : 'bg-tm-background/30',
	);
	const swordClass = classNames(
		'relative z-[1000] mt-[170px] box-border flex h-[60px] w-[60px] items-center justify-center rounded-full text-[1.8rem] text-white shadow-[0_2px_20px_rgba(0,0,0,0.3)]',
		match.aborted ? 'bg-button' : isWinner ? 'bg-success' : 'bg-error',
	);

	return (
		<div className="relative flex flex-col items-center">
			<div className={headerClass}>
				<div className="flex flex-col items-center justify-center">
					<h3 className="text-[2.6rem]">{header}</h3>
					{endedBy}
				</div>
			</div>
			<div className={swordClass}>
				<Sword />
			</div>
			<EloChange userId={me.id} eloLogs={match.elo_log} />
			<div className="my-10 grid w-[90%] [grid-auto-rows:130px] grid-cols-2 gap-2.5">
				{players}
			</div>
			<div className="flex flex-col items-center pb-5">
				<div className="mb-[15px] flex flex-row flex-wrap gap-[15px]">
					<Button gray large text="Join Lobby" onClick={() => setNewMatch(true)} />
					<Button
						primary
						glow
						large
						text={rematchText}
						disabled={rematchDisabled}
						onClick={requestRematch}
					/>
				</div>
				<Button text="Exit" onClick={exitModal} flat white />
			</div>
		</div>
	);
}
