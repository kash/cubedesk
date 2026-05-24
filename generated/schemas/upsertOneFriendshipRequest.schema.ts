import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipRequestSelectObjectSchema as FriendshipRequestSelectObjectSchema } from './objects/FriendshipRequestSelect.schema';
import { FriendshipRequestIncludeObjectSchema as FriendshipRequestIncludeObjectSchema } from './objects/FriendshipRequestInclude.schema';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './objects/FriendshipRequestWhereUniqueInput.schema';
import { FriendshipRequestCreateInputObjectSchema as FriendshipRequestCreateInputObjectSchema } from './objects/FriendshipRequestCreateInput.schema';
import { FriendshipRequestUncheckedCreateInputObjectSchema as FriendshipRequestUncheckedCreateInputObjectSchema } from './objects/FriendshipRequestUncheckedCreateInput.schema';
import { FriendshipRequestUpdateInputObjectSchema as FriendshipRequestUpdateInputObjectSchema } from './objects/FriendshipRequestUpdateInput.schema';
import { FriendshipRequestUncheckedUpdateInputObjectSchema as FriendshipRequestUncheckedUpdateInputObjectSchema } from './objects/FriendshipRequestUncheckedUpdateInput.schema';

export const FriendshipRequestUpsertOneSchema: z.ZodType<Prisma.FriendshipRequestUpsertArgs> = z.object({ select: FriendshipRequestSelectObjectSchema.optional(), include: FriendshipRequestIncludeObjectSchema.optional(), where: FriendshipRequestWhereUniqueInputObjectSchema, create: z.union([ FriendshipRequestCreateInputObjectSchema, FriendshipRequestUncheckedCreateInputObjectSchema ]), update: z.union([ FriendshipRequestUpdateInputObjectSchema, FriendshipRequestUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FriendshipRequestUpsertArgs>;

export const FriendshipRequestUpsertOneZodSchema = z.object({ select: FriendshipRequestSelectObjectSchema.optional(), include: FriendshipRequestIncludeObjectSchema.optional(), where: FriendshipRequestWhereUniqueInputObjectSchema, create: z.union([ FriendshipRequestCreateInputObjectSchema, FriendshipRequestUncheckedCreateInputObjectSchema ]), update: z.union([ FriendshipRequestUpdateInputObjectSchema, FriendshipRequestUncheckedUpdateInputObjectSchema ]) }).strict();