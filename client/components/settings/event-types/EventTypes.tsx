import ConfirmDialog from '@/components/common/ConfirmDialog';
import NewEventType from '@/components/settings/event-types/NewEventType';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {refreshSettings, setEventType} from '@/db/settings/update';
import {EventType} from '@/util/cubes/event_types';
import {getAllEventTypes, getScrambleTypeById} from '@/util/cubes/util';
import {useSettings} from '@/util/hooks/useSettings';
import {trpc} from '@/util/trpc';
import {Plus, Trash} from 'phosphor-react';
import React from 'react';

export default function EventTypes() {
	const [newEventTypeDialog, setNewEventTypeDialog] = React.useState<React.ComponentProps<
		typeof NewEventType
	> | null>(null);

	const currentEventType = useSettings('event_type');

	function addCustomEventType() {
		setNewEventTypeDialog({});
	}

	async function deleteEventType(eventType: EventType) {
		await trpc.customEventType.delete.mutate({
			id: eventType.id,
		});

		if (currentEventType === eventType.id) {
			setEventType('333');
		}

		await refreshSettings();

		window.location.reload();
	}

	const rows: React.ReactNode[] = [];

	for (const eventType of getAllEventTypes()) {
		const scramble = getScrambleTypeById(eventType.scramble);

		rows.push(
			<TableRow key={eventType.name}>
				<TableCell>{eventType.name}</TableCell>
				<TableCell>{scramble?.name ?? eventType.scramble}</TableCell>
				<TableCell>
					<ConfirmDialog
						{...{
							title: 'Delete custom event type',
							description: `Are you sure you want to delete "${eventType.name}"? This will also delete all of your solves for this event type.`,
							buttonText: 'Delete event type',
							triggerAction: () => deleteEventType(eventType),
						}}
					>
						{eventType.default ? null : (
							<Button variant="secondary" size="icon" aria-label="Event Types">
								<Trash />
							</Button>
						)}
					</ConfirmDialog>
				</TableCell>
			</TableRow>,
		);
	}

	return (
		<>
			<div>
				<div className="flex w-full items-center justify-center py-5">
					<Button variant="default" onClick={addCustomEventType}>
						{'Create New'}
						<Plus weight="bold" />
					</Button>
				</div>
				<div className="mt-2.5">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Event Type</TableHead>
								<TableHead>Scramble Type</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>{rows}</TableBody>
					</Table>
				</div>
			</div>
			<Dialog
				open={newEventTypeDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setNewEventTypeDialog(null);
					}
				}}
			>
				{newEventTypeDialog && (
					<DialogContent>
						<NewEventType
							{...newEventTypeDialog}
							onComplete={() => {
								setNewEventTypeDialog((current) =>
									current === newEventTypeDialog ? null : current,
								);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
