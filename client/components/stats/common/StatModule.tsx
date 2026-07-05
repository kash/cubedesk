import React, {ReactNode} from 'react';
import CSS from 'csstype';
import classNames from 'classnames';

interface Props {
	style?: CSS.Properties;
	className?: string;
	children: ReactNode;
	rowSpan?: number;
	colSpan?: number;
}

export default function StatModule(props: Props) {
	const {children, className, rowSpan, colSpan} = props;

	const style: CSS.Properties = props.style || {};
	if (rowSpan) {
		style.gridRow = `span ${rowSpan}`;
	}
	if (colSpan) {
		style.gridColumn = `span ${colSpan}`;
	}

	return (
		<div style={style} className={classNames('box-border w-full rounded-[20px] bg-module p-[25px]', className)}>
			{children}
		</div>
	);
}
