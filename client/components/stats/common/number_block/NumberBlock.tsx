import React, {ReactNode} from 'react';
import './NumberBlock.scss';
import block from '../../../../styles/bem';
import CSS from 'csstype';
import StatModule from '../stat_module/StatModule';
import {useMe} from '../../../../util/hooks/useMe';
import {isNotPro} from '../../../../util/pro';

const b = block('number-block');

interface Props {
	icon: string;
	title: string;
	color: string;
	value: string | number;
	darkIcon?: boolean;
	rowSpan?: number;
	vertical?: boolean;
	colSpan?: number;
	noPadding?: boolean;
	small?: boolean;
	style?: CSS.Properties;
	proOnly?: boolean;
	center?: boolean;
	large?: boolean;
	children?: ReactNode;
	onClick?: () => void;
}

export default function NumberBlock(props: Props) {
	const me = useMe();

	const {
		icon,
		color,
		title,
		onClick,
		large,
		noPadding,
		darkIcon,
		vertical,
		center,
		proOnly,
		children,
		small,
		rowSpan,
		colSpan,
	} = props;

	let value;
	if (typeof props.value === 'number') {
		value = props.value.toLocaleString();
	} else {
		value = props.value;
	}

	const style: CSS.Properties = {
		color,
		...props.style,
	};
	if (rowSpan) {
		style.gridRow = `span ${rowSpan}`;
	}
	if (colSpan) {
		style.gridColumn = `span ${colSpan}`;
	}

	if (proOnly && isNotPro(me)) {
		value = '-';
	}

	return (
		<StatModule
			className={b({center, vertical, noPadding, large, small, button: !!onClick})}
			style={style}
		>
			<div className={b('body')}>
				<button className={b('value', {clickable: !!onClick})} onClick={onClick}>
					<div className={b('header')}>
						<div className={b('icon', {darkIcon})} style={{backgroundColor: color}}>
							<i className={icon} />
						</div>
						<p>{title}</p>
					</div>
					<span>{value}</span>
				</button>
			</div>
			{children}
		</StatModule>
	);
}
