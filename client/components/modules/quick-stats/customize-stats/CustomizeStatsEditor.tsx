import {useTranslation} from 'react-i18next';
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
	const {t, i18n} = useTranslation();
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

	const description = getStatsBlockDescription(
		{
			...stat,
			statType,
			sortBy,
			session,
			averageCount: averageCountInt,
		},
		{},
		t,
	);

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
				setError(t('stats.saveFailed'));
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
			setError(t('stats.invalidAverageCount'));
			return;
		}
		setAverageCountInt(avgInt);
	}

	function onSelectColor(colorName: ColorName) {
		if (!colorNames.includes(colorName)) {
			setError(t('stats.invalidColorName'));
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
						text={t('stats.overallAverage')}
						checked={averageAll}
						onCheckedChange={toggleSetAverageAll}
					/>
					{!averageAll && (
						<div className="mt-3">
							<Field className="mb-2">
								<FieldLabel htmlFor={`${fieldId}-1`}>
									{t('stats.customize.solveCount')}
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
									{t('stats.customize.solveCountRange')}
								</FieldDescription>
							</Field>
							<ToggleGroup
								type="single"
								value={String(averageCountInt)}
								aria-label={t('stats.averagePresets')}
								variant="outline"
								size="sm"
								className="mt-2 flex-wrap"
								onValueChange={(value) => {
									if (value) selectPresetAverageOf(Number(value));
								}}
							>
								{[5, 10, 12, 25, 50, 100, 250, 500, 1000].map((count) => (
									<ToggleGroupItem key={count} value={String(count)}>
										{count.toLocaleString(i18n.language)}
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
				{t('common.saved')}
				<Check weight="bold" />
			</Badge>
		);
	} else if (savedStatus === 'saving') {
		saveDiv = (
			<Badge size="sm" variant="warning" role="status">
				{t('common.saving')}
			</Badge>
		);
	}

	return (
		<div className="relative">
			<div className="flex flex-col gap-4">
				<div className="border-tmo-module/10 border-b pb-4">
					<div className="mb-1 flex min-h-5 items-center justify-between gap-2">
						<span className="text-text/45 text-xs">
							{t('stats.customize.editingBlock', {number: index + 1})}
						</span>
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
						legend={t('stats.statType')}
						tabId={statType}
						onChange={(val) => selectStatType(val)}
						tabs={[
							{id: 'single', value: t('stats.single')},
							{id: 'average', value: t('stats.average')},
						]}
					/>
				</EditorSection>
				{averageCountDiv}
				<EditorSection>
					<StatChoice
						showBackgroundForUnselectedTabs
						legend={t('stats.statResult')}
						tabId={sortBy}
						onChange={(val) => setSortBy(val as any)}
						tabs={[
							{
								id: 'current',
								value: t('stats.current'),
								skip: statType !== 'average',
							},
							{id: 'best', value: t('stats.best')},
							{id: 'worst', value: t('stats.worst')},
						]}
					/>
				</EditorSection>
				<EditorSection>
					<InputLegend text={t('common.options')} />
					<Checkbox
						text={t('stats.sessionSolvesOnly')}
						checked={session}
						onCheckedChange={() => toggleSession()}
					/>
				</EditorSection>
				<EditorSection>
					<InputLegend text={t('stats.statColor')} />
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
							{t('stats.customize.removeBlock')}
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
