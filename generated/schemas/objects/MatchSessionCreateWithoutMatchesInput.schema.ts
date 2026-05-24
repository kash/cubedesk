import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageCreateNestedManyWithoutMatch_sessionInputObjectSchema as ChatMessageCreateNestedManyWithoutMatch_sessionInputObjectSchema } from './ChatMessageCreateNestedManyWithoutMatch_sessionInput.schema';
import { GameOptionsCreateNestedOneWithoutMatch_sessionInputObjectSchema as GameOptionsCreateNestedOneWithoutMatch_sessionInputObjectSchema } from './GameOptionsCreateNestedOneWithoutMatch_sessionInput.schema';
import { UserAccountCreateNestedOneWithoutMatch_sessions_createdInputObjectSchema as UserAccountCreateNestedOneWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountCreateNestedOneWithoutMatch_sessions_createdInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  min_players: z.number().int().optional(),
  max_players: z.number().int().optional(),
  match_type: z.string(),
  custom_match: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  rated: z.boolean().optional().nullable(),
  chat_messages: z.lazy(() => ChatMessageCreateNestedManyWithoutMatch_sessionInputObjectSchema).optional(),
  game_options: z.lazy(() => GameOptionsCreateNestedOneWithoutMatch_sessionInputObjectSchema).optional(),
  created_by: z.lazy(() => UserAccountCreateNestedOneWithoutMatch_sessions_createdInputObjectSchema).optional()
}).strict();
export const MatchSessionCreateWithoutMatchesInputObjectSchema: z.ZodType<Prisma.MatchSessionCreateWithoutMatchesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCreateWithoutMatchesInput>;
export const MatchSessionCreateWithoutMatchesInputObjectZodSchema = makeSchema();
