import React, {useContext} from 'react';
import './TargetStatus.scss';
import {GameContext} from '../../game/Game';
import block from '../../../../styles/bem';
import {PlayerStatus} from '../../../../shared/match/types';
import {MatchContext} from '../../match/Match';
import {useMe} from '../../../../util/hooks/useMe';
import Button from '../../../common/button/Button';

const b = block('game-target-status');

// Center module that shows game/match status
export default function TargetStatus() {
	const gameContext = useContext(GameContext);
	const matchContext = useContext(MatchContext);
	const me = useMe();

	const {matchOpen, retrySolve, solves, getPlayerStatusInfo, timeIndex} = gameContext;
	const playerStatus = getPlayerStatusInfo(me.id, timeIndex, solves, matchContext?.match);
	const status = playerStatus.status;

	let timeAlert;
	let retryAlert = null;

	switch (status) {
		case PlayerStatus.Lost: {
			timeAlert = (
				<span className={b('alert', {red: true})}>
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
			timeAlert = <span className={b('alert', {green: true})}>Congrats! You won!</span>;
			break;
		}
	}

	return (
		<div className={b()}>
			<div className={b('header')}>
				<h3>{playerStatus.statusPrompt}</h3>
				<h2
					className={b({
						green: status === PlayerStatus.Won,
						red: status === PlayerStatus.Lost,
					})}
				>
					{playerStatus.statusBody}
				</h2>
				<div className={b('retry')}>{retryAlert}</div>
				{playerStatus.statusSubHeader ? <p>{playerStatus.statusSubHeader}</p> : null}
				{timeAlert}
			</div>
		</div>
	);
}
