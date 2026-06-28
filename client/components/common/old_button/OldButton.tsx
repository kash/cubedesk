import {CSSProperties, MouseEvent, ReactNode, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {CircleNotch} from 'phosphor-react';

import Error from '../old_error/Error';
import ConfirmModal from '../confirm_modal/ConfirmModal';
import {openModal} from '../../../actions/general';
import './Button.scss';

interface Props {
	text?: ReactNode;
	info?: ReactNode;
	small?: boolean;
	green?: boolean;
	orange?: boolean;
	round?: boolean;
	red?: boolean;
	white?: boolean;
	large?: boolean;
	flat?: boolean;
	disabled?: boolean;
	textStyle?: CSSProperties;
	fullWidth?: boolean;
	title?: string;
	alignLeft?: boolean;
	backgroundColor?: string;
	blue?: boolean;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	icon?: string;
	style?: CSSProperties;
	loading?: boolean;
	error?: string;
	confirm?: boolean;
	confirmModal?: boolean;
	confirmModalTitle?: string;
	confirmModalButtonText?: string;
	confirmModalButtonIcon?: string;
	confirmModalTriggerAction?: () => void;
	confirmModalDescription?: ReactNode;
	onClick?: (e: MouseEvent) => void;
	onMouseOver?: (e: MouseEvent) => void;
	onMouseOut?: (e: MouseEvent) => void;
	children?: ReactNode;
}

export default function OldButton(props: Props) {
	const {
		text,
		info,
		small,
		green,
		orange,
		round,
		red,
		white,
		large,
		flat,
		disabled,
		textStyle,
		fullWidth,
		title,
		alignLeft,
		backgroundColor,
		blue,
		type: buttonType,
		className,
		icon,
		style,
		loading,
		error,
		confirm: confirmProp,
		confirmModal,
		confirmModalTitle,
		confirmModalButtonText,
		confirmModalButtonIcon,
		confirmModalTriggerAction,
		confirmModalDescription,
		onClick,
		onMouseOver,
		onMouseOut,
		children,
	} = props;

	const dispatch = useDispatch();
	const [confirm, setConfirm] = useState(false);
	const confirmTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (confirmTimeout.current) {
				clearTimeout(confirmTimeout.current);
			}
		};
	}, []);

	const toggleConfirmModal = () => {
		const modalProps: any = {
			red: true,
			buttonText: text || confirmModalButtonText,
			buttonIcon: confirmModalButtonIcon,
			triggerAction: confirmModalTriggerAction,
		};
		dispatch(
			openModal(<ConfirmModal {...modalProps} />, {
				title: confirmModalTitle,
				description: confirmModalDescription as any,
				onClose: toggleConfirmModal,
			}) as any
		);
	};

	const handleClick = (e: MouseEvent) => {
		if (confirmProp && !confirm) {
			setConfirm(true);
			confirmTimeout.current = setTimeout(() => {
				setConfirm(false);
			}, 3000);
			return;
		}

		if (confirmTimeout.current) {
			clearTimeout(confirmTimeout.current);
		}

		if (confirmModal) {
			toggleConfirmModal();
		}

		if (onClick) {
			onClick(e);
		}
	};

	const baseClass = 'cd-common__button';
	const classes = [baseClass];

	if (className) classes.push(className);
	if (small) classes.push(baseClass + '--small');
	if (white) classes.push(baseClass + '--white');
	if (green) classes.push(baseClass + '--green');
	if (blue) classes.push(baseClass + '--blue');
	if (orange) classes.push(baseClass + '--orange');
	if (red) classes.push(baseClass + '--red');
	if (large) classes.push(baseClass + '--large');
	if (round) classes.push(baseClass + '--round');
	if (flat) classes.push(baseClass + '--flat');

	let ic: ReactNode = null;
	if (icon) {
		ic = <i className={icon} />;
	}
	if (loading) {
		ic = <CircleNotch weight="bold" className="spin" />;
	}

	let err: ReactNode = null;
	if (error) {
		err = <Error text={error} />;
	}

	let wrapperStyle: CSSProperties = {};
	let textSpan: ReactNode = null;

	if (alignLeft) {
		wrapperStyle.alignItems = 'flex-start';
	} else {
		wrapperStyle.alignItems = ' flex-end';
	}

	if (style) {
		wrapperStyle = {
			...wrapperStyle,
			...style,
		};
	}

	if (text) {
		textSpan = <span style={textStyle || {}}>{text || children}</span>;
	}

	let infoSpan: ReactNode = null;
	if (info) {
		infoSpan = <p className="cd-common__button__info">{info}</p>;
		err = null;
	}

	const buttonStyle: CSSProperties = {};
	if (backgroundColor) {
		buttonStyle.backgroundColor = backgroundColor;
	}

	if (fullWidth) {
		wrapperStyle.width = '100%';
		buttonStyle.width = '100%';
	}

	return (
		<div className="cd-common__button__wrapper" style={wrapperStyle}>
			<button
				title={title}
				type={buttonType || 'button'}
				onMouseOver={onMouseOver}
				onMouseOut={onMouseOut}
				disabled={disabled}
				className={classes.join(' ')}
				style={buttonStyle}
				onClick={handleClick}
			>
				{confirm ? <span className="cd-common__button__confirm">Confirm: </span> : ''}
				{textSpan}
				{children}
				{ic}
			</button>
			{infoSpan}
			{err}
		</div>
	);
}
