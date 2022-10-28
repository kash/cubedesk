import React, {ReactNode} from 'react';
import './InputInfo.scss'
import block from '../../../../../styles/bem';

const b = block('common-info')

interface Props {
	text?: ReactNode;
}

export default function InputInfo(props: Props) {
	const {text} = props;

	if (!text) {
		return null;
	}

	return <span className={b()}>{text}</span>;
}
