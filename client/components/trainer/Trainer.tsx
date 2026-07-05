import {openModal} from '@/actions/general';
import Button, {CommonType} from '@/components/common/Button';
import Empty from '@/components/common/Empty';
import Dropdown from '@/components/common/inputs/dropdown/Dropdown';
import LinkButton from '@/components/common/LinkButton';
import PageTitle from '@/components/common/PageTitle';
import AlgoModule from '@/components/modules/algo-module/AlgoModule';
import {TimerModuleType} from '@/components/timer/@types/enums';
import Timer from '@/components/timer/Timer';
import AddCustom from '@/components/trainer/add-custom/AddCustom';
import TrainerAlgo from '@/components/trainer/trainer-algo/TrainerAlgo';
import {TrainerAlgorithmExtended} from '@/db/trainer/init';
import {
	fetchTrainerAlgorithmCount,
	fetchTrainerAlgorithmCubeTypes,
	fetchTrainerAlgorithms,
	fetchTrainerAlgorithmTypes,
	FilterTrainerOptions,
} from '@/db/trainer/query';
import {Solve} from '@/types/solve';
import {CubeType} from '@/util/cubes/cube_types';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useToggle} from '@/util/hooks/useToggle';
import {useTrainerDb} from '@/util/hooks/useTrainerDb';
import Chance from 'chance';
import classNames from 'classnames';
import _ from 'lodash';
import memoize from 'memoizee';
import {ArrowRight, Plus, Star} from 'phosphor-react';
import React, {createContext, ReactNode, useContext, useEffect, useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useRouteMatch} from 'react-router-dom';
import {v4 as uuid} from 'uuid';

export interface ITrainerContext {
	cubeType?: CubeType;
	algoType: string;
	filter: FilterTrainerOptions;
	openTrainer: (
		trainingSessionType: TrainingSessionType,
		algo?: TrainerAlgorithmExtended,
	) => void;
}

export type TrainingSessionType = 'all' | 'single' | 'favorites';
const TrainerContext = createContext<ITrainerContext | null>(null);

export function useTrainerContext(): ITrainerContext {
	const ctx = useContext(TrainerContext);
	if (!ctx) {
		throw new Error('useTrainerContext must be used within TrainerContext.Provider');
	}
	return ctx;
}

export const CUSTOM_TRAINER_ALGO_TYPE = 'Custom';
const DEFAULT_ALGO_CUBE_TYPE = '333';
const DEFAULT_ALGO_TYPE = 'OLL';

