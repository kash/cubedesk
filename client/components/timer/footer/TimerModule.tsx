import SelectField from '@/components/common/inputs/SelectField';
import History from '@/components/modules/history/History';
import LastSolve from '@/components/modules/last-solve/LastSolve';
import CustomizeStats from '@/components/modules/quick-stats/customize-stats/CustomizeStats';
import QuickStats from '@/components/modules/quick-stats/QuickStats';
import Scramble from '@/components/modules/scramble/ScrambleVisual';
import SolvesPerDay from '@/components/modules/solves-per-day/SolvesPerDay';
import TimeChart from '@/components/modules/time-chart/TimeChart';
import TimeDistro from '@/components/modules/time-distro/TimeDistro';
import {TimerModuleDropdownOptions, TimerModuleType} from '@/components/timer/@types/enums';
import {FooterModuleData, TimerCustomModuleOptions} from '@/components/timer/@types/interfaces';
import {resolveModuleVisual} from '@/components/timer/footer/helpers/resolveModuleVisual';
import {useTimerContext} from '@/components/timer/Timer';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogHeader} from '@/components/ui/dialog';
import {setSetting} from '@/db/settings/update';
import {cn} from '@/util/cn';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useSettings} from '@/util/hooks/useSettings';
import {snakeCase} from 'change-case';
import {Gear} from 'phosphor-react';
import React, {ReactNode} from 'react';

interface Props {
	index: number;
	moduleType?: TimerModuleType;
	customOptions?: TimerCustomModuleOptions;
}

export default function TimerModule(props: Props) {
	const [customizeStatsDialog, setCustomizeStatsDialog] = React.useState<{
		props: React.ComponentProps<typeof CustomizeStats>;
		title: React.ReactNode;
		description: React.ReactNode;
		width: number;
	} | null>(null);

	const {index, moduleType, customOptions} = props;

	const context = useTimerContext();
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

	const moduleMap: Partial<Record<TimerModuleType, FooterModuleData>> = {
		[TimerModuleType.HISTORY]: {
			module: <History filterOptions={solvesFilter} hotKeysEnabled />,
		},
		[TimerModuleType.LAST_SOLVE]: {
			module: <LastSolve filterOptions={solvesFilter} />,
		},
		[TimerModuleType.STATS]: {
			module: <QuickStats filterOptions={solvesFilter} />,
			actions: (
				<Button
					type="button"
					aria-label="Customize Stats"
					title="Customize Stats"
					variant="ghost"
					size="icon-lg"
					className="border-tmo-module/10 rounded-l-none border-l"
					onClick={() =>
						setCustomizeStatsDialog({
							props: {filterOptions: solvesFilter},
							title: 'Customize Stats',
							description: 'Choose a block in the preview, then make it yours.',
							width: 960,
						})
					}
				>
					<Gear size={18} />
				</Button>
			),
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

	const currentModuleName = moduleDropdownOptions.find(
		(option) => option.value === moduleType,
	)?.label;

	let visual: FooterModuleData;
	if (customOptions?.customBody) {
		visual = customOptions.customBody(context);
	} else {
		const visualType = customOptions?.moduleType || snakeCase(moduleType ?? '');
		visual = resolveModuleVisual(moduleMap, visualType, {module: null});
	}

	let dropdown: ReactNode = (
		<div
			className={cn(
				'border-tmo-module/10 bg-module absolute top-0 left-1/2 z-40 flex -translate-x-1/2 items-center rounded-b-md border border-t-0 opacity-0 shadow-lg transition-opacity duration-150 ease-in-out group-hover:opacity-100 focus-within:opacity-100',
				{'opacity-100': mobileMode},
			)}
		>
			<SelectField
				label="Timer module"
				value={moduleType || ''}
				text={currentModuleName}
				onValueChange={(value) => selectVisual(value as TimerModuleType)}
				align="center"
				triggerProps={{className: 'h-10 rounded-none border-0 px-4 shadow-none'}}
				maxHeight={240}
				options={moduleDropdownOptions.map((option) => ({
					value: option.value,
					text: option.label,
				}))}
			/>
			{visual.actions}
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
		'p-2.5',
	];
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
		<>
			<div className={wrapperClass.join(' ')}>
				{dropdown}
				<div className="h-full w-full">{visual.module}</div>
			</div>
			<Dialog
				open={customizeStatsDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setCustomizeStatsDialog(null);
					}
				}}
			>
				{customizeStatsDialog && (
					<DialogContent width={customizeStatsDialog.width}>
						<DialogHeader
							title={customizeStatsDialog.title}
							description={customizeStatsDialog.description}
						/>
						<CustomizeStats {...customizeStatsDialog.props} />
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
