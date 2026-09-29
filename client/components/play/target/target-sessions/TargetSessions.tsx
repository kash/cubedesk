import Empty from '@/components/common/Empty';
import LoadingIcon from '@/components/common/LoadingIcon';
import {getGameMetaData} from '@/components/play/Play';
import TargetSession from '@/components/play/target/target-sessions/TargetSession';
import {DialogHeader} from '@/components/ui/dialog';
import {GameType} from '@/shared/match/consts';
import {GameSessionWithRelations} from '@/types/game';
import {Serialized} from '@/types/serialized';
import {trpc} from '@/util/trpc';
import {useTranslation} from 'react-i18next';
import React, {useEffect, useState} from 'react';

interface Props {
	gameType: GameType;
}

export default function TargetSessions(props: Props) {
	const {t} = useTranslation();
	const {gameType} = props;
	const {nameKey} = getGameMetaData(gameType);

	const [sessions, setSessions] = useState<Serialized<GameSessionWithRelations>[] | null>(null);

	useEffect(() => {
		trpc.game.sessions.query().then((res) => {
			setSessions(res);
		});
	}, []);

	let body;
	if (sessions && sessions.length) {
		body = (
			<div className="max-h-[500px] overflow-y-auto">
				{sessions.map((s) => (
					<TargetSession key={s.id} session={s} gameType={gameType} />
				))}
			</div>
		);
	} else if (sessions && !sessions.length) {
		body = <Empty text={t('community.noSessions')} />;
	} else {
		body = (
			<div className="text-text mx-auto mt-[70px] mb-[100px] text-2xl">
				<LoadingIcon />
			</div>
		);
	}

	return (
		<div>
			<DialogHeader title={t('community.sessionsFor', {name: t(nameKey)})} />
			<div className="flex flex-col">{body}</div>
		</div>
	);
}
