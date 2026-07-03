import React, {ReactNode} from 'react';
import CSS from 'csstype';
import classNames from 'classnames';
import ProOnly from '@/components/common/pro_only/ProOnly';

interface Props {
	title: string;
	className?: string;
	minWidth?: string;
	description?: string;
	proOnly?: boolean;
	children: ReactNode;
	rowSpan?: number | string;
	colSpan?: number | string;
}

export default function StatSection(props: Props) {
	const {title, minWidth, proOnly, description, children, className, rowSpan, colSpan} = props;

	let desc: ReactNode = null;
	if (description) {
		desc = <p>{description}</p>;
	}

	const style: CSS.Properties = {};
	if (rowSpan) {
		style.gridRow = `span ${rowSpan}`;
	}
	if (colSpan) {
		style.gridColumn = `span ${colSpan}`;
	}
	if (minWidth) {
		style.minWidth = minWidth;
	}

	return (
		<div className={classNames('grid h-full w-full grid-rows-[40px_minmax(0,auto)] gap-[5px]', className)} style={style}>
			<div className="mb-0">
				<h2 className="m-0 p-0 font-['Kontora',Poppins,Arial,'Helvetica_Neue',Helvetica,sans-serif] text-[1.7rem] font-bold">
					{title}
				</h2>
				{desc}
			</div>
			<ProOnly ignore={!proOnly} noPadding>
				{children}
			</ProOnly>
		</div>
	);
}
