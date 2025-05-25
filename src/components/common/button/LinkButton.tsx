import React, {ReactNode} from 'react';
import './Button.scss';
import {Link} from 'react-router-dom';
import Error from '../inputs/error/Error';
import CSS from 'csstype';
import block from '../../../styles/bem';
import InputInfo from '../inputs/input/input_info/InputInfo';
import {CommonType} from './Button';

const b = block('common-button');

interface Props {
	to: string;
	text?: string;
	icon?: JSX.Element;
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

	let textSpan = null;
	if (text) {
		textSpan = <span style={textStyle || {}}>{text}</span>;
	}

	const blockClass = b({
		theme,
		small,
		large,
		flat,
		fullWidth,
		round,
		error,
	});
	const buttonClass = className ? className + ' ' + blockClass : blockClass;

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
		<div className={b('wrapper', {fullWidth, alignRight, nomargin: noMargin})}>
			{anchor}
			<Error text={error} />
			<InputInfo text={info} />
		</div>
	);
}
