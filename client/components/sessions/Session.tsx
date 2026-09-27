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
import {useTranslation} from 'react-i18next';

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
	const {t, i18n} = useTranslation();
	const [confirmDialog, setConfirmDialog] = React.useState<Omit<
		React.ComponentProps<typeof ConfirmDialog>,
		'labels'
	> | null>(null);
	const [confirmDialog2, setConfirmDialog2] = React.useState<Omit<
		React.ComponentProps<typeof ConfirmDialog>,
		'labels'
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
			title: t('sessions.mergeConfirmTitle'),
			description: t('sessions.mergeConfirmDescription', {
				source: session.name,
				target: currentSession.name,
			}),
			triggerAction: async () => {
				await mergeSessionsDb(session.id, currentSessionId);
				props.setSelectedSessionId(currentSessionId);
			},
			buttonText: t('sessions.mergeConfirmButton'),
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
					name: t('sessions.newSession'),
					id: newId,
				});

				setCurrentSession(newId);
				setCubeType('333');

				updatedSessionId = newId;
			}

			props.setSelectedSessionId(updatedSessionId);
			await deleteSessionDb(session);
			toastSuccess(t('sessions.successfullyDeletedSession', {name}));
		}

		setConfirmDialog2({
			title: t('sessions.deleteSession'),
			description: t('sessions.deleteWarning', {
				name: session.name,
			}),
			triggerAction: triggerAction,
			buttonText: t('sessions.deleteSession'),
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
					'aria-label': t('sessions.actionsFor', {name: session.name}),
				}}
				options={[
					{
						text: t('sessions.makeCurrent'),
						onClick: makeCurrent,
					},
					{
						text: t('sessions.mergeSession'),
						onClick: mergeSessions,
					},
					{
						text: t('sessions.deleteSession'),
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
					aria-label={t('sessions.reorder', {name: session.name})}
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
					<span className="sessions-item-name">
						{session.name || t('sessions.untitledSession')}
					</span>
					<span className="sessions-item-date">
						{t('sessions.created')}{' '}
						{getDateFromNow(session.created_at, false, i18n.language)}
					</span>
					{isCurrentSession && (
						<span className="sessions-current">{t('stats.current')}</span>
					)}
				</Button>
				{dropdown}
			</div>
			{confirmDialog && (
				<ConfirmDialog
					labels={{
						cancel: t('common.cancel'),
						inputPrompt: t('common.confirmInputPrompt', {
							word: t('common.confirmWord'),
						}),
						confirmWord: t('common.confirmWord'),
						genericError: t('common.genericError'),
						defaultDescription: t('common.confirmDescription'),
					}}
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
					labels={{
						cancel: t('common.cancel'),
						inputPrompt: t('common.confirmInputPrompt', {
							word: t('common.confirmWord'),
						}),
						confirmWord: t('common.confirmWord'),
						genericError: t('common.genericError'),
						defaultDescription: t('common.confirmDescription'),
					}}
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
