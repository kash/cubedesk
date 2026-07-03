import React, {useState} from 'react';
import Input from '@/components/common/inputs/input/Input';
import {setCubeType, setCurrentSession} from '@/db/settings/update';
import CubePicker from '@/components/common/CubePicker';
import {createSessionDb} from '@/db/sessions/update';
import {IModalProps} from '@/components/common/modal/Modal';
import {toastError} from '@/util/toast';
import {useInput} from '@/util/hooks/useInput';
import Button from '@/components/common/Button';
import {CubeType} from '@/util/cubes/cube_types';
import ModalHeader from '@/components/common/modal/ModalHeader';

export default function CreateNewSession(props: IModalProps) {
	const {onComplete} = props;

	const [loading, setLoading] = useState(false);
	const [sessionCubeType, setSessionCubeType] = useState('333');
	const [name, setName] = useInput('');

	function onCubeTypeChange(ct: CubeType) {
		setSessionCubeType(ct.id);
	}

	async function createSession() {
		if (loading) {
			return;
		}

		setLoading(true);

		try {
			const session = await createSessionDb({name});
			setCurrentSession(session.id);
			setCubeType(sessionCubeType);

			onComplete(session);
		} catch (e) {
			setLoading(false);
			toastError('Server Error: Could not create session');
		}
	}

	const disabled = !name.trim() || loading || !sessionCubeType;

	return (
		<div className="flex flex-col items-start">
			<ModalHeader
				title="Create new session"
				description="In CubeDesk, sessions can have multiple cube types. You can split up sessions however you'd like: by cube type, by day, etc."
			/>
			<div className="w-full">
				<Input
					placeholder="New Session"
					maxLength={200}
					legend="Session Name"
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
				<Button
					glow
					primary
					large
					text="Create Session"
					onClick={createSession}
					disabled={disabled}
					loading={loading}
				/>
			</div>
		</div>
	);
}
