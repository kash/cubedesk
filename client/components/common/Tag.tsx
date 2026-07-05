import {useColor} from '@/util/hooks/useTheme';
import CSS from 'csstype';
import {CircleNotch} from 'phosphor-react';
import React, {ReactNode} from 'react';
import {ColorName} from '@/shared/colors';

export interface TagProps {
	text?: string;
	title?: string;
	icon?: ReactNode;
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
	const {textColor, text, backgroundColor, bold, loading, title, icon, small, large, glow} =
		props;

	const backgroundColorProps = useColor(backgroundColor);
	const textColorProps = useColor(textColor);

	let iconDiv: ReactNode = null;
	let iconBody: ReactNode = null;

	if (loading) {
		iconBody = <CircleNotch weight="bold" className="spin" />;
	} else if (icon) {
		iconBody = icon;
	}

	if (iconBody) {
		iconDiv = <div className="relative top-px ml-1 text-inherit">{iconBody}</div>;
	}

	let textSpan: ReactNode = null;
	if (text) {
		textSpan = <span className="font-label text-inherit">{text}</span>;
	}

	const containerClass: string[] = [];
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
			<div
				title={title}
				className="font-label flex flex-row items-center font-bold"
				style={bodyStyle}
			>
				{textSpan}
				{iconDiv}
			</div>
		</div>
	);
}
