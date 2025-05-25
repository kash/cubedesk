import React, {ReactNode} from 'react';
import './StatModule.scss';
import block from '../../../../styles/bem';
import CSS from 'csstype';
import ProOnly from '../../../common/pro_only/ProOnly';

const b = block('stat-module');

interface Props {
	style?: CSS.Properties;
	className?: string;
	children: ReactNode;
	proOnly?: boolean;
	rowSpan?: number;
	colSpan?: number;
}

export default function StatModule(props: Props) {
	const {children, className, proOnly, rowSpan, colSpan} = props;

	const style: CSS.Properties = props.style || {};
	if (rowSpan) {
		style.gridRow = `span ${rowSpan}`;
	}
	if (colSpan) {
		style.gridColumn = `span ${colSpan}`;
	}

	return (
		<div style={style} className={b.mix(className)}>
			<ProOnly ignore={!proOnly} noPadding>
				{children}
			</ProOnly>
		</div>
	);
}
