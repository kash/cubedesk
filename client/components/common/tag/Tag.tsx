import React from 'react';
import {ColorName} from '../../../../shared/colors';
import CSS from 'csstype';
import {useColor} from '../../../util/hooks/useTheme';

export interface TagProps {
	text?: string;
	title?: string;
	icon?: string;
	large?: boolean;
	bold?: boolean;
	glow?: boolean;
	small?: boolean;
	info?: boolean;
	backgroundColor?: ColorName;
	textColor?: ColorName;
	loading?: boolean;
	hideBorder?: boolean;
}

export default function Tag(props: TagProps) {
	const {textColor, text, backgroundColor, bold, loading, title, icon, small, large, glow} = props;

	const backgroundColorProps = useColor(backgroundColor);
	const textColorProps = useColor(textColor);

	let iconDiv = null;
	let iconBody = null;

	if (loading) {
		iconBody = <i className="ph-circle-notch-bold ph-spin" />;
	} else if (icon) {
		iconBody = <i className={icon} />;
	}

	if (iconBody) {
		iconDiv = <div className="ml-1 relative top-px text-inherit">{iconBody}</div>;
	}

	let textSpan = null;
	if (text) {
		textSpan = <span className="text-inherit font-label">{text}</span>;
	}

	const containerClass = [];
	const wrapperStyle: CSS.Properties = {};
	const bodyStyle: CSS.Properties = {};

	if (backgroundColorProps) {
		// Has background
		wrapperStyle.backgroundColor = backgroundColorProps.hex;
		wrapperStyle.color = backgroundColorProps.hex;
		bodyStyle.color = backgroundColorProps.themeHexOpposite;

		containerClass.push('rounded');
	} else {
		// Default text color, no background (No color provided. Flat not set, but effectively flat)
		containerClass.push('text-text');
	}

	if (textColor && textColorProps) {
		bodyStyle.color = textColorProps.hex;
	}

	if (glow) {
		containerClass.push('shadow-md');
		containerClass.push('shadow-current');
	}

	if (small) {
		containerClass.push('text-xs', 'px-1.5', 'py-1');
	} else if (large) {
		containerClass.push('text-lg', 'px-4', 'py-2');
	} else {
		containerClass.push('text-sm', 'px-2.5', 'py-1.5');
	}

	if (bold) {
		containerClass.push('font-bold');
	}

	return (
		<div className={containerClass.join(' ')} style={wrapperStyle}>
			<div title={title} className="items-center flex-row flex font-label font-bold" style={bodyStyle}>
				{textSpan}
				{iconDiv}
			</div>
		</div>
	);
}
