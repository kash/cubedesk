import React from 'react';
import './Battery.scss';
import block from '../../../../styles/bem';

const b = block('smart-battery');

interface Props {
	level: number;
}

export default function Battery(props: Props) {
	const {level} = props;
	let percent = '0%';
	if (typeof level === 'number') {
		percent = level + '%';
	}

	return (
		<div
			className={b({
				orange: level < 20 && level > 10,
				red: level <= 10,
			})}
		>
			<div className={b('body')}>
				<div style={{width: percent}} className={b('bar')} />
			</div>
			<div className={b('tip')} />
		</div>
	);
}
