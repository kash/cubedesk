import React from 'react';
import './InputLegend.scss';
import block from '../../../../../styles/bem';
import Tag from '../../../tag/Tag';

const b = block('common-input-legend');

interface Props {
	text: string;
	tag?: boolean;
	large?: boolean;
	icon?: string;
	optional?: boolean;
}

export default function InputLegend(props: Props) {
	const {text, large, icon, tag, optional} = props;

	if (!text) {
		return null;
	}

	let body;
	let optionalSpan = null;

	if (tag) {
		body = <Tag icon={icon} text={text} small />;
	} else {
		let iconBody = null;
		if (icon) {
			iconBody = <i className={icon} />;
		}

		body = (
			<legend className={b({large})}>
				{text}
				{iconBody}
			</legend>
		);
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
