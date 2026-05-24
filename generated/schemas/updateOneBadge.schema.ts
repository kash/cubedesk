import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeSelectObjectSchema as BadgeSelectObjectSchema } from './objects/BadgeSelect.schema';
import { BadgeIncludeObjectSchema as BadgeIncludeObjectSchema } from './objects/BadgeInclude.schema';
import { BadgeUpdateInputObjectSchema as BadgeUpdateInputObjectSchema } from './objects/BadgeUpdateInput.schema';
import { BadgeUncheckedUpdateInputObjectSchema as BadgeUncheckedUpdateInputObjectSchema } from './objects/BadgeUncheckedUpdateInput.schema';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './objects/BadgeWhereUniqueInput.schema';

export const BadgeUpdateOneSchema: z.ZodType<Prisma.BadgeUpdateArgs> = z.object({ select: BadgeSelectObjectSchema.optional(), include: BadgeIncludeObjectSchema.optional(), data: z.union([BadgeUpdateInputObjectSchema, BadgeUncheckedUpdateInputObjectSchema]), where: BadgeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BadgeUpdateArgs>;

export const BadgeUpdateOneZodSchema = z.object({ select: BadgeSelectObjectSchema.optional(), include: BadgeIncludeObjectSchema.optional(), data: z.union([BadgeUpdateInputObjectSchema, BadgeUncheckedUpdateInputObjectSchema]), where: BadgeWhereUniqueInputObjectSchema }).strict();