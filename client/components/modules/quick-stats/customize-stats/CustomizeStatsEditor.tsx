import {updateStatsModuleBlock} from '@/actions/stats';
import Checkbox from '@/components/common/Checkbox';
import InputLegend from '@/components/common/inputs/input/InputLegend';
import CustomizeStatsColor from '@/components/modules/quick-stats/customize-stats/CustomizeStatsColor';
import {
	getStatsBlockDescription,
	saveStatsModuleBlocks,
} from '@/components/modules/quick-stats/util';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Field, FieldDescription, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {ToggleGroup, ToggleGroupItem} from '@/components/ui/toggle-group';
import colorPalette, {ColorName} from '@/shared/colors';
import {StatsModuleBlock} from '@/types/stats-module';
import {useToggle} from '@/util/hooks/useToggle';
import {Check, Trash} from 'phosphor-react';
import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

interface Props {
	hideRemoveButton?: boolean;
	removeStatsBlock: (index: number) => void;
	index: number;
	stat: StatsModuleBlock;
}

export default function CustomizeStatsEditor(props: Props) {
	const fieldId = React.useId();

	const {stat, index, removeStatsBlock, hideRemoveButton} = props;

	const effectiveAverageCountStr = String(
		typeof stat?.averageCount === 'number' ? Math.max(stat.averageCount, 0) : 50,
	);

	const dispatch = useDispatch();
	const currentIndex = useRef<number>(null);
	const saveStatusTimer = useRef<NodeJS.Timeout | undefined>(undefined);
	const [averageAll, setAverageAll] = useState<boolean>(effectiveAverageCountStr === '0');
	const [savedStatus, setSavedStatus] = useState<null | 'saved' | 'saving'>();
	const [error, setError] = useState<string | null>(null);
	const colorNames = Object.keys(colorPalette) as ColorName[];
	const [statType, setStatType] = useState(stat.statType);
	const [sortBy, setSortBy] = useState(stat.sortBy);
	const [session, toggleSession] = useToggle(stat.session);
	const [colorName, setColorName] = useState<ColorName>(stat.colorName || 'text');
	const [averageCount, setAverageCount] = useState<string>(effectiveAverageCountStr);
	const [averageCountInt, setAverageCountInt] = useState<number>(
		parseInt(effectiveAverageCountStr, 10),
	);

	const description = getStatsBlockDescription({
		...stat,
		statType,
		sortBy,
		session,
		averageCount: averageCountInt,
	});

	useEffect(() => {
		if (currentIndex.current !== index) {
			currentIndex.current = index;
			return;
		}

		setSavedStatus('saving');
		if (saveStatusTimer?.current) {
			clearTimeout(saveStatusTimer.current);
		}

		const updatedStat: StatsModuleBlock = {
			colorName,
			statType,
			sortBy,
			session,
			averageCount: Math.max(0, averageCountInt),
		};
		dispatch(updateStatsModuleBlock(index, updatedStat));
		let active = true;
		saveStatsModuleBlocks()
			.then(() => {
				if (!active) return;
				setSavedStatus('saved');
				saveStatusTimer.current = setTimeout(() => setSavedStatus(null), 2000);
			})
			.catch(() => {
				if (!active) return;
				setSavedStatus(null);
				setError('Could not save to server. Please try again later.');
			});
		return () => {
			active = false;
			clearTimeout(saveStatusTimer.current);
		};
	}, [colorName, index, session, statType, averageCountInt, sortBy]);

	function selectStatType(val: string) {
		setStatType(val as any);

		if (val !== 'average' && sortBy === 'current') {
			setSortBy('best');
		}
	}

	function toggleSetAverageAll() {
		const newAverageAll = !averageAll;

		if (newAverageAll) {
			setAverageCount('0');
			setAverageCountInt(0);
			setSortBy('current');
		} else {
			setAverageCount('5');
			setAverageCountInt(5);
		}

		setAverageAll(newAverageAll);
	}

	function blurAverageCount() {
		setError(null);

		const avgInt = Number(averageCount);
		if (!Number.isInteger(avgInt) || avgInt < 3 || avgInt > 10000) {
			setError('Changes not saved. Average count must be a number between 3 and 10,000.');
			return;
		}
		setAverageCountInt(avgInt);
	}

	function onSelectColor(colorName: ColorName) {
		if (!colorNames.includes(colorName)) {
			setError('Changes not saved. Invalid color name.');
			return;
		}

		setColorName(colorName);
	}

	function selectPresetAverageOf(num: number) {
		setError(null);
		setAverageCount(String(num));
		setAverageCountInt(num);
	}

	let averageCountDiv: ReactNode = null;
	if (statType === 'average') {
		averageCountDiv = (
			<EditorSection>
				<div className="border-tmo-module/10 bg-tmo-module/[0.025] rounded-lg border p-3">
					<Checkbox
						text="Overall average"
						checked={averageAll}
						onCheckedChange={toggleSetAverageAll}
					/>
					{!averageAll && (
						<div className="mt-3">
							<Field className="mb-2">
								<FieldLabel htmlFor={`${fieldId}-1`}>
									{'Number of solves'}
								</FieldLabel>
								<Input
									value={averageCount}
									type="number"
									onChange={(e) => setAverageCount(e.target.value)}
									onBlur={blurAverageCount}
									id={`${fieldId}-1`}
									aria-describedby={`${fieldId}-1-description`}
								/>
								<FieldDescription id={`${fieldId}-1-description`}>
									{'Choose 3–10,000 solves'}
								</FieldDescription>
							</Field>
							<ToggleGroup
								type="single"
								value={String(averageCountInt)}
								aria-label="Average presets"
								variant="outline"
								size="sm"
								className="mt-2 flex-wrap"
								onValueChange={(value) => {
									if (value) selectPresetAverageOf(Number(value));
								}}
							>
								{[5, 10, 12, 25, 50, 100, 250, 500, 1000].map((count) => (
									<ToggleGroupItem key={count} value={String(count)}>
										{count.toLocaleString()}
									</ToggleGroupItem>
								))}
							</ToggleGroup>
						</div>
					)}
				</div>
			</EditorSection>
		);
	}

	const colorOptions = colorNames.map((cn) => (
		<CustomizeStatsColor
			selected={colorName === cn}
			key={`colorName-${cn}`}
			colorName={cn}
			onSelectColor={onSelectColor}
		/>
	));

	let saveDiv: ReactNode = null;
	if (savedStatus === 'saved') {
		saveDiv = (
			<Badge size="sm" variant="success" role="status">
				Saved
				<Check weight="bold" />
			</Badge>
		);
	} else if (savedStatus === 'saving') {
		saveDiv = (
			<Badge size="sm" variant="warning" role="status">
				Saving...
			</Badge>
		);
	}

	return (
		<div className="relative">
			<div className="flex flex-col gap-4">
				<div className="border-tmo-module/10 border-b pb-4">
					<div className="mb-1 flex min-h-5 items-center justify-between gap-2">
						<span className="text-text/45 text-xs">Editing block {index + 1}</span>
						<span className="text-xs" role="status">
							{saveDiv}
						</span>
					</div>
					<h3 className="m-0 text-lg font-semibold capitalize">{description}</h3>
					{error && <p className="text-error/80 mt-2">{error}</p>}
				</div>
				<EditorSection removePaddingTop>
					<StatChoice
						showBackgroundForUnselectedTabs
						legend="Stat type"
						tabId={statType}
						onChange={(val) => selectStatType(val)}
						tabs={[
							{id: 'single', value: 'Single'},
							{id: 'average', value: 'Average'},
						]}
					/>
				</EditorSection>
				{averageCountDiv}
				<EditorSection>
					<StatChoice
						showBackgroundForUnselectedTabs
						legend="Stat result"
						tabId={sortBy}
						onChange={(val) => setSortBy(val as any)}
						tabs={[
							{id: 'current', value: 'Current', skip: statType !== 'average'},
							{id: 'best', value: 'Best'},
							{id: 'worst', value: 'Worst'},
						]}
					/>
				</EditorSection>
				<EditorSection>
					<InputLegend text="Options" />
					<Checkbox
						text="Session solves only"
						checked={session}
						onCheckedChange={() => toggleSession()}
					/>
				</EditorSection>
				<EditorSection>
					<InputLegend text="Stat color" />
					<div className="flex flex-row flex-wrap gap-2.5 pt-1">{colorOptions}</div>
				</EditorSection>
				<div className="border-tmo-module/10 border-t pt-3">
					{hideRemoveButton ? null : (
						<Button
							variant="destructive"
							onClick={(e) => {
								e.stopPropagation();
								e.preventDefault();
								removeStatsBlock(index);
							}}
							size="sm"
						>
							{<Trash size={14} />}
							{'Remove block'}
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}

function EditorSection({children}: {children: ReactNode; removePaddingTop?: boolean}) {
	return <div>{children}</div>;
}

function StatChoice({
	legend,
	tabId,
	tabs,
	onChange,
}: {
	legend: string;
	tabId: string;
	tabs: {id: string; value: string; skip?: boolean}[];
	onChange: (value: string) => void;
	showBackgroundForUnselectedTabs?: boolean;
}) {
	return (
		<fieldset>
			<Label asChild className="mb-2">
				<legend>{legend}</legend>
			</Label>
			<ToggleGroup
				type="single"
				value={tabId}
				aria-label={legend}
				size="sm"
				className="border-tmo-module/10 bg-tmo-module/[0.025] w-full flex-wrap rounded-lg border p-1"
				onValueChange={(value) => {
					if (value) onChange(value);
				}}
			>
				{tabs
					.filter((tab) => !tab.skip)
					.map((tab) => (
						<ToggleGroupItem key={tab.id} value={tab.id} className="flex-1">
							{tab.value}
						</ToggleGroupItem>
					))}
			</ToggleGroup>
		</fieldset>
	);
}
