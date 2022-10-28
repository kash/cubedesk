import React from 'react';
import './HorizontalLine.scss';
import block from '../../../styles/bem';

const b = block('horizontal-line');

interface Props {
	text?: string;
}

export default function HorizontalLine(props: Props) {
	const {text} = props;

	let textBody = null;
	if (text) {
		textBody = <span>{text}</span>;
	}

	return <div className={b()}>{textBody}</div>;
}
