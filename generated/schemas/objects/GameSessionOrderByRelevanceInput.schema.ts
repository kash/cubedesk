import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionOrderByRelevanceFieldEnumSchema } from '../enums/GameSessionOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([GameSessionOrderByRelevanceFieldEnumSchema, GameSessionOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const GameSessionOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.GameSessionOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionOrderByRelevanceInput>;
export const GameSessionOrderByRelevanceInputObjectZodSchema = makeSchema();
