import CubePicker from '@/components/common/CubePicker';
import Empty from '@/components/common/Empty';
import ActionMenu from '@/components/common/inputs/ActionMenu';
import {ActionMenuOption} from '@/components/common/inputs/ActionMenu';
import Loading from '@/components/common/Loading';
import PageTitle from '@/components/common/PageTitle';
import ResultCount from '@/components/common/ResultCount';
import HistoryDialog from '@/components/modules/history/HistoryDialog';
import SolveInfoDialog from '@/components/solve-info/SolveInfoDialog';
import BulkActions from '@/components/solves/bulk-actions/BulkActions';
import SolveListRow from '@/components/solves/SolveListRow';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogTitle} from '@/components/ui/dialog';
import {LokiFetchOptions} from '@/db/lokijs';
import {fetchSolveCount, fetchSolves, FilterSolvesOptions} from '@/db/solves/query';
import {Solve} from '@/types/solve';
import {CubeType} from '@/util/cubes/cube_types';
import {useMe} from '@/util/hooks/useMe';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {numberWithCommas} from '@/util/strings/util';
import jsonStr from 'json-stable-stringify';
import {Funnel, Share, SortAscending, SortDescending} from 'phosphor-react';
import React, {ReactNode, useEffect, useState} from 'react';

const PAGE_SIZE = 25;

