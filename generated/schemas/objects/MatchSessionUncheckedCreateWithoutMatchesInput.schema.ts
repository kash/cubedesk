import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChatMessageUncheckedCreateNestedManyWithoutMatch_sessionInputObjectSchema as ChatMessageUncheckedCreateNestedManyWithoutMatch_sessionInputObjectSchema } from './ChatMessageUncheckedCreateNestedManyWithoutMatch_sessionInput.schema';
import { GameOptionsUncheckedCreateNestedOneWithoutMatch_sessionInputObjectSchema as GameOptionsUncheckedCreateNestedOneWithoutMatch_sessionInputObjectSchema } from './GameOptionsUncheckedCreateNestedOneWithoutMatch_sessionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  min_players: z.number().int().optional(),
  max_players: z.number().int().optional(),
  match_type: z.string(),
  custom_match: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  created_by_id: z.string().optional().nullable(),
  rated: z.boolean().optional().nullable(),
  chat_messages: z.lazy(() => ChatMessageUncheckedCreateNestedManyWithoutMatch_sessionInputObjectSchema).optional(),
  game_options: z.lazy(() => GameOptionsUncheckedCreateNestedOneWithoutMatch_sessionInputObjectSchema).optional()
}).strict();
export const MatchSessionUncheckedCreateWithoutMatchesInputObjectSchema: z.ZodType<Prisma.MatchSessionUncheckedCreateWithoutMatchesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUncheckedCreateWithoutMatchesInput>;
export const MatchSessionUncheckedCreateWithoutMatchesInputObjectZodSchema = makeSchema();
