import {cn} from '@/util/cn';
import CSS from 'csstype';
import React, {ReactNode} from 'react';

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
		<div
			className={cn(
				'relative box-border w-full overflow-visible rounded-2xl bg-module p-5.5',
				square && 'rounded-none border-3 border-tmo-background/15 p-5',
				className
			)}
			style={styles}
		>
			<div className="h-full w-full">{children}</div>
		</div>
	);
}
