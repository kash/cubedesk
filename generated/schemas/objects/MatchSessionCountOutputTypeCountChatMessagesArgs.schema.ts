import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageWhereInputObjectSchema as ChatMessageWhereInputObjectSchema } from './ChatMessageWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatMessageWhereInputObjectSchema).optional()
}).strict();
export const MatchSessionCountOutputTypeCountChatMessagesArgsObjectSchema = makeSchema();
export const MatchSessionCountOutputTypeCountChatMessagesArgsObjectZodSchema = makeSchema();
