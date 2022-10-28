import React, {ReactNode} from 'react';
import './Module.scss';
import block from '../../../styles/bem';
import CSS from 'csstype';

const b = block('module');

interface Props {
	children: ReactNode;
	smallPadding?: boolean;
	padding?: string;
	square?: boolean;
}

export default function Module(props: Props) {
	const {square, padding, children, smallPadding} = props;

	const styles: CSS.Properties = {};
	if (smallPadding) {
		styles.padding = '15px';
	}
	if (padding) {
		styles.padding = padding;
	}

	return (
		<div className={b({square})} style={styles}>
			<div className={b('body')}>{children}</div>
		</div>
	);
}
