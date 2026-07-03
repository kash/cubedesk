import React from 'react';
import {useDispatch} from 'react-redux';
import {openModal} from '@/actions/general';
import EditAlgo from '@/components/trainer/EditAlgo';
import Button from '@/components/common/Button';
import AlgoVisual from '@/components/trainer/AlgoVisual';
import {cleanTrainerAlgorithm} from '@/components/trainer/util/clean';
import {useToggle} from '@/util/hooks/useToggle';
import TrainerFavButton from '@/components/trainer/trainer-algo/TrainerFavButton';
import Tag from '@/components/common/Tag';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {TrainerAlgorithmExtended} from '@/db/trainer/init';

interface Props {
	algoExt: TrainerAlgorithmExtended;
}

export default function AlgoModule(props: Props) {
	const dispatch = useDispatch();
	const {algoExt} = props;

	const [showSolution, toggleShowSolution] = useToggle(false);

	const algo = cleanTrainerAlgorithm(algoExt);
	const cubeType = getCubeTypeInfoById(algoExt.cube_type);

	function editAlgo() {
		dispatch(openModal(<EditAlgo algoExt={algoExt} />));
	}

	return (
		<div className="relative box-border h-full p-2.5">
			<div className="relative h-full w-full">
				<div className="flex flex-row justify-between">
					<div className="box-border pr-2.5">
						<div className="mb-[15px] flex flex-row items-start gap-2.5 opacity-50">
							<Tag text={cubeType.name} />
							<Tag text={algoExt.algo_type} />
						</div>
						<h3>{algo.name}</h3>
						{showSolution && <p>{algo.solution}</p>}
					</div>
					<div>
						<AlgoVisual
							colors={algo.colors ?? undefined}
							rotate={algo.rotate ?? undefined}
							cubeType={algo.cube_type}
						/>
					</div>
				</div>

				<div className="absolute bottom-0 left-0 flex flex-row gap-2.5">
					<TrainerFavButton algoExt={algoExt} />
					<Button text="Edit" gray onClick={editAlgo} />
					<Button
						text={showSolution ? 'Hide solution' : 'Show solution'}
						white={showSolution}
						gray
						onClick={() => toggleShowSolution()}
					/>
				</div>
			</div>
		</div>
	);
}
