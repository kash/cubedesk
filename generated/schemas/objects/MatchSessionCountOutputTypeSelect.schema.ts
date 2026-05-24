import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionCountOutputTypeCountChatMessagesArgsObjectSchema as MatchSessionCountOutputTypeCountChatMessagesArgsObjectSchema } from './MatchSessionCountOutputTypeCountChatMessagesArgs.schema';
import { MatchSessionCountOutputTypeCountMatchesArgsObjectSchema as MatchSessionCountOutputTypeCountMatchesArgsObjectSchema } from './MatchSessionCountOutputTypeCountMatchesArgs.schema'

const makeSchema = () => z.object({
  chat_messages: z.union([z.boolean(), z.lazy(() => MatchSessionCountOutputTypeCountChatMessagesArgsObjectSchema)]).optional(),
  matches: z.union([z.boolean(), z.lazy(() => MatchSessionCountOutputTypeCountMatchesArgsObjectSchema)]).optional()
}).strict();
export const MatchSessionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MatchSessionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCountOutputTypeSelect>;
export const MatchSessionCountOutputTypeSelectObjectZodSchema = makeSchema();
