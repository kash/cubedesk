import {useTimerContext} from '@/components/timer/Timer';
import AddCustom from '@/components/trainer/add-custom/AddCustom';
import EditAlgo from '@/components/trainer/EditAlgo';
import {CUSTOM_TRAINER_ALGO_TYPE} from '@/components/trainer/Trainer';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import type {TrainerAlgorithmExtended} from '@/db/trainer/init';
import {useTrainerDb} from '@/util/hooks/useTrainerDb';
import {Pencil} from 'phosphor-react';
import React, {useState} from 'react';

interface Props {
	getAlgorithm: (index: number) => TrainerAlgorithmExtended;
}

export default function TrainerSessionEdit({getAlgorithm}: Props) {
	const {sessionSolveCount, timeStartedAt, inInspection} = useTimerContext();
	useTrainerDb();
	const [editing, setEditing] = useState<TrainerAlgorithmExtended | null>(null);
	const algo = getAlgorithm(sessionSolveCount);
	const close = () => setEditing(null);

	return (
		<>
			<Button
				variant="secondary"
				size="icon"
				aria-label="Edit algorithm"
				disabled={!algo || !!timeStartedAt || inInspection}
				onClick={() => setEditing(algo)}
			>
				<Pencil />
			</Button>
			<Dialog
				open={editing !== null}
				onOpenChange={(open) => {
					if (!open) close();
				}}
			>
				{editing && (
					<DialogContent>
						{editing.algo_type === CUSTOM_TRAINER_ALGO_TYPE ? (
							<AddCustom editingId={editing.id} onComplete={close} />
						) : (
							<EditAlgo algoExt={editing} onComplete={close} />
						)}
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
