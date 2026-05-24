import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewOrderByRelevanceFieldEnumSchema } from '../enums/SolveViewOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([SolveViewOrderByRelevanceFieldEnumSchema, SolveViewOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const SolveViewOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.SolveViewOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewOrderByRelevanceInput>;
export const SolveViewOrderByRelevanceInputObjectZodSchema = makeSchema();
