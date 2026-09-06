import CubePicker from '@/components/common/CubePicker';
import './sessions.css';
import PageTitle from '@/components/common/PageTitle';
import History from '@/components/modules/history/History';
import CreateNewSession from '@/components/sessions/CreateNewSession';
import Session from '@/components/sessions/Session';
import SessionAnalytics from '@/components/sessions/SessionAnalytics';
import SessionSummary from '@/components/sessions/SessionSummary';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {fetchSessionById, fetchSessions, getCubeTypesFromSession} from '@/db/sessions/query';
import {reorderSessions, updateSessionDb} from '@/db/sessions/update';
import {fetchLastCubeTypeForSession} from '@/db/solves/query';
import {getTotalSolveCount} from '@/db/solves/stats/count';
import {CubeType} from '@/util/cubes/cube_types';
import {useSessionDb} from '@/util/hooks/useSessionDb';
import {useSettings} from '@/util/hooks/useSettings';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {
	closestCenter,
	DndContext,
	DragEndEvent,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	useSortable,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Plus} from 'phosphor-react';
import React, {useState} from 'react';

function SortableItem({session, selectedSessionId, selectSession, setSelectedSessionId}) {
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
			refCallback={setNodeRef}
			dragHandleProps={{attributes, listeners, setActivatorNodeRef}}
		/>
	);
}

function SortableList({sessions, selectedSessionId, selectSession, setSelectedSessionId}) {
	const items = sessions.map((s) => s.id);

	return (
		<SortableContext items={items} strategy={verticalListSortingStrategy}>
			<div className="sessions-list">
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
	const [createNewSessionDialog, setCreateNewSessionDialog] = React.useState<{
		props: React.ComponentProps<typeof CreateNewSession>;
		onComplete: React.ComponentProps<typeof CreateNewSession>['onComplete'];
	} | null>(null);

	useSessionDb();

	useSolveDb();
	const currentSessionId = useSettings('session_id');

	const [selectedSessionId, setSelectedSessionId] = useState<string>(currentSessionId);
	const [cubeSelection, setCubeSelection] = useState<{
		sessionId: string;
		cubeType: string;
	} | null>(null);

	const allSessions = fetchSessions();
	const session = fetchSessionById(selectedSessionId) || allSessions[0];

	function selectSession(e, id) {
		setSelectedSessionId(id);

		setCubeSelection(null);
	}

	function handleCubeChange(ct: CubeType) {
		if (session) setCubeSelection({sessionId: session.id, cubeType: ct.id});
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
		setCreateNewSessionDialog({
			props: {},
			onComplete: (session) => {
				setSelectedSessionId(session.id);
				setCubeSelection(null);
			},
		});
	}

	const sensors = useSensors(
		useSensor(KeyboardSensor, {coordinateGetter: sortableKeyboardCoordinates}),
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

	const sessionCubeTypes = session ? getCubeTypesFromSession(session) : [];
	const currentCube = String(
		(cubeSelection?.sessionId === session?.id ? cubeSelection?.cubeType : null) ||
			(session ? fetchLastCubeTypeForSession(session.id) : null) ||
			'333',
	);

	const fetchFilter = {
		session_id: session?.id,
		cube_type: currentCube,
	};

	const body = session ? (
		<div className="sessions-detail">
			<div className="sessions-detail-header">
				<div className="sessions-name-field">
					<Label className="mb-2" htmlFor="session-name">
						Session name
					</Label>
					<Input
						id="session-name"
						type="text"
						placeholder="Session name"
						name={session.id}
						value={session.name}
						onChange={setSessionName}
						maxLength={200}
					/>
				</div>
				<CubePicker
					handlePrefix="Stats for "
					excludeSelected
					value={currentCube}
					cubeTypes={sessionCubeTypes}
					onChange={handleCubeChange}
					pickerProps={{noMargin: true}}
				/>
			</div>
			<SessionSummary filterOptions={fetchFilter} />
			<div className="sessions-analysis">
				<section className="sessions-panel sessions-history" aria-label="Solve history">
					<div className="sessions-panel-heading">
						<h2>Solve history</h2>
						<p>Most recent first · Select a time for details</p>
					</div>
					<div
						className="sessions-history-list"
						style={{
							height: Math.min(
								360,
								Math.max(108, getTotalSolveCount(fetchFilter) * 36),
							),
						}}
					>
						<History key={`${session.id}-${currentCube}`} filterOptions={fetchFilter} />
					</div>
				</section>
				<SessionAnalytics filterOptions={fetchFilter} />
			</div>
		</div>
	) : (
		<div className="sessions-panel sessions-empty">
			<h2>A fresh start</h2>
			<p>Create a session to start organizing your solves.</p>
			<Button onClick={openCreateNewSession}>Create a session</Button>
		</div>
	);

	return (
		<>
			<div className="sessions-page">
				<div className="sessions-page-header">
					<PageTitle
						pageName="Sessions"
						description="A little structure for every practice."
					/>
					<Button onClick={openCreateNewSession} type="button">
						<Plus weight="bold" />
						New session
					</Button>
				</div>
				<div className="sessions-layout">
					<aside className="sessions-sidebar" aria-label="Your sessions">
						<div className="sessions-sidebar-heading">
							<h2>Your sessions</h2>
							<span>{allSessions.length}</span>
						</div>
						<DndContext
							sensors={sensors}
							collisionDetection={closestCenter}
							modifiers={[restrictToVerticalAxis]}
							onDragEnd={onDragEnd}
						>
							<SortableList
								selectSession={selectSession}
								setSelectedSessionId={setSelectedSessionId}
								sessions={allSessions}
								selectedSessionId={session?.id}
							/>
						</DndContext>
					</aside>
					{body}
				</div>
			</div>
			<Dialog
				open={createNewSessionDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setCreateNewSessionDialog(null);
					}
				}}
			>
				{createNewSessionDialog && (
					<DialogContent>
						<CreateNewSession
							{...createNewSessionDialog.props}
							onComplete={(...args) => {
								setCreateNewSessionDialog((current) =>
									current === createNewSessionDialog ? null : current,
								);
								createNewSessionDialog.onComplete?.(...args);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
