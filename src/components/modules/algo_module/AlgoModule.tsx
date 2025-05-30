import {Button} from '@/components/ui/button';
import './AlgoModule.scss';
import React from 'react';
import {useDispatch} from 'react-redux';
import {openModal} from '../../../lib/actions/general';
import {TrainerAlgorithmExtended} from '../../../lib/db/trainer/init';
import {getCubeTypeInfoById} from '../../../lib/util/cubes/util';
import {useToggle} from '../../../lib/util/hooks/useToggle';
import block from '../../../styles/bem';
import Tag from '../../common/tag/Tag';
import AlgoVisual from '../../trainer/algo_visual/AlgoVisual';
import EditAlgo from '../../trainer/edit_algo/EditAlgo';
import TrainerFavButton from '../../trainer/trainer_algo/trainer_fav_button/TrainerFavButton';
import {cleanTrainerAlgorithm} from '../../trainer/util/clean';

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

	const editAlgo = React.useCallback(() => {
		dispatch(openModal(<EditAlgo algoExt={algoExt} />));
	}, [dispatch, algoExt]);

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
						<AlgoVisual
							colors={algo.colors}
							rotate={algo.rotate}
							cubeType={algo.cube_type}
						/>
					</div>
				</div>

				<div className={b('actions')}>
					<TrainerFavButton algoExt={algoExt} />
					<Button variant="secondary" onClick={editAlgo}>
						Edit
					</Button>
					<Button
						variant={showSolution ? 'secondary' : 'default'}
						onClick={() => toggleShowSolution()}
					>
						{showSolution ? 'Hide solution' : 'Show solution'}
					</Button>
				</div>
			</div>
		</div>
	);
}
