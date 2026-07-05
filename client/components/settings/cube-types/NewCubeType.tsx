import Button from '@/components/common/Button';
import Input from '@/components/common/inputs/input/Input';
import {IModalProps} from '@/components/common/modal/Modal';
import ModalHeader from '@/components/common/modal/ModalHeader';
import ScramblePicker from '@/components/common/ScramblePicker';
import {refreshSettings} from '@/db/settings/update';
import {ScrambleType} from '@/util/cubes/cube_scrambles';
import {useInput} from '@/util/hooks/useInput';
import {trpc} from '@/util/trpc';
import React, {useState} from 'react';

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
