import ConfirmDialog from '@/components/common/ConfirmDialog';
import AddCustom from '@/components/trainer/add-custom/AddCustom';
import CustomVisual from '@/components/trainer/CustomVisual';
import EditAlgo from '@/components/trainer/EditAlgo';
import {CUSTOM_TRAINER_ALGO_TYPE, useTrainerContext} from '@/components/trainer/Trainer';
import TrainerFavButton from '@/components/trainer/trainer-algo/TrainerFavButton';
import {cleanTrainerAlgorithm} from '@/components/trainer/util/clean';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {deleteCustomTrainer} from '@/db/trainer/custom';
import {TrainerAlgorithmExtended} from '@/db/trainer/init';
import classNames from 'classnames';
import {CaretRight, Pencil, Trash} from 'phosphor-react';
import React from 'react';
import {Link} from 'react-router-dom';

interface Props {
	algoExt: TrainerAlgorithmExtended;
}

export default function TrainerAlgo(props: Props) {
	const [addCustomDialog, setAddCustomDialog] = React.useState<React.ComponentProps<
		typeof AddCustom
	> | null>(null);
	const [editAlgoDialog, setEditAlgoDialog] = React.useState<React.ComponentProps<
		typeof EditAlgo
	> | null>(null);

	const algoExt = props.algoExt;

	const algo = cleanTrainerAlgorithm(algoExt);
	const context = useTrainerContext();

	const isCustom = algoExt.algo_type === CUSTOM_TRAINER_ALGO_TYPE;

	function openTrainer() {
		context.openTrainer('single', algoExt);
	}

	async function deleteCustom() {
		await deleteCustomTrainer(algoExt.id);
	}

	function editAlgo() {
		if (isCustom) {
			// Custom trainer
			setAddCustomDialog({editingId: algoExt.id});
		} else {
			setEditAlgoDialog({algoExt: algoExt});
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
		<>
			<Card>
				<CardContent>
					<div className="flex w-full flex-row justify-between">
						<div className="box-border flex min-h-full flex-col items-start justify-between pr-[15px]">
							<div>
								<h3 className="text-[1.2rem]">{algo.name}</h3>
								{originalBy}
								<p className="font-mono">{algo.solution}</p>
							</div>
							<div className="flex flex-row gap-2">
								<Button variant="default" onClick={openTrainer}>
									{'Start Training'}
									<CaretRight />
								</Button>
								<TrainerFavButton algoExt={algoExt} />
								<Button
									variant="secondary"
									onClick={editAlgo}
									size="icon"
									aria-label="Edit algorithm"
								>
									<Pencil />
								</Button>
								<ConfirmDialog
									{...{
										buttonText: 'Delete custom trainer',
										title: 'Delete custom trainer',
										description:
											'Deleting this custom trainer will delete all of it solves as well. Be careful here.',
										triggerAction: deleteCustom,
									}}
								>
									{!isCustom ? null : (
										<Button
											variant="secondary"
											size="icon"
											aria-label="Delete custom trainer"
										>
											<Trash />
										</Button>
									)}
								</ConfirmDialog>
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
				</CardContent>
			</Card>
			<Dialog
				open={addCustomDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setAddCustomDialog(null);
					}
				}}
			>
				{addCustomDialog && (
					<DialogContent>
						<AddCustom
							{...addCustomDialog}
							onComplete={() => {
								setAddCustomDialog((current) =>
									current === addCustomDialog ? null : current,
								);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
			<Dialog
				open={editAlgoDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setEditAlgoDialog(null);
					}
				}}
			>
				{editAlgoDialog && (
					<DialogContent>
						<EditAlgo
							{...editAlgoDialog}
							onComplete={() => {
								setEditAlgoDialog((current) =>
									current === editAlgoDialog ? null : current,
								);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
