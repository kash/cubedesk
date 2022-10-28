import React, {useEffect} from 'react';
import {ColorPicker as ColorPalette, toColor, useColor} from 'react-color-palette';
import './ColorPicker.scss';
import block from '../../../styles/bem';
import {Color} from 'react-color-palette/lib/interfaces/Color.interface';
import {useToggle} from '../../../util/hooks/useToggle';
import {useWindowClickAwayListener} from '../../../util/hooks/useListener';
import Button from '../button/Button';
import {useTheme} from '../../../util/hooks/useTheme';
import {getAnyColorStringAsRawRgbString, getAnyColorStringAsRgb} from '../../../util/themes/theme_util';

const b = block('common-color-picker');

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

	useWindowClickAwayListener(b(), () => {
		if (showPicker) {
			// Close picker and update parent
			onChange(getAnyColorStringAsRawRgbString(color));
			toggleShowPicker();
		}
	});

	function colorChange(c: Color) {
		setColor(c);
	}

	let resetButton = null;
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
		<div className={b()}>
			<button className={b('toggle')} onClick={() => toggleShowPicker()}>
				<span
					className={b('color')}
					style={{
						backgroundColor: color.hex,
					}}
				/>
				<p>{name || 'Select color'}</p>
			</button>
			{resetButton}
			<div className={b('palette', {hidden: !showPicker, up: openUp, left: openLeft})}>
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
