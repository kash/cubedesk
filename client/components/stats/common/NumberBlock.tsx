import React, {ReactNode} from 'react';
import CSS from 'csstype';
import classNames from 'classnames';
import StatModule from '@/components/stats/common/StatModule';
import {useMe} from '@/util/hooks/useMe';
import {isNotPro} from '@/util/pro';

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
			className={classNames(
				'flex h-full w-full flex-col justify-between text-inherit transition-all duration-100 ease-in-out',
				{
					'justify-center': center,
					'!p-0': noPadding,
					'!px-[15px] !py-2.5': small,
				}
			)}
			style={style}
		>
			<div className={classNames('flex w-full items-center text-inherit', vertical ? 'flex-col' : 'flex-row')}>
				<button
					className={classNames('ml-2.5 flex cursor-default flex-col items-start text-inherit', {
						'cursor-pointer': !!onClick,
					})}
					onClick={onClick}
				>
					<div className="mb-2.5 flex flex-row items-center">
						<div
							className={classNames(
								'flex h-7 w-7 items-center justify-center rounded-[5px] text-[1.2rem] text-tmo-background',
								{
									'!text-tm-background': darkIcon,
								}
							)}
							style={{backgroundColor: color}}
						>
							{icon}
						</div>
						<p className="m-0 ml-2.5 text-left text-base font-medium text-text opacity-90">{title}</p>
					</div>
					<span
						className={classNames(
							'table border-b-[3px] border-transparent font-["Kontora",Poppins,Arial,"Helvetica_Neue",Helvetica,sans-serif] text-[2.3rem] font-bold leading-[2.2rem] text-inherit',
							{
								'text-[1.4rem] leading-[0.9rem]': small,
								'text-[3.7rem] leading-[4rem]': large,
								'hover:border-current': !!onClick,
							}
						)}
					>
						{value}
					</span>
				</button>
			</div>
			{children}
		</StatModule>
	);
}
