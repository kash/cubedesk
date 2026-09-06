import {Button} from '@/components/ui/button';
import {getSetting} from '@/db/settings/query';
import {setSetting} from '@/db/settings/update';
import {cn} from '@/util/cn';
import {APP_THEME_PRESETS, PresetThemeValues} from '@/util/themes/theme_consts';
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
		<Button
			variant="outline"
			aria-pressed={selected}
			className={cn('h-14 w-full min-w-0 justify-start gap-3 rounded-lg px-4', {
				'border-primary bg-primary/5': selected,
			})}
			onClick={selectTheme}
		>
			<span
				aria-hidden="true"
				className="border-tmo-background/20 relative h-6 w-8 shrink-0 overflow-hidden rounded border"
			>
				<span className="absolute top-1/2 left-[57%] flex -translate-x-1/2 -translate-y-1/2 rotate-[25deg] flex-row items-center">
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
				</span>
			</span>
			<span className="truncate text-sm font-medium">{theme.name}</span>
		</Button>
	);
}
