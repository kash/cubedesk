import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeWhereInputObjectSchema as BadgeWhereInputObjectSchema } from './objects/BadgeWhereInput.schema';

export const BadgeDeleteManySchema: z.ZodType<Prisma.BadgeDeleteManyArgs> = z.object({ where: BadgeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BadgeDeleteManyArgs>;

export const BadgeDeleteManyZodSchema = z.object({ where: BadgeWhereInputObjectSchema.optional() }).strict();