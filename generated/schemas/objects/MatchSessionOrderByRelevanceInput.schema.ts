import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionOrderByRelevanceFieldEnumSchema } from '../enums/MatchSessionOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([MatchSessionOrderByRelevanceFieldEnumSchema, MatchSessionOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const MatchSessionOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.MatchSessionOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionOrderByRelevanceInput>;
export const MatchSessionOrderByRelevanceInputObjectZodSchema = makeSchema();
