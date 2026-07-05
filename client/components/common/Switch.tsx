import InputLegend from '@/components/common/inputs/input/InputLegend';
import {cn} from '@/util/cn';
import React, {ReactNode} from 'react';

interface Props {
	on: boolean;
	small?: boolean;
	legend?: string;
	onChange: (newValue: boolean) => any;
}

export default function Switch(props: Props) {
	const {on, small, legend, onChange} = props;

	function toggleSwitch() {
		onChange(!on);
	}

	let inputLegend: ReactNode = null;
	if (props.legend) {
		inputLegend = <InputLegend text={legend} />;
	}

	return (
		<div className="flex flex-col items-end">
			{inputLegend}
			<button
				type="button"
				className={cn(
					'bg-text/15 relative h-[30px] w-[60px] rounded-full',
					small && 'h-5 w-[39px]',
					on && 'bg-primary',
				)}
				onClick={toggleSwitch}
			>
				<span
					className={cn(
						'absolute top-1/2 table h-[25px] w-[25px] -translate-y-1/2 rounded-full bg-white shadow-md',
						small && 'h-[15px] w-[15px]',
						on ? 'right-1 left-auto' : 'left-1',
					)}
				/>
			</button>
		</div>
	);
}
