import ConfirmDialog from '@/components/common/ConfirmDialog';
import {Button} from '@/components/ui/button';
import './CubeTypes.scss';
import {openModal} from '@/lib/actions/general';
import {setCubeType} from '@/lib/db/settings/update';
import {CubeType} from '@/lib/util/cubes/cube_types';
import {getAllCubeTypes, getScrambleTypeById} from '@/lib/util/cubes/util';
import {useSettings} from '@/lib/util/hooks/useSettings';
import block from '@/styles/bem';
import {api} from '@/trpc/react';
import {Plus, Trash} from '@phosphor-icons/react/dist/ssr';
import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import NewCubeType from './cube_cube_type/NewCubeType';

const b = block('manage-custom-cubes');

export default function CubeTypes() {
	const dispatch = useDispatch();

	const currentCubeType = useSettings('cube_type');

	const addCustomCubeType = useCallback(() => {
		dispatch(openModal(<NewCubeType />));
	}, [dispatch]);

	const deleteCustomCubeTypeMutation = api.customCubeType.delete.useMutation();

	const deleteCubeType = useCallback(async (cubeType: CubeType) => {
		await deleteCustomCubeTypeMutation.mutateAsync({
			id: cubeType.id,
		});

		if (currentCubeType === cubeType.id) {
			setCubeType('333');
		}

		window.location.reload();
	}, [deleteCustomCubeTypeMutation, currentCubeType]);

	const rows = [];

	for (const cubeType of getAllCubeTypes()) {
		const scramble = getScrambleTypeById(cubeType.scramble);

		rows.push(
			<tr className={b('cube')} key={cubeType.name}>
				<td>{cubeType.name}</td>
				<td>{scramble.name}</td>
				<td>
					{!cubeType.default && (
						<ConfirmDialog
							title="Delete custom cube type"
							description={`Are you sure you want to delete "${cubeType.name}"? This will also delete all of your solves for this cube type.`}
							buttonText="Delete cube type"
							triggerAction={() => deleteCubeType(cubeType)}
						>
							<Button variant="secondary" size="icon">
								<Trash weight="bold" />
							</Button>
						</ConfirmDialog>
					)}
				</td>
			</tr>,
		);
	}

	return (
		<div>
			<div className={b('add')}>
				<Button onClick={addCustomCubeType} icon={Plus}>
					Create New
				</Button>
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
