import {Button} from '@/components/ui/button';
import './NewCubeType.scss';
import React, {useState} from 'react';
import {ScrambleType} from '../../../../lib/util/cubes/cube_scrambles';
import {useInput} from '../../../../lib/util/hooks/useInput';
import block from '../../../../styles/bem';
import {api} from '../../../../trpc/react';
import Input from '../../../common/inputs/input/Input';
import {IModalProps} from '../../../common/modal/Modal';
import ModalHeader from '../../../common/modal/modal_header/ModalHeader';
import ScramblePicker from '../../../common/scramble_picker/ScramblePicker';

const b = block('new-cube-type');

export default function NewCubeType(props: IModalProps) {
	const [name, setName] = useInput('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [scrambleType, setScrambleType] = useState('none');

	function onChangeScrambleType(st: ScrambleType) {
		setScrambleType(st.id);
	}

	const createCustomCubeTypeMutation = api.customCubeType.create.useMutation();

	async function createCubeType() {
		setLoading(true);
		setError('');

		try {
			await createCustomCubeTypeMutation.mutateAsync({
				name,
				scramble: scrambleType,
				private: false, // Default to false for now, can be made configurable later
			});

			props.onComplete();
			window.location.reload(); // Refresh to get updated custom cube types
		} catch (e: unknown) {
			setLoading(false);
			setError(e.message);
		}
	}

	const disabled = !name.trim() || !scrambleType;

	return (
		<div className={b()}>
			<ModalHeader title="Add cube type" />
			<Input legend="Cube Type Name" value={name} onChange={setName} />
			<ScramblePicker value={scrambleType} onChange={onChangeScrambleType} />
			<Button
				large
				primary
				glow
				loading={loading}
				error={error}
				text="Create Cube Type"
				disabled={disabled}
				onClick={createCubeType}
			/>
		</div>
	);
}
