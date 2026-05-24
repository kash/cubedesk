import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipSelectObjectSchema as FriendshipSelectObjectSchema } from './objects/FriendshipSelect.schema';
import { FriendshipIncludeObjectSchema as FriendshipIncludeObjectSchema } from './objects/FriendshipInclude.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './objects/FriendshipWhereUniqueInput.schema';
import { FriendshipCreateInputObjectSchema as FriendshipCreateInputObjectSchema } from './objects/FriendshipCreateInput.schema';
import { FriendshipUncheckedCreateInputObjectSchema as FriendshipUncheckedCreateInputObjectSchema } from './objects/FriendshipUncheckedCreateInput.schema';
import { FriendshipUpdateInputObjectSchema as FriendshipUpdateInputObjectSchema } from './objects/FriendshipUpdateInput.schema';
import { FriendshipUncheckedUpdateInputObjectSchema as FriendshipUncheckedUpdateInputObjectSchema } from './objects/FriendshipUncheckedUpdateInput.schema';

export const FriendshipUpsertOneSchema: z.ZodType<Prisma.FriendshipUpsertArgs> = z.object({ select: FriendshipSelectObjectSchema.optional(), include: FriendshipIncludeObjectSchema.optional(), where: FriendshipWhereUniqueInputObjectSchema, create: z.union([ FriendshipCreateInputObjectSchema, FriendshipUncheckedCreateInputObjectSchema ]), update: z.union([ FriendshipUpdateInputObjectSchema, FriendshipUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FriendshipUpsertArgs>;

export const FriendshipUpsertOneZodSchema = z.object({ select: FriendshipSelectObjectSchema.optional(), include: FriendshipIncludeObjectSchema.optional(), where: FriendshipWhereUniqueInputObjectSchema, create: z.union([ FriendshipCreateInputObjectSchema, FriendshipUncheckedCreateInputObjectSchema ]), update: z.union([ FriendshipUpdateInputObjectSchema, FriendshipUncheckedUpdateInputObjectSchema ]) }).strict();