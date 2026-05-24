import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TrainerFavoriteOrderByRelevanceFieldEnumSchema } from '../enums/TrainerFavoriteOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([TrainerFavoriteOrderByRelevanceFieldEnumSchema, TrainerFavoriteOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const TrainerFavoriteOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteOrderByRelevanceInput>;
export const TrainerFavoriteOrderByRelevanceInputObjectZodSchema = makeSchema();
