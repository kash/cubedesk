import React, {useEffect, useMemo, useState} from 'react';
import './EloChange.scss';
import block from '../../../../../styles/bem';
import {EloLog} from '../../../../../../server/schemas/EloLog.schema';

const b = block('elo-change');

const ELO_CHANGE_ANIMATION_TIME_MS = 900;

interface Props {
	userId: string;
	eloLogs: EloLog[];
}

export default function EloChange(props: Props) {
	const {userId, eloLogs} = props;

	const myEloLog = useMemo(() => {
		for (const log of eloLogs) {
			if (log.player_id === userId) {
				return log;
			}
		}
	}, [userId]);

	const newElo = myEloLog?.player_new_elo_rating || 0;
	const eloChange = myEloLog?.elo_change || 0;
	const eloAbsDiff = Math.abs(eloChange);
	const oldElo = newElo - eloChange;
	const eloLoss = eloChange < 0;

	const [eloVal, setEloVal] = useState(oldElo);
	const [animating, setAnimating] = useState(false);

	useEffect(() => {
		const currentDiff = Math.abs(newElo - eloVal);

		const intervalDelay = Math.floor(
			ELO_CHANGE_ANIMATION_TIME_MS / eloAbsDiff / Math.max(0.05, currentDiff / eloAbsDiff)
		);

		if (!animating) {
			setAnimating(true);
		}
		if ((eloLoss && eloVal <= newElo) || (!eloLoss && eloVal >= newElo)) {
			return;
		}

		setTimeout(() => {
			setEloVal((val) => (eloLoss ? val - 1 : val + 1));
		}, intervalDelay);
	}, [eloVal]);

	const eloDiffText = (eloLoss ? '-' : '+') + eloAbsDiff;

	if (!myEloLog) {
		return null;
	}

	return (
		<div className={b()}>
			<span className={b('elo', {animating})}>{eloVal}</span>
			<span className={b('change', {loss: eloLoss})}>{eloDiffText} ELO</span>
		</div>
	);
}
