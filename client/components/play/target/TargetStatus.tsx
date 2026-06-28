import React, {ReactNode, useContext} from 'react';
import classNames from 'classnames';
import {GameContext} from '@/components/play/game/Game';
import {PlayerStatus} from '@/shared/match/types';
import {MatchContext} from '@/components/play/match/Match';
import {useMe} from '@/util/hooks/useMe';
import Button from '@/components/common/button/Button';

// Center module that shows game/match status
export default function TargetStatus() {
	const gameContext = useContext(GameContext);
	const matchContext = useContext(MatchContext);
	const me = useMe();

	const {matchOpen, retrySolve, solves, getPlayerStatusInfo, timeIndex} = gameContext;
	const playerStatus = getPlayerStatusInfo(me.id, timeIndex, solves, matchContext?.match);
	const status = playerStatus.status;

	let timeAlert: ReactNode;
	let retryAlert: ReactNode = null;

	switch (status) {
		case PlayerStatus.Lost: {
			timeAlert = (
				<span className="mt-2.5 rounded-[15px] bg-error px-3.5 py-1 text-[0.9rem] font-medium text-white">
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
				<span className="mt-2.5 rounded-[15px] bg-success px-3.5 py-1 text-[0.9rem] font-medium text-white">
					Congrats! You won!
				</span>
			);
			break;
		}
	}

	return (
		<div className="relative box-border flex h-full flex-col items-center p-[15px]">
			<div className="flex flex-col items-center">
				<h3 className="mt-2.5 text-[1.1rem] font-semibold text-text opacity-80">{playerStatus.statusPrompt}</h3>
				<h2
					className={classNames('mt-[5px] text-[4.5rem] font-bold text-text', {
						'text-success': status === PlayerStatus.Won,
						'text-error': status === PlayerStatus.Lost,
					})}
				>
					{playerStatus.statusBody}
				</h2>
				<div className="absolute left-0 top-0">{retryAlert}</div>
				{playerStatus.statusSubHeader ? (
					<p className="text-[0.9rem] text-text opacity-70">{playerStatus.statusSubHeader}</p>
				) : null}
				{timeAlert}
			</div>
		</div>
	);
}
