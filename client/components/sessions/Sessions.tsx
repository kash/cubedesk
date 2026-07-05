import {openModal} from '@/actions/general';
import Button from '@/components/common/Button';
import CubePicker from '@/components/common/CubePicker';
import Input from '@/components/common/inputs/input/Input';
import Module from '@/components/common/Module';
import PageTitle from '@/components/common/PageTitle';
import History from '@/components/modules/history/History';
import TimeChart from '@/components/modules/time-chart/TimeChart';
import TimeDistro from '@/components/modules/time-distro/TimeDistro';
import CreateNewSession from '@/components/sessions/CreateNewSession';
import Session from '@/components/sessions/Session';
import {fetchSessionById, fetchSessions, getCubeTypesFromSession} from '@/db/sessions/query';
import {reorderSessions, updateSessionDb} from '@/db/sessions/update';
import {fetchLastCubeTypeForSession} from '@/db/solves/query';
import block from '@/styles/bem';
import {CubeType} from '@/util/cubes/cube_types';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useSessionDb} from '@/util/hooks/useSessionDb';
import {useSettings} from '@/util/hooks/useSettings';
import {
	closestCenter,
	DndContext,
	DragEndEvent,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {restrictToHorizontalAxis, restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {
	arrayMove,
	horizontalListSortingStrategy,
	SortableContext,
	useSortable,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import classNames from 'classnames';
import {Plus} from 'phosphor-react';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

function SortableItem({
	session,
	selectedSessionId,
	selectSession,
	setSelectedSessionId,
	mobileMode,
}) {
	const {
		attributes,
		listeners,
		setActivatorNodeRef,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({
		id: session.id,
	});
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		zIndex: isDragging ? 1 : undefined,
	};

	return (
		<Session
			setSelectedSessionId={setSelectedSessionId}
			session={session}
			selectedSessionId={selectedSessionId}
			selectSession={selectSession}
			style={style}
			isDragging={isDragging}
			className={mobileMode ? 'mr-2.5 w-auto min-w-[250px]' : undefined}
			refCallback={setNodeRef}
			dragHandleProps={{attributes, listeners, setActivatorNodeRef}}
		/>
	);
}

function SortableList({
	sessions,
	selectedSessionId,
	selectSession,
	setSelectedSessionId,
	mobileMode,
}) {
	const items = sessions.map((s) => s.id);

	return (
		<SortableContext
			items={items}
			strategy={mobileMode ? horizontalListSortingStrategy : verticalListSortingStrategy}
		>
			<div
				className={
					mobileMode
						? 'flex h-full flex-row overflow-x-scroll'
						: 'h-[calc(100vh_-_230px)] overflow-auto'
				}
			>
				{sessions.map((s) => (
					<SortableItem
						setSelectedSessionId={setSelectedSessionId}
						session={s}
						selectedSessionId={selectedSessionId}
						selectSession={selectSession}
						mobileMode={mobileMode}
						key={s.id}
					/>
				))}
			</div>
		</SortableContext>
	);
}

export default function Sessions() {
	const dispatch = useDispatch();

	useSessionDb();

	const mobileMode = useGeneral('mobile_mode');
	const currentSessionId = useSettings('session_id');

	const [selectedSessionId, setSelectedSessionId] = useState<string>(currentSessionId);
	const [cubeType, setCubeType] = useState('');

	const allSessions = fetchSessions();
	const session = fetchSessionById(selectedSessionId);

	function selectSession(e, id) {
		let target = e?.target;
		while (target) {
			if (
				target &&
				target.classList &&
				target.classList.contains(block('common-dropdown')())
			) {
				return;
			}

			target = target.parentNode;
		}

		setSelectedSessionId(id);

		const lastCubeType = fetchLastCubeTypeForSession(id);
		setCubeType(lastCubeType || '333');
	}

	function handleCubeChange(ct: CubeType) {
		setCubeType(ct.id);
	}

	function setSessionName(e) {
		if (!session) {
			return;
		}

		updateSessionDb(session, {
			name: e.target.value,
		});
	}

	function openCreateNewSession() {
		dispatch(
			openModal(<CreateNewSession />, {
				onComplete: (session) => {
					setSelectedSessionId(session.id);
				},
			}),
		);
	}

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 6,
			},
		}),
	);

	function onDragEnd({active, over}: DragEndEvent) {
		if (!over || active.id === over.id) {
			return;
		}

		const oldIndex = allSessions.findIndex((s) => s.id === active.id);
		const newIndex = allSessions.findIndex((s) => s.id === over.id);
		if (oldIndex === -1 || newIndex === -1) {
			return;
		}

		const sessions = arrayMove(allSessions, oldIndex, newIndex);
		const sessionIds = sessions.map((s) => s.id);

		reorderSessions(sessionIds);
	}

	if (!session || !allSessions || !allSessions.length) {
		return null;
	}

	const sessionCubeTypes = getCubeTypesFromSession(session);
	const currentCube = String(
		cubeType || (session ? fetchLastCubeTypeForSession(session.id) : null) || '333',
	);

	const fetchFilter = {
		session_id: selectedSessionId,
		cube_type: currentCube,
	};

	// TODO NOW fix session stats. Replace with QuickStats with proper options
	const body = (
		<div>
			<Module>
				<div className="col-span-2 flex items-center justify-between">
					<Input
						type="text"
						noMargin
						maxWidth
						placeholder="Session Name"
						name={selectedSessionId}
						value={session.name}
						onChange={setSessionName}
					/>
					<div className="flex flex-row flex-wrap justify-end gap-2">
						<CubePicker
							handlePrefix="Stats for "
							excludeSelected
							value={currentCube}
							cubeTypes={sessionCubeTypes}
							onChange={handleCubeChange}
							dropdownProps={{
								noMargin: true,
								dropdownButtonProps: {
									noMargin: true,
								},
							}}
						/>
					</div>
				</div>
			</Module>
			<div className="mt-[30px] grid w-full auto-rows-[300px] grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5">
				{/*<Module smallPadding>*/}
				{/*	<SessionStats filterOptions={fetchFilter} />*/}
				{/*</Module>*/}
				<Module smallPadding className="h-full">
					<History filterOptions={fetchFilter} />
				</Module>
				<Module smallPadding className="h-full">
					<TimeChart filterOptions={fetchFilter} />
				</Module>
				<Module smallPadding className="h-full">
					<TimeDistro filterOptions={fetchFilter} />
				</Module>
			</div>
		</div>
	);

	return (
		<div className="relative flex h-full flex-col">
			<PageTitle pageName="Sessions">
				<Button
					primary
					glow
					style={{
						top: 0,
						right: 0,
						position: 'absolute',
					}}
					large
					text="New Session"
					onClick={openCreateNewSession}
					type="button"
					icon={<Plus weight="bold" />}
				/>
			</PageTitle>
			<div
				className={classNames(
					'box-border grid h-full w-full gap-5',
					mobileMode
						? 'grid-cols-1 [grid-template-rows:100px_1fr]'
						: '[grid-template-columns:290px_1fr]',
				)}
			>
				<DndContext
					sensors={sensors}
					collisionDetection={closestCenter}
					modifiers={[mobileMode ? restrictToHorizontalAxis : restrictToVerticalAxis]}
					onDragEnd={onDragEnd}
				>
					<SortableList
						mobileMode={mobileMode}
						selectSession={selectSession}
						setSelectedSessionId={setSelectedSessionId}
						sessions={allSessions}
						selectedSessionId={selectedSessionId}
					/>
				</DndContext>
				<div>{body}</div>
			</div>
		</div>
	);
}
