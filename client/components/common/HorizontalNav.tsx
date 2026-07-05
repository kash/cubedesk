import Button from '@/components/common/Button';
import InputLegend from '@/components/common/inputs/input/InputLegend';
import React, {ReactNode, useEffect, useState} from 'react';

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

	const [tabs, setTabs] = useState<HorizontalNavTab[]>([]);
	const [selectedTab, setSelectedTab] = useState<HorizontalNavTab | null>(null);

	useEffect(() => {
		setTabs(props.tabs);

		if (props.tabId) {
			for (const tab of props.tabs) {
				if (tab.id === props.tabId) {
					setSelectedTab(tab);
					break;
				}
			}
		} else if (props.tab) {
			setSelectedTab(props.tab);
		} else {
			setSelectedTab(props.tabs[0]);
		}
	}, [props.tabs, props.tab, props.tabId]);

	function clickTab(tab) {
		setSelectedTab(tab);

		if (onChange) {
			onChange(tab.id, tab);
		}
	}

	const output: ReactNode[] = [];

	for (const tab of tabs) {
		const selected = selectedTab?.id === tab.id;
		const unselected = !selected && showBackgroundForUnselectedTabs;

		if (tab.skip) {
			continue;
		}

		output.push(
			<Button
				to={tab.link}
				key={tab.id}
				type="button"
				gray={unselected}
				large
				primary={selected}
				glow={selected}
				text={tab.value}
				onClick={() => clickTab(tab)}
			/>,
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
