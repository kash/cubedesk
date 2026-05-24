import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumGameTypeFilterObjectSchema as EnumGameTypeFilterObjectSchema } from './EnumGameTypeFilter.schema';
import { GameTypeSchema } from '../enums/GameType.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { GameOptionsNullableScalarRelationFilterObjectSchema as GameOptionsNullableScalarRelationFilterObjectSchema } from './GameOptionsNullableScalarRelationFilter.schema';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './GameOptionsWhereInput.schema';
import { MatchNullableScalarRelationFilterObjectSchema as MatchNullableScalarRelationFilterObjectSchema } from './MatchNullableScalarRelationFilter.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { SolveListRelationFilterObjectSchema as SolveListRelationFilterObjectSchema } from './SolveListRelationFilter.schema'

const gamesessionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GameSessionWhereInputObjectSchema), z.lazy(() => GameSessionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GameSessionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GameSessionWhereInputObjectSchema), z.lazy(() => GameSessionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  match_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  game_type: z.union([z.lazy(() => EnumGameTypeFilterObjectSchema), GameTypeSchema]).optional(),
  solve_count: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  total_time: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  game_options: z.union([z.lazy(() => GameOptionsNullableScalarRelationFilterObjectSchema), z.lazy(() => GameOptionsWhereInputObjectSchema)]).optional(),
  match: z.union([z.lazy(() => MatchNullableScalarRelationFilterObjectSchema), z.lazy(() => MatchWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  solves: z.lazy(() => SolveListRelationFilterObjectSchema).optional()
}).strict();
export const GameSessionWhereInputObjectSchema: z.ZodType<Prisma.GameSessionWhereInput> = gamesessionwhereinputSchema as unknown as z.ZodType<Prisma.GameSessionWhereInput>;
export const GameSessionWhereInputObjectZodSchema = gamesessionwhereinputSchema;
