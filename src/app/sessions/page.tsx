'use client';

import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import '../../components/sessions/Sessions.scss';
import {Plus} from '@phosphor-icons/react/dist/ssr';
import CubePicker from '../../components/common/cube_picker/CubePicker';
import TimeChart from '../../components/modules/time_chart/TimeChart';
import History from '../../components/modules/history/History';
import { Input } from '@/components/ui/input';
import Button from '../../components/common/button/Button';
import {openModal} from '../../lib/actions/general';
import CreateNewSession from '../../components/sessions/new_session/CreateNewSession';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Session from '../../components/sessions/session/Session';
import {
	fetchSessionById,
	fetchSessions,
	getCubeTypesFromSession,
} from '../../lib/db/sessions/query';
import {fetchLastCubeTypeForSession} from '../../lib/db/solves/query';
import {reorderSessions, updateSessionDb} from '../../lib/db/sessions/update';
import {useGeneral} from '../../lib/util/hooks/useGeneral';
import block from '../../styles/bem';
import {useSessionDb} from '../../lib/util/hooks/useSessionDb';
import {CubeType} from '../../lib/util/cubes/cube_types';
import PageTitle from '../../components/common/page-title/PageTitle';
import Module from '../../components/common/module/Module';
import TimeDistro from '../../components/modules/time_distro/TimeDistro';
import {useSettings} from '../../lib/util/hooks/useSettings';

const b = block('sessions');

const SortableItem = SortableElement(
	({session, selectedSessionId, selectSession, setSelectedSessionId}) => (
		<Session
			setSelectedSessionId={setSelectedSessionId}
			session={session}
			selectedSessionId={selectedSessionId}
			selectSession={selectSession}
		/>
	),
);

const SortableList = SortableContainer(
	({sessions, selectedSessionId, selectSession, setSelectedSessionId}) => {
		return (
			<div className={b('list')}>
				{sessions.map((s, index) => (
					<SortableItem
						setSelectedSessionId={setSelectedSessionId}
						session={s}
						selectedSessionId={selectedSessionId}
						selectSession={selectSession}
						key={s.id}
						index={index}
					/>
				))}
			</div>
		);
	},
);

export default function SessionsPage() {
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

	function onSortEnd({oldIndex, newIndex}) {
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
		<div className={b('info')}>
			<Module>
				<div className={b('info-header')}>
					<Input
						type="text"
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
				<SortableList
					useDragHandle
					lockAxis={mobileMode ? 'x' : 'y'}
					selectSession={selectSession}
					setSelectedSessionId={setSelectedSessionId}
					sessions={allSessions}
					selectedSessionId={selectedSessionId}
					onSortEnd={onSortEnd}
				/>
				<div>{body}</div>
			</div>
		</div>
	);
}
