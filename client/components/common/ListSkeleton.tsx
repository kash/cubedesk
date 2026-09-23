import React from 'react';
import {useOptionalI18n} from '@/i18n';

export default function ListSkeleton() {
	const {t} = useOptionalI18n();
	return (
		<div role="status" aria-label={t('Loading results')} className="w-full">
			<span className="sr-only">{t('Loading results')}…</span>
			<div aria-hidden className="motion-safe:animate-pulse">
				<div className="bg-text/10 mb-3 h-4 w-28 rounded" />
				{Array.from({length: 10}, (_, index) => (
					<div
						key={index}
						className="border-text/15 bg-module mb-2 flex min-h-[84px] items-center gap-3 rounded border p-4"
					>
						<div className="bg-text/10 size-[50px] shrink-0 rounded-full" />
						<div className="flex-1 space-y-2">
							<div className="bg-text/10 h-4 w-28 rounded sm:w-40" />
							<div className="bg-text/5 h-3 w-20 rounded" />
						</div>
						<div className="bg-text/10 h-7 w-16 rounded" />
					</div>
				))}
			</div>
		</div>
	);
}
