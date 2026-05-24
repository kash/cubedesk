import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BigIntNullableFilterObjectSchema as BigIntNullableFilterObjectSchema } from './BigIntNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { GameSessionNullableScalarRelationFilterObjectSchema as GameSessionNullableScalarRelationFilterObjectSchema } from './GameSessionNullableScalarRelationFilter.schema';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './GameSessionWhereInput.schema';
import { MatchNullableScalarRelationFilterObjectSchema as MatchNullableScalarRelationFilterObjectSchema } from './MatchNullableScalarRelationFilter.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema';
import { MatchParticipantNullableScalarRelationFilterObjectSchema as MatchParticipantNullableScalarRelationFilterObjectSchema } from './MatchParticipantNullableScalarRelationFilter.schema';
import { MatchParticipantWhereInputObjectSchema as MatchParticipantWhereInputObjectSchema } from './MatchParticipantWhereInput.schema';
import { SessionNullableScalarRelationFilterObjectSchema as SessionNullableScalarRelationFilterObjectSchema } from './SessionNullableScalarRelationFilter.schema';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './SessionWhereInput.schema';
import { SmartDeviceNullableScalarRelationFilterObjectSchema as SmartDeviceNullableScalarRelationFilterObjectSchema } from './SmartDeviceNullableScalarRelationFilter.schema';
import { SmartDeviceWhereInputObjectSchema as SmartDeviceWhereInputObjectSchema } from './SmartDeviceWhereInput.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { SolveMethodStepListRelationFilterObjectSchema as SolveMethodStepListRelationFilterObjectSchema } from './SolveMethodStepListRelationFilter.schema';
import { SolveViewListRelationFilterObjectSchema as SolveViewListRelationFilterObjectSchema } from './SolveViewListRelationFilter.schema';
import { TopAverageListRelationFilterObjectSchema as TopAverageListRelationFilterObjectSchema } from './TopAverageListRelationFilter.schema';
import { TopSolveListRelationFilterObjectSchema as TopSolveListRelationFilterObjectSchema } from './TopSolveListRelationFilter.schema'

const solvewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SolveWhereInputObjectSchema), z.lazy(() => SolveWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SolveWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SolveWhereInputObjectSchema), z.lazy(() => SolveWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  time: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  raw_time: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  cube_type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  scramble: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  session_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  started_at: z.union([z.lazy(() => BigIntNullableFilterObjectSchema), z.bigint()]).optional().nullable(),
  ended_at: z.union([z.lazy(() => BigIntNullableFilterObjectSchema), z.bigint()]).optional().nullable(),
  dnf: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  plus_two: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  trainer_name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  bulk: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  inspection_time: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  is_smart_cube: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  smart_put_down_time: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  smart_turns: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  smart_turn_count: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  smart_device_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  match_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  match_participant_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  share_code: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  from_timer: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  game_session_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  custom_scramble: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  training_session_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  game_session: z.union([z.lazy(() => GameSessionNullableScalarRelationFilterObjectSchema), z.lazy(() => GameSessionWhereInputObjectSchema)]).optional(),
  match: z.union([z.lazy(() => MatchNullableScalarRelationFilterObjectSchema), z.lazy(() => MatchWhereInputObjectSchema)]).optional(),
  match_participant: z.union([z.lazy(() => MatchParticipantNullableScalarRelationFilterObjectSchema), z.lazy(() => MatchParticipantWhereInputObjectSchema)]).optional(),
  session: z.union([z.lazy(() => SessionNullableScalarRelationFilterObjectSchema), z.lazy(() => SessionWhereInputObjectSchema)]).optional(),
  smart_device: z.union([z.lazy(() => SmartDeviceNullableScalarRelationFilterObjectSchema), z.lazy(() => SmartDeviceWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  solve_method_steps: z.lazy(() => SolveMethodStepListRelationFilterObjectSchema).optional(),
  solve_views: z.lazy(() => SolveViewListRelationFilterObjectSchema).optional(),
  top_average_1: z.lazy(() => TopAverageListRelationFilterObjectSchema).optional(),
  top_average_2: z.lazy(() => TopAverageListRelationFilterObjectSchema).optional(),
  top_average_3: z.lazy(() => TopAverageListRelationFilterObjectSchema).optional(),
  top_average_4: z.lazy(() => TopAverageListRelationFilterObjectSchema).optional(),
  top_average_5: z.lazy(() => TopAverageListRelationFilterObjectSchema).optional(),
  top_solve: z.lazy(() => TopSolveListRelationFilterObjectSchema).optional()
}).strict();
export const SolveWhereInputObjectSchema: z.ZodType<Prisma.SolveWhereInput> = solvewhereinputSchema as unknown as z.ZodType<Prisma.SolveWhereInput>;
export const SolveWhereInputObjectZodSchema = solvewhereinputSchema;
