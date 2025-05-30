import {Button} from '@/components/ui/button';
import {Star} from '@phosphor-icons/react/dist/ssr';
import React from 'react';
import {TrainerAlgorithmExtended} from '../../../../lib/db/trainer/init';
import {toggleTrainerAlgoFavorite} from '../../../../lib/db/trainer/operations';
import {cleanTrainerAlgorithm} from '../../util/clean';

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
			onClick={favoriteAlgorithm}
			gray
			white={algo.favorite}
			icon={<Star weight="bold" />}
		/>
	);
}
