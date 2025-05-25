import React, {ReactNode} from 'react';
import './ModalHeader.scss';
import block from '../../../../styles/bem';

const b = block('modal-header');

interface Props {
	title?: ReactNode;
	description?: ReactNode;
	topBody?: ReactNode;
}

export default function ModalHeader(props: Props) {
	const {title, description, topBody} = props;

	if (!title && !description) {
		return null;
	}

	return (
		<div className={b()}>
			{topBody}
			{title ? <h2 className={b('title')}>{title}</h2> : null}
			{description ? <p className={b('description')}>{description}</p> : null}
		</div>
	);
}
