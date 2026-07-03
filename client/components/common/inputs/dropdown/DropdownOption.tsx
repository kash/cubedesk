import React from 'react';
import {Link} from 'react-router-dom';

import Checkbox from '@/components/common/Checkbox';
import {cn} from '@/util/cn';

export interface IDropdownOption {
	text: string;
	checkbox?: boolean;
	link?: string;
	icon?: React.ReactElement;
	on?: boolean;
	disabled?: boolean;
	hidden?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

interface Props {
	option: IDropdownOption;
}

const optionClassNames = cn(
	'box-border flex w-full flex-row items-center justify-start gap-1 rounded p-2 text-left text-base whitespace-nowrap text-text transition-all duration-100 ease-in-out',
	'hover:bg-tm-background/20 disabled:cursor-default disabled:bg-transparent disabled:opacity-40',
);

function getOptionClassNames(on?: boolean) {
	return cn(optionClassNames, on && 'bg-text text-background');
}

export default function DropdownOption(props: Props) {
	const {text, hidden, checkbox, onChange, disabled, link, icon, on, onClick} = props.option;

	const body = (
		<>
			<span className="table">{text}</span>
			{icon ? (
				<span className="mr-1.25 flex w-5 items-center justify-center opacity-70">
					{icon}
				</span>
			) : null}
		</>
	);

	if (hidden) {
		return null;
	}

	if (link) {
		if (link.startsWith('http')) {
			return (
				<a className={getOptionClassNames(on)} href={link}>
					{body}
				</a>
			);
		}

		return (
			<Link className={getOptionClassNames(on)} to={link}>
				{body}
			</Link>
		);
	}

	if (checkbox) {
		return <Checkbox onChange={onChange!} text={text} checked={!!on} noMargin />;
	}

	return (
		<button disabled={disabled} className={getOptionClassNames(on)} onClick={onClick}>
			{body}
		</button>
	);
}
