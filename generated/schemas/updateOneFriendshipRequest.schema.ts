import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipRequestSelectObjectSchema as FriendshipRequestSelectObjectSchema } from './objects/FriendshipRequestSelect.schema';
import { FriendshipRequestIncludeObjectSchema as FriendshipRequestIncludeObjectSchema } from './objects/FriendshipRequestInclude.schema';
import { FriendshipRequestUpdateInputObjectSchema as FriendshipRequestUpdateInputObjectSchema } from './objects/FriendshipRequestUpdateInput.schema';
import { FriendshipRequestUncheckedUpdateInputObjectSchema as FriendshipRequestUncheckedUpdateInputObjectSchema } from './objects/FriendshipRequestUncheckedUpdateInput.schema';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './objects/FriendshipRequestWhereUniqueInput.schema';

export const FriendshipRequestUpdateOneSchema: z.ZodType<Prisma.FriendshipRequestUpdateArgs> = z.object({ select: FriendshipRequestSelectObjectSchema.optional(), include: FriendshipRequestIncludeObjectSchema.optional(), data: z.union([FriendshipRequestUpdateInputObjectSchema, FriendshipRequestUncheckedUpdateInputObjectSchema]), where: FriendshipRequestWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FriendshipRequestUpdateArgs>;

export const FriendshipRequestUpdateOneZodSchema = z.object({ select: FriendshipRequestSelectObjectSchema.optional(), include: FriendshipRequestIncludeObjectSchema.optional(), data: z.union([FriendshipRequestUpdateInputObjectSchema, FriendshipRequestUncheckedUpdateInputObjectSchema]), where: FriendshipRequestWhereUniqueInputObjectSchema }).strict();