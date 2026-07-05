import Button from '@/components/common/Button';
import {cleanTrainerAlgorithm} from '@/components/trainer/util/clean';
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
			onClick={favoriteAlgorithm}
			gray
			white={algo.favorite}
			icon={<Star weight="bold" />}
		/>
	);
}
