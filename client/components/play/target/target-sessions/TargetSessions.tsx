import Empty from '@/components/common/Empty';
import LoadingIcon from '@/components/common/LoadingIcon';
import ModalHeader from '@/components/common/modal/ModalHeader';
import {getGameMetaData} from '@/components/play/Play';
import TargetSession from '@/components/play/target/target-sessions/TargetSession';
import {GameSessionWithRelations} from '@/types/game';
import {Serialized} from '@/types/serialized';
import {trpc} from '@/util/trpc';
import React, {useEffect, useState} from 'react';
import {GameType} from '../../../../../shared/match/consts';

interface Props {
	gameType: GameType;
}

export default function TargetSessions(props: Props) {
	const {gameType} = props;
	const {name} = getGameMetaData(gameType);

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
		body = <Empty text="You don't have any sessions at the moment" />;
	} else {
		body = (
			<div className="text-text mx-auto mt-[70px] mb-[100px] text-2xl">
				<LoadingIcon />
			</div>
		);
	}

	return (
		<div>
			<ModalHeader title={`${name} Sessions`} />
			<div className="flex flex-col">{body}</div>
		</div>
	);
}
