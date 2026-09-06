import {cleanTrainerAlgorithm} from '@/components/trainer/util/clean';
import {Button} from '@/components/ui/button';
import {TrainerAlgorithmExtended} from '@/db/trainer/init';
import {toggleTrainerAlgoFavorite} from '@/db/trainer/operations';
import {Star} from 'phosphor-react';
import React from 'react';

interface Props {
	algoExt: TrainerAlgorithmExtended;
}

export default function TrainerFavButton(props: Props) {
	const {algoExt} = props;
	const algo = cleanTrainerAlgorithm(algoExt);

	function favoriteAlgorithm() {
		toggleTrainerAlgoFavorite(algo);
	}

	return (
		<Button
			variant={algo.favorite ? 'default' : 'secondary'}
			onClick={favoriteAlgorithm}
			size="icon"
			aria-label={algo.favorite ? 'Remove favorite' : 'Add favorite'}
			aria-pressed={algo.favorite}
		>
			<Star weight="bold" />
		</Button>
	);
}
