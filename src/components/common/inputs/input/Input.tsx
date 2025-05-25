import React from 'react';
import './Input.scss';
import block from '../../../../styles/bem';
import GenericInput, {GenericInputProps, InputProps} from '../generic_input/GenericInput';
import Icon from '../generic_input/icon/Icon';

const b = block('common-input');

interface Props extends GenericInputProps<HTMLInputElement> {
	icon?: JSX.Element;
	step?: number;
	type?: React.HTMLInputTypeAttribute;
}

export default function Input(props: InputProps<Props>) {
	const {icon, type, step} = props;
	const ref = React.useRef<HTMLInputElement>(null);

	return (
		<div className="mb-2">
			<GenericInput
				{...props}
				inputWrapper={(inputProps) => (
					<div className={b()}>
						<Icon icon={icon} success={props.success} warning={props.warning} error={!!props.error} />
						<input
							step={step}
							type={type || 'text'}
							ref={ref}
							className={b({icon: !!icon})}
							{...inputProps}
						/>
					</div>
				)}
			/>
		</div>
	);
}
