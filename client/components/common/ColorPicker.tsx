import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {cn} from '@/util/cn';
import {useTheme} from '@/util/hooks/useTheme';
import {getAnyColorStringAsRawRgbString, getAnyColorStringAsRgb} from '@/util/themes/theme_util';
import React, {ReactNode, useEffect, useState} from 'react';
import {type Color, ColorPicker as ColorPalette, toColor, useColor} from 'react-color-palette';

interface Props {
	fullWidth?: boolean;
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

	const moduleTheme = useTheme('module_color');
	const [showPicker, setShowPicker] = useState(false);
	const [color, setColor] = useColor('rgb', getAnyColorStringAsRgb(selectedColorHex));

	useEffect(() => {
		const newColor = toColor('rgb', getAnyColorStringAsRgb(selectedColorHex));
		setColor(newColor);
	}, [selectedColorHex, setColor]);

	function changeOpen(open: boolean) {
		setShowPicker(open);
		if (!open) onChange(getAnyColorStringAsRawRgbString(color));
	}

	function colorChange(c: Color) {
		setColor(c);
	}

	let resetButton: ReactNode = null;
	if (resetToRgb && !hideReset) {
		resetButton =
			resetToRgb.replace(/\s/g, '') === getAnyColorStringAsRawRgbString(color) ? null : (
				<Button
					variant="ghost"
					onClick={() => {
						const newColor = toColor('rgb', getAnyColorStringAsRgb(resetToRgb));
						setColor(newColor);
						onChange(getAnyColorStringAsRawRgbString(newColor));
					}}
					size="sm"
				>
					{'Reset'}
				</Button>
			);
	}

	return (
		<div className={cn('flex flex-col items-end', {'w-full min-w-0': props.fullWidth})}>
			<Popover open={showPicker} onOpenChange={changeOpen}>
				<PopoverTrigger asChild>
					<Button
						type="button"
						variant="outline"
						className={cn({'h-11 w-full justify-start': props.fullWidth})}
					>
						<span
							className="border-tmo-background/30 inline-block size-5 shrink-0 rounded-full border"
							style={{
								backgroundColor: color.hex,
							}}
						/>
						<p className="m-0 text-sm font-medium">{name || 'Select color'}</p>
					</Button>
				</PopoverTrigger>
				<PopoverContent
					aria-label={name || 'Select color'}
					align={openLeft ? 'start' : 'end'}
					side={openUp ? 'top' : 'bottom'}
					className="[&_.rcp]:bg-module [&_.rcp]:text-text w-auto overflow-hidden p-0 [&_.rcp]:max-w-full [&_input]:max-w-none"
				>
					<ColorPalette
						width={350}
						height={150}
						color={color}
						onChange={colorChange}
						hideRGB
						dark={moduleTheme.isDark}
						hideHSV
					/>
				</PopoverContent>
			</Popover>
			{resetButton}
		</div>
	);
}
