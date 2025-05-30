import {getPrismaClient, PrismaModelName} from '@/server/services/database';
import {PaginationResult} from '@/types/pagination';
import {PrismaClient} from '@prisma/client';
import {z, ZodType} from 'zod';

export const SortDirection = z.enum(['asc', 'desc']);

export const cursorSchema = z.object({
	sortField: z.string(),
	sortDirection: SortDirection,
	sortValue: z.union([z.string(), z.number(), z.boolean(), z.date(), z.null()]),
	limit: z.number().positive().optional(),
	lastId: z.union([z.string(), z.number()]).optional(),
});
type Cursor = z.infer<typeof cursorSchema>;

type SortBy = z.ZodLiteral<string> | z.ZodUnion<[z.ZodLiteral<string>, z.ZodLiteral<string>]>;

export function getPaginationInputSchema(extra: z.ZodRawShape = {}) {
	return z
		.object({
			cursor: z.string(),
		})
		.or(
			z.object({
				limit: z.number().positive().optional(),
				sortBy: z.literal('created_at'),
				direction: SortDirection.default('desc'),
				...extra,
			}),
		);
}

export function parsePaginationInput(
	input: z.infer<ReturnType<typeof getPaginationInputSchema>>,
): Cursor {
	if ('cursor' in input) {
		const decoded = Buffer.from(input.cursor, 'base64').toString();
		return cursorSchema.parse(JSON.parse(decoded));
	}

	return {
		limit: input.limit,
		sortField: input.sortBy,
		sortDirection: input.direction,
		sortValue: null,
	};
}

export async function getPaginatedResponse<
	T extends {id: string; [key: string]: string | number | boolean | Date | null},
	K extends PrismaModelName,
>(
	table: K,
	cursor: Cursor,
	options: Parameters<PrismaClient[K]['findMany']>[0] = {},
): Promise<PaginationResult<T>> {
	const prisma = getPrismaClient();

	const prismaTable = prisma[table] as PrismaClient[K];

	const limit = cursor.limit ?? 25;
	const direction = cursor.sortDirection === 'asc' ? 'gt' : 'lt';

	const whereOr: any[] = [];

	if (cursor.sortValue !== null && cursor.sortValue !== undefined) {
		whereOr.push({
			[cursor.sortField]: {
				[direction]: cursor.sortValue,
			},
		});

		if (cursor.lastId) {
			whereOr.push({
				AND: [
					{
						[cursor.sortField]: cursor.sortValue,
					},
					{
						id: {
							[direction]: cursor.lastId,
						},
					},
				],
			});
		}
	}

	// Only apply OR conditions if we have cursor values
	const where = whereOr.length > 0 ? {...options.where, OR: whereOr} : options.where;

	// As much as i hate doing this...
	const items = await (prismaTable.findMany as any)({
		...options,
		where,
		take: limit + 1,
		orderBy: [
			{
				[cursor.sortField]: cursor.sortDirection,
			},
			{
				id: cursor.sortDirection,
			},
		],
	});

	const hasMore = items.length > limit;

	const itemsToReturn = hasMore ? items.slice(0, limit) : items;

	return {
		items: itemsToReturn,
		hasMore,
		cursor: hasMore ? constructCursor(cursor, itemsToReturn) : null,
	};
}

function constructCursor<
	T extends {id: string; [key: string]: string | number | boolean | Date | null},
>(cursor: Cursor, items: T[]): string | null {
	if (items.length === 0) {
		return null;
	}

	const lastItem = items[items.length - 1];

	const nextCursor: Cursor = {
		sortDirection: cursor.sortDirection,
		sortField: cursor.sortField,
		sortValue: lastItem[cursor.sortField],
		limit: cursor.limit,
		lastId: lastItem.id,
	};

	return Buffer.from(JSON.stringify(nextCursor)).toString('base64');
}

export function getPaginationOutputSchema(itemSchema: ZodType) {
	return z.object({
		items: z.array(itemSchema),
		hasMore: z.boolean(),
		cursor: z.string().nullable(),
	});
}
