import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserFeatureStateSelectObjectSchema as UserFeatureStateSelectObjectSchema } from './objects/UserFeatureStateSelect.schema';
import { UserFeatureStateUpdateManyMutationInputObjectSchema as UserFeatureStateUpdateManyMutationInputObjectSchema } from './objects/UserFeatureStateUpdateManyMutationInput.schema';
import { UserFeatureStateWhereInputObjectSchema as UserFeatureStateWhereInputObjectSchema } from './objects/UserFeatureStateWhereInput.schema';

export const UserFeatureStateUpdateManyAndReturnSchema: z.ZodType<Prisma.UserFeatureStateUpdateManyAndReturnArgs> = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), data: UserFeatureStateUpdateManyMutationInputObjectSchema, where: UserFeatureStateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserFeatureStateUpdateManyAndReturnArgs>;

export const UserFeatureStateUpdateManyAndReturnZodSchema = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), data: UserFeatureStateUpdateManyMutationInputObjectSchema, where: UserFeatureStateWhereInputObjectSchema.optional() }).strict();