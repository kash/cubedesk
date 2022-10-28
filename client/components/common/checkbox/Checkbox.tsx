import React, {useRef} from 'react';
import './Checkbox.scss';
import block from '../../../styles/bem';

const b = block('common-checkbox');

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
		textBody = <span>{text}</span>;
	}

	return (
		<div className={b({noMargin, noWrap})}>
			<input
				id={id.current}
				name={name}
				onChange={onChange}
				checked={checked}
				disabled={disabled}
				type="checkbox"
			/>
			<label htmlFor={id.current}>{textBody}</label>
		</div>
	);
}
