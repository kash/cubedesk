import React, {ReactNode} from 'react';

interface Props {
	children: ReactNode;
}

export default function FeatureList(props: Props) {
	return <div className="w-full">{props.children}</div>;
}
