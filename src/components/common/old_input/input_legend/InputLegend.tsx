import React from 'react';
import './InputLegend.scss';
import block from '../../../../styles/bem';
import Tag from '../../tag/Tag';

const b = block('common-input-legend');

interface Props {
	text: string;
	tag?: boolean;
	optional?: boolean;
}

export default function InputLegend(props: Props) {
	const {text, tag, optional} = props;

	if (!text) {
		return null;
	}

	let body;
	let optionalSpan = null;

	if (tag) {
		body = <Tag text={text} small />;
	} else {
		body = <legend className={b()}>{text}</legend>;
	}

	if (optional) {
		optionalSpan = <span className={b('optional')}>Optional</span>;
	}

	return (
		<div className={b('wrapper')}>
			{body}
			{optionalSpan}
		</div>
	);
}
