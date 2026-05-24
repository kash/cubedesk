import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingOrderByRelevanceFieldEnumSchema } from '../enums/EloRatingOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([EloRatingOrderByRelevanceFieldEnumSchema, EloRatingOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const EloRatingOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.EloRatingOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingOrderByRelevanceInput>;
export const EloRatingOrderByRelevanceInputObjectZodSchema = makeSchema();
