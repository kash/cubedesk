import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeTypeWhereInputObjectSchema as BadgeTypeWhereInputObjectSchema } from './objects/BadgeTypeWhereInput.schema';

export const BadgeTypeDeleteManySchema: z.ZodType<Prisma.BadgeTypeDeleteManyArgs> = z.object({ where: BadgeTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BadgeTypeDeleteManyArgs>;

export const BadgeTypeDeleteManyZodSchema = z.object({ where: BadgeTypeWhereInputObjectSchema.optional() }).strict();