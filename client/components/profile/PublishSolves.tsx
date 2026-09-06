import Emblem from '@/components/common/Emblem';
import ButtonError from '@/components/common/inputs/Error';
import {Button} from '@/components/ui/button';
import {Spinner} from '@/components/ui/spinner';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {fetchAllCubeTypesSolved, FilterSolvesOptions} from '@/db/solves/query';
import {getAveragePB} from '@/db/solves/stats/solves/average/average-pb';
import {getSinglePB} from '@/db/solves/stats/solves/single/single-pb';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useMe} from '@/util/hooks/useMe';
import {getTimeString} from '@/util/time';
import {toastError, toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React, {useState} from 'react';

interface Props {
	onComplete?: () => void;
}

export default function PublishSolves(props: Props) {
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
				if (pb?.solve && pb.time > 0) {
					await trpc.leaderboards.publishTopSolve.mutate({
						solveId: pb.solve.id,
					});

					successCount++;
				}
			} catch (e) {
				errorCount += 1;
				toastError((e as Error).message);
			}

			try {
				if (ao5Pb && ao5Pb.time > 0) {
					await trpc.leaderboards.publishTopAverages.mutate({
						solveIds: Array.from(ao5Pb.solveIds),
					});

					successCount++;
				}
			} catch (e) {
				errorCount += 1;
				toastError((e as Error).message);
			}
		}

		setPublishing(false);
		if (!errorCount) {
			onComplete?.();
		} else if (successCount) {
			toastSuccess(`Published ${successCount} item${successCount === 1 ? '' : 's'}`);
		}
	}

	const rows: React.ReactNode[] = [];
	for (const type of cubeTypes) {
		const pb = getSinglePB(getFilter(type.cube_type));
		const ao5pb = getAveragePB(getFilter(type.cube_type), 5);

		if (!pb && !ao5pb) {
			continue;
		}

		const ct = getCubeTypeInfoById(type.cube_type);

		rows.push(
			<TableRow key={type.cube_type}>
				<TableCell>
					<Emblem text={ct?.name ?? type.cube_type} />
				</TableCell>
				<TableCell>{pb && <Emblem text={getTimeString(pb.time)} />}</TableCell>
				<TableCell>{ao5pb && <Emblem text={getTimeString(ao5pb.time)} />}</TableCell>
			</TableRow>,
		);
	}

	let exception: React.ReactNode = null;
	if (!me.username) {
		exception = (
			<p>
				You must <a href="/account/personal-info">set a username</a> before you can publish
				your times
			</p>
		);
	} else if (!rows.length) {
		exception = (
			<p>
				Your don't have any solves yet. Head over to the <a href="/">Timer Page</a> and
				start cubing!
			</p>
		);
	}

	return (
		<div>
			{exception}
			{exception ? null : (
				<>
					<Table className="mb-3">
						<TableHeader>
							<TableRow>
								<TableHead>Cube Type</TableHead>
								<TableHead>Single</TableHead>
								<TableHead>Average</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>{rows}</TableBody>
					</Table>
					<div className="flex flex-col items-start">
						<Button
							variant="default"
							onClick={publishTimes}
							size="lg"
							disabled={publishing}
							aria-busy={publishing}
						>
							{'Publish to Profile'}
							{publishing ? <Spinner aria-hidden="true" /> : null}
						</Button>
						<ButtonError text={error} />
					</div>
				</>
			)}
		</div>
	);
}
