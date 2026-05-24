import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogOrderByRelevanceFieldEnumSchema } from '../enums/EloLogOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([EloLogOrderByRelevanceFieldEnumSchema, EloLogOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const EloLogOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.EloLogOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogOrderByRelevanceInput>;
export const EloLogOrderByRelevanceInputObjectZodSchema = makeSchema();
