import {createTRPCRouter, publicProcedure} from '@/server/trpc';
import {z} from 'zod';
import {getPaginatedResponse, PaginatedRequestInput} from '../utils/pagination';
import {publicUserInclude} from '../models/user_account';

export const userSearchRouter = createTRPCRouter({
	search: publicProcedure
		.input(
			z.object({
				page: z.number().min(0).default(0),
				pageSize: z.number().min(1).max(100).default(25),
				searchQuery: z.string().min(0).max(250).default(''),
			}),
		)
		.query(async ({input}) => {
			// Convert page-based pagination to skip/take
			const paginationArgs = {
				take: input.pageSize,
				skip: input.page * input.pageSize,
				searchQuery: input.searchQuery,
			};

			const requestInput: PaginatedRequestInput = {
				paginationArgs,
				tableName: 'userAccount',
				prismaPayload: {
					where: {
						username: {
							contains: paginationArgs.searchQuery,
							mode: 'insensitive',
						},
					},
					...publicUserInclude,
				},
			};

			return getPaginatedResponse(requestInput);
		}),
});
