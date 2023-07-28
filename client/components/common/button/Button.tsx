import React, {ReactNode} from 'react';
import './Button.scss';
import {Link} from 'react-router-dom';
import {CircleNotch} from 'phosphor-react';
import Error from '../inputs/error/Error';
import ConfirmModal, {ConfirmModalProps} from '../confirm_modal/ConfirmModal';
import {openModal} from '../../../actions/general';
import CSS from 'csstype';
import block from '../../../styles/bem';
import InputInfo from '../inputs/input/input_info/InputInfo';
import {useDispatch} from 'react-redux';

const b = block('common-button');

export enum CommonType {
	SUCCESS = 'success',
	GRAY = 'gray',
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	DANGER = 'danger',
	WHITE = 'white',
	WARNING = 'warning',
	TRANSPARENT = 'transparent',
}

export interface ButtonProps {
	text?: string;
	info?: string;
	small?: boolean;
	theme?: CommonType;
	noMargin?: boolean;
	round?: boolean;
	large?: boolean;
	flat?: boolean;
	disabled?: boolean;
	confirmModalProps?: ConfirmModalProps;
	onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
	onMouseOut?: React.MouseEventHandler<HTMLButtonElement>;
	textStyle?: CSS.Properties;
	fullWidth?: boolean;
	textColor?: string;
	backgroundColor?: string;
	hidden?: boolean;
	iconFirst?: boolean;
	glow?: boolean;
	title?: string;
	alignRight?: boolean;
	type?: 'reset' | 'submit' | 'button';
	className?: string;
	icon?: JSX.Element;
	flatBorder?: boolean;
	style?: CSS.Properties;
	loading?: boolean;
	error?: string;
	to?: string;
	target?: string;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

	danger?: boolean;
	warning?: boolean;
	transparent?: boolean;
	primary?: boolean;
	secondary?: boolean;
	white?: boolean;
	success?: boolean;
	gray?: boolean;
}

export default function Button(props: ButtonProps) {
	const {
		text,
		info,
		round,
		large,
		small,
		flat,
		disabled,
		textColor,
		flatBorder,
		backgroundColor,
		textStyle,
		fullWidth,
		confirmModalProps,
		iconFirst,
		title,
		onMouseOut,
		glow,
		noMargin,
		to,
		target,
		style,
		onMouseOver,
		alignRight,
		children,
		type: buttonType,
		className,
		hidden,
		icon,
		loading,
		onClick,
		error,

		danger,
		warning,
		transparent,
		primary,
		secondary,
		white,
		success,
		gray,
	} = props;

	let theme = props.theme;

	if (danger) {
		theme = CommonType.DANGER;
	} else if (warning) {
		theme = CommonType.WARNING;
	} else if (success) {
		theme = CommonType.SUCCESS;
	} else if (primary) {
		theme = CommonType.PRIMARY;
	} else if (secondary) {
		theme = CommonType.SECONDARY;
	} else if (white) {
		theme = CommonType.WHITE;
	} else if (transparent) {
		theme = CommonType.TRANSPARENT;
	} else {
		theme = CommonType.GRAY;
	}

	const dispatch = useDispatch();

	function buttonClick(e) {
		if (confirmModalProps) {
			toggleConfirmModal();
		}

		if (onClick) {
			onClick(e);
		}
	}

	function toggleConfirmModal() {
		dispatch(openModal(<ConfirmModal {...confirmModalProps} />));
	}

	let ic = null;
	if (loading) {
		ic = <CircleNotch className="spin" weight="bold" />;
	} else if (icon) {
		ic = icon;
	}

	let textSpan = null;
	if (text) {
		textSpan = <span style={textStyle || {}}>{text}</span>;
	}

	const blockClass = b({
		theme,
		small,
		large,
		transparent,
		flatBorder,
		loading,
		flat,
		disabled,
		glow: glow && !disabled,
		fullWidth,
		round,
		error,
	});
	const buttonClass = className ? className + ' ' + blockClass : blockClass;

	if (hidden) {
		return null;
	}

	let buttonBody = (
		<>
			{textSpan}
			{children}
			{ic}
		</>
	);

	if (iconFirst) {
		buttonBody = (
			<>
				{ic}
				{textSpan}
				{children}
			</>
		);
	}

	const buttonProps: Record<string, any> = {
		title,
		type: buttonType || 'button',
		onMouseOver,
		onMouseOut,
		disabled: disabled || loading,
		className: buttonClass,
	};

	const buttonStyle: CSS.Properties = {};
	if (backgroundColor) {
		buttonStyle.backgroundColor = backgroundColor;
	}
	if (textColor) {
		buttonStyle.color = textColor;
	}
	buttonProps.style = buttonStyle;

	let button;
	if (to) {
		delete buttonProps.type;

		if (to.startsWith('http')) {
			button = (
				<a {...buttonProps} href={to} target={target}>
					{buttonBody}
				</a>
			);
		} else {
			button = (
				<Link {...buttonProps} to={to} target={target}>
					{buttonBody}
				</Link>
			);
		}
	} else {
		button = (
			<button {...buttonProps} onClick={buttonClick}>
				{buttonBody}
			</button>
		);
	}

	return (
		<div style={style || {}} className={b('wrapper', {fullWidth, alignRight, noMargin: noMargin})}>
			{button}
			<Error text={error} />
			<InputInfo text={info} />
		</div>
	);
}
