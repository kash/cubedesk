import Empty from '@/components/common/Empty';
import ActionMenu from '@/components/common/inputs/ActionMenu';
import SelectField from '@/components/common/inputs/SelectField';
import PageTitle from '@/components/common/PageTitle';
import AlgoModule from '@/components/modules/algo-module/AlgoModule';
import {TimerModuleType} from '@/components/timer/@types/enums';
import Timer from '@/components/timer/Timer';
import AddCustom from '@/components/trainer/add-custom/AddCustom';
import TrainerAlgo from '@/components/trainer/trainer-algo/TrainerAlgo';
import TrainerSessionEdit from '@/components/trainer/TrainerSessionEdit';
import {initTrainerData} from '@/components/trainer/util/init';
import {compareTrainerAlgorithms} from '@/components/trainer/util/sort';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Dialog, DialogClose, DialogContent, DialogTitle} from '@/components/ui/dialog';
import {Skeleton} from '@/components/ui/skeleton';
import {TrainerAlgorithmExtended} from '@/db/trainer/init';
import {
	fetchTrainerAlgorithmEventTypes,
	fetchTrainerAlgorithmById,
	fetchTrainerAlgorithms,
	fetchTrainerAlgorithmTypes,
	FilterTrainerOptions,
} from '@/db/trainer/query';
import {Solve} from '@/types/solve';
import {EventType} from '@/util/cubes/event_types';
import {getEventTypeInfoById} from '@/util/cubes/util';
import {useToggle} from '@/util/hooks/useToggle';
import {useTrainerDb} from '@/util/hooks/useTrainerDb';
import Chance from 'chance';
import classNames from 'classnames';
import _ from 'lodash';
import {ArrowRight, Plus, Star, X} from 'phosphor-react';
import React, {createContext, ReactNode, useContext, useEffect, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import {useRouteMatch} from 'react-router-dom';
import {v4 as uuid} from 'uuid';

export interface ITrainerContext {
	eventType?: EventType;
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
const DEFAULT_ALGO_EVENT_TYPE = '333';
const DEFAULT_ALGO_TYPE = 'OLL';

export default function Trainer() {
	const [timerDialog, setTimerDialog] = React.useState<{
		props: React.ComponentProps<typeof Timer>;
		fullSize: boolean;
	} | null>(null);
	const [addCustomDialog, setAddCustomDialog] = React.useState<React.ComponentProps<
		typeof AddCustom
	> | null>(null);

	const match = useRouteMatch();
	const matchParams: any = match.params;

	const urlEventType = matchParams.eventType || DEFAULT_ALGO_EVENT_TYPE;
	const urlAlgoType = matchParams.algoType || DEFAULT_ALGO_TYPE;

	const [loaded, setLoaded] = useState(false);
	const [loadError, setLoadError] = useState('');
	const [loadAttempt, setLoadAttempt] = useState(0);
	const [eventType, setEventType] = useState(urlEventType);
	const [algoType, setAlgoType] = useState(urlAlgoType);
	const [favsOnly, toggleFavsOnly] = useToggle(false);

	const updateCount = useTrainerDb();

	useEffect(() => {
		let cancelled = false;
		setLoadError('');
		setLoaded(false);
		initTrainerData()
			.then(() => {
				if (!cancelled) setLoaded(true);
			})
			.catch((error) => {
				if (!cancelled) setLoadError(error.message || 'Could not load trainer algorithms.');
			});
		return () => {
			cancelled = true;
		};
	}, [loadAttempt]);

	const filter: FilterTrainerOptions = {
		event_type: eventType,
		algo_type: algoType,
	};

	if (favsOnly) {
		filter.favorite = true;
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
			event_type: eventType,
			training_session_id: sessionId,
		};

		if (algo) {
			sessionFilter.id = algo.id;
		}

		if (trainingSessionType === 'single') {
			solvesFilter = {
				event_type: eventType,
				trainer_name: algo?.id,
			};
		} else if (trainingSessionType === 'favorites') {
			sessionFilter.favorite = true;
		}

		// Keep this session's selection stable as favorites and names are edited.
		// Resolve each ID again so the editor, module, and scrambles use fresh data.
		const algorithmIds = fetchTrainerAlgorithms(sessionFilter).map((algorithm) => algorithm.id);
		if (!algorithmIds.length) return;

		function getCurrentTrainerAlgo(index: number) {
			const chance = new Chance(sessionId + index);
			const randomIndex = chance.integer({min: 0, max: algorithmIds.length - 1});
			return fetchTrainerAlgorithmById(algorithmIds[randomIndex])!;
		}

		function getCustomScramble(index: number) {
			const currentAlgo = getCurrentTrainerAlgo(index);
			const scrambles = (
				currentAlgo.overrides?.scrambles ??
				currentAlgo.scrambles ??
				''
			).split('\n');
			return _.sample(scrambles);
		}

		const solvesOverride: Partial<Solve> = {
			training_session_id: sessionId,
			trainer_name: algo?.id,
		};

		setTimerDialog({
			props: {
				ignorePbEvents: true,
				inDialog: true,
				headerOptions: {
					hideEventType: true,
					hideNewSession: true,
					hideSessionSelector: true,
					hideTimerType: true,
					customHeadersRight: (
						<>
							<TrainerSessionEdit getAlgorithm={getCurrentTrainerAlgo} />
							<DialogClose asChild>
								<Button variant="ghost" size="icon" aria-label="Close trainer">
									<X aria-hidden="true" />
								</Button>
							</DialogClose>
						</>
					),
				},
				timerCustomFooterModules: [
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
							const ag = getCurrentTrainerAlgo(context.sessionSolveCount);
							return {
								module: <AlgoModule algoExt={ag} />,
							};
						},
						hideAllOptions: true,
					},
				],
				scrambleLocked: true,
				eventType: eventType,
				solvesFilter: solvesFilter,
				solvesSaveOverride: solvesOverride,
				customScrambleFunc: (context) => getCustomScramble(context.sessionSolveCount),
			},
			fullSize: true,
		});
	}

	const eventTypes = useMemo(fetchTrainerAlgorithmEventTypes, [loaded, updateCount]);
	const algoTypes = useMemo(
		() =>
			fetchTrainerAlgorithmTypes({
				event_type: eventType,
			}),
		[loaded, eventType, updateCount],
	);

	const algos = useMemo(
		() => fetchTrainerAlgorithms(filter).sort(compareTrainerAlgorithms),
		[eventType, algoType, filter, loaded, updateCount],
	);

	const favCount = algos.reduce((acc, alg) => {
		if (alg.favorite) {
			acc++;
		}
		return acc;
	}, 0);

	if (!loaded) {
		return (
			<div>
				<PageTitle pageName="Trainer" />
				{loadError ? (
					<Alert variant="destructive">
						<AlertDescription>{loadError}</AlertDescription>
						<Button onClick={() => setLoadAttempt((attempt) => attempt + 1)}>
							Retry
						</Button>
					</Alert>
				) : (
					<div role="status" aria-label="Loading trainers" className="grid gap-4">
						{[0, 1, 2].map((key) => (
							<Card key={key} aria-hidden>
								<CardContent className="space-y-4">
									<Skeleton className="h-5 w-40" />
									<Skeleton className="h-4 w-2/3" />
									<Skeleton className="h-9 w-32" />
								</CardContent>
							</Card>
						))}
					</div>
				)}
			</div>
		);
	}

	const context: ITrainerContext = {
		openTrainer,
		eventType: getEventTypeInfoById(eventType),
		algoType,
		filter,
	};

	function openCreateCustomTrainer() {
		setAddCustomDialog({});
	}

	function selectEventType(ct: string) {
		setEventType(ct);

		const newAlgoTypes = fetchTrainerAlgorithmTypes({
			event_type: ct,
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

		history.replaceState({}, '', window.location.origin + `/trainer/${eventType}/${at}`);
	}

	let body: ReactNode;
	if (algos && algos.length) {
		body = algos.map((algo) => <TrainerAlgo key={algo.id} algoExt={algo} />);
	} else {
		body = <Empty text="No algorithms available in this set" />;
	}

	return (
		<>
			<TrainerContext.Provider value={context}>
				<div className="flex h-full min-h-0 flex-col">
					<PageTitle pageName="Trainer">
						<div className="absolute top-0 right-0">
							<Button variant="default" onClick={openCreateCustomTrainer} size="lg">
								{'Create New'}
								<Plus />
							</Button>
						</div>
						<div className="flex flex-row items-start justify-between">
							<div className="flex flex-row gap-2.5">
								<SelectField
									label="Trainer event type"
									value={eventType}
									onValueChange={selectEventType}
									options={eventTypes.map((cube) => ({
										value: cube.value,
										text: getEventTypeInfoById(cube.value)?.name || cube.value,
									}))}
								/>
								<SelectField
									label="Algorithm set"
									value={algoType}
									onValueChange={selectAlgoType}
									options={[
										{value: CUSTOM_TRAINER_ALGO_TYPE, text: 'Custom'},
										...algoTypes
											.filter(
												(algo) => algo.value !== CUSTOM_TRAINER_ALGO_TYPE,
											)
											.map((algo) => ({value: algo.value, text: algo.value})),
									]}
								/>
								<Button
									variant={favsOnly ? 'default' : 'secondary'}
									onClick={() => toggleFavsOnly()}
									size="icon"
									aria-label="Show favorites only"
									aria-pressed={favsOnly}
								>
									<Star />
								</Button>
								<ActionMenu
									text="Train"
									openLeft
									triggerProps={{
										variant: 'default',
									}}
									options={[
										{
											text: 'Train All',
											disabled: !algos.length,
											onClick: () => openTrainer('all'),
										},
										{
											text: 'Train Favorites',
											disabled: !favCount,
											onClick: () => openTrainer('favorites'),
										},
									]}
								/>
							</div>
							<div>
								<Button variant="secondary" asChild>
									<Link to={'/trainer/public-trainers'}>
										{'Marketplace'}
										<ArrowRight />
									</Link>
								</Button>
							</div>
						</div>
					</PageTitle>
					<div
						className={classNames(
							'grid [grid-template-columns:repeat(auto-fit,minmax(400px,1fr))] gap-5',
							{'min-h-0 flex-1 !grid-cols-1 items-center': !algos?.length},
						)}
					>
						{body}
					</div>
				</div>
			</TrainerContext.Provider>
			<Dialog
				open={timerDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setTimerDialog(null);
					}
				}}
			>
				{timerDialog && (
					<DialogContent
						fullSize={timerDialog.fullSize}
						noPadding={timerDialog.fullSize}
						hideCloseButton
						className={classNames({'border-0': timerDialog.fullSize})}
					>
						<DialogTitle className="sr-only">Timer</DialogTitle>
						<Timer {...timerDialog.props} />
					</DialogContent>
				)}
			</Dialog>
			<Dialog
				open={addCustomDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setAddCustomDialog(null);
					}
				}}
			>
				{addCustomDialog && (
					<DialogContent>
						<AddCustom
							{...addCustomDialog}
							onComplete={() => {
								setAddCustomDialog((current) =>
									current === addCustomDialog ? null : current,
								);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
