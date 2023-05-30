import React, {ReactNode, useContext} from 'react';
import {CaretDown} from '@phosphor-icons/react';
import {TimerModuleDropdownOptions, TimerModuleType} from '../@types/enums';
import {FooterModuleData, TimerCustomModuleOptions} from '../@types/interfaces';
import History from '../../modules/history/History';
import LastSolve from '../../modules/last_solve/LastSolve';
import Scramble from '../../modules/scramble/ScrambleVisual';
import TimeChart from '../../modules/time_chart/TimeChart';
import TimeDistro from '../../modules/time_distro/TimeDistro';
import SolvesPerDay from '../../modules/solves_per_day/SolvesPerDay';
import {snakeCase} from 'change-case';
import Dropdown from '../../common/inputs/dropdown/Dropdown';
import ProOnly from '../../common/pro_only/ProOnly';
import {TimerContext} from '../Timer';
import {setSetting} from '../../../db/settings/update';
import {useSettings} from '../../../util/hooks/useSettings';
import {useMe} from '../../../util/hooks/useMe';
import QuickStats from '../../modules/quick_stats/QuickStats';

interface Props {
	index: number;
	moduleType?: TimerModuleType;
	customOptions?: TimerCustomModuleOptions;
}

export default function TimerModule(props: Props) {
	const {index, moduleType, customOptions} = props;

	const me = useMe();
	const context = useContext(TimerContext);
	const {scramble, cubeType, solvesFilter} = context;

	const timerModules = useSettings('timer_modules');

	if (typeof moduleType !== 'string' && !customOptions) {
		return <div className="">{moduleType}</div>;
	}

	function selectVisual(newModuleType: TimerModuleType) {
		const newTimerModules = [...timerModules];
		if (newTimerModules.length <= index) {
			newTimerModules.push(newModuleType);
		} else {
			newTimerModules[index] = newModuleType;
		}
		setSetting('timer_modules', newTimerModules);
	}

	const moduleMap: Record<TimerModuleType, FooterModuleData> = {
		[TimerModuleType.HISTORY]: {
			module: <History filterOptions={solvesFilter} hotKeysEnabled />,
			proOnly: false,
		},
		[TimerModuleType.LAST_SOLVE]: {
			module: <LastSolve filterOptions={solvesFilter} />,
			proOnly: false,
		},
		[TimerModuleType.STATS]: {
			module: <QuickStats filterOptions={solvesFilter} />,
			proOnly: false,
		},
		[TimerModuleType.SCRAMBLE]: {
			module: <Scramble cubeType={cubeType} scramble={scramble} />,
			proOnly: false,
		},
		[TimerModuleType.SOLVE_GRAPH]: {
			module: <TimeChart filterOptions={solvesFilter} />,
			proOnly: false,
		},
		[TimerModuleType.TIME_DISTRO]: {
			module: <TimeDistro filterOptions={solvesFilter} />,
			proOnly: false,
		},
		[TimerModuleType.CONSISTENCY]: {
			module: <SolvesPerDay dummy={!me?.is_pro} filterOptions={solvesFilter} days={14} />,
			proOnly: true,
		},
		[TimerModuleType.NONE]: {
			module: null,
			proOnly: false,
		},
		...customOptions?.additionalDropdownTypes,
	};

	const moduleDropdownOptions: TimerModuleDropdownOptions[] = customOptions?.dropdownOptions || [
		{label: 'Solves', value: TimerModuleType.HISTORY},
		{label: 'Stats', value: TimerModuleType.STATS},
		{label: 'Last Solve', value: TimerModuleType.LAST_SOLVE},
		{label: 'Scramble', value: TimerModuleType.SCRAMBLE},
		{label: 'Consistency', value: TimerModuleType.CONSISTENCY},
		{label: 'Time Graph', value: TimerModuleType.SOLVE_GRAPH},
		{label: 'Time Distribution', value: TimerModuleType.TIME_DISTRO},
		{label: 'None', value: TimerModuleType.NONE},
	];

	const currentModuleName = moduleDropdownOptions.find((option) => option.value === moduleType)?.label;

	let visual: FooterModuleData;
	if (customOptions?.customBody) {
		visual = customOptions.customBody(context);
	} else {
		const visualType = customOptions?.moduleType || snakeCase(moduleType);
		visual = moduleMap[visualType];
	}

	let dropdown: ReactNode = (
		<div className="absolute z-40 opacity-0 group-hover:opacity-100">
			<Dropdown
				openLeft
				noMargin
				dropdownButtonProps={{
					primary: true,
					glow: true,
				}}
				dropdownMaxHeight={200}
				icon={<CaretDown />}
				text={currentModuleName}
				options={moduleDropdownOptions.map((option) => ({
					text: option.label,
					onClick: () => selectVisual(option.value),
				}))}
			/>
		</div>
	);

	if (customOptions?.hideAllOptions) {
		dropdown = null;
	}

	const wrapperClass = ['group', 'h-full', 'w-full', 'p-3', 'overflow-hidden'];
	if (index % 2 !== 0) {
		wrapperClass.push('rounded-lg', 'border-4', 'border-tmo-background/10', 'bg-tm-module/10');
	}

	return (
		<div className={wrapperClass.join(' ')}>
			{dropdown}
			<div className="h-full w-full">
				<ProOnly ignore={!visual.proOnly}>{visual.module}</ProOnly>
			</div>
		</div>
	);
}
