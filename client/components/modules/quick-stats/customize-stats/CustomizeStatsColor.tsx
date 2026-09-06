import {Button} from '@/components/ui/button';
import {ColorName} from '@/shared/colors';
import {cn} from '@/util/cn';
import {useColor} from '@/util/hooks/useTheme';
import React from 'react';

interface Props {
	selected?: boolean;
	colorName: ColorName;
	onSelectColor: (colorName: ColorName) => void;
}

export default function CustomizeStatsColor(props: Props) {
	const {onSelectColor, selected, colorName} = props;
	const colorHex = useColor(colorName, 'background_color');

	const style = {
		backgroundColor: colorHex.hex,
	};

	return (
		<Button
			variant="ghost"
			type="button"
			aria-label={`${colorName.replaceAll('_', ' ')} color`}
			aria-pressed={Boolean(selected)}
			title={colorName.replaceAll('_', ' ')}
			style={style}
			onClick={() => onSelectColor(colorName)}
			className={cn(
				'h-auto p-0 font-normal whitespace-normal hover:bg-transparent',
				cn(
					'border-tmo-module/20 ring-offset-module focus-visible:ring-text h-6 w-6 rounded-full border ring-offset-2 transition-transform hover:scale-110 focus-visible:ring-2',
					{
						'ring-text/80 ring-2': selected,
					},
				),
			)}
		/>
	);
}
