import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserFeatureStateCreateManyInputObjectSchema as UserFeatureStateCreateManyInputObjectSchema } from './objects/UserFeatureStateCreateManyInput.schema';

export const UserFeatureStateCreateManySchema: z.ZodType<Prisma.UserFeatureStateCreateManyArgs> = z.object({ data: z.union([ UserFeatureStateCreateManyInputObjectSchema, z.array(UserFeatureStateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserFeatureStateCreateManyArgs>;

export const UserFeatureStateCreateManyZodSchema = z.object({ data: z.union([ UserFeatureStateCreateManyInputObjectSchema, z.array(UserFeatureStateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();