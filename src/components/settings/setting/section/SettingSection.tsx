import React, {ReactNode} from 'react';
import './SettingSection.scss';
import block from '../../../../styles/bem';

const b = block('setting-section');

interface Props {
	children: ReactNode;
}

export default function SettingSection(props: Props) {
	const {children} = props;

	return <div className={b()}>{children}</div>;
}
