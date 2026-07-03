import React, {useContext} from 'react';
import classNames from 'classnames';
import {CaretRight, Pencil, Trash} from 'phosphor-react';
import Button from '@/components/common/Button';
import Module from '@/components/common/Module';
import {CUSTOM_TRAINER_ALGO_TYPE, TrainerContext} from '@/components/trainer/Trainer';
import {openModal} from '@/actions/general';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {cleanTrainerAlgorithm} from '@/components/trainer/util/clean';
import EditAlgo from '@/components/trainer/EditAlgo';
import {TrainerAlgorithmExtended} from '@/db/trainer/init';
import TrainerFavButton from '@/components/trainer/trainer-algo/TrainerFavButton';
import AddCustom from '@/components/trainer/add-custom/AddCustom';
import {deleteCustomTrainer} from '@/db/trainer/custom';

import CustomVisual from '@/components/trainer/CustomVisual';

interface Props {
	algoExt: TrainerAlgorithmExtended;
}

export default function TrainerAlgo(props: Props) {
	const dispatch = useDispatch();

	const algoExt = props.algoExt;

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

	let originalBy: React.ReactNode = null;
	if (isCustom && algoExt.copy_of) {
		const copyUsername = algoExt.copy_of.user.username;
		originalBy = (
			<div className="text-text mb-2 text-[0.9rem] opacity-70">
				Original by{' '}
				<Link
					className="border-text inline border-b-2 text-inherit"
					to={`/user/${copyUsername}`}
				>
					{copyUsername}
				</Link>
			</div>
		);
	}

	return (
		<Module>
			<div className="flex w-full flex-row justify-between">
				<div className="box-border flex min-h-full flex-col items-start justify-between pr-[15px]">
					<div>
						<h3 className="text-[1.2rem]">{algo.name}</h3>
						{originalBy}
						<p className="font-mono">{algo.solution}</p>
					</div>
					<div className="flex flex-row gap-2">
						<Button
							onClick={openTrainer}
							primary
							text="Start Training"
							icon={<CaretRight />}
						/>
						<TrainerFavButton algoExt={algoExt} />
						<Button onClick={editAlgo} gray icon={<Pencil />} />
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
							icon={<Trash />}
						/>
					</div>
				</div>
				<div
					className={classNames(
						'box-border flex w-[100px] items-center justify-center',
						algoExt.three_d && '-mt-5',
					)}
				>
					<CustomVisual
						cubeletSize={20}
						colors={algoExt.colors ?? ''}
						threeD={algoExt.three_d}
						rotate={algo.rotate ?? undefined}
						cubeType={algoExt.cube_type}
					/>
				</div>
			</div>
		</Module>
	);
}
