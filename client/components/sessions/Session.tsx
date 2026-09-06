import {reactState} from '@/@types/react';
import ConfirmDialog from '@/components/common/ConfirmDialog';
import ActionMenu from '@/components/common/inputs/ActionMenu';
import {Button} from '@/components/ui/button';
import {fetchSessionById} from '@/db/sessions/query';
import {createSessionDb, deleteSessionDb, mergeSessionsDb} from '@/db/sessions/update';
import {setCubeType, setCurrentSession} from '@/db/settings/update';
import {fetchLastCubeTypeForSession} from '@/db/solves/query';
import {Session as SessionSchema} from '@/types/session';
import {cn} from '@/util/cn';
import {getDateFromNow} from '@/util/dates';
import {useSettings} from '@/util/hooks/useSettings';
import {toastSuccess} from '@/util/toast';
import {DotsSixVertical, DotsThree} from 'phosphor-react';
import React, {CSSProperties, ReactNode} from 'react';
import {v4 as uuid} from 'uuid';

interface Props {
	setSelectedSessionId: reactState<string>;
	selectedSessionId: string;
	session: SessionSchema;
	selectSession: (e, id) => void;
	style?: CSSProperties;
	className?: string;
	isDragging?: boolean;
	refCallback?: (node: HTMLElement | null) => void;
	dragHandleProps?: {
		attributes: any;
		listeners: any;
		setActivatorNodeRef: (node: HTMLElement | null) => void;
	};
}

export default function Session(props: Props) {
	const [confirmDialog, setConfirmDialog] = React.useState<React.ComponentProps<
		typeof ConfirmDialog
	> | null>(null);
	const [confirmDialog2, setConfirmDialog2] = React.useState<React.ComponentProps<
		typeof ConfirmDialog
	> | null>(null);

	const currentSessionId = useSettings('session_id');

	const {
		session,
		selectedSessionId,
		selectSession,
		dragHandleProps,
		refCallback,
		style,
		className,
		isDragging,
	} = props;

	const currentSession = fetchSessionById(currentSessionId);
	const sessionIsSelected = selectedSessionId === session.id;
	const isCurrentSession = session.id === currentSessionId;

	const lastCubeType = fetchLastCubeTypeForSession(session.id) || '333';

	function makeCurrent() {
		setCurrentSession(session.id);
		setCubeType(lastCubeType);
	}

	async function mergeSessions() {
		if (!currentSession) {
			return;
		}

		setConfirmDialog({
			title: 'Merge sessions',
			description: `Be careful here. You are about to merge "${session.name}" into "${currentSession.name}". "${session.name}" will be deleted after the merge.`,
			triggerAction: async () => {
				await mergeSessionsDb(session.id, currentSessionId);
				props.setSelectedSessionId(currentSessionId);
			},
			buttonText: 'Merge sessions',
			buttonProps: {
				variant: 'destructive',
			},
		});
	}

	async function deleteSession() {
		async function triggerAction() {
			const id = session.id;
			const name = session.name;
			let updatedSessionId = currentSessionId;
			if (currentSessionId === id) {
				const newId = uuid();

				await createSessionDb({
					name: 'New Session',
					id: newId,
				});

				setCurrentSession(newId);
				setCubeType('333');

				updatedSessionId = newId;
			}

			props.setSelectedSessionId(updatedSessionId);
			await deleteSessionDb(session);
			toastSuccess(`Successfully deleted session "${name}"`);
		}

		setConfirmDialog2({
			title: 'Delete session',
			description: `Be careful here. You are about to delete "${session.name}." This action is irreversible.`,
			triggerAction: triggerAction,
			buttonText: 'Delete session',
		});
	}

	let dropdown: ReactNode = null;

	if (!isCurrentSession) {
		dropdown = (
			<ActionMenu
				icon={<DotsThree size={18} />}
				triggerProps={{
					variant: 'ghost',
					size: 'icon-sm',
					'aria-label': `Actions for ${session.name}`,
				}}
				options={[
					{
						text: 'Make current',
						onClick: makeCurrent,
					},
					{
						text: 'Merge session',
						onClick: mergeSessions,
					},
					{
						text: 'Delete session',
						onClick: deleteSession,
					},
				]}
			/>
		);
	}

	return (
		<>
			<div
				ref={refCallback}
				key={session.id}
				style={style}
				className={cn(
					'sessions-item',
					{
						'sessions-item-selected': sessionIsSelected,
						'sessions-item-dragging': isDragging,
					},
					className,
				)}
			>
				<Button
					variant="ghost"
					ref={dragHandleProps?.setActivatorNodeRef}
					type="button"
					className="sessions-drag-handle h-auto p-0 font-normal whitespace-normal hover:bg-transparent"
					{...dragHandleProps?.attributes}
					{...dragHandleProps?.listeners}
					aria-label={`Reorder ${session.name}`}
				>
					<DotsSixVertical size={18} />
				</Button>
				<Button
					variant="ghost"
					type="button"
					className="sessions-select h-auto flex-col items-start justify-start gap-1 p-0 font-normal whitespace-normal hover:bg-transparent"
					onClick={(e) => selectSession(e, session.id)}
					aria-pressed={sessionIsSelected}
				>
					<span className="sessions-item-name">{session.name || 'Untitled session'}</span>
					<span className="sessions-item-date">
						Created {getDateFromNow(session.created_at)}
					</span>
					{isCurrentSession && <span className="sessions-current">Current</span>}
				</Button>
				{dropdown}
			</div>
			{confirmDialog && (
				<ConfirmDialog
					open={confirmDialog !== null}
					onOpenChange={(open) => {
						if (!open) {
							setConfirmDialog(null);
						}
					}}
					{...confirmDialog}
					onComplete={() => {
						setConfirmDialog((current) => (current === confirmDialog ? null : current));
					}}
				/>
			)}
			{confirmDialog2 && (
				<ConfirmDialog
					open={confirmDialog2 !== null}
					onOpenChange={(open) => {
						if (!open) {
							setConfirmDialog2(null);
						}
					}}
					{...confirmDialog2}
					onComplete={() => {
						setConfirmDialog2((current) =>
							current === confirmDialog2 ? null : current,
						);
					}}
				/>
			)}
		</>
	);
}
