import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeSelectObjectSchema as BadgeSelectObjectSchema } from './objects/BadgeSelect.schema';
import { BadgeIncludeObjectSchema as BadgeIncludeObjectSchema } from './objects/BadgeInclude.schema';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './objects/BadgeWhereUniqueInput.schema';

export const BadgeFindUniqueOrThrowSchema: z.ZodType<Prisma.BadgeFindUniqueOrThrowArgs> = z.object({ select: BadgeSelectObjectSchema.optional(), include: BadgeIncludeObjectSchema.optional(), where: BadgeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BadgeFindUniqueOrThrowArgs>;

export const BadgeFindUniqueOrThrowZodSchema = z.object({ select: BadgeSelectObjectSchema.optional(), include: BadgeIncludeObjectSchema.optional(), where: BadgeWhereUniqueInputObjectSchema }).strict();