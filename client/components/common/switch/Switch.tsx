import React from 'react';
import './Switch.scss';
import block from '../../../styles/bem';
import InputLegend from '../inputs/input/input_legend/InputLegend';

const b = block('common-switch');

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

	let inputLegend = null;
	if (props.legend) {
		inputLegend = <InputLegend text={legend} />;
	}

	return (
		<div className={b('wrapper')}>
			{inputLegend}
			<button type="button" className={b({on, small})} onClick={toggleSwitch}>
				<span />
			</button>
		</div>
	);
}
