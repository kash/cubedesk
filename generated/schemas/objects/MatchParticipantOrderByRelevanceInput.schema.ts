import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantOrderByRelevanceFieldEnumSchema } from '../enums/MatchParticipantOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([MatchParticipantOrderByRelevanceFieldEnumSchema, MatchParticipantOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const MatchParticipantOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.MatchParticipantOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantOrderByRelevanceInput>;
export const MatchParticipantOrderByRelevanceInputObjectZodSchema = makeSchema();
