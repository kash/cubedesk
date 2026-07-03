export interface PaginationArgs {
	page: number;
	pageSize: number;
	searchQuery: string;
}

export interface PaginationArgsInput {
	page: number;
	pageSize: number;
	searchQuery: string;
}

export interface PaginationOutput<T> {
	items: T[];
	total: number;
	hasMore: boolean;
}
