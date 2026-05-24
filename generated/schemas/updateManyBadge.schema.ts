import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeUpdateManyMutationInputObjectSchema as BadgeUpdateManyMutationInputObjectSchema } from './objects/BadgeUpdateManyMutationInput.schema';
import { BadgeWhereInputObjectSchema as BadgeWhereInputObjectSchema } from './objects/BadgeWhereInput.schema';

export const BadgeUpdateManySchema: z.ZodType<Prisma.BadgeUpdateManyArgs> = z.object({ data: BadgeUpdateManyMutationInputObjectSchema, where: BadgeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BadgeUpdateManyArgs>;

export const BadgeUpdateManyZodSchema = z.object({ data: BadgeUpdateManyMutationInputObjectSchema, where: BadgeWhereInputObjectSchema.optional() }).strict();