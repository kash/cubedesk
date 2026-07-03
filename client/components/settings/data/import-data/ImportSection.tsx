import React, {ReactNode} from 'react';

interface Props {
	title?: string;
	description?: string;
	children?: ReactNode;
}

export default function ImportSection(props: Props) {
	const {title, description, children} = props;

	return (
		<div>
			{title && <h3 className="text-[1.3rem]">{title}</h3>}
			{description && <p className="mb-2.5 text-[1.1rem] text-text">{description}</p>}
			{children}
		</div>
	);
}
