import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeCreateManyInputObjectSchema as BadgeCreateManyInputObjectSchema } from './objects/BadgeCreateManyInput.schema';

export const BadgeCreateManySchema: z.ZodType<Prisma.BadgeCreateManyArgs> = z.object({ data: z.union([ BadgeCreateManyInputObjectSchema, z.array(BadgeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BadgeCreateManyArgs>;

export const BadgeCreateManyZodSchema = z.object({ data: z.union([ BadgeCreateManyInputObjectSchema, z.array(BadgeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();