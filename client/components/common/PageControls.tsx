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
	className,
}: {
	page: number;
	totalPages: number;
	hasMore: boolean;
	onPrevious: () => void;
	onNext: () => void;
	className?: string;
}) {
	return (
		<Pagination className={className}>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious asChild>
						<button type="button" disabled={page === 0} onClick={onPrevious}>
							<CaretLeft aria-hidden />
							Previous
						</button>
					</PaginationPrevious>
				</PaginationItem>
				<PaginationItem>
					<span
						aria-live="polite"
						className="text-text/60 px-3 text-sm whitespace-nowrap"
					>
						Page {page + 1} of {Math.max(1, totalPages)}
					</span>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext asChild>
						<button type="button" disabled={!hasMore} onClick={onNext}>
							Next
							<CaretRight aria-hidden />
						</button>
					</PaginationNext>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
