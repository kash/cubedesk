import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumGameTypeFilterObjectSchema as EnumGameTypeFilterObjectSchema } from './EnumGameTypeFilter.schema';
import { GameTypeSchema } from '../enums/GameType.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { GameSessionNullableScalarRelationFilterObjectSchema as GameSessionNullableScalarRelationFilterObjectSchema } from './GameSessionNullableScalarRelationFilter.schema';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './GameSessionWhereInput.schema';
import { MatchSessionNullableScalarRelationFilterObjectSchema as MatchSessionNullableScalarRelationFilterObjectSchema } from './MatchSessionNullableScalarRelationFilter.schema';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema'

const gameoptionswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GameOptionsWhereInputObjectSchema), z.lazy(() => GameOptionsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GameOptionsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GameOptionsWhereInputObjectSchema), z.lazy(() => GameOptionsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  game_session_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  match_session_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  game_type: z.union([z.lazy(() => EnumGameTypeFilterObjectSchema), GameTypeSchema]).optional(),
  cube_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  elimination_starting_time_seconds: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  elimination_percent_change_rate: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  head_to_head_target_win_count: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  gauntlet_time_multiplier: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  game_session: z.union([z.lazy(() => GameSessionNullableScalarRelationFilterObjectSchema), z.lazy(() => GameSessionWhereInputObjectSchema)]).optional(),
  match_session: z.union([z.lazy(() => MatchSessionNullableScalarRelationFilterObjectSchema), z.lazy(() => MatchSessionWhereInputObjectSchema)]).optional()
}).strict();
export const GameOptionsWhereInputObjectSchema: z.ZodType<Prisma.GameOptionsWhereInput> = gameoptionswhereinputSchema as unknown as z.ZodType<Prisma.GameOptionsWhereInput>;
export const GameOptionsWhereInputObjectZodSchema = gameoptionswhereinputSchema;
