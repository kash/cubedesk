import React, {ReactNode} from 'react';
import block from '../../../styles/bem';
import './LandingInfo.scss';

interface Props {
	children: ReactNode;
}

const b = block('landing-info');

export default function LandingInfo(props: Props) {
	return (
		<div className="mx-auto mt-16 pb-40 max-w-4xl w-full px-5">
			<div className={b()}>{props.children}</div>
		</div>
	);
}
