import React, {useState, ReactNode} from 'react';
import Button from '../../../common/Button';
import {Solve} from '@/types/solve';
import {IModalProps} from '../../../common/modal/Modal';
import ModalHeader from '../../../common/modal/ModalHeader';
import {CubeType} from '../../../../util/cubes/cube_types';
import CubePicker from '@/components/common/CubePicker';
import {getBasicPlural} from '../../../../util/strings/plural';

interface Props extends IModalProps {
	solves: Solve[];
}

export default function EventTypeSelector(props: Props) {
	const {solves, onComplete} = props;
	const [cubeType, setCubeType] = useState<CubeType>(null);

	let selectedCubeType: ReactNode = null;
	if (cubeType) {
		selectedCubeType = (
			<p className="text-text border-text/20 mt-4 mb-5 table border-b-4 border-solid text-2xl">
				Set event type of{' '}
				<span className="text-success">{getBasicPlural(solves, 'solve')}</span> to{' '}
				<span className="text-warning">{cubeType.name}</span>
			</p>
		);
	}

	return (
		<div>
			<ModalHeader
				title="Change event type"
				description="Select which event type to associate the selected solves with"
			/>
			<div className="mb-6">
				<CubePicker
					dropdownProps={{
						openLeft: true,
					}}
					value="333"
					onChange={(ct) => setCubeType(ct)}
				/>
			</div>
			{selectedCubeType}
			<Button
				large
				onClick={() => onComplete(cubeType)}
				disabled={!cubeType}
				primary
				text="Continue"
			/>
		</div>
	);
}
