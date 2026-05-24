import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeOrderByRelevanceFieldEnumSchema } from '../enums/BadgeTypeOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([BadgeTypeOrderByRelevanceFieldEnumSchema, BadgeTypeOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const BadgeTypeOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.BadgeTypeOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeOrderByRelevanceInput>;
export const BadgeTypeOrderByRelevanceInputObjectZodSchema = makeSchema();
