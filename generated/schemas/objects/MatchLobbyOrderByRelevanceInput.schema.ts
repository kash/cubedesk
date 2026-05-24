import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchLobbyOrderByRelevanceFieldEnumSchema } from '../enums/MatchLobbyOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([MatchLobbyOrderByRelevanceFieldEnumSchema, MatchLobbyOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const MatchLobbyOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.MatchLobbyOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyOrderByRelevanceInput>;
export const MatchLobbyOrderByRelevanceInputObjectZodSchema = makeSchema();
