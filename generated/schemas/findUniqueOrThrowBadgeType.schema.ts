import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeTypeSelectObjectSchema as BadgeTypeSelectObjectSchema } from './objects/BadgeTypeSelect.schema';
import { BadgeTypeIncludeObjectSchema as BadgeTypeIncludeObjectSchema } from './objects/BadgeTypeInclude.schema';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './objects/BadgeTypeWhereUniqueInput.schema';

export const BadgeTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.BadgeTypeFindUniqueOrThrowArgs> = z.object({ select: BadgeTypeSelectObjectSchema.optional(), include: BadgeTypeIncludeObjectSchema.optional(), where: BadgeTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BadgeTypeFindUniqueOrThrowArgs>;

export const BadgeTypeFindUniqueOrThrowZodSchema = z.object({ select: BadgeTypeSelectObjectSchema.optional(), include: BadgeTypeIncludeObjectSchema.optional(), where: BadgeTypeWhereUniqueInputObjectSchema }).strict();