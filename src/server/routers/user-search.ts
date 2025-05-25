import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { z } from 'zod';
import { getPaginatedResponse, PaginatedRequestInput } from '../utils/pagination/paginated_response';
import { publicUserInclude } from '../models/user_account';

// Input schema for pagination and search
const PaginationArgsInputSchema = z.object({
  page: z.number().min(0).default(0),
  pageSize: z.number().min(1).max(100).default(25),
  searchQuery: z.string().min(0).max(250).default(''),
});

// Convert page-based pagination to skip/take
function convertPaginationArgs(pageArgs: { page: number; pageSize: number; searchQuery: string }) {
  return {
    take: pageArgs.pageSize,
    skip: pageArgs.page * pageArgs.pageSize,
    searchQuery: pageArgs.searchQuery,
  };
}

export const userSearchRouter = createTRPCRouter({
  search: publicProcedure
    .input(PaginationArgsInputSchema)
    .query(async ({ input }) => {
      const paginationArgs = convertPaginationArgs(input);
      
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