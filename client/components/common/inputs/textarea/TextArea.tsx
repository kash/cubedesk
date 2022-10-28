import React from 'react';
import './TextArea.scss';
import GenericInput, {GenericInputProps, InputProps} from '../generic_input/GenericInput';
import block from '../../../../styles/bem';
import TextareaAutosize from 'react-textarea-autosize';

interface Props extends GenericInputProps<HTMLTextAreaElement> {
	autoSize?: boolean;
}

const b = block('common-textarea');

export default function TextArea(props: InputProps<Props>) {
	const {maxLength, autoSize} = props;
	const ref = React.useRef<HTMLTextAreaElement>(null);

	let maxLengthSpan = null;
	if (maxLength && ref.current) {
		const valLength = ref.current.value.length;
		maxLengthSpan = (
			<span className={b('max-length', {over: valLength >= maxLength})}>
				{(maxLength - valLength).toLocaleString()}
			</span>
		);
	}

	return (
		<GenericInput
			{...props}
			inputWrapper={(inputProps) => (
				<div className={b()}>
					{autoSize ? (
						<TextareaAutosize className={b({autoSize})} ref={ref} {...inputProps} />
					) : (
						<textarea className={b()} ref={ref} {...inputProps} />
					)}

					{maxLengthSpan}
				</div>
			)}
		/>
	);
}
