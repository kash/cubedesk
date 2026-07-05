import Avatar from '@/components/common/avatar/Avatar';
import Button from '@/components/common/Button';
import CopyText from '@/components/common/CopyText';
import HorizontalNav from '@/components/common/HorizontalNav';
import Loading from '@/components/common/Loading';
import {IModalProps} from '@/components/common/modal/Modal';
import Tag from '@/components/common/Tag';
import {demoUser} from '@/components/solve-info/demo-user';
import NotesInfo from '@/components/solve-info/NotesInfo';
import ScrambleInfo from '@/components/solve-info/ScrambleInfo';
import SolutionInfo from '@/components/solve-info/SolutionInfo';
import StatsInfo from '@/components/solve-info/stats-info/StatsInfo';
import {toggleDnfSolveDb, togglePlusTwoSolveDb} from '@/db/solves/operations';
import {fetchSolve} from '@/db/solves/query';
import {deleteSolveDb, updateSolveDb} from '@/db/solves/update';
import {Solve} from '@/types/solve';
import {api} from '@/util/api';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {getFullFormattedDate} from '@/util/dates';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {getTimeString} from '@/util/time';
import {Bluetooth, Cube} from 'phosphor-react';
import React, {ReactNode, useEffect, useState} from 'react';

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
	const [solve, setSolve] = useState<Solve | undefined>(props.solve);
	const [editMode, setEditMode] = useState(false);
	const [dbSolve, setDbSolve] = useState<Solve | null>(null);

	const utils = api.useUtils();

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
		utils.solve.get.fetch({id: solveId}).then((res) => {
			setDbSolve(fetchSolve(solveId));
			setSolve(res as unknown as Solve);
			setLoading(false);
		});
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
			deleteSolveDb(dbSolve);
		}
		onComplete?.();
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
		<Button
			text={editMode ? 'Save' : 'Edit'}
			gray
			primary={editMode}
			onClick={toggleEditMode}
		/>
	);

	let plusTwoButton: ReactNode = (
		<Button gray text="+2" disabled={disabled} onClick={togglePlusTwo} warning={plusTwo} />
	);
	let dnfButton: ReactNode = <Button gray text="DNF" disabled={disabled} onClick={toggleDnf} danger={dnf} />;
	let deleteButton: ReactNode = <Button gray title="Delete solve" text="Delete" onClick={deleteSolve} />;

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

	let shareLink: ReactNode = null;
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
		<div className="relative pt-5">
			<div className="absolute top-0 right-[45px] flex w-[calc(100%_-_45px)] flex-row items-center justify-between">
				<div className="flex flex-row gap-2.5">{shareLink}</div>
				<div className="flex flex-row gap-2.5">
					{deleteButton}
					{editButton}
				</div>
			</div>
			<div>
				<h2 className="text-text mt-5 mb-0 w-full text-center font-mono text-[4.3rem] font-bold">
					{time}
				</h2>
				<div className="border-button mx-auto mt-5 mb-[25px] flex w-full flex-col items-center border-b-2 pb-[25px]">
					<Avatar small user={user} hideBadges profile={user?.profile} />
					<div className="mt-[15px] flex flex-row items-center gap-2.5">
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
							text={cubeTypeInfo?.name ?? cubeType}
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
				<div className="flex flex-col items-center">
					<div className="mb-5 flex w-full items-start">
						<HorizontalNav tabId={page} onChange={onPageChange} tabs={pages} />
					</div>
					{infoBody}
				</div>
			</div>
		</div>
	);
}
