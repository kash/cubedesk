import classNames from 'classnames';
import CSS from 'csstype';
import React, {ReactNode} from 'react';

interface Props {
	rows: number;
	columns: number;
	children: ReactNode;
	style?: CSS.Properties;
	className?: string;
}

export default function StatsGrid(props: Props) {
	const {children, rows, columns} = props;

	return (
		<div
			className={classNames('grid h-full w-full gap-3', props.className)}
			style={{
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gridTemplateRows: `repeat(${rows}, 1fr)`,
				...props.style,
			}}
		>
			{children}
		</div>
	);
}
