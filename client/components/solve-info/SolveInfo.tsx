import Avatar from '@/components/common/avatar/Avatar';
import CopyText from '@/components/common/CopyText';
import HorizontalNav from '@/components/common/HorizontalNav';
import Loading from '@/components/common/Loading';
import DeleteSolveDialog, {useSolveDeletion} from '@/components/solve-info/DeleteSolveDialog';
import NotesInfo from '@/components/solve-info/NotesInfo';
import ScrambleInfo from '@/components/solve-info/ScrambleInfo';
import SolutionInfo from '@/components/solve-info/SolutionInfo';
import StatsInfo from '@/components/solve-info/stats-info/StatsInfo';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {toggleDnfSolveDb, togglePlusTwoSolveDb} from '@/db/solves/operations';
import {fetchSolve} from '@/db/solves/query';
import {updateSolveDb} from '@/db/solves/update';
import {Solve} from '@/types/solve';
import {api} from '@/util/api';
import {cn} from '@/util/cn';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {getFullFormattedDate} from '@/util/dates';
import {useSettings} from '@/util/hooks/useSettings';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {getTimeString} from '@/util/time';
import {Bluetooth, Cube} from 'phosphor-react';
import React, {ReactNode, useEffect, useState} from 'react';

interface Props {
	onComplete?: () => void;
	solveId: string;
	solve?: Solve;
	disabled?: boolean;
}

export default function SolveInfo(props: Props) {
	const {solveId, disabled, onComplete} = props;
	const deletion = useSolveDeletion(onComplete);
	const timerFontFamily = useSettings('timer_font_family');

	const initialSolve = props.solve ?? fetchSolve(solveId) ?? undefined;
	const demoSolve = initialSolve?.demo_mode;

	const [page, setPage] = useState('scramble');
	const [loading, setLoading] = useState(!demoSolve);
	const [solve, setSolve] = useState<Solve | undefined>(initialSolve);
	const [loadError, setLoadError] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [dbSolve, setDbSolve] = useState<Solve | null>(() => fetchSolve(solveId));

	const utils = api.useUtils();

	const solveDbVersion = useSolveDb();
	useEffect(() => {
		setDbSolve(fetchSolve(solveId));
	}, [solveId, solveDbVersion]);
	useEffect(() => {
		if (demoSolve) {
			return;
		}

		updateSolve();
	}, []);

	const user = solve?.user;

	function updateSolve() {
		const localSolve = fetchSolve(solveId);
		if (localSolve?.demo_mode || demoSolve) {
			setDbSolve(localSolve);
			setSolve(localSolve ?? initialSolve);
			setLoading(false);
			return;
		}

		setLoadError(false);
		setLoading(true);
		utils.solve.get
			.fetch({id: solveId})
			.then((res) => {
				setDbSolve(fetchSolve(solveId));
				setSolve(res as unknown as Solve);
			})
			.catch(() => setLoadError(true))
			.finally(() => setLoading(false));
	}

	function togglePlusTwo() {
		if (dbSolve) {
			togglePlusTwoSolveDb(dbSolve);
		}
	}

	function toggleDnf() {
		if (dbSolve) {
			toggleDnfSolveDb(dbSolve);
		}
	}

	function deleteSolve() {
		if (dbSolve) {
			deletion.requestDelete(dbSolve);
		}
	}

	function handleChange(e) {
		if (!dbSolve) {
			return;
		}

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
			<div className="relative pt-5">
				<Loading />
			</div>
		);
	}

	if (loadError) {
		return (
			<div className="text-text flex flex-col items-center gap-4 py-8">
				<p>Could not load this solve. Please try again.</p>
				<Button variant="secondary" onClick={updateSolve}>
					{'Try again'}
				</Button>
			</div>
		);
	}

	const effSolve = dbSolve || solve;
	if (!effSolve || !solve) {
		return null;
	}

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

	let editButton: ReactNode = (
		<Button variant={editMode ? 'default' : 'secondary'} onClick={toggleEditMode}>
			{editMode ? 'Save' : 'Edit'}
		</Button>
	);

	let plusTwoButton: ReactNode = (
		<Button
			variant="secondary"
			aria-pressed={plusTwo}
			className={cn({'text-warning': plusTwo})}
			disabled={disabled}
			onClick={togglePlusTwo}
		>
			{'+2'}
		</Button>
	);
	let dnfButton: ReactNode = (
		<Button
			variant="secondary"
			aria-pressed={dnf}
			className={cn({'text-error': dnf})}
			disabled={disabled}
			onClick={toggleDnf}
		>
			{'DNF'}
		</Button>
	);
	let deleteButton: ReactNode = (
		<Button variant="secondary" title="Delete solve" onClick={deleteSolve}>
			{'Delete'}
		</Button>
	);

	if (disabled) {
		deleteButton = null;
		editButton = null;
		plusTwoButton = null;
		dnfButton = null;

		if (plusTwo) {
			plusTwoButton = (
				<Badge size="button" variant="warning">
					+2
				</Badge>
			);
		}
		if (dnf) {
			dnfButton = (
				<Badge size="button" variant="destructive">
					DNF
				</Badge>
			);
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

	let shareLink: ReactNode = null;
	if (typeof window !== 'undefined' && !demoSolve && solve.share_code) {
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
		<>
			<div className="relative pt-5">
				<div className="absolute top-0 right-[45px] flex w-[calc(100%_-_45px)] flex-row items-center justify-between">
					<div className="flex flex-row gap-2.5">{shareLink}</div>
					<div className="flex flex-row gap-2.5">
						{deleteButton}
						{editButton}
					</div>
				</div>
				<div>
					<h2
						className="text-text mt-5 mb-0 w-full text-center text-[4.3rem] font-medium"
						style={{fontFamily: timerFontFamily + ', monospace'}}
					>
						{time}
					</h2>
					<div className="border-button mx-auto mt-5 mb-[25px] flex w-full flex-col items-center border-b-2 pb-[25px]">
						{!demoSolve && user && (
							<Avatar small user={user} hideBadges profile={user.profile} />
						)}
						<div className="mt-[15px] flex flex-row items-center gap-2.5">
							{isSmartCube ? (
								<Badge size="button" variant="info" title="Smart cube">
									{smartDevice?.name}
									<Bluetooth />
								</Badge>
							) : null}

							<Badge variant="secondary" size="button">
								{cubeTypeInfo?.name ?? cubeType}
								<Cube weight="bold" />
							</Badge>
							{plusTwoButton}
							{dnfButton}
						</div>
						<div className="w-full pt-5">
							<span className="text-text/60 m-auto table text-sm">
								{getFullFormattedDate(endedAt)}
							</span>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="mb-5 flex w-full items-start">
							<HorizontalNav tabId={page} onChange={onPageChange} tabs={pages} />
						</div>
						{infoBody}
					</div>
				</div>
			</div>
			<DeleteSolveDialog {...deletion.dialogProps} />
		</>
	);
}
