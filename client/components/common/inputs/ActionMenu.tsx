import {Button, type ButtonProps} from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {cn} from '@/util/cn';
import {CaretDown, Check} from 'phosphor-react';
import React from 'react';
import {Link} from 'react-router-dom';
import GenericInput, {GenericInputProps, InputProps} from './generic_input/GenericInput';

export interface ActionMenuOption {
	text: string;
	checkbox?: boolean;
	radio?: boolean;
	link?: string;
	icon?: React.ReactElement;
	on?: boolean;
	disabled?: boolean;
	hidden?: boolean;
	onClick?: () => void;
	onChange?: (checked: boolean) => void;
}
export interface ActionMenuProps extends InputProps<GenericInputProps<HTMLDivElement>> {
	options: ActionMenuOption[];
	preventCloseOnInnerClick?: boolean;
	onClose?: () => void;
	onOpen?: () => void;
	openUp?: boolean;
	flat?: boolean;
	openLeft?: boolean;
	handle?: React.ReactNode;
	icon?: React.ReactNode;
	text?: string;
	triggerProps?: ButtonProps;
	contentClassName?: string;
	maxHeight?: string | number;
}
export default function ActionMenu(props: ActionMenuProps) {
	const {
		options,
		handle,
		text,
		icon,
		flat,
		triggerProps,
		openUp,
		openLeft,
		onOpen,
		onClose,
		preventCloseOnInnerClick,
		contentClassName,
		maxHeight,
	} = props;
	return (
		<GenericInput
			{...props}
			inputWrapper={() => (
				<div onClick={(event) => event.stopPropagation()}>
					<DropdownMenu onOpenChange={(open) => (open ? onOpen?.() : onClose?.())}>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								size={
									text || triggerProps?.children || handle
										? flat
											? 'sm'
											: 'default'
										: flat
											? 'icon-sm'
											: 'icon'
								}
								{...triggerProps}
								disabled={
									props.disabled ||
									triggerProps?.disabled ||
									!options.some((option) => !option.hidden)
								}
								aria-label={
									triggerProps?.['aria-label'] ||
									text ||
									triggerProps?.title ||
									'Open menu'
								}
								className={cn(
									{'w-full justify-between': !!props.fullWidth},
									triggerProps?.className,
								)}
							>
								{handle || (
									<>
										{text || triggerProps?.children}
										{icon === null ? null : icon || <CaretDown />}
									</>
								)}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align={openLeft ? 'start' : 'end'}
							side={openUp ? 'top' : 'bottom'}
							className={cn(
								{
									'min-w-[var(--radix-dropdown-menu-trigger-width)]':
										!!props.fullWidth,
								},
								contentClassName,
							)}
							style={maxHeight ? {maxHeight} : undefined}
						>
							<DropdownMenuRadioGroup
								value={options.find((option) => option.radio && option.on)?.text}
								onValueChange={(value) =>
									options
										.find((option) => option.radio && option.text === value)
										?.onChange?.(true)
								}
							>
								{options
									.filter((option) => !option.hidden)
									.map((option, index) => {
										const body = (
											<>
												{option.icon}
												<span className="flex-1">{option.text}</span>
												{option.on && !option.checkbox && !option.radio && (
													<Check className="size-4" />
												)}
											</>
										);
										if (option.radio)
											return (
												<DropdownMenuRadioItem
													key={index}
													value={option.text}
													disabled={option.disabled}
													onSelect={(event) => {
														if (preventCloseOnInnerClick)
															event.preventDefault();
													}}
												>
													{body}
												</DropdownMenuRadioItem>
											);
										if (option.checkbox)
											return (
												<DropdownMenuCheckboxItem
													key={index}
													checked={!!option.on}
													disabled={option.disabled}
													onCheckedChange={option.onChange}
													onSelect={(event) => {
														if (preventCloseOnInnerClick)
															event.preventDefault();
													}}
												>
													{body}
												</DropdownMenuCheckboxItem>
											);
										if (option.link && !option.disabled)
											return (
												<DropdownMenuItem key={index} asChild>
													{option.link.startsWith('http') ? (
														<a href={option.link}>{body}</a>
													) : (
														<Link to={option.link}>{body}</Link>
													)}
												</DropdownMenuItem>
											);
										return (
											<DropdownMenuItem
												key={index}
												disabled={option.disabled}
												onSelect={() => option.onClick?.()}
											>
												{body}
											</DropdownMenuItem>
										);
									})}
							</DropdownMenuRadioGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			)}
		/>
	);
}
