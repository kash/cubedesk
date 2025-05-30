import {Lock} from '@phosphor-icons/react/dist/ssr';
import React, {ReactNode} from 'react';
import Tag from '../tag/Tag';

interface Props {
	tagText?: string;
	noPadding?: boolean;
	children: ReactNode;
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Cover(props: Props) {
	const {onClick, tagText, children, noPadding} = props;

	function clickContainer(e: React.MouseEvent<HTMLDivElement>) {
		e.preventDefault();

		if (onClick) {
			onClick(e);
		}
	}

	const classes = ['container', 'min-h-min', 'cursor-pointer', 'relative'];
	if (!noPadding) {
		classes.push('p-4');
	}

	return (
		<div className={classes.join(' ')} onClick={clickContainer}>
			<div className="bg-module/80 absolute top-0 left-0 z-30 h-full min-h-min w-full rounded-xl">
				<div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 py-8">
					<Tag large text={tagText} icon={<Lock weight="fill" />} textColor="primary" />
				</div>
			</div>
			{children}
		</div>
	);
}
