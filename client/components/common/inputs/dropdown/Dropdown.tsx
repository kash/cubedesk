import React, {ReactNode, useState} from 'react';
import './Dropdown.scss';
import block from '../../../../styles/bem';
import CSS from 'csstype';
import {CaretDown} from 'phosphor-react';
import DropdownOption, {IDropdownOption} from './dropdown_option/DropdownOption';
import GenericInput, {GenericInputProps, InputProps} from '../generic_input/GenericInput';
import Button, {ButtonProps} from '../../button/Button';

const b = block('common-dropdown');

export interface DropdownProps extends GenericInputProps<HTMLDivElement> {
	options: IDropdownOption[];
	preventCloseOnInnerClick?: boolean;
	onClose?: () => void;
	onOpen?: () => void;
	// Opens right aligned and down by default
	openUp?: boolean;
	flat?: boolean;
	openLeft?: boolean;
	handle?: ReactNode;
	icon?: JSX.Element;
	text?: string;
	dropdownButtonProps?: ButtonProps;
	fullWidth?: boolean;
	dropdownMaxHeight?: string | number;
}

export default function Dropdown(props: InputProps<DropdownProps>) {
	const {
		preventCloseOnInnerClick,
		handle,
		onClose,
		options,
		openUp,
		flat,
		openLeft,
		onOpen,
		fullWidth,
		icon,
		dropdownButtonProps,
		text,
		dropdownMaxHeight,
	} = props;
	const [open, setOpen] = useState(false);

	function closeDropdown(e) {
		if (preventCloseOnInnerClick) {
			let target = e.target;
			while (target) {
				if (target && target.classList && target.classList.contains(b())) {
					return;
				}

				target = target.parentNode;
			}
		}

		if (onClose) {
			onClose();
		}

		setOpen(() => false);
		window.removeEventListener('click', closeDropdown);
	}

	function openDropdown(e) {
		e.preventDefault();

		if (open || !options || !options.length) {
			return;
		}

		setOpen(() => true);

		if (onOpen) {
			onOpen();
		}
		setTimeout(() => {
			window.addEventListener('click', closeDropdown);
		}, 50);
	}

	let body = null;

	if (open) {
		const style: CSS.Properties = {};
		if (dropdownMaxHeight) {
			style.maxHeight = String(dropdownMaxHeight) + 'px';
		}

		body = (
			<div className={b('body', {up: openUp, left: openLeft, fullwidth: fullWidth})} style={style}>
				{options.map((op, index) => (
					<DropdownOption key={`${op.text}-${index}`} option={op} />
				))}
			</div>
		);
	}

	let handleDiv = (
		<Button
			flat={flat}
			icon={icon === null ? null : icon || <CaretDown weight="bold" />}
			onClick={openDropdown}
			gray
			text={text}
			{...dropdownButtonProps}
		/>
	);
	if (handle) {
		handleDiv = (
			<button className={b('custom-handle')} onClick={openDropdown}>
				{handle}
			</button>
		);
	}

	return (
		<GenericInput
			{...props}
			inputWrapper={() => (
				<div className={b()}>
					{handleDiv}
					{body}
				</div>
			)}
		/>
	);
}
