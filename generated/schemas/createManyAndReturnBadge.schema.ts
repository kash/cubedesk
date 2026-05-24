import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeSelectObjectSchema as BadgeSelectObjectSchema } from './objects/BadgeSelect.schema';
import { BadgeCreateManyInputObjectSchema as BadgeCreateManyInputObjectSchema } from './objects/BadgeCreateManyInput.schema';

export const BadgeCreateManyAndReturnSchema: z.ZodType<Prisma.BadgeCreateManyAndReturnArgs> = z.object({ select: BadgeSelectObjectSchema.optional(), data: z.union([ BadgeCreateManyInputObjectSchema, z.array(BadgeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BadgeCreateManyAndReturnArgs>;

export const BadgeCreateManyAndReturnZodSchema = z.object({ select: BadgeSelectObjectSchema.optional(), data: z.union([ BadgeCreateManyInputObjectSchema, z.array(BadgeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();