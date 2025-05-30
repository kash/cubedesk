import Avatar from '@/components/common/avatar/Avatar';
import CopyText from '@/components/common/copy_text/CopyText';
import './SolveInfo.scss';
import HorizontalNav from '@/components/common/horizontal_nav/HorizontalNav';
import Loading from '@/components/common/loading/Loading';
import {IModalProps} from '@/components/common/modal/Modal';
import Tag from '@/components/common/tag/Tag';
import {Button} from '@/components/ui/button';
import {Solve} from '@/generated/zod';
import {toggleDnfSolveDb, togglePlusTwoSolveDb} from '@/lib/db/solves/operations';
import {fetchSolve} from '@/lib/db/solves/query';
import {deleteSolveDb, updateSolveDb} from '@/lib/db/solves/update';
import {getCubeTypeInfoById} from '@/lib/util/cubes/util';
import {getFullFormattedDate} from '@/lib/util/dates';
import {useSolveDb} from '@/lib/util/hooks/useSolveDb';
import {getTimeString} from '@/lib/util/time';
import block from '@/styles/bem';
import {Bluetooth, Cube} from '@phosphor-icons/react/dist/ssr';
import React, {useEffect, useState} from 'react';
import {demoUser} from './demo_user';
import NotesInfo from './notes_info/NotesInfo';
import ScrambleInfo from './scramble_info/ScrambleInfo';
import SolutionInfo from './solution_info/SolutionInfo';
import StatsInfo from './stats_info/StatsInfo';

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

	const updateSolve = useCallback(() => {
		// TODO: Migrate to tRPC endpoint for getting solve by ID
		setDbSolve(fetchSolve(solveId));
		setLoading(false);
	}, [solveId]);

	const togglePlusTwo = useCallback(() => {
		togglePlusTwoSolveDb(dbSolve);
	}, [dbSolve]);

	const toggleDnf = useCallback(() => {
		toggleDnfSolveDb(dbSolve);
	}, [dbSolve]);

	const deleteSolve = useCallback(() => {
		deleteSolveDb(dbSolve);
		onComplete();
	}, [dbSolve, onComplete]);

	const handleChange = useCallback((e) => {
		updateSolveDb(dbSolve, {
			[e.target.name]: e.target.value,
		});
	}, [dbSolve]);

	const onPageChange = useCallback((id) => {
		setPage(id);
	}, []);

	const toggleEditMode = useCallback(() => {
		if (editMode) {
			updateSolve();
		}

		setEditMode(!editMode);
	}, [editMode, updateSolve]);

	useEffect(() => {
		if (demoSolve) {
			return;
		}

		updateSolve();
	}, [demoSolve, updateSolve]);

	let user = solve?.user;
	if (solve?.demo_mode) {
		user = demoUser;
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
			className={b('edit')}
			variant={editMode ? 'default' : 'secondary'}
			onClick={toggleEditMode}
		>
			{editMode ? 'Save' : 'Edit'}
		</Button>
	);

	let plusTwoButton = (
		<Button
			variant={plusTwo ? 'outline' : 'secondary'}
			disabled={disabled}
			onClick={togglePlusTwo}
			className={plusTwo ? 'border-orange-500 text-orange-500' : ''}
		>
			+2
		</Button>
	);
	let dnfButton = (
		<Button variant={dnf ? 'destructive' : 'secondary'} disabled={disabled} onClick={toggleDnf}>
			DNF
		</Button>
	);
	let deleteButton = (
		<Button variant="secondary" title="Delete solve" onClick={deleteSolve}>
			Delete
		</Button>
	);

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
					children: 'Share Link',
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
								icon={<Bluetooth />}
								text={smartDevice?.name}
								title="Smart cube"
								large
								backgroundColor="blue"
							/>
						) : null}

						<Tag
							icon={<Cube weight="bold" />}
							backgroundColor="button"
							text={cubeTypeInfo.name}
						/>
						{plusTwoButton}
						{dnfButton}
					</div>
					<div className="w-full pt-5">
						<span className="text-text/60 m-auto table text-sm">
							{getFullFormattedDate(endedAt)}
						</span>
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
