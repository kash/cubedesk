import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveMethodStepOrderByRelevanceFieldEnumSchema } from '../enums/SolveMethodStepOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([SolveMethodStepOrderByRelevanceFieldEnumSchema, SolveMethodStepOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const SolveMethodStepOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.SolveMethodStepOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepOrderByRelevanceInput>;
export const SolveMethodStepOrderByRelevanceInputObjectZodSchema = makeSchema();
