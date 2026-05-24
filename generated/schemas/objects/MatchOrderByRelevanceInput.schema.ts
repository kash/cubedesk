import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchOrderByRelevanceFieldEnumSchema } from '../enums/MatchOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([MatchOrderByRelevanceFieldEnumSchema, MatchOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const MatchOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.MatchOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchOrderByRelevanceInput>;
export const MatchOrderByRelevanceInputObjectZodSchema = makeSchema();
