import classNames from 'classnames';
import React, {CSSProperties, ReactNode} from 'react';

interface Props {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
	rowSpan?: number;
	colSpan?: number;
}

export default function StatModule(props: Props) {
	const {children, className, rowSpan, colSpan} = props;

	const style: CSSProperties = props.style || {};
	if (rowSpan) {
		style.gridRow = `span ${rowSpan}`;
	}
	if (colSpan) {
		style.gridColumn = `span ${colSpan}`;
	}

	return (
		<div style={style} className={classNames('stats-card', className)}>
			{children}
		</div>
	);
}
