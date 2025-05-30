import React, {useMemo, useState} from 'react';
import './PbCard.scss';
import {getTimeString} from '@/lib/util/time';
import Scramble from '@/components/modules/scramble/ScrambleVisual';
import SolveInfo from '@/components/solve-info/SolveInfo';
import {getCubeTypeInfoById} from '@/lib/util/cubes/util';
import block from '@/styles/bem';
import {useDispatch} from 'react-redux';
import {openModal} from '@/lib/actions/general';
import HistoryModal from '@/components/modules/history/history_modal/HistoryModal';
import Tag from '@/components/common/tag/Tag';
import {getAverage} from '@/lib/db/solves/stats/solves/average/average';
import {Button} from '@/components/ui/button';
import {toastError} from '@/lib/util/toast';
import {useMe} from '@/lib/util/hooks/useMe';
import {Solve, PublicUserAccount, TopAverage, TopSolve} from '@/generated/zod';
import {api} from '@/trpc/react';

const b = block('profile-pb-card');


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

	const deleteSolveMut = api.leaderboards.deleteTopSolve.useMutation();
	const deleteAvgMut = api.leaderboards.deleteTopAverage.useMutation();

	const cubeType = useMemo(() => getCubeTypeInfoById(firstSolve.cube_type), []);
	const time = useMemo(() => {
		if (single) {
			return firstSolve.time;
		}
		return getAverage(solves);
	}, []);

	const createdAt = parseInt(solves[solves.length - 1].started_at);

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

		try {
			if (single) {
				await deleteSolveMut.mutateAsync({
					id: topRecord.id,
				});
			} else {
				await deleteAvgMut.mutateAsync({
					id: topRecord.id,
				});
			}

			setDeleted(true);
		} catch (e: unknown) {
			toastError(e);
		}
	}

	if (deleted) {
		return null;
	}

	let actions = null;
	if (me?.id === user.id) {
		actions = (
			<div className={b('actions')}>
				<Button
					loading={deleteAvgMut.isLoading || deleteSolveMut.isLoading}
					variant="destructive"
					onClick={deletePb}
				>
					Remove
				</Button>
			</div>
		);
	}

	if (!cubeType) {
		return null;
	}

	return (
		<button className={b()} onClick={openSolve}>
			{actions}
			<div className={b('time')}>
				<span>{getTimeString(time, 2)}</span>
				<span>{new Date(createdAt).toDateString()}</span>
			</div>
			<div className={b('scramble')}>
				<div className={b('scramble-visual')}>
					<Scramble frontFace scramble={scramble} cubeType={cubeType.id} />
				</div>
				<Tag small text={`${cubeType.name} ${single ? 'Single' : 'Average'}`} />
			</div>
		</button>
	);
}
