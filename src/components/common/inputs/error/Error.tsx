import React from 'react';
import './Error.scss';
import block from '../../../../styles/bem';

interface Props {
	text: string;
}

const b = block('common-error')

export default function Error(props: Props) {
	const {text} = props;

	if (!text) {
		return null;
	}

	return <div className={b()}>{text}</div>;
}
