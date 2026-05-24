import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeTypeCreateManyInputObjectSchema as BadgeTypeCreateManyInputObjectSchema } from './objects/BadgeTypeCreateManyInput.schema';

export const BadgeTypeCreateManySchema: z.ZodType<Prisma.BadgeTypeCreateManyArgs> = z.object({ data: z.union([ BadgeTypeCreateManyInputObjectSchema, z.array(BadgeTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BadgeTypeCreateManyArgs>;

export const BadgeTypeCreateManyZodSchema = z.object({ data: z.union([ BadgeTypeCreateManyInputObjectSchema, z.array(BadgeTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();