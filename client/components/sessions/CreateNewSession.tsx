import CubePicker from '@/components/common/CubePicker';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Field, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import {createSessionDb} from '@/db/sessions/update';
import {setCubeType, setCurrentSession} from '@/db/settings/update';
import {CubeType} from '@/util/cubes/cube_types';
import {useInput} from '@/util/hooks/useInput';
import {toastError} from '@/util/toast';
import React, {useState} from 'react';

interface Props {
	onComplete?: (session: Awaited<ReturnType<typeof createSessionDb>>) => void;
}

export default function CreateNewSession(props: Props) {
	const fieldId = React.useId();

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

			onComplete?.(session);
		} catch (e) {
			setLoading(false);
			toastError('Server Error: Could not create session');
		}
	}

	const disabled = !name.trim() || loading || !sessionCubeType;

	return (
		<div className="flex flex-col items-start">
			<DialogHeader
				title="Create new session"
				description="In CubeDesk, sessions can have multiple cube types. You can split up sessions however you'd like: by cube type, by day, etc."
			/>
			<div className="w-full">
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-1`}>{'Session Name'}</FieldLabel>
					<Input
						placeholder="New Session"
						maxLength={200}
						value={name}
						onChange={setName}
						id={`${fieldId}-1`}
					/>
				</Field>
			</div>
			<CubePicker
				pickerProps={{
					legend: 'Cube Type',
					info: 'You can change this later',
					openLeft: true,
				}}
				onChange={onCubeTypeChange}
				value={sessionCubeType}
			/>
			<div className="mt-3">
				<Button
					variant="default"
					onClick={createSession}
					size="lg"
					disabled={disabled || loading}
					aria-busy={loading}
				>
					{'Create Session'}
					{loading ? <Spinner aria-hidden="true" /> : null}
				</Button>
			</div>
		</div>
	);
}
