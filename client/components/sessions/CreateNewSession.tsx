import EventPicker from '@/components/common/EventPicker';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Field, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import {createSessionDb} from '@/db/sessions/update';
import {setCurrentSession, setEventType} from '@/db/settings/update';
import {EventType} from '@/util/cubes/event_types';
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
	const [sessionEventType, setSessionEventType] = useState('333');
	const [name, setName] = useInput('');

	function onEventTypeChange(ct: EventType) {
		setSessionEventType(ct.id);
	}

	async function createSession() {
		if (loading) {
			return;
		}

		setLoading(true);

		try {
			const session = await createSessionDb({name});
			setCurrentSession(session.id);
			setEventType(sessionEventType);

			onComplete?.(session);
		} catch (e) {
			setLoading(false);
			toastError('Server Error: Could not create session');
		}
	}

	const disabled = !name.trim() || loading || !sessionEventType;

	return (
		<div className="flex flex-col items-start">
			<DialogHeader
				title="Create new session"
				description="In CubeDesk, sessions can have multiple event types. You can split up sessions however you'd like: by event type, by day, etc."
			/>
			<div className="w-full">
				<Field className="mb-5">
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
			<EventPicker
				pickerProps={{
					legend: 'Event Type',
					info: 'You can change this later',
					openLeft: true,
				}}
				onChange={onEventTypeChange}
				value={sessionEventType}
			/>
			<div className="mt-5">
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
