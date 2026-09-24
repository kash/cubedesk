import {cn} from '@/util/cn';
import React, {ReactNode} from 'react';
import {useI18n} from '@/i18n';

interface Props {
	title: string;
	className?: string;
	description?: string;
	children: ReactNode;
}

export default function StatSection({title, description, children, className}: Props) {
	const {t} = useI18n();
	return (
		<section className={cn('stats-section', className)} aria-label={t(title)}>
			<div className="stats-section-heading">
				<h2>{t(title)}</h2>
				{description && <p>{t(description)}</p>}
			</div>
			{children}
		</section>
	);
}
