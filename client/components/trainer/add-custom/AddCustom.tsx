import Button from '@/components/common/Button';
import Checkbox from '@/components/common/Checkbox';
import HorizontalLine from '@/components/common/HorizontalLine';
import HorizontalNav from '@/components/common/HorizontalNav';
import Input from '@/components/common/inputs/input/Input';
import Loading from '@/components/common/Loading';
import {IModalProps} from '@/components/common/modal/Modal';
import ModalHeader from '@/components/common/modal/ModalHeader';
import TextArea from '@/components/common/TextArea';
import CubeBuilder from '@/components/trainer/add-custom/CubeBuilder';
import {createCustomTrainerDb, updateCustomTrainerDb} from '@/db/trainer/custom';
import {CustomTrainerInput, CustomTrainerWithUser} from '@/types/trainer';
import {useInput} from '@/util/hooks/useInput';
import {useToggle} from '@/util/hooks/useToggle';
import {trpc} from '@/util/trpc';
import Cube from 'cubejs';
import React, { useEffect, useState} from 'react';

// Values can be null because a stored trainer's colors column is nullable
interface ColorMap {
	[key: string]: string | null;
}

interface Props extends IModalProps {
	editingId?: string;
}

export default function AddCustom(props: Props) {
	const {editingId, onComplete} = props;

	const editing = !!editingId;

	const [saving, setSaving] = useState(false);
	const [loading, setLoading] = useState(true);
	const [name, setName] = useInput('');
	const [solution, setSolution] = useInput('');
	const [altSolutions, setAltSolutions] = useInput('');
	const [colors, setColors] = useState<ColorMap>({});
	const [error, setError] = useState('');
	const [description, setDescription] = useInput('');
	const [privateChecked, togglePrivateChecked] = useToggle(false);
	const [cubeType, setCubeType] = useState('333');
	const [threeD, toggleThreeD] = useToggle(false);

	const [data, setData] = useState<CustomTrainerWithUser | null>(null);

	useEffect(() => {
		if (!editingId) {
			return;
		}

		trpc.customTrainer.get.query({id: editingId}).then((trainer) => {
			setData(trainer as unknown as CustomTrainerWithUser);
		});
	}, [editingId]);

	function getColorKey(ct: string, td: boolean) {
		if (td) {
			return `${ct}_3d`;
		}
		return ct;
	}

	useEffect(() => {
		if (!editing) {
			setLoading(false);
		}

		if (!data) {
			return;
		}

		const trainer = data;

		setName(trainer.name);
		setSolution(trainer.solution);
		setAltSolutions(trainer.alt_solutions);
		setDescription(trainer.description);

		setColors({
			[getColorKey(trainer.cube_type, trainer.three_d)]: trainer.colors,
		});
		setCubeType(trainer.cube_type);
		togglePrivateChecked(trainer.private);
		toggleThreeD(trainer.three_d);
		setLoading(false);
	}, [data]);

	function getScrambles() {
		const scrambles: string[] = [];
		const solutions = [solution, ...altSolutions.split('\n')];

		for (const sol of solutions) {
			try {
				const inv = Cube.inverse(sol);
				scrambles.push(inv);
			} catch (e) {
				console.error(e);
			}
		}

		return scrambles.join('\n');
	}

	async function createCustomTrainer() {
		if (!name) {
			setError('Please specify a name for this trainer');
			return;
		}

		if (!solution) {
			setError('Please specify a solution for this trainer');
			return;
		}

		setSaving(true);

		const payload: CustomTrainerInput = {
			name,
			solution: solution.trim(),
			description,
			scrambles: getScrambles(),
			three_d: threeD,
			colors: colors[getColorKey(cubeType, threeD)],
			alt_solutions: altSolutions,
			cube_type: cubeType,
			private: privateChecked,
		};

		try {
			if (editing) {
				await updateCustomTrainerDb(editingId, payload);
			} else {
				await createCustomTrainerDb(payload);
			}

			onComplete?.();
		} catch (e) {
			setError(e instanceof Error ? e.message : 'Could not save trainer algorithm');
			setSaving(false);
		}
	}

	function updateColors(col: string) {
		const newColors = {...colors};
		newColors[getColorKey(cubeType, threeD)] = col;
		setColors(newColors);
	}

	function selectCubeType(ct: string) {
		setCubeType(ct);
	}

	function onPrivateChange(e) {
		togglePrivateChecked(e.checked);
	}

	function onThreeDChange(e) {
		toggleThreeD(e.checked);
	}

	if (loading) {
		return (
			<div>
				<Loading />
			</div>
		);
	}

	return (
		<div>
			<ModalHeader title="Add custom trainer" />
			<div>
				<Input legend="Name" onChange={setName} value={name} />
				<Input legend="Solution" onChange={setSolution} value={solution} />
				<TextArea
					legend="Description"
					onChange={setDescription}
					value={description}
					maxLength={300}
					autoSize
					optional
				/>
				<TextArea
					legend="Alternate solutions"
					onChange={setAltSolutions}
					value={altSolutions}
					optional
					info="These solutions will be reversed and used for scrambles. One per line"
				/>
				{data?.copy_of_id ? null : (
					<Checkbox
						checked={privateChecked}
						text="Make trainer private"
						onChange={onPrivateChange}
					/>
				)}
				<HorizontalLine />
				<div className="flex flex-col">
					<HorizontalNav
						onChange={selectCubeType}
						tabId={cubeType}
						tabs={[
							{id: '333', value: '3x3'},
							{id: '222', value: '2x2'},
						]}
					/>
					<Checkbox checked={threeD} text="3D" onChange={onThreeDChange} />
				</div>
				<CubeBuilder
					cubeType={cubeType}
					initColors={colors[getColorKey(cubeType, threeD)]}
					threeD={threeD}
					onUpdate={updateColors}
				/>
				<Button
					loading={saving}
					large
					error={error}
					text={`${editing ? 'Edit' : 'Create'} custom trainer`}
					primary
					onClick={createCustomTrainer}
				/>
			</div>
		</div>
	);
}
