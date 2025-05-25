import React, {ReactNode} from 'react';
import {Lock} from 'phosphor-react';
import Tag from '../tag/Tag';

interface Props {
	tagText?: string;
	noPadding?: boolean;
	children: ReactNode;
	onClick?: (e) => void;
}

export default function Cover(props: Props) {
	const {onClick, tagText, children, noPadding} = props;

	function clickContainer(e) {
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
			<div className="absolute top-0 left-0 z-30 h-full min-h-min w-full rounded-xl bg-module/80">
				<div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 py-8">
					<Tag large text={tagText} icon={<Lock weight="fill" />} textColor="primary" />
				</div>
			</div>
			{children}
		</div>
	);
}
