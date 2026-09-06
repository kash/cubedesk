import ButtonError from '@/components/common/inputs/Error';
import {Button} from '@/components/ui/button';
import {DialogClose} from '@/components/ui/dialog';
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
import {CheckCircle, Cube} from 'phosphor-react';
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
				<TableCell className="py-4 pl-4">
					<div className="flex items-center gap-2.5">
						<span className="bg-tmo-module/5 text-text/50 flex size-8 items-center justify-center rounded-lg">
							<Cube size={18} />
						</span>
						<span className="text-sm font-medium">{ct?.name ?? type.cube_type}</span>
					</div>
				</TableCell>
				<TableCell className="text-right text-base font-semibold tabular-nums">
					{pb ? getTimeString(pb.time) : <span className="text-text/30">—</span>}
				</TableCell>
				<TableCell className="pr-4 text-right text-base font-semibold tabular-nums">
					{ao5pb ? getTimeString(ao5pb.time) : <span className="text-text/30">—</span>}
				</TableCell>
			</TableRow>,
		);
	}

	let exception: React.ReactNode = null;
	if (!me?.username) {
		exception = (
			<p>
				You must <a href="/account/personal-info">set a username</a> before you can publish
				your times
			</p>
		);
	} else if (!rows.length) {
		exception = (
			<p>
				You don't have any solves yet. Head over to the <a href="/">Timer Page</a> and start
				cubing!
			</p>
		);
	}

	return (
		<div>
			{exception}
			{exception ? null : (
				<>
					<div className="border-tmo-module/10 overflow-hidden rounded-xl border">
						<Table>
							<TableHeader className="bg-tmo-module/5 text-text/50 text-xs">
								<TableRow>
									<TableHead className="pl-4">Event</TableHead>
									<TableHead className="text-right">Single</TableHead>
									<TableHead className="pr-4 text-right">Average of 5</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>{rows}</TableBody>
						</Table>
					</div>
					<div className="text-text/50 my-5 flex items-start gap-2 text-xs leading-relaxed">
						<CheckCircle size={17} className="mt-0.5 shrink-0" />
						<p className="text-text/50 mb-0 text-xs leading-relaxed">
							By publishing, you confirm these are your own legitimate solves. Your
							records will be visible on your profile and the leaderboards.
						</p>
					</div>
					<div className="border-tmo-module/10 flex flex-wrap items-center justify-end gap-2 border-t pt-4">
						<DialogClose asChild>
							<Button variant="ghost" disabled={publishing}>
								Cancel
							</Button>
						</DialogClose>
						<Button
							variant="default"
							onClick={publishTimes}
							size="default"
							disabled={publishing}
							aria-busy={publishing}
						>
							{publishing ? 'Publishing…' : 'Publish to profile'}
							{publishing ? <Spinner aria-hidden="true" /> : null}
						</Button>
						<ButtonError text={error} />
					</div>
				</>
			)}
		</div>
	);
}
