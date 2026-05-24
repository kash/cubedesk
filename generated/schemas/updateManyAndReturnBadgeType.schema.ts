import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeTypeSelectObjectSchema as BadgeTypeSelectObjectSchema } from './objects/BadgeTypeSelect.schema';
import { BadgeTypeUpdateManyMutationInputObjectSchema as BadgeTypeUpdateManyMutationInputObjectSchema } from './objects/BadgeTypeUpdateManyMutationInput.schema';
import { BadgeTypeWhereInputObjectSchema as BadgeTypeWhereInputObjectSchema } from './objects/BadgeTypeWhereInput.schema';

export const BadgeTypeUpdateManyAndReturnSchema: z.ZodType<Prisma.BadgeTypeUpdateManyAndReturnArgs> = z.object({ select: BadgeTypeSelectObjectSchema.optional(), data: BadgeTypeUpdateManyMutationInputObjectSchema, where: BadgeTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BadgeTypeUpdateManyAndReturnArgs>;

export const BadgeTypeUpdateManyAndReturnZodSchema = z.object({ select: BadgeTypeSelectObjectSchema.optional(), data: BadgeTypeUpdateManyMutationInputObjectSchema, where: BadgeTypeWhereInputObjectSchema.optional() }).strict();