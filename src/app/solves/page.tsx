'use client';

import '../../components/solves/Solves.scss';
import {Button} from '@/components/ui/button';
import {Solve} from '@/generated/zod';
import {Funnel, Share, SortAscending, SortDescending} from '@phosphor-icons/react/dist/ssr';
import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import CubePicker from '../../components/common/cube_picker/CubePicker';
import Empty from '../../components/common/empty/Empty';
import Dropdown from '../../components/common/inputs/dropdown/Dropdown';
import {IDropdownOption} from '../../components/common/inputs/dropdown/dropdown_option/DropdownOption';
import Loading from '../../components/common/loading/Loading';
import PageTitle from '../../components/common/page-title/PageTitle';
import ResultCount from '../../components/common/result_count/ResultCount';
import HistoryModal from '../../components/modules/history/history_modal/HistoryModal';
import BulkActions from '../../components/solves/bulk_actions/BulkActions';
import SolveListRow from '../../components/solves/solve_row/SolveListRow';
import {openModal} from '../../lib/actions/general';
import {LokiFetchOptions} from '../../lib/db/lokijs';
import {fetchSolveCount, fetchSolves, FilterSolvesOptions} from '../../lib/db/solves/query';
import {CubeType} from '../../lib/util/cubes/cube_types';
import {useMe} from '../../lib/util/hooks/useMe';
import {useSolveDb} from '../../lib/util/hooks/useSolveDb';
import {numberWithCommas} from '../../lib/util/strings/util';
import block from '../../styles/bem';

const PAGE_SIZE = 25;

const b = block('solves-list');

export default function SolvesPage() {
	const dispatch = useDispatch();
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

	const getFinalFilter = useCallback((): FilterSolvesOptions => {
		return {
			...filters,
			from_timer: true,
			cube_type: cubeType,
		};
	}, [filters, cubeType]);

	const fetchSolvesWithFilter = useCallback(
		(removeLimit: boolean = false) => {
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
		},
		[getFinalFilter, sortBy, sortInverse, page],
	);

	useEffect(() => {
		const list = fetchSolvesWithFilter();
		const results = fetchSolveCount(getFinalFilter());
		const moreResults = page * PAGE_SIZE < results - PAGE_SIZE;

		setTotalResults(() => results);
		setMoreResults(() => moreResults);
		setSolves(() => list);
	}, [updateCount, cubeType, page, sortBy, sortInverse, fetchSolvesWithFilter, getFinalFilter]);

	const nextPage = useCallback(() => {
		if (!moreResults) return;
		setPage(page + 1);
		window.scrollTo(0, 0);
	}, [moreResults, page]);

	const prevPage = useCallback(() => {
		if (!page) return;
		setPage(page - 1);
		window.scrollTo(0, 0);
	}, [page]);

	const toggleFilter = useCallback(
		(name: keyof FilterSolvesOptions, not: boolean = false) => {
			const filt = {...filters};
			const currentValue = filt[name];

			if ((currentValue === false && not) || (currentValue === true && !not)) {
				delete filt[name];
			} else if (currentValue === undefined) {
				filt[name] = !not as any;
			} else {
				filt[name] = !currentValue as any;
			}

			setFilters(filt);
		},
		[filters],
	);

	const changeCubeType = useCallback((cubeType: CubeType) => {
		setPage(0);
		setCubeType(cubeType.id);
		setFilters((prev) => ({...prev, cube_type: cubeType.id}));
	}, []);

	const changeSortBy = useCallback((value: keyof Solve) => {
		setSortBy(value);
	}, []);

	const toggleSortByOrder = useCallback(() => {
		setSortInverse(!sortInverse);
	}, [sortInverse]);

	const viewAsText = useCallback(() => {
		const list = fetchSolvesWithFilter(true);

		const byUser = me ? ` by ${me?.username}` : '';

		dispatch(
			openModal(
				<HistoryModal
					showAsText
					description={`${solveCountText}${byUser}`}
					solves={list}
				/>,
			),
		);
	}, [fetchSolvesWithFilter, me, solveCountText, dispatch]);

	const getFilterOptionValue = useCallback(
		(name: string, key: keyof Solve, not?: boolean): IDropdownOption => {
			const filterVal = filters[key as keyof FilterSolvesOptions];
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
				onChange: () => toggleFilter(key as keyof FilterSolvesOptions, not),
			};
		},
		[filters, toggleFilter],
	);

	let body: ReactNode;
	if (solves && solves.length) {
		body = solves.map((solve) => <SolveListRow key={solve.id} solve={solve} />);
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
		<div className={b()}>
			<PageTitle pageName="Solves" />

			<div className="container mx-auto flex max-w-2xl flex-col gap-2">
				<div className="container mb-2 flex flex-row items-center gap-2">
					<CubePicker
						dropdownProps={{
							openLeft: true,
						}}
						value={cubeType}
						onChange={changeCubeType}
					/>
					<Dropdown
						openLeft
						preventCloseOnInnerClick
						text={filterText}
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
					<Dropdown
						text="Sort"
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
								checkbox: true,
								on: sortBy === 'started_at',
								onChange: () => changeSortBy('started_at'),
							},
							{
								text: 'Time',
								checkbox: true,
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
					<Button disabled={!solves?.length} onClick={viewAsText}>
						<Share weight="bold" />
					</Button>
					<div className="grow" />
					<ResultCount value={solveCountText} />
				</div>
				<div className="mb-4">
					<BulkActions filter={getFinalFilter()} />
				</div>
				<div className={b('list')}>{body}</div>
				<div className={b('pagination')}>
					<Button onClick={prevPage} disabled={page === 0}>
						Prev
					</Button>
					<p>
						Page {page + 1} of {Math.ceil(totalResults / 25) || 1}
					</p>
					<Button onClick={nextPage} disabled={!moreResults}>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
}
