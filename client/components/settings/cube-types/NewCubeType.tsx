import React, {useState} from 'react';
import {useInput} from '@/util/hooks/useInput';
import {ScrambleType} from '@/util/cubes/cube_scrambles';
import {IModalProps} from '@/components/common/modal/Modal';
import Input from '@/components/common/inputs/input/Input';
import Button from '@/components/common/Button';
import ScramblePicker from '@/components/common/ScramblePicker';
import {trpc} from '@/util/trpc';
import {refreshSettings} from '@/db/settings/update';
import ModalHeader from '@/components/common/modal/ModalHeader';

export default function NewCubeType(props: IModalProps) {
	const [name, setName] = useInput('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [scrambleType, setScrambleType] = useState('none');

	function onChangeScrambleType(st: ScrambleType) {
		setScrambleType(st.id);
	}

	async function createCubeType() {
		setLoading(true);
		setError('');

		try {
			await trpc.customCubeType.create.mutate({
				name,
				scramble: scrambleType,
			});

			await refreshSettings();
			props.onComplete?.();
		} catch (e) {
			setLoading(false);
			setError((e as Error).message);
		}
	}

	const disabled = !name.trim() || !scrambleType;

	return (
		<div>
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
