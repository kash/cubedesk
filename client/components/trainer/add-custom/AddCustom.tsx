import Checkbox from '@/components/common/Checkbox';
import HorizontalLine from '@/components/common/HorizontalLine';
import HorizontalNav from '@/components/common/HorizontalNav';
import ButtonError from '@/components/common/inputs/Error';
import Loading from '@/components/common/Loading';
import CubeBuilder from '@/components/trainer/add-custom/CubeBuilder';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Field, FieldDescription, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import {AutosizeTextarea, Textarea} from '@/components/ui/textarea';
import {createCustomTrainerDb, updateCustomTrainerDb} from '@/db/trainer/custom';
import {CustomTrainerInput, CustomTrainerWithUser} from '@/types/trainer';
import {useInput} from '@/util/hooks/useInput';
import {useToggle} from '@/util/hooks/useToggle';
import {trpc} from '@/util/trpc';
import Cube from 'cubejs';
import React, {useEffect, useState} from 'react';

// Values can be null because a stored trainer's colors column is nullable
interface ColorMap {
	[key: string]: string | null;
}

interface Props {
	onComplete?: () => void;
	editingId?: string;
}

export default function AddCustom(props: Props) {
	const fieldId = React.useId();

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

	function onPrivateChange(checked: boolean) {
		togglePrivateChecked(checked);
	}

	function onThreeDChange(checked: boolean) {
		toggleThreeD(checked);
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
			<DialogHeader title="Add custom trainer" />
			<div>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-1`}>{'Name'}</FieldLabel>
					<Input onChange={setName} value={name} id={`${fieldId}-1`} />
				</Field>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-2`}>{'Solution'}</FieldLabel>
					<Input onChange={setSolution} value={solution} id={`${fieldId}-2`} />
				</Field>
				<Field>
					<FieldLabel htmlFor={`${fieldId}-3`}>
						{'Description'}{' '}
						<span className="text-text/60 font-normal italic">Optional</span>
					</FieldLabel>
					<AutosizeTextarea
						onChange={setDescription}
						value={description}
						maxLength={300}
						id={`${fieldId}-3`}
						aria-describedby={`${fieldId}-3-description`}
					/>
					<FieldDescription id={`${fieldId}-3-description`}>
						<span className={description?.length >= 300 ? 'text-error' : undefined}>
							{(300 - (description?.length ?? 0)).toLocaleString()}
						</span>
					</FieldDescription>
				</Field>
				<Field>
					<FieldLabel htmlFor={`${fieldId}-4`}>
						{'Alternate solutions'}{' '}
						<span className="text-text/60 font-normal italic">Optional</span>
					</FieldLabel>
					<Textarea
						onChange={setAltSolutions}
						value={altSolutions}
						id={`${fieldId}-4`}
						aria-describedby={`${fieldId}-4-description`}
					/>
					<FieldDescription id={`${fieldId}-4-description`}>
						{'These solutions will be reversed and used for scrambles. One per line'}
					</FieldDescription>
				</Field>
				{data?.copy_of_id ? null : (
					<Checkbox
						checked={privateChecked}
						text="Make trainer private"
						onCheckedChange={onPrivateChange}
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
					<Checkbox checked={threeD} text="3D" onCheckedChange={onThreeDChange} />
				</div>
				<CubeBuilder
					cubeType={cubeType}
					initColors={colors[getColorKey(cubeType, threeD)]}
					threeD={threeD}
					onUpdate={updateColors}
				/>
				<div className="flex flex-col items-start">
					<Button
						variant="default"
						onClick={createCustomTrainer}
						size="lg"
						disabled={saving}
						aria-busy={saving}
					>
						{`${editing ? 'Edit' : 'Create'} custom trainer`}
						{saving ? <Spinner aria-hidden="true" /> : null}
					</Button>
					<ButtonError text={error} />
				</div>
			</div>
		</div>
	);
}
