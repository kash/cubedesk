import React, {useEffect, useMemo, useState} from 'react';
import classNames from 'classnames';
import {EloLog} from '../../../../../server/schemas/EloLog.schema';

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
		<div className="mb-[5px] mt-[15px] flex flex-col items-center">
			<span
				className={classNames(
					'mb-[5px] table text-[2rem] font-bold text-text opacity-0 transition-all duration-1000 ease-in-out',
					{
						'opacity-100': animating,
					}
				)}
			>
				{eloVal}
			</span>
			<span
				className={classNames('table text-[0.95rem] font-bold text-success opacity-90', {
					'text-warning': eloLoss,
				})}
			>
				{eloDiffText} ELO
			</span>
		</div>
	);
}
