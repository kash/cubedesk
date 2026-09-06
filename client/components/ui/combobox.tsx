import {Button} from '@/components/ui/button';
import {cn} from '@/util/cn';
import {CaretDown, Check} from 'phosphor-react';
import React from 'react';
import {Command, CommandEmpty, CommandInput, CommandItem, CommandList} from './command';
import {Popover, PopoverContent, PopoverTrigger} from './popover';

export interface ComboboxProps {
	value: string;
	onValueChange?: (value: string) => void;
	options: {value: string; text: string; disabled?: boolean}[];
	label: string;
	text?: string;
	placeholder?: string;
	disabled?: boolean;
	triggerProps?: React.ComponentProps<'button'>;
	align?: 'start' | 'center' | 'end';
}
export function Combobox({
	value,
	onValueChange,
	options,
	label,
	text,
	placeholder = 'Select option',
	disabled,
	triggerProps,
	align = 'start',
}: ComboboxProps) {
	const [open, setOpen] = React.useState(false);
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					{...triggerProps}
					type="button"
					role="combobox"
					aria-expanded={open}
					aria-label={label}
					disabled={disabled || triggerProps?.disabled}
					variant="outline"
					className={cn('justify-between', triggerProps?.className)}
					onClick={(event) => {
						event.stopPropagation();
						triggerProps?.onClick?.(event);
					}}
				>
					<span className="truncate">
						{text ||
							options.find((option) => option.value === value)?.text ||
							placeholder}
					</span>
					<CaretDown className="size-4 opacity-60" />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				align={align}
				className="w-[max(16rem,var(--radix-popover-trigger-width))] p-0"
				onClick={(event) => event.stopPropagation()}
			>
				<Command label={label}>
					<CommandInput placeholder={`Search ${label.toLowerCase()}…`} />
					<CommandList className="max-h-[min(18rem,calc(var(--radix-popover-content-available-height)-3rem))]">
						<CommandEmpty>No results found.</CommandEmpty>
						{options.map((option) => (
							<CommandItem
								key={option.value}
								value={option.value}
								keywords={[option.text]}
								disabled={option.disabled}
								onSelect={() => {
									setOpen(false);
									onValueChange?.(option.value);
								}}
							>
								<Check
									className={cn('size-4', {'opacity-0': option.value !== value})}
								/>
								{option.text}
							</CommandItem>
						))}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
