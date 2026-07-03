import React, {useState, ReactNode} from 'react';
import Button from '../../../common/Button';
import SessionPicker from '../../../sessions/SessionPicker';
import {Solve} from '@/types/solve';
import {IModalProps} from '../../../common/modal/Modal';
import ModalHeader from '../../../common/modal/ModalHeader';
import {getBasicPlural} from '../../../../util/strings/plural';
import {Session} from '@/types/session';

interface Props extends IModalProps {
	solves: Solve[];
}

export default function SessionSelector(props: Props) {
	const {solves, onComplete} = props;
	const [session, setSession] = useState<Session>(null);

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
				onClick={() => onComplete(session)}
				disabled={!session}
				primary
				text="Continue"
			/>
		</div>
	);
}
