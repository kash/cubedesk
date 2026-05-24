import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeOrderByRelevanceFieldEnumSchema } from '../enums/BadgeOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([BadgeOrderByRelevanceFieldEnumSchema, BadgeOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const BadgeOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.BadgeOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeOrderByRelevanceInput>;
export const BadgeOrderByRelevanceInputObjectZodSchema = makeSchema();
