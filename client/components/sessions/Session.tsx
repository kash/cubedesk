import React, {CSSProperties, ReactNode} from 'react';
import {useDispatch} from 'react-redux';
import classNames from 'classnames';
import {DotsThreeOutlineVertical} from 'phosphor-react';
import {setCubeType, setCurrentSession} from '@/db/settings/update';
import {v4 as uuid} from 'uuid';
import {getDateFromNow} from '@/util/dates';
import {fetchLastCubeTypeForSession} from '@/db/solves/query';
import {Session as SessionSchema} from '@/types/session';
import {createSessionDb, deleteSessionDb, mergeSessionsDb} from '@/db/sessions/update';
import Dropdown from '@/components/common/inputs/dropdown/Dropdown';
import {openModal} from '@/actions/general';
import ConfirmModal from '@/components/common/ConfirmModal';
import {fetchSessionById} from '@/db/sessions/query';
import {useSettings} from '@/util/hooks/useSettings';
import {toastSuccess} from '@/util/toast';
import {reactState} from '@/@types/react';

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
	const currentSessionId = useSettings('session_id');
	const dispatch = useDispatch();

	const {session, selectedSessionId, selectSession, dragHandleProps, refCallback, style, className, isDragging} = props;

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

		dispatch(
			openModal(
				<ConfirmModal
					title="Merge sessions"
					description={`Be careful here. You are about to merge "${session.name}" into "${currentSession.name}". "${session.name}" will be deleted after the merge.`}
					triggerAction={async () => {
						await mergeSessionsDb(session.id, currentSessionId);
						props.setSelectedSessionId(currentSessionId);
					}}
					buttonText="Merge sessions"
					buttonProps={{
						danger: true,
					}}
				/>
			)
		);
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

		dispatch(
			openModal(
				<ConfirmModal
					title="Delete session"
					description={`Be careful here. You are about to delete "${session.name}." This action is irreversible.`}
					triggerAction={triggerAction}
					buttonText="Delete session"
				/>
			)
		);
	}

	let dropdown: ReactNode = null;

	if (!isCurrentSession) {
		dropdown = (
			<Dropdown
				dropdownButtonProps={{
					transparent: true,
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
		<div
			ref={refCallback}
			key={session.id}
			style={style}
			className={classNames(
				'mb-2.5 box-border flex w-full cursor-pointer flex-row items-center justify-between rounded-[10px] border-4 border-transparent bg-module p-[13px]',
				{
					'border-primary': sessionIsSelected,
				},
				className
			)}
			onClick={(e) => selectSession(e, session.id)}
		>
			<div className="flex flex-row">
				<button
					ref={dragHandleProps?.setActivatorNodeRef}
					type="button"
					className="mr-[13px] cursor-pointer text-base text-text opacity-50"
					onClick={(e) => e.stopPropagation()}
					{...dragHandleProps?.attributes}
					{...dragHandleProps?.listeners}
				>
					<DotsThreeOutlineVertical weight="fill" />
				</button>
				<div className="flex flex-col items-start justify-start">
					<h4 className="text-left text-base font-medium text-text">{session.name}</h4>
					<span className="mt-[3px] table text-[0.85rem] text-text opacity-70">
						Created {getDateFromNow(session.created_at)}
					</span>
				</div>
			</div>

			{isCurrentSession ? (
				<span className="absolute right-[5px] top-[5px] rounded bg-primary px-1.5 py-[3px] text-[0.8rem] font-bold text-white/80">
					Current
				</span>
			) : null}
			{dropdown}
		</div>
	);
}
