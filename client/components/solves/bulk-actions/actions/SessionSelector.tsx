import {Session} from '@/types/session';
import {Solve} from '@/types/solve';
import React, {ReactNode, useState} from 'react';
import {getBasicPlural} from '@/util/strings/plural';
import Button from '@/components/common/Button';
import {IModalProps} from '@/components/common/modal/Modal';
import ModalHeader from '@/components/common/modal/ModalHeader';
import SessionPicker from '@/components/sessions/SessionPicker';

interface Props extends IModalProps {
	solves: Solve[];
}

export default function SessionSelector(props: Props) {
	const {solves, onComplete} = props;
	const [session, setSession] = useState<Session | null>(null);

	let selectedSession: ReactNode = null;
	if (session) {
		selectedSession = (
			<p className="text-text border-text/20 mt-4 mb-5 table border-b-4 border-solid text-2xl">
				Move <span className="text-success">{getBasicPlural(solves, 'solve')}</span> to{' '}
				<span className="text-warning">{session.name}</span>
			</p>
		);
	}

	return (
		<div>
			<ModalHeader
				title="Move solves"
				description="Select a session to move the selected solves to"
			/>
			<div className="mb-6">
				<SessionPicker stateless onChange={(ses) => setSession(ses)} />
			</div>
			{selectedSession}
			<Button
				large
				onClick={() => onComplete?.(session)}
				disabled={!session}
				primary
				text="Continue"
			/>
		</div>
	);
}
