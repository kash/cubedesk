import Empty from '@/components/common/empty/Empty';
import Dropdown from '@/components/common/inputs/dropdown/Dropdown';
import './Trainer.scss';
import PageTitle from '@/components/common/page-title/PageTitle';
import AlgoModule from '@/components/modules/algo_module/AlgoModule';
import {TimerModuleType} from '@/components/timer/@types/enums';
import Timer from '@/components/timer/Timer';
import {Button} from '@/components/ui/button';
import {Solve} from '@/generated/zod';
import {openModal} from '@/lib/actions/general';
import {TrainerAlgorithmExtended} from '@/lib/db/trainer/init';
import {
	fetchTrainerAlgorithmCount,
	fetchTrainerAlgorithmCubeTypes,
	fetchTrainerAlgorithms,
	fetchTrainerAlgorithmTypes,
	FilterTrainerOptions,
} from '@/lib/db/trainer/query';
import {CubeType} from '@/lib/util/cubes/cube_types';
import {getCubeTypeInfoById} from '@/lib/util/cubes/util';
import {useToggle} from '@/lib/util/hooks/useToggle';
import {useTrainerDb} from '@/lib/util/hooks/useTrainerDb';
import block from '@/styles/bem';
import {ArrowRight, Plus, Star} from '@phosphor-icons/react/dist/ssr';
import Chance from 'chance';
import _ from 'lodash';
import memoize from 'memoizee';
import Link from 'next/link';
import {useParams} from 'next/navigation';
import React, {createContext, ReactNode, useEffect, useMemo, useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {v4 as uuid} from 'uuid';
import AddCustom from './add_custom/AddCustom';
import TrainerAlgo from './trainer_algo/TrainerAlgo';

const b = block('trainer');

export interface ITrainerContext {
	cubeType: CubeType;
	algoType: string;
	filter: FilterTrainerOptions;
	openTrainer: (
		trainingSessionType: TrainingSessionType,
		algo?: TrainerAlgorithmExtended,
	) => void;
}

export type TrainingSessionType = 'all' | 'single' | 'favorites';
export const TrainerContext = createContext<ITrainerContext>(null);

export const CUSTOM_TRAINER_ALGO_TYPE = 'Custom';
const DEFAULT_ALGO_CUBE_TYPE = '333';
const DEFAULT_ALGO_TYPE = 'OLL';

export default function Trainer() {
	const dispatch = useDispatch();
	const params = useParams();

	const urlCubeType = (params.cubeType as string) || DEFAULT_ALGO_CUBE_TYPE;
	const urlAlgoType = (params.algoType as string) || DEFAULT_ALGO_TYPE;

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

	const getCurrentTrainerAlgo = useCallback((
		filter: FilterTrainerOptions,
		trainerSessionId: string,
		index: number,
	) => {
		return randomAlgo(filter, trainerSessionId, index);
	}, [randomAlgo]);

	const getCustomScramble = useCallback((
		filter: FilterTrainerOptions,
		trainerSessionId: string,
		index: number,
	) => {
		const algo = randomAlgo(filter, trainerSessionId, index);
		const scrambles = algo.scrambles.split('\n');
		return _.sample(scrambles);
	}, [randomAlgo]);

	const openTrainer = useCallback((
		trainingSessionType: TrainingSessionType,
		algo?: TrainerAlgorithmExtended,
	) => {
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
	}, [filter, cubeType, dispatch, getCurrentTrainerAlgo, getCustomScramble]);

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
		return <div className={b('loading')} />;
	}

	const context: ITrainerContext = {
		openTrainer,
		cubeType: getCubeTypeInfoById(cubeType),
		algoType,
		filter,
	};

	const openCreateCustomTrainer = useCallback(() => {
		dispatch(openModal(<AddCustom />));
	}, [dispatch]);

	const selectCubeType = useCallback((ct: string) => {
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
		history.replaceState({}, null, window.location.origin + `/trainer/${ct}/${newAlgType}`);
	}, [algoType]);

	const selectAlgoType = useCallback((at: string) => {
		setAlgoType(at);

		history.replaceState({}, null, window.location.origin + `/trainer/${cubeType}/${at}`);
	}, [cubeType]);

	let body: ReactNode;
	if (algos && algos.length) {
		body = algos.map((algo) => <TrainerAlgo key={algo.id} algoExt={algo} />);
	} else {
		body = <Empty text="No algorithms here" />;
	}

	const cubeTypeDropdownOptions = cubeTypes.map((ct) => ({
		text: getCubeTypeInfoById(ct.value).name,
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
			<div className={b()}>
				<PageTitle pageName="Trainer">
					<div className={b('create-custom')}>
						<Button size="lg" icon={Plus} onClick={openCreateCustomTrainer}>
							Create New
						</Button>
					</div>
					<div className={b('header')}>
						<div className={b('filter')}>
							<Dropdown
								openLeft
								text={context.cubeType.name}
								options={[...cubeTypeDropdownOptions]}
							/>
							<Dropdown
								openLeft
								text={algoType}
								options={[...algoTypeDropdownOptions]}
							/>
							<Button
								variant={favsOnly ? 'outline' : 'secondary'}
								size="icon"
								onClick={() => toggleFavsOnly()}
							>
								<Star weight="bold" />
							</Button>
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
						<div className={b('public-trainers')}>
							<Link href="/trainer/public-trainers">
								<Button variant="destructive" className="!m-0" icon={ArrowRight}>
									Marketplace
								</Button>
							</Link>
						</div>
					</div>
				</PageTitle>
				<div className={b('algos', {empty: !algos?.length})}>{body}</div>
			</div>
		</TrainerContext.Provider>
	);
}
