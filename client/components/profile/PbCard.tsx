import React, {useMemo, useState} from 'react';
import {getTimeString} from '@/util/time';
import Scramble from '@/components/modules/scramble/ScrambleVisual';
import SolveInfo from '@/components/solve-info/SolveInfo';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {PublicUserAccount, TopAverage, TopSolve} from '@/@types/generated/graphql';
import {useDispatch} from 'react-redux';
import {openModal} from '@/actions/general';
import HistoryModal from '@/components/modules/history/HistoryModal';
import Tag from '@/components/common/tag/Tag';
import {getAverage} from '@/db/solves/stats/solves/average/average';
import Button from '@/components/common/button/Button';
import {gql, useMutation} from '@apollo/client';
import {toastError} from '@/util/toast';
import {useMe} from '@/util/hooks/useMe';
import {Solve} from '../../../server/schemas/Solve.schema';

const DELETE_TOP_SOLVE_MUTATION = gql`
	mutation Mutation($id: String) {
		deleteTopSolve(id: $id) {
			id
		}
	}
`;

const DELETE_TOP_AVERAGE_MUTATION = gql`
	mutation Mutation($id: String) {
		deleteTopAverage(id: $id) {
			id
		}
	}
`;

type deleteVarInput = {
	id: string;
};

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

	const [deleteSolveMut, deleteSolveMutData] = useMutation<{deleteTopSolve: TopSolve}, deleteVarInput>(
		DELETE_TOP_SOLVE_MUTATION
	);
	const [deleteAvgMut, deleteAvgMutData] = useMutation<{deleteTopSolve: TopAverage}, deleteVarInput>(
		DELETE_TOP_AVERAGE_MUTATION
	);

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
					<HistoryModal solves={solves} description={`Average of ${solves.length} by ${user.username}`} />
				)
			);
		}
	}

	async function deletePb(e) {
		e.preventDefault();
		e.stopPropagation();

		try {
			if (single) {
				await deleteSolveMut({
					variables: {
						id: topRecord.id as string,
					},
				});
			} else {
				await deleteAvgMut({
					variables: {
						id: topRecord.id as string,
					},
				});
			}

			setDeleted(true);
		} catch (e) {
			toastError(e);
		}
	}

	if (deleted) {
		return null;
	}

	let actions: React.ReactNode = null;
	if (me?.id === user.id) {
		actions = (
			<div className="absolute left-2.5 top-0.5">
				<Button
					loading={deleteAvgMutData.loading || deleteSolveMutData.loading}
					text="Remove"
					danger
					flat
					onClick={deletePb}
				/>
			</div>
		);
	}

	if (!cubeType) {
		return null;
	}

	return (
		<button
			className="relative box-border flex flex-row items-center justify-between rounded-[10px] bg-module p-5 text-left shadow-[0_3px_15px_rgba(0,0,0,0.25)]"
			onClick={openSolve}
		>
			{actions}
			<div>
				<span className="text-[3rem] font-bold text-text">{getTimeString(time, 2)}</span>
				<span className="mt-[5px] table text-[0.85rem] text-text opacity-70">
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
