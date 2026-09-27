import {cn} from '@/util/cn';
import React, {ReactNode} from 'react';

interface Props {
	title: string;
	className?: string;
	description?: string;
	children: ReactNode;
}

export default function StatSection({title, description, children, className}: Props) {
	return (
		<section className={cn('stats-section', className)} aria-label={title}>
			<div className="stats-section-heading">
				<h2>{title}</h2>
				{description && <p>{description}</p>}
			</div>
			{children}
		</section>
	);
}
