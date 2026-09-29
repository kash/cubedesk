import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import {CaretLeft, CaretRight} from 'phosphor-react';
import React from 'react';
import {useTranslation} from 'react-i18next';

export default function PageControls({
	page,
	totalPages,
	hasMore,
	onPrevious,
	onNext,
	className,
}: {
	page: number;
	totalPages: number;
	hasMore: boolean;
	onPrevious: () => void;
	onNext: () => void;
	className?: string;
}) {
	const {t} = useTranslation();
	const pageLabel = t('common.pageOf', {page: page + 1, total: Math.max(1, totalPages)});

	return (
		<Pagination className={className}>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious asChild>
						<button type="button" disabled={page === 0} onClick={onPrevious}>
							<CaretLeft aria-hidden />
							{t('common.previous')}
						</button>
					</PaginationPrevious>
				</PaginationItem>
				<PaginationItem>
					<span
						aria-live="polite"
						className="text-text/60 px-3 text-sm whitespace-nowrap"
					>
						{pageLabel}
					</span>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext asChild>
						<button type="button" disabled={!hasMore} onClick={onNext}>
							{t('common.next')}
							<CaretRight aria-hidden />
						</button>
					</PaginationNext>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
