import InputLegend from '@/components/common/inputs/input/InputLegend';
import {Button} from '@/components/ui/button';
import {ToggleGroup, ToggleGroupItem} from '@/components/ui/toggle-group';
import React, {ReactNode, useState} from 'react';
import {Link} from 'react-router-dom';

export interface HorizontalNavTab {
	id: string;
	value: string;
	link?: string;
	skip?: boolean;
}

interface Props {
	tabs: HorizontalNavTab[];
	legend?: string;
	showBackgroundForUnselectedTabs?: boolean;
	onChange?: (id: string, tab: HorizontalNavTab) => void;
	tab?: HorizontalNavTab; // Selected tab
	tabId?: string; // Selected tab ID. Takes precedence over tab
}

export default function HorizontalNav(props: Props) {
	const {onChange, legend, showBackgroundForUnselectedTabs} = props;

	const {tabs} = props;
	const [localTabId, setLocalTabId] = useState<string | undefined>(undefined);
	const selectedId =
		props.tabId ?? props.tab?.id ?? localTabId ?? tabs.find((tab) => !tab.skip)?.id;

	function clickTab(tab: HorizontalNavTab) {
		setLocalTabId(tab.id);

		if (onChange) {
			onChange(tab.id, tab);
		}
	}

	if (!tabs.some((tab) => tab.link)) {
		return (
			<div className="space-y-2">
				{legend && <InputLegend text={legend} />}
				<ToggleGroup
					type="single"
					value={selectedId}
					aria-label={legend || 'Options'}
					variant={showBackgroundForUnselectedTabs ? 'outline' : 'default'}
					className="flex-wrap"
					onValueChange={(id) => {
						const next = tabs.find((tab) => tab.id === id && !tab.skip);
						if (next) clickTab(next);
					}}
				>
					{tabs
						.filter((tab) => !tab.skip)
						.map((tab) => (
							<ToggleGroupItem key={tab.id} value={tab.id}>
								{tab.value}
							</ToggleGroupItem>
						))}
				</ToggleGroup>
			</div>
		);
	}

	const output: ReactNode[] = [];

	for (const tab of tabs) {
		const selected = selectedId === tab.id;
		const unselected = !selected && showBackgroundForUnselectedTabs;

		if (tab.skip) {
			continue;
		}

		output.push(
			<Button
				variant={selected ? 'default' : unselected ? 'secondary' : 'ghost'}
				key={tab.id}
				type="button"
				onClick={() => clickTab(tab)}
				aria-pressed={!tab.link ? selected : undefined}
				asChild={!!tab.link}
			>
				{tab.link ? (
					<Link to={tab.link} aria-current={selected ? 'page' : undefined}>
						{tab.value}
					</Link>
				) : (
					tab.value
				)}
			</Button>,
		);
	}

	let legendDiv: ReactNode = null;
	if (legend) {
		legendDiv = <InputLegend text={legend} />;
	}

	return (
		<div>
			{legendDiv}
			<div className="flex flex-row flex-wrap gap-x-3.25">{output}</div>
		</div>
	);
}
