import Module from '@/components/common/module/Module';
import './TrainerAlgo.scss';
import {Button} from '@/components/ui/button';
import {CustomTrainer} from '@/generated/zod';
import {openModal} from '@/lib/actions/general';
import {deleteCustomTrainer} from '@/lib/db/trainer/custom';
import {TrainerAlgorithmExtended} from '@/lib/db/trainer/init';
import block from '@/styles/bem';
import {CaretRight, Pencil, Trash} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React, {useContext} from 'react';
import {useDispatch} from 'react-redux';
import AddCustom from '../add_custom/AddCustom';
import CustomVisual from '../custom_visual/CustomVisual';
import EditAlgo from '../edit_algo/EditAlgo';
import {CUSTOM_TRAINER_ALGO_TYPE, TrainerContext} from '../Trainer';
import {cleanTrainerAlgorithm} from '../util/clean';
import TrainerFavButton from './trainer_fav_button/TrainerFavButton';

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
				Original by <Link href={`/user/${copyUsername}`}>{copyUsername}</Link>
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
						<Button onClick={openTrainer} variant="default">
							<CaretRight className="mr-2" />
							Start Training
						</Button>
						<TrainerFavButton algoExt={algoExt} />
						<Button onClick={editAlgo} variant="secondary">
							<Pencil />
						</Button>
						{isCustom && (
							<Button
								confirmModalProps={{
									buttonText: 'Delete custom trainer',
									title: 'Delete custom trainer',
									description:
										'Deleting this custom trainer will delete all of it solves as well. Be careful here.',
									triggerAction: deleteCustom,
								}}
								variant="secondary"
							>
								<Trash />
							</Button>
						)}
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
