import {CSSProperties, ReactNode} from 'react';
import Color from 'color';
import './Emblem.scss';

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

	let classList = 'cd-common__emblem';
	if (className) {
		classList += ' ' + className;
	}

	if (small) {
		classList += ' cd-common__emblem--small';
	}

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
		span = <span>{text}</span>;
	} else {
		classList += ' cd-common__emblem__icon';
	}

	return (
		<div className={classList} style={styles}>
			<div className="cd-common__emblem__body" style={spanStyle}>
				{icon}
				{span}
			</div>
		</div>
	);
}
