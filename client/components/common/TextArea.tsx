import React, {ReactNode} from 'react';
import GenericInput, {GenericInputProps, InputProps, inputClassNames} from '@/components/common/inputs/generic_input/GenericInput';
import TextareaAutosize from 'react-textarea-autosize';
import {cn} from '@/util/cn';

interface Props extends GenericInputProps<HTMLTextAreaElement> {
	autoSize?: boolean;
}

const textareaClassNames = cn(inputClassNames, 'max-h-96 min-h-24 resize-y leading-snug');

export default function TextArea(props: InputProps<Props>) {
	const {maxLength, autoSize} = props;
	const ref = React.useRef<HTMLTextAreaElement>(null);

	let maxLengthSpan: ReactNode = null;
	if (maxLength && ref.current) {
		const valLength = ref.current.value.length;
		maxLengthSpan = (
			<span
				className={cn('text-sm font-medium text-text opacity-50', {
					'text-[#e53935] opacity-100': valLength >= maxLength,
				})}
			>
				{(maxLength - valLength).toLocaleString()}
			</span>
		);
	}

	return (
		<GenericInput
			{...props}
			inputWrapper={(inputProps) => (
				<div className="w-full">
					{autoSize ? (
						<TextareaAutosize
							className={cn(textareaClassNames, 'resize-none')}
							ref={ref}
							{...inputProps}
						/>
					) : (
						<textarea className={textareaClassNames} ref={ref} {...inputProps} />
					)}

					{maxLengthSpan}
				</div>
			)}
		/>
	);
}
