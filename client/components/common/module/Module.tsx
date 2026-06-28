import React, {ReactNode} from 'react';

import block from '../../../styles/bem';
import CSS from 'csstype';
import classNames from 'classnames';
import './Module.scss';

const b = block('module');

interface Props {
	children: ReactNode;
	className?: string;
	smallPadding?: boolean;
	padding?: string;
	square?: boolean;
}

export default function Module(props: Props) {
	const {square, padding, children, smallPadding, className} = props;

	const styles: CSS.Properties = {};
	if (smallPadding) {
		styles.padding = '15px';
	}
	if (padding) {
		styles.padding = padding;
	}

	return (
		<div className={classNames(b({square}), className)} style={styles}>
				<div className={b('body')}>{children}</div>
		</div>
	);
}
