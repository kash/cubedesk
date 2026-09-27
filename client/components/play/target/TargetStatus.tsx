import {PlayerStatus} from '@/client/shared/match/types';
import {GameContext} from '@/components/play/game/Game';
import {MatchContext} from '@/components/play/match/Match';
import {Button} from '@/components/ui/button';
import {useMe} from '@/util/hooks/useMe';
import {useTranslation} from 'react-i18next';
import classNames from 'classnames';
import React, {ReactNode, useContext} from 'react';
import {MatchConst} from '@/client/shared/match/consts';

// Center module that shows game/match status
export default function TargetStatus() {
	const {t} = useTranslation();
	const gameContext = useContext(GameContext);
	const matchContext = useContext(MatchContext);
	const me = useMe();

	const {matchOpen, retrySolve, solves, getPlayerStatusInfo, timeIndex} = gameContext;
	const playerStatus = getPlayerStatusInfo(
		me.id,
		timeIndex,
		solves,
		matchContext?.match ?? undefined,
	);
	const status = playerStatus.status;

	let timeAlert: ReactNode;
	let retryAlert: ReactNode = null;

	switch (status) {
		case PlayerStatus.Lost: {
			timeAlert = (
				<span className="bg-error mt-2.5 rounded-[15px] px-3.5 py-1 text-[0.9rem] font-medium text-white">
					{t('community.youCompleted', {count: solves.length})}
				</span>
			);

			// Can't retry solves in multiplayer
			if (!matchOpen) {
				retryAlert = (
					<Button variant="secondary" onClick={retrySolve}>
						{t('community.retryFailedSolve')}
					</Button>
				);
			}
			break;
		}
		case PlayerStatus.Won: {
			timeAlert = (
				<span className="bg-success mt-2.5 rounded-[15px] px-3.5 py-1 text-[0.9rem] font-medium text-white">
					{t('community.congratsYouWon')}
				</span>
			);
			break;
		}
	}

	return (
		<div className="relative box-border flex h-full flex-col items-center p-[15px]">
			<div className="flex flex-col items-center">
				<h3 className="text-text mt-2.5 text-[1.1rem] font-semibold opacity-80">
					{t(playerStatus.statusPrompt, {limit: MatchConst.HEAD_TO_HEAD_FIRST_TO_COUNT})}
				</h3>
				<h2
					className={classNames('text-text mt-[5px] text-[4.5rem] font-bold', {
						'text-success': status === PlayerStatus.Won,
						'text-error': status === PlayerStatus.Lost,
					})}
				>
					{playerStatus.statusBody}
				</h2>
				<div className="absolute top-0 left-0">{retryAlert}</div>
				{timeAlert}
			</div>
		</div>
	);
}
