import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageSelectObjectSchema as ChatMessageSelectObjectSchema } from './ChatMessageSelect.schema';
import { ChatMessageIncludeObjectSchema as ChatMessageIncludeObjectSchema } from './ChatMessageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ChatMessageSelectObjectSchema).optional(),
  include: z.lazy(() => ChatMessageIncludeObjectSchema).optional()
}).strict();
export const ChatMessageArgsObjectSchema = makeSchema();
export const ChatMessageArgsObjectZodSchema = makeSchema();
