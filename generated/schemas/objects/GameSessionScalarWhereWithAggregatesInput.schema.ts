import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumGameTypeWithAggregatesFilterObjectSchema as EnumGameTypeWithAggregatesFilterObjectSchema } from './EnumGameTypeWithAggregatesFilter.schema';
import { GameTypeSchema } from '../enums/GameType.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const gamesessionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => GameSessionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GameSessionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GameSessionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GameSessionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GameSessionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  match_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  game_type: z.union([z.lazy(() => EnumGameTypeWithAggregatesFilterObjectSchema), GameTypeSchema]).optional(),
  solve_count: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  total_time: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GameSessionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GameSessionScalarWhereWithAggregatesInput> = gamesessionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GameSessionScalarWhereWithAggregatesInput>;
export const GameSessionScalarWhereWithAggregatesInputObjectZodSchema = gamesessionscalarwherewithaggregatesinputSchema;
