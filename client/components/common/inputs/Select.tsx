import GenericInput, {GenericInputProps, inputClassNames, InputProps} from '@/components/common/inputs/generic_input/GenericInput';
import {cn} from '@/util/cn';
import {CaretDown} from 'phosphor-react';
import React, {ReactNode} from 'react';

interface Props extends GenericInputProps<HTMLSelectElement> {
	defaultOption?: string;
	children?: ReactNode;
}

export default function Select(props: InputProps<Props>) {
	const {defaultOption, children} = props;

	let defaultOp: ReactNode = null;
	if (defaultOption) {
		defaultOp = <option value="">{defaultOption}</option>;
	}

	return (
		<GenericInput
			{...props}
			inputWrapper={(inputProps) => (
				<div className="relative w-full text-inherit">
					<select className={cn(inputClassNames, 'appearance-none pr-8')} {...inputProps}>
						{defaultOp}
						{children}
					</select>
					<CaretDown
						weight="fill"
						className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 cursor-pointer text-inherit"
					/>
				</div>
			)}
		/>
	);
}
