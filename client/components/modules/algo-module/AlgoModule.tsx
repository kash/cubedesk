import {Badge} from '@/components/ui/badge';
import AlgoVisual from '@/components/trainer/AlgoVisual';
import EditAlgo from '@/components/trainer/EditAlgo';
import TrainerFavButton from '@/components/trainer/trainer-algo/TrainerFavButton';
import {cleanTrainerAlgorithm} from '@/components/trainer/util/clean';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {TrainerAlgorithmExtended} from '@/db/trainer/init';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useToggle} from '@/util/hooks/useToggle';
import React from 'react';

interface Props {
	algoExt: TrainerAlgorithmExtended;
}

export default function AlgoModule(props: Props) {
	const [editAlgoDialog, setEditAlgoDialog] = React.useState<React.ComponentProps<
		typeof EditAlgo
	> | null>(null);

	const {algoExt} = props;

	const [showSolution, toggleShowSolution] = useToggle(false);

	const algo = cleanTrainerAlgorithm(algoExt);
	const cubeType = getCubeTypeInfoById(algoExt.cube_type);

	function editAlgo() {
		setEditAlgoDialog({algoExt: algoExt});
	}

	return (
		<>
			<div className="relative box-border h-full p-2.5">
				<div className="relative h-full w-full">
					<div className="flex flex-row justify-between">
						<div className="box-border pr-2.5">
							<div className="mb-[15px] flex flex-row items-start gap-2.5 opacity-50">
								<Badge variant="unfilled">
									{cubeType?.name ?? algoExt.cube_type}
								</Badge>
								<Badge variant="unfilled">{algoExt.algo_type}</Badge>
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
						<Button variant="secondary" onClick={editAlgo}>
							{'Edit'}
						</Button>
						<Button
							variant={showSolution ? 'default' : 'secondary'}
							onClick={() => toggleShowSolution()}
							aria-pressed={showSolution}
						>
							{showSolution ? 'Hide solution' : 'Show solution'}
						</Button>
					</div>
				</div>
			</div>
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
