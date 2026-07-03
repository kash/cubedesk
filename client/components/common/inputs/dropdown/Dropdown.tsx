import React, {ReactNode, useState} from 'react';
import CSS from 'csstype';
import {CaretDown} from 'phosphor-react';
import DropdownOption, {IDropdownOption} from '@/components/common/inputs/dropdown/DropdownOption';
import GenericInput, {
	GenericInputProps,
	InputProps,
} from '@/components/common/inputs/generic_input/GenericInput';
import Button, {ButtonProps} from '@/components/common/Button';
import {cn} from '@/util/cn';

// Marker class used by closeDropdown to detect clicks inside the dropdown.
const DROPDOWN_CLASS = 'cd-common-dropdown';

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
	icon?: ReactNode;
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
				if (target && target.classList && target.classList.contains(DROPDOWN_CLASS)) {
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

	let body: ReactNode = null;

	if (open) {
		const style: CSS.Properties = {};
		if (dropdownMaxHeight) {
			style.maxHeight = String(dropdownMaxHeight) + 'px';
		}

		body = (
			<div
				className={cn(
					'bg-button absolute top-[calc(100%+5px)] right-0 z-1000000 box-border flex max-h-96 min-w-40 flex-col overflow-y-auto rounded-md p-1.5 shadow-[0_4px_13px_rgba(0,0,0,0.2)]',
					{
						'top-auto bottom-[calc(100%+5px)]': openUp,
						'right-auto left-0': openLeft,
						'min-w-full': fullWidth,
					},
				)}
				style={style}
			>
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
			<button className="table w-full p-0" onClick={openDropdown}>
				{handle}
			</button>
		);
	}

	return (
		<GenericInput
			{...props}
			inputWrapper={() => (
				<div className={cn(DROPDOWN_CLASS, 'relative flex flex-col items-start')}>
					{handleDiv}
					{body}
				</div>
			)}
		/>
	);
}
