import React from 'react';
import './Input.scss';
import block from '../../../styles/bem';
import GenericInput, {GenericInputProps, InputProps} from '../old_generic_input/GenericInput';
import Icon from '../old_generic_input/icon/Icon';

const b = block('common-input');

interface Props extends GenericInputProps<HTMLInputElement> {
	noResetButton?: boolean;
	icon?: string;
}

export default function OldInput(props: InputProps<Props>) {
	const {icon} = props;
	const ref = React.useRef<HTMLInputElement>(null);

	const input = <input ref={ref} className={b()} />;

	return (
		<GenericInput
			{...props}
			input={input}
			inputWrapper={(child) => (
				<div className={b({resetbutton: !props.noResetButton})}>
					<Icon icon={icon} success={props.success} warning={props.warning} error={!!props.error} />
					{child}
				</div>
			)}
		/>
	);
}
