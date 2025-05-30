import React, {useState} from 'react';
import Emblem from '@/components/common/emblem/Emblem';
import Checkbox from '@/components/common/checkbox/Checkbox';
import {useMe} from '@/lib/util/hooks/useMe';
import {getSinglePB} from '@/lib/db/solves/stats/solves/single/single_pb';
import {getAveragePB} from '@/lib/db/solves/stats/solves/average/average_pb';
import {IModalProps} from '@/components/common/modal/Modal';
import {getTimeString} from '@/lib/util/time';
import block from '@/styles/bem';
import {getCubeTypeInfoById} from '@/lib/util/cubes/util';
import {Button} from '@/components/ui/button';
import HorizontalLine from '@/components/common/horizontal_line/HorizontalLine';
import {fetchAllCubeTypesSolved, FilterSolvesOptions} from '@/lib/db/solves/query';
import {toastError, toastSuccess} from '@/lib/util/toast';
import {api} from '@/trpc/react';

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

		// TODO: Migrate to tRPC - need leaderboards.publishTopSolve and leaderboards.publishTopAverages mutations
		// const publishTopSolveMutation = api.leaderboards.publishTopSolve.useMutation();
		// const publishTopAveragesMutation = api.leaderboards.publishTopAverages.useMutation();

		for (const type of cubeTypes) {
			const pb = getSinglePB(getFilter(type.cube_type));
			const ao5Pb = getAveragePB(getFilter(type.cube_type), 5);

			try {
				if (pb && pb.time > 0) {
					// await publishTopSolveMutation.mutateAsync({ solve_id: pb.solve.id });
					successCount++;
				}
			} catch (e: unknown) {
				errorCount += 1;
				toastError(e.message);
			}

			try {
				if (ao5Pb && ao5Pb.time > 0) {
					// await publishTopAveragesMutation.mutateAsync({ solve_ids: Array.from(ao5Pb.solveIds) });
					successCount++;
				}
			} catch (e: unknown) {
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
					<div>
						<Button
							size="lg"
							loading={publishing}
							onClick={publishTimes}
						>
							Publish to Profile
						</Button>
						{error && <p className="text-sm text-red-600 mt-1">{error}</p>}
					</div>
				</>
			)}
		</div>
	);
}
