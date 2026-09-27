import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import {CaretLeft, CaretRight} from 'phosphor-react';
import React from 'react';

export default function PageControls({
	page,
	totalPages,
	hasMore,
	onPrevious,
	onNext,
	previousLabel,
	nextLabel,
	pageLabel,
	className,
}: {
	page: number;
	totalPages: number;
	hasMore: boolean;
	onPrevious: () => void;
	onNext: () => void;
	previousLabel: string;
	nextLabel: string;
	pageLabel: string;
	className?: string;
}) {
	return (
		<Pagination className={className} aria-label={pageLabel}>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious asChild aria-label={previousLabel}>
						<button type="button" disabled={page === 0} onClick={onPrevious}>
							<CaretLeft aria-hidden />

							{previousLabel}
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
					<PaginationNext asChild aria-label={nextLabel}>
						<button type="button" disabled={!hasMore} onClick={onNext}>
							{nextLabel}
							<CaretRight aria-hidden />
						</button>
					</PaginationNext>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
