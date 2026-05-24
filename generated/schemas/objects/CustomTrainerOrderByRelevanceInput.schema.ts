import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerOrderByRelevanceFieldEnumSchema } from '../enums/CustomTrainerOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([CustomTrainerOrderByRelevanceFieldEnumSchema, CustomTrainerOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const CustomTrainerOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.CustomTrainerOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerOrderByRelevanceInput>;
export const CustomTrainerOrderByRelevanceInputObjectZodSchema = makeSchema();
