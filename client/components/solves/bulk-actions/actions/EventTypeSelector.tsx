import CubePicker from '@/components/common/CubePicker';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Solve} from '@/types/solve';
import {CubeType} from '@/util/cubes/cube_types';
import {getBasicPlural} from '@/util/strings/plural';
import React, {ReactNode, useState} from 'react';

interface Props {
	onComplete?: (cubeType: CubeType) => void;
	solves: Solve[];
}

export default function EventTypeSelector(props: Props) {
	const {solves, onComplete} = props;
	const [cubeType, setCubeType] = useState<CubeType | null>(null);

	let selectedCubeType: ReactNode = null;
	if (cubeType) {
		selectedCubeType = (
			<p className="border-text/20 text-text mt-4 mb-5 table border-b-4 border-solid text-2xl">
				Set event type of{' '}
				<span className="text-success">{getBasicPlural(solves, 'solve')}</span> to{' '}
				<span className="text-warning">{cubeType.name}</span>
			</p>
		);
	}

	return (
		<div>
			<DialogHeader
				title="Change event type"
				description="Select which event type to associate the selected solves with"
			/>
			<div className="mb-6">
				<CubePicker
					pickerProps={{
						openLeft: true,
					}}
					value="333"
					onChange={(ct) => setCubeType(ct)}
				/>
			</div>
			{selectedCubeType}
			<Button
				variant="default"
				onClick={() => {
					if (cubeType) onComplete?.(cubeType);
				}}
				disabled={!cubeType}
				size="lg"
			>
				{'Continue'}
			</Button>
		</div>
	);
}
