import React, {ReactNode} from 'react';
import './FeatureList.scss';
import block from '../../../../styles/bem';

const b = block('landing-feature-list');

interface Props {
	children: ReactNode;
}

export default function FeatureList(props: Props) {
	return <div className={b()}>{props.children}</div>;
}
