import React from 'react';
import './Icon.scss';
import block from '../../../../styles/bem';

const b = block('common-icon');

interface Props {
	icon: string; // Full class name. Must contain fa(r/b/d) ...
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
		<i
			className={b({
				success,
				warning,
				error,
			}).mix(icon)}
		/>
	);
}
