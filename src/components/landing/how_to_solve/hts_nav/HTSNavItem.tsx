import React from 'react';
import {Link} from 'react-router-dom';

export interface HTSNavItemProps {
	id: string;
	stepNumber: number;
	stepName: string;
	selected?: boolean;
}

export default function HTSNavItem(props: HTSNavItemProps) {
	const {stepName, id, stepNumber, selected} = props;

	const classes = ['py-3 px-3 w-full table rounded-md mb-3'];
	if (selected) {
		classes.push('bg-green-500', 'shadow-md', 'text-white', 'font-bold');
	}

	return (
		<Link to={`/how-to-solve/${id}`} className={classes.join(' ')}>
			<span className="mr-1 opacity-70 text-inherit">{stepNumber}.</span>
			<span>{stepName}</span>
		</Link>
	);
}
