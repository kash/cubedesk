import React from 'react';

interface Props {
	text?: string;
}

export default function Error(props: Props) {
	const {text} = props;

	if (!text) {
		return null;
	}

	return <div className="mt-1.5 table text-sm text-[#e53935]">{text}</div>;
}
