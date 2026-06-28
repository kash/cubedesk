import {CSSProperties, MouseEvent, ReactNode, useEffect, useRef, useState} from 'react';
import {CircleNotch} from 'phosphor-react';
import Error from '../old_error/Error';
import {Link} from 'react-router-dom';

interface Props {
	text?: ReactNode;
	info?: ReactNode;
	small?: boolean;
	green?: boolean;
	orange?: boolean;
	red?: boolean;
	target?: string;
	white?: boolean;
	large?: boolean;
	textStyle?: CSSProperties;
	alignLeft?: boolean;
	blue?: boolean;
	to: string;
	className?: string;
	icon?: string;
	loading?: boolean;
	error?: string;
	confirm?: boolean;
	onClick?: (e: MouseEvent) => void;
	children?: ReactNode;
}

export default function LinkButton(props: Props) {
	const {
		text,
		info,
		small,
		green,
		orange,
		red,
		target,
		white,
		large,
		textStyle,
		alignLeft,
		blue,
		to,
		className,
		icon,
		loading,
		error,
		confirm: confirmProp,
		onClick,
		children,
	} = props;

	const [confirm, setConfirm] = useState(false);
	const confirmTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (confirmTimeout.current) {
				clearTimeout(confirmTimeout.current);
			}
		};
	}, []);

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

	let ic: ReactNode = null;
	if (icon) {
		ic = <i style={textStyle} className={icon} />;
	}
	if (loading) {
		ic = <CircleNotch weight="bold" className="spin" />;
	}

	let err: ReactNode = null;
	if (error) {
		err = <Error text={error} />;
	}

	let textSpan: ReactNode = null;
	if (text) {
		textSpan = (
			<span style={textStyle || {}}>
				{confirm ? 'Confirm: ' : ''}
				{text || children}
			</span>
		);
	}

	let infoSpan: ReactNode = null;
	if (info) {
		infoSpan = <p className="cd-common__button__info">{info}</p>;
		err = null;
	}

	let link: ReactNode = (
		<a href={to} target={target} className={classes.join(' ')} onClick={handleClick}>
			{textSpan}
			{children}
			{ic}
		</a>
	);

	if (!to.startsWith('http')) {
		link = (
			<Link to={to} target={target} className={classes.join(' ')} onClick={handleClick}>
				{textSpan}
				{children}
				{ic}
			</Link>
		);
	}

	return (
		<div className="cd-common__button__wrapper" style={{alignItems: alignLeft ? 'flex-start' : 'flex-end'}}>
			{link}
			{infoSpan}
			{err}
		</div>
	);
}
