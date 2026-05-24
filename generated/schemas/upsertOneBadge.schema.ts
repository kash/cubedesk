import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeSelectObjectSchema as BadgeSelectObjectSchema } from './objects/BadgeSelect.schema';
import { BadgeIncludeObjectSchema as BadgeIncludeObjectSchema } from './objects/BadgeInclude.schema';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './objects/BadgeWhereUniqueInput.schema';
import { BadgeCreateInputObjectSchema as BadgeCreateInputObjectSchema } from './objects/BadgeCreateInput.schema';
import { BadgeUncheckedCreateInputObjectSchema as BadgeUncheckedCreateInputObjectSchema } from './objects/BadgeUncheckedCreateInput.schema';
import { BadgeUpdateInputObjectSchema as BadgeUpdateInputObjectSchema } from './objects/BadgeUpdateInput.schema';
import { BadgeUncheckedUpdateInputObjectSchema as BadgeUncheckedUpdateInputObjectSchema } from './objects/BadgeUncheckedUpdateInput.schema';

export const BadgeUpsertOneSchema: z.ZodType<Prisma.BadgeUpsertArgs> = z.object({ select: BadgeSelectObjectSchema.optional(), include: BadgeIncludeObjectSchema.optional(), where: BadgeWhereUniqueInputObjectSchema, create: z.union([ BadgeCreateInputObjectSchema, BadgeUncheckedCreateInputObjectSchema ]), update: z.union([ BadgeUpdateInputObjectSchema, BadgeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BadgeUpsertArgs>;

export const BadgeUpsertOneZodSchema = z.object({ select: BadgeSelectObjectSchema.optional(), include: BadgeIncludeObjectSchema.optional(), where: BadgeWhereUniqueInputObjectSchema, create: z.union([ BadgeCreateInputObjectSchema, BadgeUncheckedCreateInputObjectSchema ]), update: z.union([ BadgeUpdateInputObjectSchema, BadgeUncheckedUpdateInputObjectSchema ]) }).strict();