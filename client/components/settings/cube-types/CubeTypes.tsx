import React from 'react';
import {useDispatch} from 'react-redux';
import {Trash, Plus} from 'phosphor-react';
import {refreshSettings, setCubeType} from '@/db/settings/update';
import {getAllCubeTypes, getScrambleTypeById} from '@/util/cubes/util';
import {openModal} from '@/actions/general';
import NewCubeType from '@/components/settings/cube-types/NewCubeType';
import {CubeType} from '@/util/cubes/cube_types';
import Button from '@/components/common/Button';
import {trpc} from '@/util/trpc';
import {useSettings} from '@/util/hooks/useSettings';

export default function CubeTypes() {
	const dispatch = useDispatch();

	const currentCubeType = useSettings('cube_type');

	function addCustomCubeType() {
		dispatch(openModal(<NewCubeType />));
	}

	async function deleteCubeType(cubeType: CubeType) {
		await trpc.customCubeType.delete.mutate({
			id: cubeType.id,
		});

		if (currentCubeType === cubeType.id) {
			setCubeType('333');
		}

		await refreshSettings();

		window.location.reload();
	}

	const rows: React.ReactNode[] = [];

	for (const cubeType of getAllCubeTypes()) {
		const scramble = getScrambleTypeById(cubeType.scramble);

		rows.push(
			<tr key={cubeType.name}>
				<td>{cubeType.name}</td>
				<td>{scramble.name}</td>
				<td>
					<Button
						gray
						hidden={cubeType.default}
						icon={<Trash />}
						glow
						confirmModalProps={{
							title: 'Delete custom cube type',
							description: `Are you sure you want to delete "${cubeType.name}"? This will also delete all of your solves for this cube type.`,
							buttonText: 'Delete cube type',
							triggerAction: () => deleteCubeType(cubeType),
						}}
					/>
				</td>
			</tr>,
		);
	}

	return (
		<div>
			<div className="flex w-full items-center justify-center py-5">
				<Button
					text="Create New"
					primary
					icon={<Plus weight="bold" />}
					onClick={addCustomCubeType}
				/>
			</div>
			<div className="mt-2.5">
				<table className="cd-table">
					<thead>
						<tr>
							<th>Cube Type</th>
							<th>Scramble Type</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</table>
			</div>
		</div>
	);
}
