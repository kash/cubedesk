import React from 'react';
import './Settings.scss';
import block from '../../../../styles/bem';
import Feature from '../../common/feature/Feature';

const b = block('landing-settings');

type SettingOption = {
	title: string;
	value: string;
};

const settingOptions: SettingOption[] = [
	{title: 'Freeze time', value: '0.2s'},
	{title: 'Hide time when solving cube', value: 'true'},
	{title: 'Require period in entry', value: 'false'},
	{title: 'Confirm delete solves', value: 'false'},
	{title: 'Time decimal points', value: '3'},
	{title: 'Import data from csTimer', value: 'you know it'},
	{title: 'Primary theme color', value: 'green'},
	{title: 'Secondary theme color', value: 'blue'},
];

export default function Settings() {
	const options = [];

	for (let i = 0; i < settingOptions.length; i++) {
		const option = settingOptions[i];
		const opacity = 1 - i / 10;

		options.push(
			<div key={option.title} style={{opacity}} className={b('option')}>
				{option.title}
				<span className={b('default')}>{option.value}</span>
			</div>
		);
	}

	return (
		<Feature
			vertical
			circlesPos="bottomLeft"
			circleCount={4}
			primaryColor="#1e88e5"
			secondaryColor="#0097a7"
			switchText
			title="Customize Everything"
			description="Choose from dozens of options to customize CubeDesk exactly to your liking."
		>
			<div className={b()}>{options}</div>
		</Feature>
	);
}
