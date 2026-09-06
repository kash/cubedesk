import {Badge} from '@/components/ui/badge';
import {Lock} from 'phosphor-react';
import React, {ReactNode} from 'react';

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
			<div className="bg-module/80 absolute top-0 left-0 z-30 h-full min-h-min w-full rounded-xl">
				<div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 py-8">
					<Badge size="button" variant="unfilled" className="text-primary">
						{tagText}
						<Lock weight="fill" />
					</Badge>
				</div>
			</div>
			{children}
		</div>
	);
}
