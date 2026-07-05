import Button from '@/components/common/Button';
import {GameContext} from '@/components/play/game/Game';
import {MatchContext} from '@/components/play/match/Match';
import Challengers from '@/components/play/target/challengers/Challengers';
import {PlayerStatus} from '@/shared/match/types';
import {useMe} from '@/util/hooks/useMe';
import React, {ReactNode, useContext} from 'react';

// Center module that shows game/match status
export default function MatchModule() {
	const gameContext = useContext(GameContext);
	const matchContext = useContext(MatchContext);
	const me = useMe();

	const {matchOpen, retrySolve, solves, getPlayerStatusInfo, timeIndex} = gameContext;
	const playerStatus = getPlayerStatusInfo(me.id, timeIndex, solves, matchContext?.match ?? undefined);
	const status = playerStatus.status;

	let timeAlert: ReactNode;
	let retryAlert: ReactNode = null;

	switch (status) {
		case PlayerStatus.Lost: {
			timeAlert = (
				<span className="bg-error mt-2.5 rounded-[15px] px-3.5 py-1 text-[0.9rem] font-medium text-white">
					You completed {solves.length} solve{solves.length === 1 ? '' : 's'}
				</span>
			);

			// Can't retry solves in multiplayer
			if (!matchOpen) {
				retryAlert = <Button text="Retry failed solve" onClick={retrySolve} />;
			}
			break;
		}
		case PlayerStatus.Won: {
			timeAlert = (
				<span className="bg-success mt-2.5 rounded-[15px] px-3.5 py-1 text-[0.9rem] font-medium text-white">
					Congrats! You won!
				</span>
			);
			break;
		}
	}

	return (
		<div className="relative box-border grid h-full grid-rows-[40px_1fr] items-center">
			<div className="flex h-full w-full flex-row items-start justify-between">
				<span className="text-text text-[1.1rem] font-medium opacity-80">
					{playerStatus.statusPrompt}
				</span>
				<div>{retryAlert}</div>
			</div>
			<Challengers />
		</div>
	);
}
