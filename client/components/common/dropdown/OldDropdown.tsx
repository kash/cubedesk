import {CSSProperties, ReactNode, useCallback, useEffect, useState} from 'react';
import './OldDropdown.scss';
import {CaretDown} from 'phosphor-react';
import Button from '../old_button/OldButton';
import InputLegend from '../inputs/input/input_legend/InputLegend';

interface Props {
	up?: boolean;
	left?: boolean;
	legend?: string;
	icon?: ReactNode;
	rawHandle?: ReactNode;
	handle?: ReactNode;
	maxHeight?: number | string;
	bodyClassName?: string;
	bodyStyle?: CSSProperties;
	preventCloseOnInnerClick?: boolean;
	onClose?: () => void;
	onOpen?: () => void;
	children?: ReactNode;
}

export default function OldDropdown(props: Props) {
	const {
		up,
		left,
		legend: legendText,
		icon,
		rawHandle,
		maxHeight,
		bodyClassName,
		bodyStyle,
		preventCloseOnInnerClick,
		onClose,
		onOpen,
		children,
	} = props;

	const [open, setOpen] = useState(false);

	const closeDropdown = useCallback(
		(e: MouseEvent) => {
			if (preventCloseOnInnerClick) {
				let target = e.target as HTMLElement | null;
				while (target) {
					if (target && target.classList && target.classList.contains('cd-common__dropdown')) {
						return;
					}

					target = target.parentNode as HTMLElement | null;
				}
			}

			if (onClose) {
				onClose();
			}

			setOpen(false);
		},
		[preventCloseOnInnerClick, onClose]
	);

	useEffect(() => {
		if (!open) {
			return;
		}

		const timeout = setTimeout(() => {
			window.addEventListener('click', closeDropdown);
		}, 50);

		return () => {
			clearTimeout(timeout);
			window.removeEventListener('click', closeDropdown);
		};
	}, [open, closeDropdown]);

	const openDropdown = (e: React.MouseEvent) => {
		e.preventDefault();

		if (!children) {
			return;
		}

		if (Array.isArray(children) && !children.length) {
			return;
		}

		setOpen(true);
		if (onOpen) {
			onOpen();
		}
	};

	let body: ReactNode = null;

	let className = 'cd-common__dropdown__body';
	if (up) {
		className += ' cd-common__dropdown__body--up';
	}
	if (left) {
		className += ' cd-common__dropdown__body--left';
	}
	if (bodyClassName) {
		className += ` ${bodyClassName}`;
	}

	if (open) {
		const style: CSSProperties = {...bodyStyle};
		if (maxHeight) {
			style.maxHeight = maxHeight;
		}

		body = (
			<div className={className} style={style}>
				{children}
			</div>
		);
	}

	let handle = icon || <CaretDown weight="bold" />;

	if (props.handle) {
		handle = props.handle;
	}

	let handleWrapper: ReactNode;
	if (rawHandle) {
		handleWrapper = <button onClick={openDropdown}>{rawHandle}</button>;
	} else {
		handleWrapper = <Button onClick={openDropdown}>{handle}</Button>;
	}

	return (
		<div className="cd-common__dropdown">
			<InputLegend text={legendText as string} />
			{handleWrapper}
			{body}
		</div>
	);
}
