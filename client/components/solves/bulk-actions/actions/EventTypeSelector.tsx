import EventPicker from '@/components/common/EventPicker';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Solve} from '@/types/solve';
import {EventType} from '@/util/cubes/event_types';
import {getBasicPlural} from '@/util/strings/plural';
import React, {ReactNode, useState} from 'react';

interface Props {
	onComplete?: (eventType: EventType) => void;
	solves: Solve[];
}

export default function EventTypeSelector(props: Props) {
	const {solves, onComplete} = props;
	const [eventType, setEventType] = useState<EventType | null>(null);

	let selectedEventType: ReactNode = null;
	if (eventType) {
		selectedEventType = (
			<p className="border-text/20 text-text mt-4 mb-5 table border-b-4 border-solid text-2xl">
				Set event type of{' '}
				<span className="text-success">{getBasicPlural(solves, 'solve')}</span> to{' '}
				<span className="text-warning">{eventType.name}</span>
			</p>
		);
	}

	return (
		<div>
			<DialogHeader
				title="Change event type"
				description="Select which event type to associate the selected solves with"
			/>
			<div className="mb-6">
				<EventPicker
					pickerProps={{
						openLeft: true,
					}}
					value="333"
					onChange={(ct) => setEventType(ct)}
				/>
			</div>
			{selectedEventType}
			<Button
				variant="default"
				onClick={() => {
					if (eventType) onComplete?.(eventType);
				}}
				disabled={!eventType}
				size="lg"
			>
				{'Continue'}
			</Button>
		</div>
	);
}
