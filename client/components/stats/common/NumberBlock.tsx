import StatModule from '@/components/stats/common/StatModule';
import {Button} from '@/components/ui/button';
import {cn} from '@/util/cn';
import React, {CSSProperties, ReactNode} from 'react';

interface Props {
	icon: ReactNode;
	title: string;
	color: string;
	value: string | number;
	darkIcon?: boolean;
	rowSpan?: number;
	vertical?: boolean;
	colSpan?: number;
	noPadding?: boolean;
	small?: boolean;
	style?: CSSProperties;
	center?: boolean;
	large?: boolean;
	children?: ReactNode;
	onClick?: () => void;
}

export default function NumberBlock(props: Props) {
	const {icon, color, title, onClick, large, noPadding, children, small, rowSpan, colSpan} =
		props;
	const value = typeof props.value === 'number' ? props.value.toLocaleString() : props.value;
	const content = (
		<>
			<span className="stats-number-label">
				<span className="stats-number-icon" aria-hidden="true">
					{icon}
				</span>
				<span>{title}</span>
			</span>
			<span className="stats-number-value">{value ?? '—'}</span>
		</>
	);

	return (
		<StatModule
			className={cn('stats-number', {
				'stats-number-small': small,
				'stats-number-large': large,
				'stats-number-unpadded': noPadding,
			})}
			style={
				{
					'--stat-accent': color,
					gridRow: rowSpan ? `span ${rowSpan}` : undefined,
					gridColumn: colSpan ? `span ${colSpan}` : undefined,
					...props.style,
				} as CSSProperties
			}
		>
			{onClick ? (
				<Button
					variant="ghost"
					type="button"
					className="stats-number-content stats-number-button h-auto flex-col items-stretch justify-start gap-5 p-0 font-normal whitespace-normal hover:bg-transparent"
					onClick={onClick}
				>
					{content}
				</Button>
			) : (
				<div className="stats-number-content">{content}</div>
			)}
			{children}
		</StatModule>
	);
}
