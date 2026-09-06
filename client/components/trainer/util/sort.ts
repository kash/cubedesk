import type {TrainerAlgorithmExtended} from '@/db/trainer/init';

const trainerNameCollator = new Intl.Collator('en', {numeric: true, sensitivity: 'base'});

export function compareTrainerAlgorithms(a: TrainerAlgorithmExtended, b: TrainerAlgorithmExtended) {
	return trainerNameCollator.compare(a.overrides?.name ?? a.name, b.overrides?.name ?? b.name);
}
