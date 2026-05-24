import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumGameTypeWithAggregatesFilterObjectSchema as EnumGameTypeWithAggregatesFilterObjectSchema } from './EnumGameTypeWithAggregatesFilter.schema';
import { GameTypeSchema } from '../enums/GameType.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const gameoptionsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => GameOptionsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GameOptionsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GameOptionsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GameOptionsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GameOptionsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  game_session_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  match_session_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  game_type: z.union([z.lazy(() => EnumGameTypeWithAggregatesFilterObjectSchema), GameTypeSchema]).optional(),
  cube_type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  elimination_starting_time_seconds: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  elimination_percent_change_rate: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  head_to_head_target_win_count: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  gauntlet_time_multiplier: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GameOptionsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GameOptionsScalarWhereWithAggregatesInput> = gameoptionsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GameOptionsScalarWhereWithAggregatesInput>;
export const GameOptionsScalarWhereWithAggregatesInputObjectZodSchema = gameoptionsscalarwherewithaggregatesinputSchema;
