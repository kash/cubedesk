import React from 'react';

interface Props {
	children: React.ReactNode;
}

export default function StartInstructions(props: Props) {
	return <div className="w-full text-center text-[0.88rem] text-text/50">{props.children}</div>;
}
