import React, {useState} from 'react';
import {gql} from '@apollo/client';
import {gqlMutate} from '../../api';
import Emblem from '../../common/emblem/Emblem';
import Checkbox from '../../common/checkbox/Checkbox';
import {useMe} from '../../../util/hooks/useMe';
import {getSinglePB} from '../../../db/solves/stats/solves/single/single_pb';
import {getAveragePB} from '../../../db/solves/stats/solves/average/average_pb';
import {IModalProps} from '../../common/modal/Modal';
import {getTimeString} from '../../../util/time';
import block from '../../../styles/bem';
import {getCubeTypeInfoById} from '../../../util/cubes/util';
import Button from '../../common/button/Button';
import HorizontalLine from '../../common/horizontal_line/HorizontalLine';
import {fetchAllCubeTypesSolved, FilterSolvesOptions} from '../../../db/solves/query';
import {toastError, toastSuccess} from '../../../util/toast';

const b = block('select-times');

export default function PublishSolves(props: IModalProps) {
	const {onComplete} = props;

	const cubeTypes = fetchAllCubeTypesSolved(true);

	const me = useMe();
	const [publishing, setPublishing] = useState(false);
	const [error, setError] = useState('');

	function getFilter(ct: string): FilterSolvesOptions {
		return {
			from_timer: true,
			cube_type: ct,
		};
	}

	async function publishTimes() {
		if (publishing) {
			return;
		}

		setPublishing(true);
		setError('');

		let errorCount = 0;
		let successCount = 0;

		for (const type of cubeTypes) {
			const pb = getSinglePB(getFilter(type.cube_type));
			const ao5Pb = getAveragePB(getFilter(type.cube_type), 5);

			try {
				if (pb && pb.time > 0) {
					const query = gql`
						mutation Mutation($solveId: String) {
							publishTopSolve(solveId: $solveId) {
								id
							}
						}
					`;

					await gqlMutate(query, {
						solveId: pb.solve.id,
					});

					successCount++;
				}
			} catch (e) {
				errorCount += 1;
				toastError(e.message);
			}

			try {
				if (ao5Pb && ao5Pb.time > 0) {
					const query = gql`
						mutation Mutation($solveIds: [String]) {
							publishTopAverages(solveIds: $solveIds) {
								id
							}
						}
					`;

					await gqlMutate(query, {
						solveIds: Array.from(ao5Pb.solveIds),
					});

					successCount++;
				}
			} catch (e) {
				errorCount += 1;
				toastError(e.message);
			}
		}

		setPublishing(false);
		if (!errorCount) {
			onComplete();
		} else if (successCount) {
			toastSuccess(`Published ${successCount} item${successCount === 1 ? '' : 's'}`);
		}
	}

	const rows = [];
	for (const type of cubeTypes) {
		const pb = getSinglePB(getFilter(type.cube_type));
		const ao5pb = getAveragePB(getFilter(type.cube_type), 5);

		if (!pb && !ao5pb) {
			continue;
		}

		const ct = getCubeTypeInfoById(type.cube_type);

		rows.push(
			<tr key={type.cube_type}>
				<td>
					<Emblem text={ct.name} />
				</td>
				<td>{pb && <Emblem text={getTimeString(pb.time)} />}</td>
				<td>{ao5pb && <Emblem text={getTimeString(ao5pb.time)} />}</td>
			</tr>
		);
	}

	let exception = null;
	if (!me.username) {
		exception = (
			<p>
				You must <a href="/account/personal-info">set a username</a> before you can publish your times
			</p>
		);
	} else if (!rows.length) {
		exception = (
			<p>
				Your don't have any solves yet. Head over to the <a href="/">Timer Page</a> and start cubing!
			</p>
		);
	}

	return (
		<div className={b()}>
			{exception}
			{exception ? null : (
				<>
					<table className="cd-table mb-3">
						<thead>
							<tr>
								<th>Cube Type</th>
								<th>Single</th>
								<th>Average</th>
							</tr>
						</thead>
						<tbody>{rows}</tbody>
					</table>
					<Button
						primary
						glow
						large
						text="Publish to Profile"
						error={error}
						loading={publishing}
						onClick={publishTimes}
					/>
				</>
			)}
		</div>
	);
}
