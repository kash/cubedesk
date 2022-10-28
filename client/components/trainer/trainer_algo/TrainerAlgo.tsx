import React, {useContext} from 'react';
import './TrainerAlgo.scss';
import block from '../../../styles/bem';
import Button from '../../common/button/Button';
import Module from '../../common/module/Module';
import {CUSTOM_TRAINER_ALGO_TYPE, TrainerContext} from '../Trainer';
import {openModal} from '../../../actions/general';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {cleanTrainerAlgorithm} from '../util/clean';
import EditAlgo from '../edit_algo/EditAlgo';
import {TrainerAlgorithmExtended} from '../../../db/trainer/init';
import TrainerFavButton from './trainer_fav_button/TrainerFavButton';
import AddCustom from '../add_custom/AddCustom';
import {deleteCustomTrainer} from '../../../db/trainer/custom';
import {CustomTrainer} from '../../../@types/generated/graphql';
import CustomVisual from '../custom_visual/CustomVisual';

const b = block('trainer-algo');

interface Props {
	algoExt: TrainerAlgorithmExtended;
}

export default function TrainerAlgo(props: Props) {
	const dispatch = useDispatch();

	const algoExt = props.algoExt as CustomTrainer & TrainerAlgorithmExtended;

	const algo = cleanTrainerAlgorithm(algoExt);
	const context = useContext(TrainerContext);

	const isCustom = algoExt.algo_type === CUSTOM_TRAINER_ALGO_TYPE;

	function openTrainer() {
		context.openTrainer('single', algoExt);
	}

	function deleteCustom() {
		deleteCustomTrainer(algoExt.id);
	}

	function editAlgo() {
		if (isCustom) {
			// Custom trainer
			dispatch(openModal(<AddCustom editingId={algoExt.id} />));
		} else {
			dispatch(openModal(<EditAlgo algoExt={algoExt} />));
		}
	}

	let originalBy = null;
	if (isCustom && algoExt.copy_of) {
		const copyUsername = algoExt.copy_of.user.username;
		originalBy = (
			<div className={b('original-by')}>
				Original by <Link to={`/user/${copyUsername}`}>{copyUsername}</Link>
			</div>
		);
	}

	return (
		<Module>
			<div className={b()}>
				<div className={b('left')}>
					<div className={b('info')}>
						<h3>{algo.name}</h3>
						{originalBy}
						<p>{algo.solution}</p>
					</div>
					<div className={b('actions')}>
						<Button onClick={openTrainer} primary text="Start Training" icon="ph-caret-right" />
						<TrainerFavButton algoExt={algoExt} />
						<Button onClick={editAlgo} gray icon="ph-pencil" />
						<Button
							hidden={!isCustom}
							confirmModalProps={{
								buttonText: 'Delete custom trainer',
								title: 'Delete custom trainer',
								description:
									'Deleting this custom trainer will delete all of it solves as well. Be careful here.',
								triggerAction: deleteCustom,
							}}
							gray
							icon="ph-trash"
						/>
					</div>
				</div>
				<div className={b('right', {threeD: algoExt.three_d})}>
					<CustomVisual
						cubeletSize={20}
						colors={algoExt.colors}
						threeD={algoExt.three_d}
						rotate={algo.rotate}
						cubeType={algoExt.cube_type}
					/>
				</div>
			</div>
		</Module>
	);
}
