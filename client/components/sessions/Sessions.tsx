import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import './Sessions.scss';
import {Plus} from 'phosphor-react';
import CubePicker from '../common/cube_picker/CubePicker';
import TimeChart from '../modules/time_chart/TimeChart';
import History from '../modules/history/History';
import Input from '../common/inputs/input/Input';
import {openModal} from '../../actions/general';
import CreateNewSession from './new_session/CreateNewSession';
import {closestCenter, DndContext, DragEndEvent, PointerSensor, useSensor, useSensors} from '@dnd-kit/core';
import {restrictToHorizontalAxis, restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {
	arrayMove,
	horizontalListSortingStrategy,
	SortableContext,
	useSortable,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import Session from './session/Session';
import {fetchSessionById, fetchSessions, getCubeTypesFromSession} from '../../db/sessions/query';
import {fetchLastCubeTypeForSession} from '../../db/solves/query';
import {reorderSessions, updateSessionDb} from '../../db/sessions/update';
import {useGeneral} from '../../util/hooks/useGeneral';
import block from '../../styles/bem';
import {useSessionDb} from '../../util/hooks/useSessionDb';
import {CubeType} from '../../util/cubes/cube_types';
import PageTitle from '../common/page_title/PageTitle';
import Button from '../common/button/Button';
import Module from '../common/module/Module';
import TimeDistro from '../modules/time_distro/TimeDistro';
import {useSettings} from '../../util/hooks/useSettings';

const b = block('sessions');

function SortableItem({session, selectedSessionId, selectSession, setSelectedSessionId}) {
	const {attributes, listeners, setActivatorNodeRef, setNodeRef, transform, transition, isDragging} = useSortable({
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
			refCallback={setNodeRef}
			dragHandleProps={{attributes, listeners, setActivatorNodeRef}}
		/>
	);
}

function SortableList({sessions, selectedSessionId, selectSession, setSelectedSessionId, mobileMode}) {
	const items = sessions.map((s) => s.id);

	return (
		<SortableContext
			items={items}
			strategy={mobileMode ? horizontalListSortingStrategy : verticalListSortingStrategy}
		>
			<div className={b('list')}>
				{sessions.map((s) => (
					<SortableItem
						setSelectedSessionId={setSelectedSessionId}
						session={s}
						selectedSessionId={selectedSessionId}
						selectSession={selectSession}
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
			if (target && target.classList && target.classList.contains(block('common-dropdown')())) {
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
			})
		);
	}

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 6,
			},
		})
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
	const currentCube = String(cubeType || (session ? fetchLastCubeTypeForSession(session.id) : null) || '333');

	const fetchFilter = {
		session_id: selectedSessionId,
		cube_type: currentCube,
	};

	// TODO NOW fix session stats. Replace with QuickStats with proper options
	const body = (
		<div className={b('info')}>
			<Module>
				<div className={b('info-header')}>
					<Input
						type="text"
						noMargin
						maxWidth
						placeholder="Session Name"
						name={selectedSessionId}
						value={session.name}
						onChange={setSessionName}
					/>
					<div className={b('info-actions')}>
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
			<div className={b('stats')}>
				{/*<Module smallPadding>*/}
				{/*	<SessionStats filterOptions={fetchFilter} />*/}
				{/*</Module>*/}
				<Module smallPadding>
					<History filterOptions={fetchFilter} />
				</Module>
				<Module smallPadding>
					<TimeChart filterOptions={fetchFilter} />
				</Module>
				<Module smallPadding>
					<TimeDistro filterOptions={fetchFilter} />
				</Module>
			</div>
		</div>
	);

	return (
		<div className={b({mobile: mobileMode})}>
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
			<div className={b('body')}>
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
