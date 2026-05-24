import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserFeatureStateWhereInputObjectSchema as UserFeatureStateWhereInputObjectSchema } from './objects/UserFeatureStateWhereInput.schema';

export const UserFeatureStateDeleteManySchema: z.ZodType<Prisma.UserFeatureStateDeleteManyArgs> = z.object({ where: UserFeatureStateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserFeatureStateDeleteManyArgs>;

export const UserFeatureStateDeleteManyZodSchema = z.object({ where: UserFeatureStateWhereInputObjectSchema.optional() }).strict();