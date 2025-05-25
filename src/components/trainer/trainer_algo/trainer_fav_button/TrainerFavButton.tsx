import React from 'react';
import {Star} from 'phosphor-react';
import Button from '../../../common/button/Button';
import {TrainerAlgorithmExtended} from '../../../../lib/db/trainer/init';
import {cleanTrainerAlgorithm} from '../../util/clean';
import {toggleTrainerAlgoFavorite} from '../../../../lib/db/trainer/operations';

interface Props {
	algoExt: TrainerAlgorithmExtended;
}

export default function TrainerFavButton(props: Props) {
	const {algoExt} = props;
	const algo = cleanTrainerAlgorithm(algoExt);

	function favoriteAlgorithm() {
		toggleTrainerAlgoFavorite(algo);
	}

	return <Button onClick={favoriteAlgorithm} gray white={algo.favorite} icon={<Star weight="bold" />} />;
}
