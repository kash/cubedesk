import {cn} from '@/util/cn';
import Color from 'color';
import {CSSProperties, ReactNode} from 'react';

interface Props {
	text?: ReactNode;
	red?: boolean;
	color?: string;
	orange?: boolean;
	backgroundColor?: string;
	small?: boolean;
	purple?: boolean;
	green?: boolean;
	className?: string;
	icon?: ReactNode;
}

export default function Emblem(props: Props) {
	const {text, red, color, orange, backgroundColor, small, purple, green, className, icon} = props;

	const styles: CSSProperties = {};
	const spanStyle: CSSProperties = {};
	if (red) {
		styles.backgroundColor = '#ffcdd2';
		spanStyle.color = '#b71c1c';
	} else if (orange) {
		styles.backgroundColor = '#ffe0b2';
		spanStyle.color = '#bf360c';
	} else if (green) {
		styles.backgroundColor = '#9add9d';
		spanStyle.color = '#16561b';
	} else if (purple) {
		styles.backgroundColor = '#b39ddb';
		spanStyle.color = '#391d8c';
	}

	if (color) {
		spanStyle.color = color;
		styles.backgroundColor = backgroundColor || Color(color).lighten(4).toString();
	}

	let span: ReactNode = null;
	if (text) {
		span = <span className="table whitespace-pre">{text}</span>;
	}

	return (
		<div
			className={cn(
				'mb-1 table w-auto rounded-full bg-button px-2.5 py-1',
				small && 'px-2 py-0.5',
				!text && 'flex h-7 w-7 items-center justify-center p-0',
				className
			)}
			style={styles}
		>
			<div
				className={cn('flex flex-row items-center font-medium text-text', small ? 'text-sm' : 'text-base')}
				style={spanStyle}
			>
				{icon}
				{span}
			</div>
		</div>
	);
}