export default function Trainer() {
	const dispatch = useDispatch();
	const match = useRouteMatch();
	const matchParams: any = match.params;

	const urlCubeType = matchParams.cubeType || DEFAULT_ALGO_CUBE_TYPE;
	const urlAlgoType = matchParams.algoType || DEFAULT_ALGO_TYPE;

	const [loaded, setLoaded] = useState(false);
	const [cubeType, setCubeType] = useState(urlCubeType);
	const [algoType, setAlgoType] = useState(urlAlgoType);
	const [favsOnly, toggleFavsOnly] = useToggle(false);

	const trainerAlgTypeCount = fetchTrainerAlgorithmCount();
	const updateCount = useTrainerDb();

	useEffect(() => {
		if (trainerAlgTypeCount) {
			setLoaded(() => true);
			return;
		}
	}, []);

	const filter: FilterTrainerOptions = {
		cube_type: cubeType,
		algo_type: algoType,
	};

	if (favsOnly) {
		filter.favorite = true;
	}

	const getRandomTrainerAlgo = (
		filter: FilterTrainerOptions,
		trainerSessionId: string,
		index: number,
	) => {
		const seed = trainerSessionId + index;
		const algs = fetchTrainerAlgorithms(filter);
		const chance = new Chance(seed);
		const randomIndex = chance.integer({min: 0, max: algs.length - 1});

		return algs[randomIndex];
	};

	const randomAlgo = memoize(getRandomTrainerAlgo);

	function getCurrentTrainerAlgo(
		filter: FilterTrainerOptions,
		trainerSessionId: string,
		index: number,
	) {
		return randomAlgo(filter, trainerSessionId, index);
	}

	function getCustomScramble(
		filter: FilterTrainerOptions,
		trainerSessionId: string,
		index: number,
	) {
		const algo = randomAlgo(filter, trainerSessionId, index);
		const scrambles = (algo.scrambles ?? '').split('\n');
		return _.sample(scrambles);
	}

	function openTrainer(
		trainingSessionType: TrainingSessionType,
		algo?: TrainerAlgorithmExtended,
	) {
		const sessionFilter = {
			...filter,
		};

		const sessionId = uuid();
		let solvesFilter: Partial<Solve> = {
			cube_type: cubeType,
			training_session_id: sessionId,
		};

		if (algo) {
			sessionFilter.id = algo.id;
		}

		if (trainingSessionType === 'single') {
			solvesFilter = {
				cube_type: cubeType,
				trainer_name: algo?.id,
			};
		} else if (trainingSessionType === 'favorites') {
			sessionFilter.favorite = true;
		}

		const solvesOverride: Partial<Solve> = {
			training_session_id: sessionId,
			trainer_name: algo?.id,
		};

		dispatch(
			openModal(
				<Timer
					ignorePbEvents
					inModal
					headerOptions={{
						hideCubeType: true,
						hideNewSession: true,
						hideSessionSelector: true,
						hideTimerType: true,
					}}
					timerCustomFooterModules={[
						{
							moduleType: TimerModuleType.HISTORY,
							hideAllOptions: true,
						},
						{
							moduleType: TimerModuleType.STATS,
							hideAllOptions: true,
						},
						{
							customBody: (context) => {
								const ag = getCurrentTrainerAlgo(
									sessionFilter,
									sessionId,
									context.sessionSolveCount,
								);
								return {
									module: <AlgoModule algoExt={ag} />,
								};
							},
							hideAllOptions: true,
						},
					]}
					scrambleLocked
					cubeType={cubeType}
					solvesFilter={solvesFilter}
					solvesSaveOverride={solvesOverride}
					customScrambleFunc={(context) =>
						getCustomScramble(sessionFilter, sessionId, context.sessionSolveCount)
					}
				/>,
				{
					fullSize: true,
				},
			),
		);
	}

	const cubeTypes = useMemo(fetchTrainerAlgorithmCubeTypes, [loaded]);
	const algoTypes = useMemo(
		() =>
			fetchTrainerAlgorithmTypes({
				cube_type: cubeType,
			}),
		[loaded, cubeType],
	);

	const algos = useMemo(
		() =>
			fetchTrainerAlgorithms(filter, {
				sortBy: 'id',
			}),
		[cubeType, algoType, filter, loaded, updateCount],
	);

	const favCount = algos.reduce((acc, alg) => {
		if (alg.favorite) {
			acc++;
		}
		return acc;
	}, 0);

	if (!loaded) {
		return <div />;
	}

	const context: ITrainerContext = {
		openTrainer,
		cubeType: getCubeTypeInfoById(cubeType),
		algoType,
		filter,
	};

	function openCreateCustomTrainer() {
		dispatch(openModal(<AddCustom />));
	}

	function selectCubeType(ct: string) {
		setCubeType(ct);

		const newAlgoTypes = fetchTrainerAlgorithmTypes({
			cube_type: ct,
		});

		let oldAlgValid = false;

		for (const at of newAlgoTypes) {
			if (at.value === algoType) {
				oldAlgValid = true;
				break;
			}
		}

		const newAlgType =
			oldAlgValid || algoType === CUSTOM_TRAINER_ALGO_TYPE ? algoType : DEFAULT_ALGO_TYPE;
		setAlgoType(newAlgType);
		history.replaceState({}, '', window.location.origin + `/trainer/${ct}/${newAlgType}`);
	}

	function selectAlgoType(at: string) {
		setAlgoType(at);

		history.replaceState({}, '', window.location.origin + `/trainer/${cubeType}/${at}`);
	}

	let body: ReactNode;
	if (algos && algos.length) {
		body = algos.map((algo) => <TrainerAlgo key={algo.id} algoExt={algo} />);
	} else {
		body = <Empty text="No algorithms here" />;
	}

	const cubeTypeDropdownOptions = cubeTypes.map((ct) => ({
		text: getCubeTypeInfoById(ct.value)?.name ?? ct.value,
		disabled: cubeType === ct.value,
		onClick: () => selectCubeType(ct.value),
	}));

	const algoTypeDropdownOptions = [
		{
			text: 'Custom',
			onClick: () => selectAlgoType(CUSTOM_TRAINER_ALGO_TYPE),
			disabled: algoType === CUSTOM_TRAINER_ALGO_TYPE,
		},
	];
	for (const at of algoTypes) {
		if (at.value === CUSTOM_TRAINER_ALGO_TYPE) {
			continue;
		}
		algoTypeDropdownOptions.push({
			text: at.value,
			disabled: algoType === at.value,
			onClick: () => selectAlgoType(at.value),
		});
	}

	return (
		<TrainerContext.Provider value={context}>
			<div>
				<PageTitle pageName="Trainer">
					<div className="absolute top-0 right-0">
						<Button
							primary
							text="Create New"
							icon={<Plus />}
							glow
							large
							onClick={openCreateCustomTrainer}
						/>
					</div>
					<div className="flex flex-row items-start justify-between">
						<div className="flex flex-row gap-2.5">
							<Dropdown
								openLeft
								text={context.cubeType?.name ?? cubeType}
								options={[...cubeTypeDropdownOptions]}
							/>
							<Dropdown
								openLeft
								text={algoType}
								options={[...algoTypeDropdownOptions]}
							/>
							<Button
								icon={<Star />}
								white={favsOnly}
								gray
								onClick={() => toggleFavsOnly()}
							/>
							<Dropdown
								text="Train"
								openLeft
								dropdownButtonProps={{
									primary: true,
								}}
								options={[
									{text: 'Train All', onClick: () => openTrainer('all')},
									{
										text: 'Train Favorites',
										disabled: !favCount,
										onClick: () => openTrainer('favorites'),
									},
								]}
							/>
						</div>
						<div>
							<LinkButton
								noMargin
								theme={CommonType.WARNING}
								to="/trainer/public-trainers"
								text="Marketplace"
								icon={<ArrowRight />}
							/>
						</div>
					</div>
				</PageTitle>
				<div
					className={classNames(
						'grid [grid-template-columns:repeat(auto-fit,minmax(400px,1fr))] gap-5',
						!algos?.length && '!grid-cols-1',
					)}
				>
					{body}
				</div>
			</div>
		</TrainerContext.Provider>
	);
}
