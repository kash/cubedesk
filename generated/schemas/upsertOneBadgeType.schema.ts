import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeTypeSelectObjectSchema as BadgeTypeSelectObjectSchema } from './objects/BadgeTypeSelect.schema';
import { BadgeTypeIncludeObjectSchema as BadgeTypeIncludeObjectSchema } from './objects/BadgeTypeInclude.schema';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './objects/BadgeTypeWhereUniqueInput.schema';
import { BadgeTypeCreateInputObjectSchema as BadgeTypeCreateInputObjectSchema } from './objects/BadgeTypeCreateInput.schema';
import { BadgeTypeUncheckedCreateInputObjectSchema as BadgeTypeUncheckedCreateInputObjectSchema } from './objects/BadgeTypeUncheckedCreateInput.schema';
import { BadgeTypeUpdateInputObjectSchema as BadgeTypeUpdateInputObjectSchema } from './objects/BadgeTypeUpdateInput.schema';
import { BadgeTypeUncheckedUpdateInputObjectSchema as BadgeTypeUncheckedUpdateInputObjectSchema } from './objects/BadgeTypeUncheckedUpdateInput.schema';

export const BadgeTypeUpsertOneSchema: z.ZodType<Prisma.BadgeTypeUpsertArgs> = z.object({ select: BadgeTypeSelectObjectSchema.optional(), include: BadgeTypeIncludeObjectSchema.optional(), where: BadgeTypeWhereUniqueInputObjectSchema, create: z.union([ BadgeTypeCreateInputObjectSchema, BadgeTypeUncheckedCreateInputObjectSchema ]), update: z.union([ BadgeTypeUpdateInputObjectSchema, BadgeTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BadgeTypeUpsertArgs>;

export const BadgeTypeUpsertOneZodSchema = z.object({ select: BadgeTypeSelectObjectSchema.optional(), include: BadgeTypeIncludeObjectSchema.optional(), where: BadgeTypeWhereUniqueInputObjectSchema, create: z.union([ BadgeTypeCreateInputObjectSchema, BadgeTypeUncheckedCreateInputObjectSchema ]), update: z.union([ BadgeTypeUpdateInputObjectSchema, BadgeTypeUncheckedUpdateInputObjectSchema ]) }).strict();