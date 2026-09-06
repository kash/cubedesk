import SessionPicker from '@/components/sessions/SessionPicker';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Session} from '@/types/session';
import {Solve} from '@/types/solve';
import {getBasicPlural} from '@/util/strings/plural';
import React, {ReactNode, useState} from 'react';

interface Props {
	onComplete?: (session: Session) => void;
	solves: Solve[];
}

export default function SessionSelector(props: Props) {
	const {solves, onComplete} = props;
	const [session, setSession] = useState<Session | null>(null);

	let selectedSession: ReactNode = null;
	if (session) {
		selectedSession = (
			<p className="border-text/20 text-text mt-4 mb-5 table border-b-4 border-solid text-2xl">
				Move <span className="text-success">{getBasicPlural(solves, 'solve')}</span> to{' '}
				<span className="text-warning">{session.name}</span>
			</p>
		);
	}

	return (
		<div>
			<DialogHeader
				title="Move solves"
				description="Select a session to move the selected solves to"
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
				{'Continue'}
			</Button>
		</div>
	);
}
