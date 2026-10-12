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
import {PublicUserAccount} from '@/types/user';
import {api} from '@/util/api';
import {cn} from '@/util/cn';
import {getEventTypeInfoById} from '@/util/cubes/util';
import {getFullFormattedDate} from '@/util/dates';
import {useMe} from '@/util/hooks/useMe';
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
	fullPage?: boolean;
}

export default function SolveInfo(props: Props) {
	const {solveId, disabled, fullPage, onComplete} = props;
	const deletion = useSolveDeletion(onComplete);
	const timerFontFamily = useSettings('timer_font_family');
	const me = useMe();

	const [page, setPage] = useState('scramble');
	const [remoteSolve, setRemoteSolve] = useState<Solve | null>(null);
	const [loadErrorId, setLoadErrorId] = useState<string | null>(null);
	const [loadAttempt, setLoadAttempt] = useState(0);
	const [editMode, setEditMode] = useState(false);
	const [dbSolve, setDbSolve] = useState<Solve | null>(() => fetchSolve(solveId));

	const utils = api.useUtils();

	const solveDbVersion = useSolveDb();
	useEffect(() => {
		setDbSolve(fetchSolve(solveId));
	}, [solveId, solveDbVersion]);

	const baseSolve = dbSolve ?? props.solve ?? null;
	const demoSolve = !!baseSolve?.demo_mode;
	const needsRemote =
		!demoSolve && !fullPage && (!baseSolve || baseSolve.is_smart_cube || !baseSolve.share_code);

	useEffect(() => {
		if (!needsRemote) {
			return;
		}

		let cancelled = false;
		utils.solve.get
			.fetch({id: solveId})
			.then((res) => {
				if (!cancelled) {
					setRemoteSolve(res as unknown as Solve);
				}
			})
			.catch(() => {
				if (!cancelled) {
					setLoadErrorId(solveId);
				}
			});

		return () => {
			cancelled = true;
		};
	}, [solveId, needsRemote, loadAttempt, utils]);

	const loadError = loadErrorId === solveId;
	const fetchedSolve = remoteSolve?.id === solveId ? remoteSolve : null;
	const solve = mergeSolves(fetchedSolve ?? props.solve ?? null, dbSolve, me);
	const user = solve?.user;

	function retryLoad() {
		setLoadErrorId(null);
		setLoadAttempt((attempt) => attempt + 1);
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
		setEditMode(!editMode);
	}

	if (!solve) {
		if (loadError) {
			return <LoadError onRetry={retryLoad} />;
		}

		return (
			<div className="relative pt-5">
				<Loading />
			</div>
		);
	}

	const plusTwo = solve.plus_two;
	const dnf = solve.dnf;
	const eventType = solve.event_type;
	const endedAt = new Date(Number(solve.ended_at));
	const isSmartCube = solve.is_smart_cube;
	const smartDevice = solve.smart_device;

	const time = getTimeString(solve.time);

	const childBody = {
		editMode,
		solve,
		handleChange,
	};

	const smartDataReady = demoSolve || solve.solve_method_steps !== undefined;

	function smartSection(body: ReactNode) {
		if (smartDataReady) {
			return body;
		}

		if (loadError) {
			return <LoadError onRetry={retryLoad} />;
		}

		return <Loading />;
	}

	const pageMap = {
		scramble: <ScrambleInfo {...childBody} />,
		solution: smartSection(<SolutionInfo {...childBody} />),
		stats: smartSection(<StatsInfo {...childBody} />),
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

	if (fullPage) {
		const sections = [
			{id: 'scramble', title: 'Scramble', body: <ScrambleInfo {...childBody} fullPage />},
			...(isSmartCube
				? [
						{
							id: 'solution',
							title: 'Solution',
							body: smartSection(<SolutionInfo {...childBody} />),
						},
						{
							id: 'stats',
							title: 'Stats',
							body: smartSection(<StatsInfo {...childBody} />),
						},
					]
				: []),
			...(solve.notes
				? [{id: 'notes', title: 'Notes', body: <NotesInfo {...childBody} />}]
				: []),
		];

		return (
			<div className="flex flex-col">
				<div className="border-button flex flex-col items-center gap-6 border-b-2 pb-8 lg:flex-row lg:gap-12">
					<h2
						className="text-text m-0 text-[4.3rem] leading-none font-medium lg:text-[6rem]"
						style={{fontFamily: timerFontFamily + ', monospace'}}
					>
						{time}
					</h2>
					<div className="flex flex-col items-center gap-3 lg:items-start">
						{!demoSolve && user && (
							<Avatar small user={user} hideBadges profile={user.profile} />
						)}
						<div className="flex flex-row flex-wrap items-center justify-center gap-2.5">
							{isSmartCube ? (
								<Badge size="button" variant="info" title="Smart cube">
									{smartDevice?.name}
									<Bluetooth />
								</Badge>
							) : null}
							<Badge variant="secondary" size="button">
								{getEventTypeInfoById(eventType)?.name ?? eventType}
								<Cube weight="bold" />
							</Badge>
							{plusTwoButton}
							{dnfButton}
						</div>
						<span className="text-text/60 text-sm">
							{getFullFormattedDate(endedAt)}
						</span>
					</div>
				</div>
				{sections.map((section) => (
					<section
						key={section.id}
						className="border-button flex flex-col gap-5 border-b-2 py-8 last:border-b-0 last:pb-0"
					>
						<h3 className="text-text m-0 text-lg font-semibold">{section.title}</h3>
						{section.body}
					</section>
				))}
			</div>
		);
	}

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

	const eventTypeInfo = getEventTypeInfoById(eventType);

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
								{eventTypeInfo?.name ?? eventType}
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

function mergeSolves(
	remote: Solve | null,
	local: Solve | null,
	me: PublicUserAccount | null,
): Solve | null {
	if (!local) {
		return remote;
	}

	return {
		...remote,
		...local,
		share_code: local.share_code ?? remote?.share_code ?? null,
		user: remote?.user ?? me ?? undefined,
	};
}

function LoadError({onRetry}: {onRetry: () => void}) {
	return (
		<div className="text-text flex flex-col items-center gap-4 py-8">
			<p>Could not load this solve. Please try again.</p>
			<Button variant="secondary" onClick={onRetry}>
				{'Try again'}
			</Button>
		</div>
	);
}
