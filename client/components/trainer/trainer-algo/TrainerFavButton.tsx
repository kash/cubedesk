import {cleanTrainerAlgorithm} from '@/components/trainer/util/clean';
import {Button, type ButtonProps} from '@/components/ui/button';
import {TrainerAlgorithmExtended} from '@/db/trainer/init';
import {toggleTrainerAlgoFavorite} from '@/db/trainer/operations';
import {fetchTrainerAlgorithmById} from '@/db/trainer/query';
import {useTrainerDb} from '@/util/hooks/useTrainerDb';
import {Star} from 'phosphor-react';
import React from 'react';

interface Props {
	algoExt: TrainerAlgorithmExtended;
	className?: string;
	variant?: ButtonProps['variant'];
	size?: ButtonProps['size'];
}

export default function TrainerFavButton(props: Props) {
	const {algoExt} = props;
	useTrainerDb();
	const algo = cleanTrainerAlgorithm(fetchTrainerAlgorithmById(algoExt.id) ?? algoExt);

	function favoriteAlgorithm() {
		toggleTrainerAlgoFavorite(algo);
	}

	return (
		<Button
			className={props.className}
			variant={props.variant ?? (algo.favorite ? 'default' : 'secondary')}
			onClick={favoriteAlgorithm}
			size={props.size ?? 'icon'}
			aria-label={algo.favorite ? 'Remove favorite' : 'Add favorite'}
			aria-pressed={algo.favorite}
		>
			<Star weight={algo.favorite ? 'fill' : 'regular'} />
		</Button>
	);
}
