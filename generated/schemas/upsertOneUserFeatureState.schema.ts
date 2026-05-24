import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserFeatureStateSelectObjectSchema as UserFeatureStateSelectObjectSchema } from './objects/UserFeatureStateSelect.schema';
import { UserFeatureStateIncludeObjectSchema as UserFeatureStateIncludeObjectSchema } from './objects/UserFeatureStateInclude.schema';
import { UserFeatureStateWhereUniqueInputObjectSchema as UserFeatureStateWhereUniqueInputObjectSchema } from './objects/UserFeatureStateWhereUniqueInput.schema';
import { UserFeatureStateCreateInputObjectSchema as UserFeatureStateCreateInputObjectSchema } from './objects/UserFeatureStateCreateInput.schema';
import { UserFeatureStateUncheckedCreateInputObjectSchema as UserFeatureStateUncheckedCreateInputObjectSchema } from './objects/UserFeatureStateUncheckedCreateInput.schema';
import { UserFeatureStateUpdateInputObjectSchema as UserFeatureStateUpdateInputObjectSchema } from './objects/UserFeatureStateUpdateInput.schema';
import { UserFeatureStateUncheckedUpdateInputObjectSchema as UserFeatureStateUncheckedUpdateInputObjectSchema } from './objects/UserFeatureStateUncheckedUpdateInput.schema';

export const UserFeatureStateUpsertOneSchema: z.ZodType<Prisma.UserFeatureStateUpsertArgs> = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), include: UserFeatureStateIncludeObjectSchema.optional(), where: UserFeatureStateWhereUniqueInputObjectSchema, create: z.union([ UserFeatureStateCreateInputObjectSchema, UserFeatureStateUncheckedCreateInputObjectSchema ]), update: z.union([ UserFeatureStateUpdateInputObjectSchema, UserFeatureStateUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UserFeatureStateUpsertArgs>;

export const UserFeatureStateUpsertOneZodSchema = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), include: UserFeatureStateIncludeObjectSchema.optional(), where: UserFeatureStateWhereUniqueInputObjectSchema, create: z.union([ UserFeatureStateCreateInputObjectSchema, UserFeatureStateUncheckedCreateInputObjectSchema ]), update: z.union([ UserFeatureStateUpdateInputObjectSchema, UserFeatureStateUncheckedUpdateInputObjectSchema ]) }).strict();