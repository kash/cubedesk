import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserFeatureStateSelectObjectSchema as UserFeatureStateSelectObjectSchema } from './objects/UserFeatureStateSelect.schema';
import { UserFeatureStateIncludeObjectSchema as UserFeatureStateIncludeObjectSchema } from './objects/UserFeatureStateInclude.schema';
import { UserFeatureStateWhereUniqueInputObjectSchema as UserFeatureStateWhereUniqueInputObjectSchema } from './objects/UserFeatureStateWhereUniqueInput.schema';

export const UserFeatureStateFindUniqueSchema: z.ZodType<Prisma.UserFeatureStateFindUniqueArgs> = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), include: UserFeatureStateIncludeObjectSchema.optional(), where: UserFeatureStateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserFeatureStateFindUniqueArgs>;

export const UserFeatureStateFindUniqueZodSchema = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), include: UserFeatureStateIncludeObjectSchema.optional(), where: UserFeatureStateWhereUniqueInputObjectSchema }).strict();