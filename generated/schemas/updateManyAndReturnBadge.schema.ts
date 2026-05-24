import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeSelectObjectSchema as BadgeSelectObjectSchema } from './objects/BadgeSelect.schema';
import { BadgeUpdateManyMutationInputObjectSchema as BadgeUpdateManyMutationInputObjectSchema } from './objects/BadgeUpdateManyMutationInput.schema';
import { BadgeWhereInputObjectSchema as BadgeWhereInputObjectSchema } from './objects/BadgeWhereInput.schema';

export const BadgeUpdateManyAndReturnSchema: z.ZodType<Prisma.BadgeUpdateManyAndReturnArgs> = z.object({ select: BadgeSelectObjectSchema.optional(), data: BadgeUpdateManyMutationInputObjectSchema, where: BadgeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BadgeUpdateManyAndReturnArgs>;

export const BadgeUpdateManyAndReturnZodSchema = z.object({ select: BadgeSelectObjectSchema.optional(), data: BadgeUpdateManyMutationInputObjectSchema, where: BadgeWhereInputObjectSchema.optional() }).strict();