import React, {ReactNode} from 'react';
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
			<div className="absolute rounded-xl min-h-min bg-module/80 w-full h-full z-30 top-0 left-0">
				<div className="absolute z-30 top-1/2 py-8 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<Tag
						large
						text={tagText}
						icon="ph-lock-fill"
						textColor="primary"
					/>
				</div>
			</div>
			{children}
		</div>
	);
}
