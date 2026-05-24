import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BigIntNullableFilterObjectSchema as BigIntNullableFilterObjectSchema } from './BigIntNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const solvescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SolveScalarWhereInputObjectSchema), z.lazy(() => SolveScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SolveScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SolveScalarWhereInputObjectSchema), z.lazy(() => SolveScalarWhereInputObjectSchema).array()]).optional(),
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
  training_session_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const SolveScalarWhereInputObjectSchema: z.ZodType<Prisma.SolveScalarWhereInput> = solvescalarwhereinputSchema as unknown as z.ZodType<Prisma.SolveScalarWhereInput>;
export const SolveScalarWhereInputObjectZodSchema = solvescalarwhereinputSchema;
