import React, {ReactNode} from 'react';
import GenericInput, {GenericInputProps, InputProps, inputClassNames} from '@/components/common/inputs/generic_input/GenericInput';
import Icon from '@/components/common/inputs/generic_input/Icon';
import {cn} from '@/util/cn';

interface Props extends GenericInputProps<HTMLInputElement> {
	icon?: ReactNode;
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
					<div className="relative w-full">
						<Icon
							icon={icon}
							success={props.success}
							warning={props.warning}
							error={!!props.error}
							className="absolute top-px z-10 ml-0.75 box-border flex h-full w-7.5 items-center justify-center"
						/>
						<input
							step={step}
							type={type || 'text'}
							ref={ref}
							className={cn(inputClassNames, {'pl-7.5': !!icon})}
							{...inputProps}
						/>
					</div>
				)}
			/>
		</div>
	);
}
