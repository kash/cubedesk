import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportOrderByRelevanceFieldEnumSchema } from '../enums/ReportOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([ReportOrderByRelevanceFieldEnumSchema, ReportOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const ReportOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.ReportOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportOrderByRelevanceInput>;
export const ReportOrderByRelevanceInputObjectZodSchema = makeSchema();
