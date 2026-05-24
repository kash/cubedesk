import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserFeatureStateSelectObjectSchema as UserFeatureStateSelectObjectSchema } from './objects/UserFeatureStateSelect.schema';
import { UserFeatureStateIncludeObjectSchema as UserFeatureStateIncludeObjectSchema } from './objects/UserFeatureStateInclude.schema';
import { UserFeatureStateWhereUniqueInputObjectSchema as UserFeatureStateWhereUniqueInputObjectSchema } from './objects/UserFeatureStateWhereUniqueInput.schema';

export const UserFeatureStateDeleteOneSchema: z.ZodType<Prisma.UserFeatureStateDeleteArgs> = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), include: UserFeatureStateIncludeObjectSchema.optional(), where: UserFeatureStateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserFeatureStateDeleteArgs>;

export const UserFeatureStateDeleteOneZodSchema = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), include: UserFeatureStateIncludeObjectSchema.optional(), where: UserFeatureStateWhereUniqueInputObjectSchema }).strict();