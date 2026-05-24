import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserFeatureStateSelectObjectSchema as UserFeatureStateSelectObjectSchema } from './objects/UserFeatureStateSelect.schema';
import { UserFeatureStateIncludeObjectSchema as UserFeatureStateIncludeObjectSchema } from './objects/UserFeatureStateInclude.schema';
import { UserFeatureStateUpdateInputObjectSchema as UserFeatureStateUpdateInputObjectSchema } from './objects/UserFeatureStateUpdateInput.schema';
import { UserFeatureStateUncheckedUpdateInputObjectSchema as UserFeatureStateUncheckedUpdateInputObjectSchema } from './objects/UserFeatureStateUncheckedUpdateInput.schema';
import { UserFeatureStateWhereUniqueInputObjectSchema as UserFeatureStateWhereUniqueInputObjectSchema } from './objects/UserFeatureStateWhereUniqueInput.schema';

export const UserFeatureStateUpdateOneSchema: z.ZodType<Prisma.UserFeatureStateUpdateArgs> = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), include: UserFeatureStateIncludeObjectSchema.optional(), data: z.union([UserFeatureStateUpdateInputObjectSchema, UserFeatureStateUncheckedUpdateInputObjectSchema]), where: UserFeatureStateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserFeatureStateUpdateArgs>;

export const UserFeatureStateUpdateOneZodSchema = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), include: UserFeatureStateIncludeObjectSchema.optional(), data: z.union([UserFeatureStateUpdateInputObjectSchema, UserFeatureStateUncheckedUpdateInputObjectSchema]), where: UserFeatureStateWhereUniqueInputObjectSchema }).strict();