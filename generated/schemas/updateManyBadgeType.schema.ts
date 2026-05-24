import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeTypeUpdateManyMutationInputObjectSchema as BadgeTypeUpdateManyMutationInputObjectSchema } from './objects/BadgeTypeUpdateManyMutationInput.schema';
import { BadgeTypeWhereInputObjectSchema as BadgeTypeWhereInputObjectSchema } from './objects/BadgeTypeWhereInput.schema';

export const BadgeTypeUpdateManySchema: z.ZodType<Prisma.BadgeTypeUpdateManyArgs> = z.object({ data: BadgeTypeUpdateManyMutationInputObjectSchema, where: BadgeTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BadgeTypeUpdateManyArgs>;

export const BadgeTypeUpdateManyZodSchema = z.object({ data: BadgeTypeUpdateManyMutationInputObjectSchema, where: BadgeTypeWhereInputObjectSchema.optional() }).strict();