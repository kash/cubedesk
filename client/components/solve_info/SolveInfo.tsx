import React, {useEffect, useState} from 'react';
import {getTimeString} from '../../util/time';
import './SolveInfo.scss';
import HorizontalNav from '../common/horizontal_nav/HorizontalNav';
import ScrambleInfo from './scramble_info/ScrambleInfo';
import SolutionInfo from './solution_info/SolutionInfo';
import StatsInfo from './stats_info/StatsInfo';
import NotesInfo from './notes_info/NotesInfo';
import {gql} from '@apollo/client';
import {gqlQuery} from '../api';
import Loading from '../common/loading/Loading';
import {SOLVE_WITH_USER_FRAGMENT} from '../../util/graphql/fragments';
import CopyText from '../common/copy_text/CopyText';
import Avatar from '../common/avatar/Avatar';
import {toggleDnfSolveDb, togglePlusTwoSolveDb} from '../../db/solves/operations';
import {fetchSolve} from '../../db/solves/query';
import {deleteSolveDb, updateSolveDb} from '../../db/solves/update';
import {useSolveDb} from '../../util/hooks/useSolveDb';
import {IModalProps} from '../common/modal/Modal';
import {getCubeTypeInfoById} from '../../util/cubes/util';
import block from '../../styles/bem';
import Button from '../common/button/Button';
import Tag from '../common/tag/Tag';
import {Solve} from '../../../server/schemas/Solve.schema';
import {getFullFormattedDate} from '../../util/dates';
import {demoUser} from './demo_user';

const b = block('solve-info');

interface Props extends IModalProps {
	solveId: string;
	solve?: Solve;
	disabled?: boolean;
	closeModal?: () => void;
}

export default function SolveInfo(props: Props) {
	const {solveId, disabled, onComplete} = props;

	const demoSolve = props.solve?.demo_mode;

	const [page, setPage] = useState('scramble');
	const [loading, setLoading] = useState(!demoSolve);
	const [solve, setSolve] = useState<Solve>(props.solve);
	const [editMode, setEditMode] = useState(false);
	const [dbSolve, setDbSolve] = useState<Solve>(null);

	useSolveDb();
	useEffect(() => {
		if (demoSolve) {
			return;
		}

		updateSolve();
	}, []);

	let user = solve?.user;
	if (solve?.demo_mode) {
		user = demoUser;
	}

	function updateSolve() {
		const query = gql`
			${SOLVE_WITH_USER_FRAGMENT}

			query Query($id: String) {
				solve(id: $id) {
					...SolveWithUserFragment
				}
			}
		`;

		const solveQuery = gqlQuery<{solve: Solve}>(
			query,
			{
				id: solveId,
			},
			'no-cache'
		);

		solveQuery.then((res) => {
			setDbSolve(fetchSolve(solveId));
			setSolve(res.data.solve);
			setLoading(false);
		});
	}

	function togglePlusTwo() {
		togglePlusTwoSolveDb(dbSolve);
	}

	function toggleDnf() {
		toggleDnfSolveDb(dbSolve);
	}

	function deleteSolve() {
		deleteSolveDb(dbSolve);
		onComplete();
	}

	function handleChange(e) {
		updateSolveDb(dbSolve, {
			[e.target.name]: e.target.value,
		});
	}

	function onPageChange(id) {
		setPage(id);
	}

	function toggleEditMode() {
		if (editMode) {
			updateSolve();
		}

		setEditMode(!editMode);
	}

	if (loading) {
		return (
			<div className={b()}>
				<Loading />
			</div>
		);
	}

	const effSolve = dbSolve || solve;

	const plusTwo = effSolve.plus_two;
	const dnf = effSolve.dnf;
	const cubeType = solve.cube_type;
	const endedAt = new Date(Number(solve.ended_at));
	const isSmartCube = solve.is_smart_cube;
	const smartDevice = solve.smart_device;

	const time = getTimeString(effSolve.time);

	const childBody = {
		editMode,
		solve,
		handleChange,
	};

	const pageMap = {
		scramble: <ScrambleInfo {...childBody} />,
		solution: <SolutionInfo {...childBody} />,
		stats: <StatsInfo {...childBody} />,
		notes: <NotesInfo {...childBody} />,
	};

	const infoBody = pageMap[page];

	let editButton = (
		<Button
			text={editMode ? 'Save' : 'Edit'}
			className={b('edit')}
			gray
			primary={editMode}
			onClick={toggleEditMode}
		/>
	);

	let plusTwoButton = <Button gray text="+2" disabled={disabled} onClick={togglePlusTwo} warning={plusTwo} />;
	let dnfButton = <Button gray text="DNF" disabled={disabled} onClick={toggleDnf} danger={dnf} />;
	let deleteButton = <Button gray title="Delete solve" text="Delete" onClick={deleteSolve} />;

	if (disabled) {
		deleteButton = null;
		editButton = null;
		plusTwoButton = null;
		dnfButton = null;

		if (plusTwo) {
			plusTwoButton = <Tag text="+2" backgroundColor="orange" />;
		}
		if (dnf) {
			dnfButton = <Tag text="DNF" backgroundColor="red" />;
		}
	}

	let smartPages = [
		{
			id: 'solution',
			value: 'Solution',
		},
		{
			id: 'stats',
			value: 'Stats',
		},
	];

	if (!isSmartCube) {
		smartPages = [];
	}

	const pages = [
		{
			id: 'scramble',
			value: 'Scramble',
		},
		...smartPages,
		{
			id: 'notes',
			value: 'Notes',
		},
	];

	let shareLink = null;
	if (typeof window !== 'undefined') {
		shareLink = (
			<CopyText
				buttonProps={{
					text: 'Share Link',
				}}
				text={window.location.origin + '/solve/' + solve.share_code}
			/>
		);
	}

	const cubeTypeInfo = getCubeTypeInfoById(cubeType);

	return (
		<div className={b()}>
			<div className={b('top-actions')}>
				<div>{shareLink}</div>
				<div>
					{deleteButton}
					{editButton}
				</div>
			</div>
			<div className={b('body')}>
				<h2>{time}</h2>
				<div className={b('sub')}>
					<Avatar small user={user} hideBadges profile={user?.profile} />
					<div className={b('sub-actions')}>
						{isSmartCube ? (
							<Tag
								icon="ph-bluetooth"
								text={smartDevice?.name}
								title="Smart cube"
								large
								backgroundColor="blue"
							/>
						) : null}

						<Tag icon="ph-cube-bold" backgroundColor="button" text={cubeTypeInfo.name} />
						{plusTwoButton}
						{dnfButton}
					</div>
					<div className="w-full pt-5">
						<span className="text-sm text-text/60 table m-auto">{getFullFormattedDate(endedAt)}</span>
					</div>
				</div>
				<div className={b('info')}>
					<div className={b('nav')}>
						<HorizontalNav tabId={page} onChange={onPageChange} tabs={pages} />
					</div>
					{infoBody}
				</div>
			</div>
		</div>
	);
}
