import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsOrderByRelevanceFieldEnumSchema } from '../enums/GameOptionsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([GameOptionsOrderByRelevanceFieldEnumSchema, GameOptionsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const GameOptionsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.GameOptionsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsOrderByRelevanceInput>;
export const GameOptionsOrderByRelevanceInputObjectZodSchema = makeSchema();
