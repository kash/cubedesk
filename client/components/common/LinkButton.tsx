import React, {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import Error from '@/components/common/inputs/Error';
import CSS from 'csstype';
import InputInfo from '@/components/common/inputs/input/InputInfo';
import {
	CommonType,
	getButtonClasses,
	buttonTextClasses,
	buttonWrapperClasses,
} from '@/components/common/Button';
import {cn} from '@/util/cn';

interface Props {
	to: string;
	text?: string;
	icon?: ReactNode;
	info?: string;
	small?: boolean;
	target?: string;
	theme?: CommonType;
	round?: boolean;
	large?: boolean;
	flat?: boolean;
	textStyle?: CSS.Properties;
	noMargin?: boolean;
	iconFirst?: boolean;
	fullWidth?: boolean;
	title?: string;
	alignRight?: boolean;
	className?: string;
	style?: CSS.Properties;
	error?: string;
	children?: ReactNode;
}

export default function LinkButton(props: Props) {
	const {
		text,
		info,
		small,
		round,
		to,
		large,
		flat,
		textStyle,
		target,
		fullWidth,
		noMargin,
		iconFirst,
		title,
		alignRight,
		children,
		className,
		icon,
		error,
	} = props;

	const theme = props.theme || CommonType.PRIMARY;

	let textSpan: ReactNode = null;
	if (text) {
		textSpan = (
			<span className={buttonTextClasses} style={textStyle || {}}>
				{text}
			</span>
		);
	}

	const buttonClass = cn(
		getButtonClasses({
			theme,
			small,
			large,
			flat,
			round,
			fullWidth,
		}),
		className,
	);

	let linkBody = (
		<>
			{textSpan}
			{children}
			{icon}
		</>
	);

	if (iconFirst) {
		linkBody = (
			<>
				{icon}
				{textSpan}
				{children}
			</>
		);
	}

	const linkProps: any = {
		target: target || '_self',
		title,
		className: buttonClass,
	};

	let anchor: ReactNode;
	if (to.startsWith('http')) {
		anchor = (
			<a href={to} {...linkProps}>
				{linkBody}
			</a>
		);
	} else {
		anchor = (
			<Link to={to} {...linkProps}>
				{linkBody}
			</Link>
		);
	}

	return (
		<div className={cn(buttonWrapperClasses, fullWidth && 'w-full', alignRight && 'items-end')}>
			{anchor}
			<Error text={error} />
			<InputInfo text={info} />
		</div>
	);
}
