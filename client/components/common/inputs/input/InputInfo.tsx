import React, {ReactNode} from 'react';

interface Props {
	text?: ReactNode;
}

export default function InputInfo(props: Props) {
	const {text} = props;

	if (!text) {
		return null;
	}

	return <span className="table text-sm text-text opacity-60">{text}</span>;
}
