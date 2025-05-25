import React from 'react';
import './ProBadge.scss';
import block from '../../../../styles/bem';

const b = block('pro-badge');

interface Props {
	small?: boolean;
	tiny?: boolean;
	large?: boolean;
}

export default function ProBadge(props: Props) {
	const {small, large, tiny} = props;

	return (
		<div
			className={b({
				small,
				large,
				tiny,
			})}
		>
			PRO
		</div>
	);
}
