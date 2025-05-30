import './EditAlgo.scss';
import {IModalProps} from '@/components/common/modal/Modal';
import ModalHeader from '@/components/common/modal/modal_header/ModalHeader';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {AlgorithmOverride} from '@/generated/zod';
import {TrainerAlgorithmExtended} from '@/lib/db/trainer/init';
import {deleteTrainerAlgoOverrides, updateTrainerAlgoOverrides} from '@/lib/db/trainer/operations';
import {useInput} from '@/lib/util/hooks/useInput';
import {toastError, toastSuccess} from '@/lib/util/toast';
import block from '@/styles/bem';
import React, {useState} from 'react';
import AlgoVisual from '../algo_visual/AlgoVisual';

const b = block('edit-algo');

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

	function getOverrides(): AlgorithmOverride {
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
			onComplete();
		} catch (e: unknown) {
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
		} catch (e: unknown) {
			toastError(e);
		} finally {
			setResetting(false);
		}
	}

	return (
		<div className={b()}>
			<ModalHeader
				title="Edit Trainer Algorithm"
				description="Below, you can override any of the default values for this trainer algorithm. Removing the value will reset it to its default value."
			/>
			<div className={b('header')}>
				<AlgoVisual
					rotate={parseInt(rotate)}
					colors={algoExt.colors}
					cubeType={algoExt.cube_type}
				/>
			</div>
			<Input legend="Name" value={name} placeholder={algoExt.name} onChange={setName} />
			<Input
				legend="Solution"
				value={solution}
				placeholder={algoExt.solution}
				onChange={setSolution}
			/>
			<Textarea
				optional
				autoSize
				legend="Scrambles"
				value={scrambles}
				placeholder={algoExt.scrambles}
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
			<div className={b('actions')}>
				<Button loading={saving} onClick={saveAlgo}>
					Save
				</Button>
				{overrides && (
					<Button variant="destructive" loading={resetting} onClick={resetToDefaults}>
						Reset to Defaults
					</Button>
				)}
			</div>
		</div>
	);
}
