import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeTypeSelectObjectSchema as BadgeTypeSelectObjectSchema } from './objects/BadgeTypeSelect.schema';
import { BadgeTypeIncludeObjectSchema as BadgeTypeIncludeObjectSchema } from './objects/BadgeTypeInclude.schema';
import { BadgeTypeUpdateInputObjectSchema as BadgeTypeUpdateInputObjectSchema } from './objects/BadgeTypeUpdateInput.schema';
import { BadgeTypeUncheckedUpdateInputObjectSchema as BadgeTypeUncheckedUpdateInputObjectSchema } from './objects/BadgeTypeUncheckedUpdateInput.schema';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './objects/BadgeTypeWhereUniqueInput.schema';

export const BadgeTypeUpdateOneSchema: z.ZodType<Prisma.BadgeTypeUpdateArgs> = z.object({ select: BadgeTypeSelectObjectSchema.optional(), include: BadgeTypeIncludeObjectSchema.optional(), data: z.union([BadgeTypeUpdateInputObjectSchema, BadgeTypeUncheckedUpdateInputObjectSchema]), where: BadgeTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BadgeTypeUpdateArgs>;

export const BadgeTypeUpdateOneZodSchema = z.object({ select: BadgeTypeSelectObjectSchema.optional(), include: BadgeTypeIncludeObjectSchema.optional(), data: z.union([BadgeTypeUpdateInputObjectSchema, BadgeTypeUncheckedUpdateInputObjectSchema]), where: BadgeTypeWhereUniqueInputObjectSchema }).strict();