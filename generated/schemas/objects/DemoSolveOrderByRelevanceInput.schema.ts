import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DemoSolveOrderByRelevanceFieldEnumSchema } from '../enums/DemoSolveOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([DemoSolveOrderByRelevanceFieldEnumSchema, DemoSolveOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const DemoSolveOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.DemoSolveOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.DemoSolveOrderByRelevanceInput>;
export const DemoSolveOrderByRelevanceInputObjectZodSchema = makeSchema();
