import React from 'react';
import './SectionDivider.scss';
import block from '../../../../styles/bem';

const b = block('landing-section-divider');

interface Props {
	color?: string;
	reversed?: boolean;
	lines?: number;
	sameWidth?: boolean;
}

export default function SectionDivider(props: Props) {
	const {reversed, sameWidth, color} = props;

	const lines = props.lines || 3;

	// Amount that we need to subtract from opacity for each line. Minimum is 0.3;
	const opacityStep = 0.8 / lines;
	const widthStep = 0.4 / lines;

	const body = [];
	for (let i = 0; i < lines; i++) {
		let index = i;
		if (reversed) {
			index = lines - i - 1;
		}

		const opacity = 1 - i * opacityStep;
		let width = (1 - index * widthStep) * 100;

		if (sameWidth) {
			width = 100;
		}

		body.push(
			<hr key={index} style={{opacity, width: `${width}%`, backgroundColor: color}} className={b('line')} />
		);
	}

	return <div className={b({reversed})}>{body}</div>;
}
