import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageOrderByRelevanceFieldEnumSchema } from '../enums/ChatMessageOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([ChatMessageOrderByRelevanceFieldEnumSchema, ChatMessageOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const ChatMessageOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.ChatMessageOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageOrderByRelevanceInput>;
export const ChatMessageOrderByRelevanceInputObjectZodSchema = makeSchema();
