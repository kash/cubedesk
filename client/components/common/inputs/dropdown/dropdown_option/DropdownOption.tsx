import React from 'react';
import {Link} from 'react-router-dom';
import './DropdownOption.scss';
import block from '../../../../../styles/bem';
import Checkbox from '../../../checkbox/Checkbox';

const b = block('dropdown-option');

export interface IDropdownOption {
	text: string;
	checkbox?: boolean;
	link?: string;
	icon?: JSX.Element;
	on?: boolean;
	disabled?: boolean;
	hidden?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

interface Props {
	option: IDropdownOption;
}

export default function DropdownOption(props: Props) {
	const {text, hidden, checkbox, onChange, disabled, link, icon, on, onClick} = props.option;

	const body = (
		<>
			<span>{text}</span>
			{icon}
		</>
	);

	if (hidden) {
		return null;
	}

	if (link) {
		if (link.startsWith('http')) {
			return (
				<a className={b({on})} href={link}>
					{body}
				</a>
			);
		} else {
			return (
				<Link className={b({on})} to={link}>
					{body}
				</Link>
			);
		}
	} else if (checkbox) {
		return <Checkbox onChange={onChange} text={text} checked={on} />;
	} else {
		return (
			<button disabled={disabled} className={b({on})} onClick={onClick}>
				{body}
			</button>
		);
	}
}
