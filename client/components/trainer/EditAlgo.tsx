import Button from '@/components/common/Button';
import Input from '@/components/common/inputs/input/Input';
import {IModalProps} from '@/components/common/modal/Modal';
import ModalHeader from '@/components/common/modal/ModalHeader';
import Radio from '@/components/common/Radio';
import TextArea from '@/components/common/TextArea';
import AlgoVisual from '@/components/trainer/AlgoVisual';
import {TrainerAlgorithmExtended} from '@/db/trainer/init';
import {deleteTrainerAlgoOverrides, updateTrainerAlgoOverrides} from '@/db/trainer/operations';
import {AlgorithmOverrideInput} from '@/types/trainer';
import {useInput} from '@/util/hooks/useInput';
import {toastError, toastSuccess} from '@/util/toast';
import React, {useState} from 'react';

interface Props extends IModalProps {
	algoExt: TrainerAlgorithmExtended;
}

export default function EditAlgo(props: Props) {
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
			<ModalHeader
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
			<Input legend="Name" value={name} placeholder={algoExt.name ?? undefined} onChange={setName} />
			<Input
				legend="Solution"
				value={solution}
				placeholder={algoExt.solution ?? undefined}
				onChange={setSolution}
			/>
			<TextArea
				optional
				autoSize
				legend="Scrambles"
				value={scrambles}
				placeholder={algoExt.scrambles ?? undefined}
				onChange={setScrambles}
			/>
			<Radio
				legend="Rotation"
				onChange={setRotate}
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
				<Button text="Save" loading={saving} onClick={saveAlgo} />
				<Button
					hidden={!overrides}
					text="Reset to Defaults"
					flat
					danger
					loading={resetting}
					onClick={resetToDefaults}
				/>
			</div>
		</div>
	);
}
