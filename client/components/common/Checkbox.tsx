import {Checkbox as CheckboxControl} from '@/components/ui/checkbox';
import {Label} from '@/components/ui/label';
import {cn} from '@/util/cn';
import React from 'react';

interface Props {
	text: string;
	checked: boolean;
	name?: string;
	disabled?: boolean;
	noWrap?: boolean;
	noMargin?: boolean;
	onCheckedChange: (checked: boolean) => void;
}

export default function Checkbox({
	text,
	name,
	checked,
	noWrap,
	noMargin,
	disabled,
	onCheckedChange,
}: Props) {
	const id = React.useId();
	return (
		<div className={cn('flex items-start gap-2', {'my-2': !noMargin})}>
			<CheckboxControl
				id={id}
				name={name}
				checked={checked}
				disabled={disabled}
				onCheckedChange={(value) => onCheckedChange(value === true)}
				className="mt-0.5"
			/>
			<Label
				htmlFor={id}
				className={cn('min-w-0 cursor-pointer leading-5', {'whitespace-pre': noWrap})}
			>
				{text}
			</Label>
		</div>
	);
}
