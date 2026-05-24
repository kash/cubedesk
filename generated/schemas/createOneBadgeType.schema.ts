import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeTypeSelectObjectSchema as BadgeTypeSelectObjectSchema } from './objects/BadgeTypeSelect.schema';
import { BadgeTypeIncludeObjectSchema as BadgeTypeIncludeObjectSchema } from './objects/BadgeTypeInclude.schema';
import { BadgeTypeCreateInputObjectSchema as BadgeTypeCreateInputObjectSchema } from './objects/BadgeTypeCreateInput.schema';
import { BadgeTypeUncheckedCreateInputObjectSchema as BadgeTypeUncheckedCreateInputObjectSchema } from './objects/BadgeTypeUncheckedCreateInput.schema';

export const BadgeTypeCreateOneSchema: z.ZodType<Prisma.BadgeTypeCreateArgs> = z.object({ select: BadgeTypeSelectObjectSchema.optional(), include: BadgeTypeIncludeObjectSchema.optional(), data: z.union([BadgeTypeCreateInputObjectSchema, BadgeTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BadgeTypeCreateArgs>;

export const BadgeTypeCreateOneZodSchema = z.object({ select: BadgeTypeSelectObjectSchema.optional(), include: BadgeTypeIncludeObjectSchema.optional(), data: z.union([BadgeTypeCreateInputObjectSchema, BadgeTypeUncheckedCreateInputObjectSchema]) }).strict();