export default function SolvesList() {
	const [selectedSolve, setSelectedSolve] =
		React.useState<React.ComponentProps<typeof SolveInfoDialog>['solve']>(null);
	const dialogFallbackRef = React.useRef<HTMLDivElement>(null);

	const [historyDialog, setHistoryDialog] = React.useState<React.ComponentProps<
		typeof HistoryDialog
	> | null>(null);

	const me = useMe();

	const [cubeType, setCubeType] = useState('333');
	const [page, setPage] = useState(0);
	const [moreResults, setMoreResults] = useState(true);
	const [totalResults, setTotalResults] = useState(0);
	const [sortBy, setSortBy] = useState<keyof Solve>('started_at');
	const [sortInverse, setSortInverse] = useState(false);
	const [solves, setSolves] = useState<Solve[]>([]);
	const [filters, setFilters] = useState<FilterSolvesOptions>({});
	const updateCount = useSolveDb();

	const solveCountText = `${numberWithCommas(totalResults)} solve${totalResults === 1 ? '' : 's'}`;

	useEffect(() => {
		const list = fetchSolvesWithFilter();
		const results = fetchSolveCount(getFinalFilter());
		const moreResults = page * PAGE_SIZE < results - PAGE_SIZE;

		setTotalResults(() => results);
		setMoreResults(() => moreResults);
		setSolves(() => list);
	}, [updateCount, cubeType, jsonStr(filters), page, sortBy, sortInverse, cubeType]);

	function fetchSolvesWithFilter(removeLimit: boolean = false) {
		const finalFilter = getFinalFilter();

		const options: LokiFetchOptions = {
			sortBy,
			sortInverse: !sortInverse,
		};

		if (!removeLimit) {
			options.offset = page * PAGE_SIZE;
			options.limit = PAGE_SIZE;
		}

		return fetchSolves(finalFilter, options) as any;
	}

	function getFinalFilter(): FilterSolvesOptions {
		return {
			...filters,
			from_timer: true,
			cube_type: cubeType,
		};
	}

	function nextPage() {
		if (!moreResults) return;
		setPage(page + 1);
		window.scrollTo(0, 0);
	}

	function prevPage() {
		if (!page) return;
		setPage(page - 1);
		window.scrollTo(0, 0);
	}

	function toggleFilter(name: string, not: boolean = false) {
		const filt = {...filters};
		const currentValue = filt[name];

		if ((currentValue === false && not) || (currentValue === true && !not)) {
			delete filt[name];
		} else if (currentValue === undefined) {
			filt[name] = !not;
		} else {
			filt[name] = !currentValue;
		}

		setFilters(filt);
	}

	function changeCubeType(cubeType: CubeType) {
		setPage(0);
		setCubeType(cubeType.id);
		filters.cube_type = cubeType.id;
	}

	function changeSortBy(value: keyof Solve) {
		setSortBy(value);
	}

	function toggleSortByOrder() {
		setSortInverse(!sortInverse);
	}

	function viewAsText() {
		const list = fetchSolvesWithFilter(true);

		const byUser = me ? ` by ${me?.username}` : '';

		setHistoryDialog({
			showAsText: true,
			description: `${solveCountText}${byUser}`,
			solves: list,
		});
	}

	function getFilterOptionValue(name: string, key: keyof Solve, not?: boolean): ActionMenuOption {
		const filterVal = filters[key];
		let currentValue;

		if (not) {
			currentValue = filterVal === false;
		} else {
			currentValue = filterVal === true;
		}

		return {
			checkbox: true,
			text: name,
			on: currentValue,
			onChange: () => toggleFilter(key, not),
		};
	}

	let body: ReactNode;
	if (solves && solves.length) {
		body = (
			<div className="border-tmo-module/15 divide-tmo-module/15 divide-y overflow-hidden rounded-[5px] border">
				{solves.map((solve) => (
					<SolveListRow onOpenSolve={setSelectedSolve} key={solve.id} solve={solve} />
				))}
			</div>
		);
	} else if (solves && !solves.length) {
		body = <Empty text="Could not find any solves" />;
	} else {
		body = <Loading />;
	}

	const filterCount = Object.keys(filters).length;

	let filterText = 'Filter';
	if (filterCount) {
		filterText = `${filterCount} filter${filterCount === 1 ? '' : 's'}`;
	}

	return (
		<>
			<>
				<div ref={dialogFallbackRef} tabIndex={-1}>
					<PageTitle pageName="Solves" />

					<div className="container mx-auto flex max-w-2xl flex-col gap-2">
						<div className="container mb-2 flex flex-row flex-wrap items-center gap-2">
							<CubePicker
								pickerProps={{
									openLeft: true,
								}}
								value={cubeType}
								onChange={changeCubeType}
							/>
							<ActionMenu
								openLeft
								preventCloseOnInnerClick
								triggerProps={{
									'aria-label': filterText,
									title: filterText,
									variant: filterCount ? 'default' : 'outline',
								}}
								icon={<Funnel weight="bold" />}
								options={[
									getFilterOptionValue('+2 Only', 'plus_two'),
									getFilterOptionValue('No +2s', 'plus_two', true),
									getFilterOptionValue('DNF Only', 'dnf'),
									getFilterOptionValue('No DNFs', 'dnf', true),
									getFilterOptionValue('Imported', 'bulk'),
									getFilterOptionValue('Not Imported', 'bulk', true),
									getFilterOptionValue('Smart Cube', 'is_smart_cube'),
									getFilterOptionValue('Not Smart Cube', 'is_smart_cube', true),
								]}
							/>
							<ActionMenu
								triggerProps={{'aria-label': 'Sort', title: 'Sort'}}
								openLeft
								preventCloseOnInnerClick
								icon={
									sortInverse ? (
										<SortAscending weight="bold" />
									) : (
										<SortDescending weight="bold" />
									)
								}
								options={[
									{
										text: 'Date',
										radio: true,
										on: sortBy === 'started_at',
										onChange: () => changeSortBy('started_at'),
									},
									{
										text: 'Time',
										radio: true,
										on: sortBy === 'time',
										onChange: () => changeSortBy('time'),
									},
									{
										text: 'Reverse Order',
										icon: sortInverse ? (
											<SortDescending weight="bold" />
										) : (
											<SortAscending weight="bold" />
										),
										// checkbox: true,
										// on: sortInverse,
										onClick: toggleSortByOrder,
									},
								]}
							/>
							<Button
								variant="secondary"
								disabled={!solves?.length}
								onClick={viewAsText}
								size="icon"
								aria-label="Solves List"
							>
								<Share weight="bold" />
							</Button>
							<div className="ml-auto flex items-center gap-3">
								<ResultCount value={solveCountText} />
								<BulkActions filter={getFinalFilter()} />
							</div>
						</div>
						<div className="flex w-full flex-col">{body}</div>
						<div className="mx-auto mt-5 flex flex-row items-center gap-5">
							<Button
								variant={page > 0 ? 'default' : 'secondary'}
								onClick={prevPage}
								disabled={page === 0}
							>
								{'Prev'}
							</Button>
							<span className="text-text text-center">
								Page {page + 1} of {Math.ceil(totalResults / 25) || 1}
							</span>
							<Button
								variant={page > 0 ? 'default' : 'secondary'}
								onClick={nextPage}
								disabled={!moreResults}
							>
								{'Next'}
							</Button>
						</div>
					</div>
				</div>
				<Dialog
					open={historyDialog !== null}
					onOpenChange={(open) => {
						if (!open) {
							setHistoryDialog(null);
						}
					}}
				>
					{historyDialog && (
						<DialogContent>
							<DialogTitle className="sr-only">Solve history</DialogTitle>
							<HistoryDialog {...historyDialog} />
						</DialogContent>
					)}
				</Dialog>
			</>
			<SolveInfoDialog
				solve={selectedSolve}
				onOpenChange={(open) => {
					if (!open) setSelectedSolve(null);
				}}
				focusFallbackRef={dialogFallbackRef}
			/>
		</>
	);
}
