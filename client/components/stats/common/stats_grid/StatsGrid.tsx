import React, {ReactNode} from 'react';
import './StatsGrid.scss';
import block from '../../../../styles/bem';
import CSS from 'csstype';
import ProOnly from '../../../common/pro_only/ProOnly';

const b = block('stats-grid');

interface Props {
	rows: number;
	columns: number;
	proOnly?: boolean;
	children: ReactNode;
	style?: CSS.Properties;
	className?: string;
}

export default function StatsGrid(props: Props) {
	const {children, rows, proOnly, columns} = props;

	return (
		<ProOnly ignore={!proOnly} noPadding>
			<div
				className={b({}).mix(props.className || '')}
				style={{
					gridTemplateColumns: `repeat(${columns}, 1fr)`,
					gridTemplateRows: `repeat(${rows}, 1fr)`,
					...props.style,
				}}
			>
				{children}
			</div>
		</ProOnly>
	);
}
