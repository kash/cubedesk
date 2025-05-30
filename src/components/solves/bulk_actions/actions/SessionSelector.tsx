import {Button} from '@/components/ui/button';
import {Solve} from '@/generated/zod';
import {Session} from '@/generated/zod';
import React, {useState} from 'react';
import {getBasicPlural} from '../../../../lib/util/strings/plural';
import {IModalProps} from '../../../common/modal/Modal';
import ModalHeader from '../../../common/modal/modal_header/ModalHeader';
import SessionPicker from '../../../sessions/SessionPicker';

interface Props extends IModalProps {
	solves: Solve[];
}

export default function SessionSelector(props: Props) {
	const {solves, onComplete} = props;
	const [session, setSession] = useState<Session | null>(null);

	let selectedSession = null;
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
			<Button onClick={() => onComplete(session)} disabled={!session}>
				Continue
			</Button>
		</div>
	);
}
