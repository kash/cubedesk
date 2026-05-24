import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeOrderByRelevanceFieldEnumSchema } from '../enums/CustomTrainerLikeOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([CustomTrainerLikeOrderByRelevanceFieldEnumSchema, CustomTrainerLikeOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const CustomTrainerLikeOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeOrderByRelevanceInput>;
export const CustomTrainerLikeOrderByRelevanceInputObjectZodSchema = makeSchema();
