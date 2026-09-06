import ConfirmDialog from '@/components/common/ConfirmDialog';
import CustomVisual from '@/components/trainer/CustomVisual';
import {CUSTOM_TRAINER_ALGO_TYPE, useTrainerContext} from '@/components/trainer/Trainer';
import TrainerFavButton from '@/components/trainer/trainer-algo/TrainerFavButton';
import {cleanTrainerAlgorithm} from '@/components/trainer/util/clean';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {deleteCustomTrainer} from '@/db/trainer/custom';
import {TrainerAlgorithmExtended} from '@/db/trainer/init';
import {cn} from '@/util/cn';
import {Trash} from 'phosphor-react';
import React from 'react';
import {Link} from 'react-router-dom';

interface Props {
	algoExt: TrainerAlgorithmExtended;
}

export default function TrainerAlgo(props: Props) {
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

	let originalBy: React.ReactNode = null;
	if (isCustom && algoExt.copy_of) {
		const copyUsername = algoExt.copy_of.user.username;
		originalBy = (
			<div className="text-text mb-2 text-[0.9rem] opacity-70">
				Original by{' '}
				<Link
					className="border-text relative z-10 inline border-b-2 text-inherit"
					to={`/user/${copyUsername}`}
				>
					{copyUsername}
				</Link>
			</div>
		);
	}

	return (
		<>
			<Card className="group hover:border-text/30 relative transition-colors">
				<button
					type="button"
					className="focus-visible:outline-primary absolute inset-0 cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2"
					onClick={openTrainer}
					aria-label={`Train ${algo.name}`}
				/>
				<TrainerFavButton
					algoExt={algoExt}
					variant="ghost"
					size="icon-xs"
					className={cn(
						'absolute top-2 right-2 z-10 p-1 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100',
						{
							'[@media(hover:hover)]:opacity-0': !algo.favorite,
						},
					)}
				/>
				<CardContent className="pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto">
					<div className="flex w-full items-start gap-4 pr-3">
						<div className="flex min-h-20 min-w-20 shrink-0 items-start justify-center">
							<CustomVisual
								cubeletSize={16}
								colors={algoExt.colors ?? ''}
								threeD={algoExt.three_d}
								rotate={algo.rotate ?? undefined}
								cubeType={algoExt.cube_type}
							/>
						</div>
						<div className="flex min-w-0 flex-1 flex-col items-start gap-2">
							<div>
								<h3 className="text-[1.2rem] leading-none">{algo.name}</h3>
								{originalBy}
								<p className="mt-2 font-mono break-words">{algo.solution}</p>
							</div>
							<div className="relative z-10 mt-3 flex flex-row gap-2">
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
					</div>
				</CardContent>
			</Card>
		</>
	);
}
