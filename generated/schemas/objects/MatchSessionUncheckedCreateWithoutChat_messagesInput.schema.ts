import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsUncheckedCreateNestedOneWithoutMatch_sessionInputObjectSchema as GameOptionsUncheckedCreateNestedOneWithoutMatch_sessionInputObjectSchema } from './GameOptionsUncheckedCreateNestedOneWithoutMatch_sessionInput.schema';
import { MatchUncheckedCreateNestedManyWithoutMatch_sessionInputObjectSchema as MatchUncheckedCreateNestedManyWithoutMatch_sessionInputObjectSchema } from './MatchUncheckedCreateNestedManyWithoutMatch_sessionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  min_players: z.number().int().optional(),
  max_players: z.number().int().optional(),
  match_type: z.string(),
  custom_match: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  created_by_id: z.string().optional().nullable(),
  rated: z.boolean().optional().nullable(),
  game_options: z.lazy(() => GameOptionsUncheckedCreateNestedOneWithoutMatch_sessionInputObjectSchema).optional(),
  matches: z.lazy(() => MatchUncheckedCreateNestedManyWithoutMatch_sessionInputObjectSchema).optional()
}).strict();
export const MatchSessionUncheckedCreateWithoutChat_messagesInputObjectSchema: z.ZodType<Prisma.MatchSessionUncheckedCreateWithoutChat_messagesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUncheckedCreateWithoutChat_messagesInput>;
export const MatchSessionUncheckedCreateWithoutChat_messagesInputObjectZodSchema = makeSchema();
