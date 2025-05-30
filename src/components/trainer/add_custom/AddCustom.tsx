import {Button} from '@/components/ui/button';
import {api} from '@/trpc/react';
import './AddCustom.scss';
import Cube from 'cubejs';
import React, {useEffect, useState} from 'react';
import {createCustomTrainerDb, updateCustomTrainerDb} from '../../../lib/db/trainer/custom';
import {useInput} from '../../../lib/util/hooks/useInput';
import {useToggle} from '../../../lib/util/hooks/useToggle';
import block from '../../../styles/bem';
import Checkbox from '../../common/checkbox/Checkbox';
import HorizontalLine from '../../common/horizontal_line/HorizontalLine';
import HorizontalNav from '../../common/horizontal_nav/HorizontalNav';
import Input from '../../common/inputs/input/Input';
import TextArea from '../../common/inputs/textarea/TextArea';
import Loading from '../../common/loading/Loading';
import {IModalProps} from '../../common/modal/Modal';
import ModalHeader from '../../common/modal/modal_header/ModalHeader';
import CubeBuilder from './cube_builder/CubeBuilder';

const b = block('add-custom-trainer');

interface ColorMap {
	[key: string]: string;
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

	// Use tRPC query instead of Apollo useQuery
	const {data: trainerData, isLoading: isTrainerLoading} = api.customTrainer.getById.useQuery(
		{id: editingId},
		{enabled: !!editingId},
	);

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

		if (!trainerData) {
			return;
		}

		const trainer = trainerData;

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
	}, [trainerData]);

	function getScrambles() {
		const scrambles = [];
		const solutions = [solution, ...altSolutions.split('\n')];

		for (const sol of solutions) {
			try {
				const inv = Cube.inverse(sol);
				scrambles.push(inv);
			} catch (e: unknown) {
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

		const payload = {
			name,
			solution: solution.trim(),
			description,
			scrambles: getScrambles(),
			three_d: threeD,
			colors: colors[getColorKey(cubeType, threeD)],
			alt_solutions: altSolutions,
			cube_type: cubeType,
			private: privateChecked,
			group_name: '', // Default empty group name
		};

		try {
			if (editing) {
				await updateCustomTrainerDb(editingId, payload);
			} else {
				await createCustomTrainerDb(payload);
			}

			onComplete();
		} catch (e: unknown) {
			setError(e.message);
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

	if (loading || (editing && isTrainerLoading)) {
		return (
			<div className={b({loading})}>
				<Loading />
			</div>
		);
	}

	return (
		<div className={b()}>
			<ModalHeader title="Add custom trainer" />
			<div className={b('body')}>
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
				{trainerData?.copy_of_id ? null : (
					<Checkbox
						checked={privateChecked}
						text="Make trainer private"
						onChange={onPrivateChange}
					/>
				)}
				<HorizontalLine />
				<div className={b('cube-builder-filter')}>
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
