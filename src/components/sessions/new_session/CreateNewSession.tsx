import {Button} from '@/components/ui/button';
import './CreateNewSession.scss';
import {Input} from '@/components/ui/input';
import React, {useCallback, useState} from 'react';
import {createSessionDb} from '../../../lib/db/sessions/update';
import {setCubeType, setCurrentSession} from '../../../lib/db/settings/update';
import {CubeType} from '../../../lib/util/cubes/cube_types';
import {useInput} from '../../../lib/util/hooks/useInput';
import {toastError} from '../../../lib/util/toast';
import block from '../../../styles/bem';
import CubePicker from '../../common/cube_picker/CubePicker';
import {IModalProps} from '../../common/modal/Modal';
import ModalHeader from '../../common/modal/modal_header/ModalHeader';

const b = block('create-new-session');

export default function CreateNewSession(props: IModalProps) {
	const {onComplete} = props;

	const [loading, setLoading] = useState(false);
	const [sessionCubeType, setSessionCubeType] = useState('333');
	const [name, setName] = useInput('');

	const onCubeTypeChange = useCallback((ct: CubeType) => {
		setSessionCubeType(ct.id);
	}, []);

	const createSession = useCallback(async () => {
		if (loading) {
			return;
		}

		setLoading(true);

		try {
			const session = await createSessionDb({name});
			setCurrentSession(session.id);
			setCubeType(sessionCubeType);

			onComplete(session);
		} catch (e: unknown) {
			setLoading(false);
			toastError('Server Error: Could not create session');
		}
	}, [loading, name, sessionCubeType, onComplete]);

	const disabled = !name.trim() || loading || !sessionCubeType;

	return (
		<div className={b()}>
			<ModalHeader
				title="Create new session"
				description="In CubeDesk, sessions can have multiple cube types. You can split up sessions however you'd like: by cube type, by day, etc."
			/>
			<div className="w-full">
				<Input
					placeholder="New Session"
					maxLength={200}
					label="Session Name"
					value={name}
					onChange={setName}
				/>
			</div>
			<CubePicker
				dropdownProps={{
					legend: 'Cube Type',
					info: 'You can change this later',
					openLeft: true,
				}}
				onChange={onCubeTypeChange}
				value={sessionCubeType}
			/>
			<div className="mt-3">
				<Button size="lg" onClick={createSession} disabled={disabled} loading={loading}>
					Create Session
				</Button>
			</div>
		</div>
	);
}
