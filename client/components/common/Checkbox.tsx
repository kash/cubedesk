import {cn} from '@/util/cn';
import React, {useRef} from 'react';

interface Props {
	text: string;
	checked: boolean;
	name?: string;
	disabled?: boolean;
	noWrap?: boolean;
	noMargin?: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Checkbox(props: Props) {
	const {text, name, checked, noWrap, noMargin, disabled, onChange} = props;
	const id = useRef(Math.random().toString(36).substr(2, 5));

	let textBody;
	if (text) {
		textBody = <span className="relative mr-1.5 mt-[-3px] w-[calc(100%-33px)] text-sm text-text">{text}</span>;
	}

	return (
		<div className={cn('flex flex-row justify-between', noMargin ? 'my-0' : 'my-2')}>
			<input
				id={id.current}
				name={name}
				onChange={onChange}
				checked={checked}
				disabled={disabled}
				type="checkbox"
				className="peer absolute p-0 opacity-0"
			/>
			<label
				htmlFor={id.current}
				className={cn(
					'relative flex w-full cursor-pointer flex-row items-start p-0 text-sm text-text',
					"before:mr-2 before:inline-block before:h-4 before:w-4 before:rounded before:bg-tmo-module/10 before:align-text-top before:content-['']",
					'peer-hover:before:border-2 peer-hover:before:border-primary/60',
					'peer-checked:before:bg-primary',
					'peer-disabled:cursor-default peer-disabled:opacity-70',
					'after:absolute after:left-[3px] after:top-[9px] after:h-0.5 after:w-0.5 after:bg-text after:content-none after:zoom-[0.9]',
					'after:shadow-[2px_0_0_rgb(var(--text-color)),4px_0_0_rgb(var(--text-color)),4px_-2px_0_rgb(var(--text-color)),4px_-4px_0_rgb(var(--text-color)),4px_-6px_0_rgb(var(--text-color)),4px_-8px_0_rgb(var(--text-color))]',
					'after:transform-[rotate(45deg)_translate(0,-50%)]',
					"peer-checked:after:content-['']",
					noWrap && 'whitespace-pre'
				)}
			>
				{textBody}
			</label>
		</div>
	);
}
