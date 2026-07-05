import {getSetting} from '@/db/settings/query';
import {setSetting} from '@/db/settings/update';
import {APP_THEME_PRESETS, PresetThemeValues} from '@/util/themes/theme_consts';
import classNames from 'classnames';
import jsonStr from 'json-stable-stringify';
import React from 'react';

interface Props {
	theme: keyof PresetThemeValues;
}

export default function ThemeOption(props: Props) {
	const theme = APP_THEME_PRESETS[props.theme];
	const selected = jsonStr(theme.values) === getCurrentTheme();

	function getCurrentTheme() {
		const currentVals = {};
		for (const key of Object.keys(theme.values)) {
			currentVals[key] = getSetting(key as any);
		}

		return jsonStr(currentVals);
	}

	function selectTheme() {
		for (const key of Object.keys(theme.values)) {
			const col = theme.values[key];
			setSetting(key as any, col);
		}
	}

	return (
		<button
			className={classNames(
				'border-button/90 bg-button/40 relative mr-3 mb-3 flex w-full flex-row items-center rounded-[30px] border-4 px-[30px] py-3 hover:opacity-80',
				selected && 'border-primary',
			)}
			onClick={selectTheme}
		>
			<div className="border-tmo-background/30 relative mr-2.5 table h-[30px] w-10 overflow-hidden rounded-[5px] border-2">
				<div className="absolute top-1/2 left-[57%] flex -translate-x-1/2 -translate-y-1/2 rotate-[25deg] flex-row items-center">
					<span
						className="box-border table h-[60px] w-[60px]"
						style={{
							backgroundColor: 'rgb(' + theme.values.background_color + ')',
							border: '3px solid rgb(' + theme.values.text_color + ')',
						}}
					/>
					<span
						className="box-border table h-[60px] w-[60px]"
						style={{
							backgroundColor: 'rgb(' + theme.values.module_color + ')',
						}}
					/>
				</div>
			</div>
			<p className="text-text m-0 text-[1.2rem] font-bold opacity-100 transition-all duration-100 ease-in-out">
				{theme.name}
			</p>
		</button>
	);
}
