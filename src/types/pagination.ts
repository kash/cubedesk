import {z} from 'zod';

export type PaginationResult<T> = {
	items: T[];
	hasMore: boolean;
	cursor: string | null;
};
