import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipSelectObjectSchema as FriendshipSelectObjectSchema } from './objects/FriendshipSelect.schema';
import { FriendshipIncludeObjectSchema as FriendshipIncludeObjectSchema } from './objects/FriendshipInclude.schema';
import { FriendshipUpdateInputObjectSchema as FriendshipUpdateInputObjectSchema } from './objects/FriendshipUpdateInput.schema';
import { FriendshipUncheckedUpdateInputObjectSchema as FriendshipUncheckedUpdateInputObjectSchema } from './objects/FriendshipUncheckedUpdateInput.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './objects/FriendshipWhereUniqueInput.schema';

export const FriendshipUpdateOneSchema: z.ZodType<Prisma.FriendshipUpdateArgs> = z.object({ select: FriendshipSelectObjectSchema.optional(), include: FriendshipIncludeObjectSchema.optional(), data: z.union([FriendshipUpdateInputObjectSchema, FriendshipUncheckedUpdateInputObjectSchema]), where: FriendshipWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FriendshipUpdateArgs>;

export const FriendshipUpdateOneZodSchema = z.object({ select: FriendshipSelectObjectSchema.optional(), include: FriendshipIncludeObjectSchema.optional(), data: z.union([FriendshipUpdateInputObjectSchema, FriendshipUncheckedUpdateInputObjectSchema]), where: FriendshipWhereUniqueInputObjectSchema }).strict();