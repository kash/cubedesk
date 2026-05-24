import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserFeatureStateSelectObjectSchema as UserFeatureStateSelectObjectSchema } from './objects/UserFeatureStateSelect.schema';
import { UserFeatureStateIncludeObjectSchema as UserFeatureStateIncludeObjectSchema } from './objects/UserFeatureStateInclude.schema';
import { UserFeatureStateCreateInputObjectSchema as UserFeatureStateCreateInputObjectSchema } from './objects/UserFeatureStateCreateInput.schema';
import { UserFeatureStateUncheckedCreateInputObjectSchema as UserFeatureStateUncheckedCreateInputObjectSchema } from './objects/UserFeatureStateUncheckedCreateInput.schema';

export const UserFeatureStateCreateOneSchema: z.ZodType<Prisma.UserFeatureStateCreateArgs> = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), include: UserFeatureStateIncludeObjectSchema.optional(), data: z.union([UserFeatureStateCreateInputObjectSchema, UserFeatureStateUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UserFeatureStateCreateArgs>;

export const UserFeatureStateCreateOneZodSchema = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), include: UserFeatureStateIncludeObjectSchema.optional(), data: z.union([UserFeatureStateCreateInputObjectSchema, UserFeatureStateUncheckedCreateInputObjectSchema]) }).strict();