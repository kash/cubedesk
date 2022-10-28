import React, {useMemo} from 'react';
import './AlgoModule.scss';
import block from '../../../styles/bem';
import {useDispatch} from 'react-redux';
import {openModal} from '../../../actions/general';
import EditAlgo from '../../trainer/edit_algo/EditAlgo';
import Button from '../../common/button/Button';
import AlgoVisual from '../../trainer/algo_visual/AlgoVisual';
import {cleanTrainerAlgorithm} from '../../trainer/util/clean';
import {useToggle} from '../../../util/hooks/useToggle';
import TrainerFavButton from '../../trainer/trainer_algo/trainer_fav_button/TrainerFavButton';
import Tag from '../../common/tag/Tag';
import {getCubeTypeInfoById} from '../../../util/cubes/util';
import {TrainerAlgorithmExtended} from '../../../db/trainer/init';

const b = block('algo-module');

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
		<div className={b()}>
			<div className={b('wrapper')}>
				<div className={b('body')}>
					<div className={b('info')}>
						<div className={b('tags')}>
							<Tag text={cubeType.name} />
							<Tag text={algoExt.algo_type} />
						</div>
						<h3>{algo.name}</h3>
						{showSolution && <p>{algo.solution}</p>}
					</div>
					<div className={b('visual')}>
						<AlgoVisual colors={algo.colors} rotate={algo.rotate} cubeType={algo.cube_type} />
					</div>
				</div>

				<div className={b('actions')}>
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
