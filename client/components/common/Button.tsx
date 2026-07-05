import {openModal} from '@/actions/general';
import ConfirmModal, {ConfirmModalProps} from '@/components/common/ConfirmModal';
import Error from '@/components/common/inputs/Error';
import InputInfo from '@/components/common/inputs/input/InputInfo';
import {cn} from '@/util/cn';
import CSS from 'csstype';
import {CircleNotch} from 'phosphor-react';
import React, {ReactNode} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

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

const THEME_CLASSES: Record<CommonType, string> = {
	[CommonType.TRANSPARENT]: 'bg-transparent text-text',
	[CommonType.GRAY]: 'bg-button text-text',
	[CommonType.WHITE]: 'bg-tmo-background text-tm-background',
	[CommonType.PRIMARY]: 'bg-primary text-tmo-primary',
	[CommonType.DANGER]: 'bg-error text-white',
	[CommonType.SECONDARY]: 'bg-secondary text-tmo-secondary',
	[CommonType.WARNING]: 'bg-warning text-white',
	// Legacy Sass had no styles for the success theme; kept as-is for parity
	[CommonType.SUCCESS]: '',
};

const THEME_GLOW_CLASSES: Record<CommonType, string> = {
	[CommonType.TRANSPARENT]: 'shadow-md shadow-transparent',
	[CommonType.GRAY]: 'shadow-md shadow-button',
	[CommonType.WHITE]: 'shadow-md shadow-tmo-background',
	[CommonType.PRIMARY]: 'shadow-md shadow-primary',
	[CommonType.DANGER]: 'shadow-md shadow-error',
	[CommonType.SECONDARY]: 'shadow-md shadow-secondary',
	[CommonType.WARNING]: 'shadow-md shadow-warning',
	[CommonType.SUCCESS]: '',
};

const THEME_FLAT_TEXT_CLASSES: Record<CommonType, string> = {
	[CommonType.TRANSPARENT]: 'text-transparent',
	[CommonType.GRAY]: 'text-button',
	[CommonType.WHITE]: 'text-tmo-background',
	[CommonType.PRIMARY]: 'text-primary',
	[CommonType.DANGER]: 'text-error',
	[CommonType.SECONDARY]: 'text-secondary',
	[CommonType.WARNING]: 'text-warning',
	[CommonType.SUCCESS]: '',
};

export interface ButtonClassOptions {
	theme: CommonType;
	small?: boolean;
	large?: boolean;
	flat?: boolean;
	flatBorder?: boolean;
	glow?: boolean;
	round?: boolean;
	fullWidth?: boolean;
	disabled?: boolean;
}

export function getButtonClasses(opts: ButtonClassOptions): string {
	const {theme, small, large, flat, flatBorder, glow, round, fullWidth, disabled} = opts;

	return cn(
		'box-border flex h-7 flex-row items-center justify-center gap-1 rounded px-2.5 font-label text-base font-normal text-text',
		THEME_CLASSES[theme],
		small && 'h-6 px-2 text-sm',
		large && 'h-10 px-4 text-lg',
		round && 'rounded-full',
		glow && THEME_GLOW_CLASSES[theme],
		flat &&
			cn(
				'h-6 rounded-none bg-transparent p-0 font-semibold shadow-none',
				THEME_FLAT_TEXT_CLASSES[theme],
			),
		flatBorder && 'border-b-2',
		fullWidth && 'w-full',
		disabled && 'pointer-events-none opacity-60',
	);
}

export const buttonTextClasses = 'table whitespace-nowrap tracking-wide';
export const buttonWrapperClasses = 'flex flex-col items-start';

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
	icon?: ReactNode;
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
		if (!confirmModalProps) {
			return;
		}

		dispatch(openModal(<ConfirmModal {...confirmModalProps} />));
	}

	let ic: ReactNode = null;
	if (loading) {
		ic = <CircleNotch className="spin" weight="bold" />;
	} else if (icon) {
		ic = icon;
	}

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
			flatBorder,
			glow: glow && !disabled,
			round,
			fullWidth,
			disabled,
		}),
		className,
	);

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
		<div
			style={style || {}}
			className={cn(buttonWrapperClasses, fullWidth && 'w-full', alignRight && 'items-end')}
		>
			{button}
			<Error text={error} />
			<InputInfo text={info} />
		</div>
	);
}
