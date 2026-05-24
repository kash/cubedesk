import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserFeatureStateSelectObjectSchema as UserFeatureStateSelectObjectSchema } from './objects/UserFeatureStateSelect.schema';
import { UserFeatureStateCreateManyInputObjectSchema as UserFeatureStateCreateManyInputObjectSchema } from './objects/UserFeatureStateCreateManyInput.schema';

export const UserFeatureStateCreateManyAndReturnSchema: z.ZodType<Prisma.UserFeatureStateCreateManyAndReturnArgs> = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), data: z.union([ UserFeatureStateCreateManyInputObjectSchema, z.array(UserFeatureStateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserFeatureStateCreateManyAndReturnArgs>;

export const UserFeatureStateCreateManyAndReturnZodSchema = z.object({ select: UserFeatureStateSelectObjectSchema.optional(), data: z.union([ UserFeatureStateCreateManyInputObjectSchema, z.array(UserFeatureStateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();