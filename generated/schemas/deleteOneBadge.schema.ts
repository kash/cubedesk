import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeSelectObjectSchema as BadgeSelectObjectSchema } from './objects/BadgeSelect.schema';
import { BadgeIncludeObjectSchema as BadgeIncludeObjectSchema } from './objects/BadgeInclude.schema';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './objects/BadgeWhereUniqueInput.schema';

export const BadgeDeleteOneSchema: z.ZodType<Prisma.BadgeDeleteArgs> = z.object({ select: BadgeSelectObjectSchema.optional(), include: BadgeIncludeObjectSchema.optional(), where: BadgeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BadgeDeleteArgs>;

export const BadgeDeleteOneZodSchema = z.object({ select: BadgeSelectObjectSchema.optional(), include: BadgeIncludeObjectSchema.optional(), where: BadgeWhereUniqueInputObjectSchema }).strict();