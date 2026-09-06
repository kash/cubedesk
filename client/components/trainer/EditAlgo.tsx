import Radio from '@/components/common/Radio';
import AlgoVisual from '@/components/trainer/AlgoVisual';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Field, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import {AutosizeTextarea} from '@/components/ui/textarea';
import {TrainerAlgorithmExtended} from '@/db/trainer/init';
import {deleteTrainerAlgoOverrides, updateTrainerAlgoOverrides} from '@/db/trainer/operations';
import {AlgorithmOverrideInput} from '@/types/trainer';
import {useInput} from '@/util/hooks/useInput';
import {toastError, toastSuccess} from '@/util/toast';
import React, {useState} from 'react';

interface Props {
	onComplete?: () => void;
	algoExt: TrainerAlgorithmExtended;
}

export default function EditAlgo(props: Props) {
	const fieldId = React.useId();

	const {onComplete, algoExt} = props;

	const [overrides, setOverrides] = useState(algoExt?.overrides || null);
	const [saving, setSaving] = useState(false);
	const [resetting, setResetting] = useState(false);

	const [name, setName] = useInput(overrides?.name || algoExt.name || '');
	const [rotate, setRotate] = useInput(String(overrides?.rotate || algoExt.rotate || 0));
	const [solution, setSolution] = useInput(overrides?.solution || algoExt.solution || '');
	const [scrambles, setScrambles] = useInput(overrides?.scrambles || algoExt.scrambles || '');

	function getOverrides(): AlgorithmOverrideInput {
		return {
			name,
			solution,
			rotate: parseInt(rotate) || 0,
			scrambles,
		};
	}

	async function saveAlgo() {
		setSaving(true);
		try {
			await updateTrainerAlgoOverrides(algoExt, getOverrides());
			toastSuccess('Updated trainer algorithm');
			onComplete?.();
		} catch (e) {
			toastError(e);
			setSaving(false);
		}
	}

	async function resetToDefaults() {
		setResetting(true);
		try {
			await deleteTrainerAlgoOverrides(algoExt);
			toastSuccess('Successfully reset trainer algorithm values to default');
			setOverrides(null);
			setName(algoExt.name);
			setRotate(String(algoExt.rotate || 0));
			setSolution(algoExt.solution);
			setScrambles(algoExt.scrambles);
		} catch (e) {
			toastError(e);
		} finally {
			setResetting(false);
		}
	}

	return (
		<div>
			<DialogHeader
				title="Edit Trainer Algorithm"
				description="Below, you can override any of the default values for this trainer algorithm. Removing the value will reset it to its default value."
			/>
			<div className="flex w-full items-center justify-center px-0 pt-2.5 pb-5">
				<AlgoVisual
					rotate={parseInt(rotate)}
					colors={algoExt.colors ?? undefined}
					cubeType={algoExt.cube_type}
				/>
			</div>
			<Field className="mb-2">
				<FieldLabel htmlFor={`${fieldId}-1`}>{'Name'}</FieldLabel>
				<Input
					value={name}
					placeholder={algoExt.name ?? undefined}
					onChange={setName}
					id={`${fieldId}-1`}
				/>
			</Field>
			<Field className="mb-2">
				<FieldLabel htmlFor={`${fieldId}-2`}>{'Solution'}</FieldLabel>
				<Input
					value={solution}
					placeholder={algoExt.solution ?? undefined}
					onChange={setSolution}
					id={`${fieldId}-2`}
				/>
			</Field>
			<Field>
				<FieldLabel htmlFor={`${fieldId}-3`}>
					{'Scrambles'} <span className="text-text/60 font-normal italic">Optional</span>
				</FieldLabel>
				<AutosizeTextarea
					value={scrambles}
					placeholder={algoExt.scrambles ?? undefined}
					onChange={setScrambles}
					id={`${fieldId}-3`}
				/>
			</Field>
			<Radio
				legend="Rotation"
				onValueChange={setRotate}
				value={rotate}
				name="rotate"
				options={[
					{label: '0°', value: 0, id: '0'},
					{label: '90°', value: 90, id: '90'},
					{label: '180°', value: 180, id: '180'},
					{label: '270°', value: 270, id: '270'},
				]}
			/>
			<div className="mt-[30px] flex flex-row items-center justify-between gap-[7px]">
				<Button variant="secondary" onClick={saveAlgo} disabled={saving} aria-busy={saving}>
					{'Save'}
					{saving ? <Spinner aria-hidden="true" /> : null}
				</Button>
				{!overrides ? null : (
					<Button
						variant="destructive"
						onClick={resetToDefaults}
						size="sm"
						disabled={resetting}
						aria-busy={resetting}
					>
						{'Reset to Defaults'}
						{resetting ? <Spinner aria-hidden="true" /> : null}
					</Button>
				)}
			</div>
		</div>
	);
}
