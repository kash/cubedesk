import React, {useState} from 'react';
import Button from '../../../common/button/Button';
import SessionPicker from '../../../sessions/SessionPicker';
import {Solve} from '../../../../../server/schemas/Solve.schema';
import {IModalProps} from '../../../common/modal/Modal';
import ModalHeader from '../../../common/modal/modal_header/ModalHeader';
import {getBasicPlural} from '../../../../util/strings/plural';
import {Session} from '../../../../../server/schemas/Session.schema';

interface Props extends IModalProps {
	solves: Solve[];
}

export default function SessionSelector(props: Props) {
	const {solves, onComplete} = props;
	const [session, setSession] = useState<Session>(null);

	let selectedSession = null;
	if (session) {
		selectedSession = (
			<p className="mb-5 mt-4 text-2xl table text-text border-b-4 border-solid border-text/20">
				Move <span className="text-success">{getBasicPlural(solves, 'solve')}</span> to{' '}
				<span className="text-warning">{session.name}</span>
			</p>
		);
	}

	return (
		<div>
			<ModalHeader title="Move solves" description="Select a session to move the selected solves to" />
			<div className="mb-6">
				<SessionPicker stateless onChange={(ses) => setSession(ses)} />
			</div>
			{selectedSession}
			<Button large onClick={() => onComplete(session)} disabled={!session} primary text="Continue" />
		</div>
	);
}
