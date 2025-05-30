import Button from '@/components/common/button/Button';
import './OldDropdown.scss';
import InputLegend from '@/components/common/inputs/input/input_legend/InputLegend';
import {CaretDown} from '@phosphor-icons/react/dist/ssr';
import React, {useCallback, useEffect, useRef, useState} from 'react';

interface OldDropdownProps {
	children?: React.ReactNode;
	up?: boolean;
	left?: boolean;
	legend?: string;
	icon?: React.ReactNode;
	handle?: React.ReactNode;
	rawHandle?: React.ReactNode;
	maxHeight?: number | string;
	preventCloseOnInnerClick?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
}

export default function OldDropdown(props: OldDropdownProps) {
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const {
		up,
		left,
		legend: legendText,
		icon,
		rawHandle,
		maxHeight,
		preventCloseOnInnerClick,
		onOpen,
		onClose,
		children,
		handle,
	} = props;

	const closeDropdown = useCallback(
		(e: MouseEvent) => {
			if (preventCloseOnInnerClick) {
				let target = e.target as HTMLElement | null;
				while (target) {
					if (
						target &&
						target.classList &&
						target.classList.contains('cd-common__dropdown')
					) {
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
		[onClose, preventCloseOnInnerClick],
	);

	useEffect(() => {
		if (open) {
			const timer = setTimeout(() => {
				window.addEventListener('click', closeDropdown);
			}, 50);

			return () => {
				clearTimeout(timer);
				window.removeEventListener('click', closeDropdown);
			};
		} else {
			window.removeEventListener('click', closeDropdown);
		}
	}, [closeDropdown, open]);

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

	let body = null;
	let className = 'cd-common__dropdown__body';
	if (up) {
		className += ' cd-common__dropdown__body--up';
	}
	if (left) {
		className += ' cd-common__dropdown__body--left';
	}

	if (open) {
		const style: React.CSSProperties = {};
		if (maxHeight) {
			style.maxHeight = maxHeight;
		}

		body = (
			<div className={className} style={style}>
				{children}
			</div>
		);
	}

	const displayHandle = handle || icon || <CaretDown weight="bold" />;

	let handleWrapper;
	if (rawHandle) {
		handleWrapper = <button onClick={openDropdown}>{rawHandle}</button>;
	} else {
		handleWrapper = <Button onClick={openDropdown}>{displayHandle}</Button>;
	}

	return (
		<div className="cd-common__dropdown" ref={dropdownRef}>
			<InputLegend text={legendText || ''} />
			{handleWrapper}
			{body}
		</div>
	);
}
