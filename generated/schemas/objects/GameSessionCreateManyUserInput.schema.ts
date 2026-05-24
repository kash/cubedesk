import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  match_id: z.string().optional().nullable(),
  game_type: GameTypeSchema,
  solve_count: z.number().int().optional(),
  total_time: z.number().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const GameSessionCreateManyUserInputObjectSchema: z.ZodType<Prisma.GameSessionCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionCreateManyUserInput>;
export const GameSessionCreateManyUserInputObjectZodSchema = makeSchema();
