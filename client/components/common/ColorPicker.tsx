import React, {useEffect, ReactNode} from 'react';
import {ColorPicker as ColorPalette, toColor, useColor, type Color} from 'react-color-palette';
import {useToggle} from '@/util/hooks/useToggle';
import {useWindowClickAwayListener} from '@/util/hooks/useListener';
import Button from '@/components/common/Button';
import {useTheme} from '@/util/hooks/useTheme';
import {getAnyColorStringAsRawRgbString, getAnyColorStringAsRgb} from '@/util/themes/theme_util';
import {cn} from '@/util/cn';

// Used by the click-away listener to detect clicks inside the picker. Not a styling hook.
const ROOT_CLASS = 'cd-common-color-picker';

interface Props {
	openUp?: boolean;
	resetToRgb?: string;
	openLeft?: boolean;
	name?: string;
	hideReset?: boolean;
	onChange: (colorRgb: string) => void;
	selectedColorHex: string;
}

export default function ColorPicker(props: Props) {
	const {name, hideReset, onChange, openUp, openLeft, resetToRgb} = props;
	const selectedColorHex = props.selectedColorHex || '#000000';

	const backgroundTheme = useTheme('background_color');
	const [showPicker, toggleShowPicker] = useToggle(false);
	const [color, setColor] = useColor('rgb', getAnyColorStringAsRgb(selectedColorHex));

	useEffect(() => {
		const newColor = toColor('rgb', getAnyColorStringAsRgb(selectedColorHex));
		setColor(newColor);
	}, [selectedColorHex]);

	useWindowClickAwayListener(ROOT_CLASS, () => {
		if (showPicker) {
			// Close picker and update parent
			onChange(getAnyColorStringAsRawRgbString(color));
			toggleShowPicker();
		}
	});

	function colorChange(c: Color) {
		setColor(c);
	}

	let resetButton: ReactNode = null;
	if (resetToRgb && !hideReset) {
		resetButton = (
			<Button
				hidden={resetToRgb.replace(/\s/g, '') === getAnyColorStringAsRawRgbString(color)}
				text="Reset"
				warning
				flat
				onClick={() => {
					const newColor = toColor('rgb', getAnyColorStringAsRgb(resetToRgb));
					setColor(newColor);
					onChange(getAnyColorStringAsRawRgbString(newColor));
				}}
			/>
		);
	}

	return (
		<div className={cn(ROOT_CLASS, 'relative flex flex-col items-end')}>
			<button
				className="border-button/90 bg-button/40 hover:bg-tmo-background/[0.07] flex w-full flex-row items-center rounded border-4 px-4 py-2.5"
				onClick={() => toggleShowPicker()}
			>
				<span
					className="border-tmo-background/30 mr-2.5 inline-block h-6 w-6 rounded-full border-2"
					style={{
						backgroundColor: color.hex,
					}}
				/>
				<p className="text-text m-0 text-lg font-bold transition-all duration-100 ease-in-out">
					{name || 'Select color'}
				</p>
			</button>
			{resetButton}
			<div
				className={cn(
					'absolute top-[calc(100%+5px)] right-0 z-1000 block transition-all duration-100 ease-in-out [&_input]:max-w-none',
					openUp && 'top-auto bottom-[calc(100%+5px)]',
					openLeft && 'right-auto left-0',
					!showPicker && 'hidden',
				)}
			>
				<ColorPalette
					width={350}
					height={150}
					color={color}
					onChange={colorChange}
					hideRGB
					dark={backgroundTheme.isDark}
					hideHSV
				/>
			</div>
		</div>
	);
}
