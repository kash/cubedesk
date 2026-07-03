import React, {ReactNode} from 'react';

interface Props {
	text?: string;
}

export default function HorizontalLine(props: Props) {
	const {text} = props;

	let textBody: ReactNode = null;
	if (text) {
		textBody = (
			<span className="absolute left-1/2 top-1/2 flex h-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-text px-1.5 text-xs font-semibold text-button">
				{text}
			</span>
		);
	}

	return (
		<div className="relative my-6.25 flex h-0.75 w-full rounded-xs bg-tmo-background/25 opacity-70">{textBody}</div>
	);
}
