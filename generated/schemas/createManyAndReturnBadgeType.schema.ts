import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeTypeSelectObjectSchema as BadgeTypeSelectObjectSchema } from './objects/BadgeTypeSelect.schema';
import { BadgeTypeCreateManyInputObjectSchema as BadgeTypeCreateManyInputObjectSchema } from './objects/BadgeTypeCreateManyInput.schema';

export const BadgeTypeCreateManyAndReturnSchema: z.ZodType<Prisma.BadgeTypeCreateManyAndReturnArgs> = z.object({ select: BadgeTypeSelectObjectSchema.optional(), data: z.union([ BadgeTypeCreateManyInputObjectSchema, z.array(BadgeTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BadgeTypeCreateManyAndReturnArgs>;

export const BadgeTypeCreateManyAndReturnZodSchema = z.object({ select: BadgeTypeSelectObjectSchema.optional(), data: z.union([ BadgeTypeCreateManyInputObjectSchema, z.array(BadgeTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();