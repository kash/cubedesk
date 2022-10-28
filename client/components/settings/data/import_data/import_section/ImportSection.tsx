import React, {ReactNode} from 'react';
import './ImportSection.scss';
import block from '../../../../../styles/bem';

const b = block('import-section');

interface Props {
	title?: string;
	description?: string;
	children?: ReactNode;
}

export default function ImportSection(props: Props) {
	const {title, description, children} = props;

	return (
		<div className={b()}>
			{title && <h3>{title}</h3>}
			{description && <p>{description}</p>}
			{children}
		</div>
	);
}
