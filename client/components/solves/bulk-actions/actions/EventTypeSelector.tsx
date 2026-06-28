import React, {useState} from 'react';
import Button from '../../../common/button/Button';
import {Solve} from '../../../../../server/schemas/Solve.schema';
import {IModalProps} from '../../../common/modal/Modal';
import ModalHeader from '../../../common/modal/modal_header/ModalHeader';
import {CubeType} from '../../../../util/cubes/cube_types';
import CubePicker from '../../../common/cube_picker/CubePicker';
import {getBasicPlural} from '../../../../util/strings/plural';

interface Props extends IModalProps {
	solves: Solve[];
}

export default function EventTypeSelector(props: Props) {
	const {solves, onComplete} = props;
	const [cubeType, setCubeType] = useState<CubeType>(null);

	let selectedCubeType = null;
	if (cubeType) {
		selectedCubeType = (
			<p className="mb-5 mt-4 text-2xl table text-text border-b-4 border-solid border-text/20">
				Set event type of <span className="text-success">{getBasicPlural(solves, 'solve')}</span> to{' '}
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
			<Button large onClick={() => onComplete(cubeType)} disabled={!cubeType} primary text="Continue" />
		</div>
	);
}
