import {Button} from '@/components/ui/button';
import './HorizontalNav.scss';
import block from '@/styles/bem';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import InputLegend from '../inputs/input/input_legend/InputLegend';

const b = block('common-horizontal-nav');

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

	const output = [];

	for (const tab of tabs) {
		const selected = selectedTab.id === tab.id;
		const unselected = !selected && showBackgroundForUnselectedTabs;

		if (tab.skip) {
			continue;
		}

		if (tab.link) {
			output.push(
				<Link key={tab.id} href={tab.link}>
					<Button
						type="button"
						variant={selected ? 'default' : unselected ? 'secondary' : 'ghost'}
						size="lg"
						className={selected ? 'shadow-lg' : ''}
						onClick={() => clickTab(tab)}
					>
						{tab.value}
					</Button>
				</Link>,
			);
		} else {
			output.push(
				<Button
					key={tab.id}
					type="button"
					variant={selected ? 'default' : unselected ? 'secondary' : 'ghost'}
					size="lg"
					className={selected ? 'shadow-lg' : ''}
					onClick={() => clickTab(tab)}
				>
					{tab.value}
				</Button>,
			);
		}
	}

	let legendDiv = null;
	if (legend) {
		legendDiv = <InputLegend text={legend} />;
	}

	return (
		<div className={b()}>
			{legendDiv}
			<div className={b('body')}>{output}</div>
		</div>
	);
}
