import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeSelectObjectSchema as BadgeSelectObjectSchema } from './objects/BadgeSelect.schema';
import { BadgeIncludeObjectSchema as BadgeIncludeObjectSchema } from './objects/BadgeInclude.schema';
import { BadgeCreateInputObjectSchema as BadgeCreateInputObjectSchema } from './objects/BadgeCreateInput.schema';
import { BadgeUncheckedCreateInputObjectSchema as BadgeUncheckedCreateInputObjectSchema } from './objects/BadgeUncheckedCreateInput.schema';

export const BadgeCreateOneSchema: z.ZodType<Prisma.BadgeCreateArgs> = z.object({ select: BadgeSelectObjectSchema.optional(), include: BadgeIncludeObjectSchema.optional(), data: z.union([BadgeCreateInputObjectSchema, BadgeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BadgeCreateArgs>;

export const BadgeCreateOneZodSchema = z.object({ select: BadgeSelectObjectSchema.optional(), include: BadgeIncludeObjectSchema.optional(), data: z.union([BadgeCreateInputObjectSchema, BadgeUncheckedCreateInputObjectSchema]) }).strict();