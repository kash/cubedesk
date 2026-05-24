import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageWhereInputObjectSchema as ChatMessageWhereInputObjectSchema } from './ChatMessageWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ChatMessageWhereInputObjectSchema).optional(),
  some: z.lazy(() => ChatMessageWhereInputObjectSchema).optional(),
  none: z.lazy(() => ChatMessageWhereInputObjectSchema).optional()
}).strict();
export const ChatMessageListRelationFilterObjectSchema: z.ZodType<Prisma.ChatMessageListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageListRelationFilter>;
export const ChatMessageListRelationFilterObjectZodSchema = makeSchema();
