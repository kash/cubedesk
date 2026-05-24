import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeTypeSelectObjectSchema as BadgeTypeSelectObjectSchema } from './objects/BadgeTypeSelect.schema';
import { BadgeTypeIncludeObjectSchema as BadgeTypeIncludeObjectSchema } from './objects/BadgeTypeInclude.schema';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './objects/BadgeTypeWhereUniqueInput.schema';

export const BadgeTypeFindUniqueSchema: z.ZodType<Prisma.BadgeTypeFindUniqueArgs> = z.object({ select: BadgeTypeSelectObjectSchema.optional(), include: BadgeTypeIncludeObjectSchema.optional(), where: BadgeTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BadgeTypeFindUniqueArgs>;

export const BadgeTypeFindUniqueZodSchema = z.object({ select: BadgeTypeSelectObjectSchema.optional(), include: BadgeTypeIncludeObjectSchema.optional(), where: BadgeTypeWhereUniqueInputObjectSchema }).strict();