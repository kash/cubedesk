import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadOrderByRelevanceFieldEnumSchema } from '../enums/CustomTrainerDownloadOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([CustomTrainerDownloadOrderByRelevanceFieldEnumSchema, CustomTrainerDownloadOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const CustomTrainerDownloadOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadOrderByRelevanceInput>;
export const CustomTrainerDownloadOrderByRelevanceInputObjectZodSchema = makeSchema();
