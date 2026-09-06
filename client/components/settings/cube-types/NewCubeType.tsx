import ButtonError from '@/components/common/inputs/Error';
import ScramblePicker from '@/components/common/ScramblePicker';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Field, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import {refreshSettings} from '@/db/settings/update';
import {ScrambleType} from '@/util/cubes/cube_scrambles';
import {useInput} from '@/util/hooks/useInput';
import {trpc} from '@/util/trpc';
import React, {useState} from 'react';

interface Props {
	onComplete?: () => void;
}

export default function NewCubeType(props: Props) {
	const fieldId = React.useId();

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
			<DialogHeader title="Add cube type" />
			<Field className="mb-2">
				<FieldLabel htmlFor={`${fieldId}-1`}>{'Cube Type Name'}</FieldLabel>
				<Input value={name} onChange={setName} id={`${fieldId}-1`} />
			</Field>
			<ScramblePicker value={scrambleType} onChange={onChangeScrambleType} />
			<div className="flex flex-col items-start">
				<Button
					variant="default"
					onClick={createCubeType}
					size="lg"
					disabled={disabled || loading}
					aria-busy={loading}
				>
					{'Create Cube Type'}
					{loading ? <Spinner aria-hidden="true" /> : null}
				</Button>
				<ButtonError text={error} />
			</div>
		</div>
	);
}
