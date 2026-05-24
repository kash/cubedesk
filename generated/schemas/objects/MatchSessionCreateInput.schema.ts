import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageCreateNestedManyWithoutMatch_sessionInputObjectSchema as ChatMessageCreateNestedManyWithoutMatch_sessionInputObjectSchema } from './ChatMessageCreateNestedManyWithoutMatch_sessionInput.schema';
import { GameOptionsCreateNestedOneWithoutMatch_sessionInputObjectSchema as GameOptionsCreateNestedOneWithoutMatch_sessionInputObjectSchema } from './GameOptionsCreateNestedOneWithoutMatch_sessionInput.schema';
import { MatchCreateNestedManyWithoutMatch_sessionInputObjectSchema as MatchCreateNestedManyWithoutMatch_sessionInputObjectSchema } from './MatchCreateNestedManyWithoutMatch_sessionInput.schema';
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
  matches: z.lazy(() => MatchCreateNestedManyWithoutMatch_sessionInputObjectSchema).optional(),
  created_by: z.lazy(() => UserAccountCreateNestedOneWithoutMatch_sessions_createdInputObjectSchema).optional()
}).strict();
export const MatchSessionCreateInputObjectSchema: z.ZodType<Prisma.MatchSessionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCreateInput>;
export const MatchSessionCreateInputObjectZodSchema = makeSchema();
