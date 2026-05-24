import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserFeatureStateUpdateManyMutationInputObjectSchema as UserFeatureStateUpdateManyMutationInputObjectSchema } from './objects/UserFeatureStateUpdateManyMutationInput.schema';
import { UserFeatureStateWhereInputObjectSchema as UserFeatureStateWhereInputObjectSchema } from './objects/UserFeatureStateWhereInput.schema';

export const UserFeatureStateUpdateManySchema: z.ZodType<Prisma.UserFeatureStateUpdateManyArgs> = z.object({ data: UserFeatureStateUpdateManyMutationInputObjectSchema, where: UserFeatureStateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserFeatureStateUpdateManyArgs>;

export const UserFeatureStateUpdateManyZodSchema = z.object({ data: UserFeatureStateUpdateManyMutationInputObjectSchema, where: UserFeatureStateWhereInputObjectSchema.optional() }).strict();