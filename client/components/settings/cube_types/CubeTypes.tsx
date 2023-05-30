import React from 'react';
import {useDispatch} from 'react-redux';
import './CubeTypes.scss';
import {Trash, Plus} from '@phosphor-icons/react';
import {refreshSettings, setCubeType} from '../../../db/settings/update';
import {getAllCubeTypes, getScrambleTypeById} from '../../../util/cubes/util';
import {openModal} from '../../../actions/general';
import NewCubeType from './cube_cube_type/NewCubeType';
import {CubeType} from '../../../util/cubes/cube_types';
import Button from '../../common/button/Button';
import block from '../../../styles/bem';
import {gql} from '@apollo/client/core';
import {gqlMutate} from '../../api';
import {useSettings} from '../../../util/hooks/useSettings';

const b = block('manage-custom-cubes');

export default function CubeTypes() {
	const dispatch = useDispatch();

	const currentCubeType = useSettings('cube_type');

	function addCustomCubeType() {
		dispatch(openModal(<NewCubeType />));
	}

	async function deleteCubeType(cubeType: CubeType) {
		const query = gql`
			mutation Mutate($id: String) {
				deleteCustomCubeType(id: $id) {
					id
				}
			}
		`;

		await gqlMutate(query, {
			id: cubeType.id,
		});

		if (currentCubeType === cubeType.id) {
			setCubeType('333');
		}

		await refreshSettings();

		window.location.reload();
	}

	const rows = [];

	for (const cubeType of getAllCubeTypes()) {
		const scramble = getScrambleTypeById(cubeType.scramble);

		rows.push(
			<tr className={b('cube')} key={cubeType.name}>
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
			</tr>
		);
	}

	return (
		<div>
			<div className={b('add')}>
				<Button text="Create New" primary icon={<Plus weight="bold" />} onClick={addCustomCubeType} />
			</div>
			<div className={b('table')}>
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
