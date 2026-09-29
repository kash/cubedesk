import {useTranslation} from 'react-i18next';
import SessionPicker from '@/components/sessions/SessionPicker';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Session} from '@/types/session';
import {Solve} from '@/types/solve';
import React, {useState} from 'react';

interface Props {
	onComplete?: (session: Session) => void;
	solves: Solve[];
}

export default function SessionSelector(props: Props) {
	const {t} = useTranslation();
	const {solves, onComplete} = props;
	const [session, setSession] = useState<Session | null>(null);

	let selectedSession: React.ReactNode = null;
	if (session) {
		selectedSession = (
			<p className="border-text/20 text-text mt-4 mb-5 table border-b-4 border-solid text-2xl">
				{t('solves.bulk.moveSelection', {
					count: solves.length,
					session: session.name,
				})}
			</p>
		);
	}

	return (
		<div>
			<DialogHeader
				title={t('solves.moveSolves')}
				description={t('solves.bulk.selectTargetSession')}
			/>
			<div className="mb-6">
				<SessionPicker stateless onChange={(ses) => setSession(ses)} />
			</div>
			{selectedSession}
			<Button
				variant="default"
				onClick={() => {
					if (session) onComplete?.(session);
				}}
				disabled={!session}
				size="lg"
			>
				{t('common.continue')}
			</Button>
		</div>
	);
}
