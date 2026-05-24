import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipSelectObjectSchema as FriendshipSelectObjectSchema } from './objects/FriendshipSelect.schema';
import { FriendshipIncludeObjectSchema as FriendshipIncludeObjectSchema } from './objects/FriendshipInclude.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './objects/FriendshipWhereUniqueInput.schema';

export const FriendshipFindUniqueSchema: z.ZodType<Prisma.FriendshipFindUniqueArgs> = z.object({ select: FriendshipSelectObjectSchema.optional(), include: FriendshipIncludeObjectSchema.optional(), where: FriendshipWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FriendshipFindUniqueArgs>;

export const FriendshipFindUniqueZodSchema = z.object({ select: FriendshipSelectObjectSchema.optional(), include: FriendshipIncludeObjectSchema.optional(), where: FriendshipWhereUniqueInputObjectSchema }).strict();