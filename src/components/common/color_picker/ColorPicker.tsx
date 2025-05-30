import {Button} from '@/components/ui/button';
import React, {useCallback, useEffect} from 'react';
import './ColorPicker.scss';
import {ColorPicker as ColorPalette, toColor, useColor} from 'react-color-palette';
import {Color} from 'react-color-palette/lib/interfaces/Color.interface';
import {useWindowClickAwayListener} from '../../../lib/util/hooks/useListener';
import {useTheme} from '../../../lib/util/hooks/useTheme';
import {useToggle} from '../../../lib/util/hooks/useToggle';
import {
	getAnyColorStringAsRawRgbString,
	getAnyColorStringAsRgb,
} from '../../../lib/util/themes/theme_util';
import block from '../../../styles/bem';

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

	const colorChange = useCallback((c: Color) => {
		setColor(c);
	}, [setColor]);

	let resetButton = null;
	if (resetToRgb && !hideReset) {
		const isHidden = resetToRgb.replace(/\s/g, '') === getAnyColorStringAsRawRgbString(color);
		if (!isHidden) {
			resetButton = (
				<Button
					variant="outline"
					className="border-orange-500 text-orange-500 hover:bg-orange-50"
					onClick={() => {
						const newColor = toColor('rgb', getAnyColorStringAsRgb(resetToRgb));
						setColor(newColor);
						onChange(getAnyColorStringAsRawRgbString(newColor));
					}}
				>
					Reset
				</Button>
			);
		}
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
