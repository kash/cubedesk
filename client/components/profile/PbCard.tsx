import {openModal} from '@/actions/general';
import Button from '@/components/common/Button';
import Tag from '@/components/common/Tag';
import HistoryModal from '@/components/modules/history/HistoryModal';
import Scramble from '@/components/modules/scramble/ScrambleVisual';
import SolveInfo from '@/components/solve-info/SolveInfo';
import {getAverage} from '@/db/solves/stats/solves/average/average';
import {Solve} from '@/types/solve';
import {TopAverage, TopSolve} from '@/types/top-solve';
import {PublicUserAccount} from '@/types/user';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useMe} from '@/util/hooks/useMe';
import {getTimeString} from '@/util/time';
import {toastError} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React, {useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';

interface Props {
	solves: Solve[];
	user: PublicUserAccount;
	topRecord: TopSolve | TopAverage;
}

export default function PbCard(props: Props) {
	const {solves, user, topRecord} = props;

	const single = solves.length === 1;
	const firstSolve = solves[0];
	const scramble = firstSolve.scramble;

	const dispatch = useDispatch();
	const me = useMe();
	const [deleted, setDeleted] = useState(false);
	const [deleting, setDeleting] = useState(false);

	const cubeType = useMemo(() => getCubeTypeInfoById(firstSolve.cube_type), []);
	const time = useMemo(() => {
		if (single) {
			return firstSolve.time;
		}
		return getAverage(solves);
	}, []);

	const createdAt = Number(solves[solves.length - 1].started_at);

	function openSolve() {
		if (single) {
			dispatch(openModal(<SolveInfo disabled solveId={firstSolve.id} />));
		} else {
			dispatch(
				openModal(
					<HistoryModal
						solves={solves}
						description={`Average of ${solves.length} by ${user.username}`}
					/>,
				),
			);
		}
	}

	async function deletePb(e) {
		e.preventDefault();
		e.stopPropagation();

		setDeleting(true);

		try {
			if (single) {
				await trpc.leaderboards.deleteTopSolve.mutate({
					id: topRecord.id as string,
				});
			} else {
				await trpc.leaderboards.deleteTopAverage.mutate({
					id: topRecord.id as string,
				});
			}

			setDeleted(true);
		} catch (e) {
			toastError(e);
		} finally {
			setDeleting(false);
		}
	}

	if (deleted) {
		return null;
	}

	let actions: React.ReactNode = null;
	if (me?.id === user.id) {
		actions = (
			<div className="absolute top-0.5 left-2.5">
				<Button loading={deleting} text="Remove" danger flat onClick={deletePb} />
			</div>
		);
	}

	if (!cubeType) {
		return null;
	}

	return (
		<button
			className="bg-module relative box-border flex flex-row items-center justify-between rounded-[10px] p-5 text-left shadow-[0_3px_15px_rgba(0,0,0,0.25)]"
			onClick={openSolve}
		>
			{actions}
			<div>
				<span className="text-text text-[3rem] font-bold">{getTimeString(time, 2)}</span>
				<span className="text-text mt-[5px] table text-[0.85rem] opacity-70">
					{new Date(createdAt).toDateString()}
				</span>
			</div>
			<div className="flex flex-col items-end">
				<div className="mb-[5px] h-[70px] w-[70px]">
					<Scramble frontFace scramble={scramble} cubeType={cubeType.id} />
				</div>
				<Tag small text={`${cubeType.name} ${single ? 'Single' : 'Average'}`} />
			</div>
		</button>
	);
}
