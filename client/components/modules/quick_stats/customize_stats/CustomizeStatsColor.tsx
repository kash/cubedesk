import React from 'react';
import {useColor} from '../../../../util/hooks/useTheme';
import {ColorName} from '../../../../../shared/colors';

interface Props {
	selected?: boolean;
	colorName: ColorName;
	onSelectColor: (colorHex: string) => void;
}

export default function CustomizeStatsColor(props: Props) {
	const {onSelectColor, selected, colorName} = props;
	const colorHex = useColor(colorName, 'background_color');

	const style = {
		backgroundColor: colorHex.hex,
	};

	const classNames = ['table', 'w-8', 'h-8', 'rounded-full', 'border-solid', 'border-2'];
	if (selected) {
		classNames.push('border-primary/80');
		classNames.push('border-primary/80');
	} else {
		classNames.push('border-tmo-background/40');
	}

	return <button style={style} onClick={() => onSelectColor(colorName)} className={classNames.join(' ')} />;
}
