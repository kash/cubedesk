import React from 'react';
import './Icon.scss';
import block from '../../../../../styles/bem';

const b = block('common-icon');

interface Props {
	icon: JSX.Element;
	warning?: boolean;
	success?: boolean;
	error?: boolean;
}

export default function Icon(props: Props) {
	const {icon, warning, error, success} = props;

	if (!icon) {
		return null;
	}

	return (
		<span
			className={b({
				success,
				warning,
				error,
			})}
		>
			{icon}
		</span>
	);
}
