import React, {ReactNode} from 'react';
import './TextBody.scss';
import block from '../../../styles/bem';

const b = block('common-text-body');

interface Props {
	title?: string;
	children: ReactNode;
}

export default function TextBody(props: Props) {
	const {children, title} = props;

	let titleBody = null;
	let titleDivider = null;

	if (title) {
		titleBody = <h1 className={b('title')}>{title}</h1>;
		titleDivider = <hr />;
	}

	return (
		<div className={b()}>
			{titleBody}
			{titleDivider}
			<div className={b('body')}>{children}</div>
		</div>
	);
}
