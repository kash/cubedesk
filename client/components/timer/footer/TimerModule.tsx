import Dropdown from '@/components/common/inputs/dropdown/Dropdown';
import History from '@/components/modules/history/History';
import LastSolve from '@/components/modules/last-solve/LastSolve';
import QuickStats from '@/components/modules/quick-stats/QuickStats';
import Scramble from '@/components/modules/scramble/ScrambleVisual';
import SolvesPerDay from '@/components/modules/solves-per-day/SolvesPerDay';
import TimeChart from '@/components/modules/time-chart/TimeChart';
import TimeDistro from '@/components/modules/time-distro/TimeDistro';
import {TimerModuleDropdownOptions, TimerModuleType} from '@/components/timer/@types/enums';
import {FooterModuleData, TimerCustomModuleOptions} from '@/components/timer/@types/interfaces';
import {TimerContext} from '@/components/timer/Timer';
import {setSetting} from '@/db/settings/update';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useSettings} from '@/util/hooks/useSettings';
import {snakeCase} from 'change-case';
import classNames from 'classnames';
import {CaretDown} from 'phosphor-react';
import React, {ReactNode, useContext} from 'react';

interface Props {
	index: number;
	moduleType?: TimerModuleType;
	customOptions?: TimerCustomModuleOptions;
}

export default function TimerModule(props: Props) {
	const {index, moduleType, customOptions} = props;

	const context = useContext(TimerContext);
	const {scramble, cubeType, solvesFilter} = context;
	const mobileMode = useGeneral('mobile_mode');

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
		},
		[TimerModuleType.LAST_SOLVE]: {
			module: <LastSolve filterOptions={solvesFilter} />,
		},
		[TimerModuleType.STATS]: {
			module: <QuickStats filterOptions={solvesFilter} />,
		},
		[TimerModuleType.SCRAMBLE]: {
			module: <Scramble cubeType={cubeType} scramble={scramble} />,
		},
		[TimerModuleType.SOLVE_GRAPH]: {
			module: <TimeChart filterOptions={solvesFilter} />,
		},
		[TimerModuleType.TIME_DISTRO]: {
			module: <TimeDistro filterOptions={solvesFilter} />,
		},
		[TimerModuleType.CONSISTENCY]: {
			module: <SolvesPerDay filterOptions={solvesFilter} days={14} />,
		},
		[TimerModuleType.NONE]: {
			module: null,
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
		<div className={classNames('absolute z-40 opacity-0 group-hover:opacity-100', mobileMode && 'left-0 top-[-40px] !opacity-100')}>
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

	const wrapperClass = [
		'group',
		'relative',
		'box-border',
		'h-full',
		'w-full',
		'overflow-hidden',
		'border-[5px]',
		'border-transparent',
		'p-2.5',
	];
	if (index % 2 !== 0) {
		wrapperClass.push('rounded-lg', 'border-4', 'border-tmo-background/10', 'bg-tm-module/10');
	}
	if (mobileMode) {
		wrapperClass.push('!h-[270px]', '!overflow-visible');
		if (index > 0) {
			wrapperClass.push('hidden');
		}
	}
	if (context.timerLayout === 'left' || context.timerLayout === 'right') {
		if (index === 2) {
			wrapperClass.push('[@media(max-height:850px)]:!hidden');
		} else if (index === 1) {
			wrapperClass.push('[@media(max-height:600px)]:!hidden');
		}
	}

	return (
		<div className={wrapperClass.join(' ')}>
			{dropdown}
			<div className="h-full w-full">{visual.module}</div>
		</div>
	);
}
