import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const elologscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EloLogScalarWhereInputObjectSchema), z.lazy(() => EloLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EloLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EloLogScalarWhereInputObjectSchema), z.lazy(() => EloLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  opponent_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  cube_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  elo_change: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  match_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  player_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  opponent_new_elo_rating: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  opponent_new_game_count: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  player_new_elo_rating: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  player_new_game_count: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  refunded_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const EloLogScalarWhereInputObjectSchema: z.ZodType<Prisma.EloLogScalarWhereInput> = elologscalarwhereinputSchema as unknown as z.ZodType<Prisma.EloLogScalarWhereInput>;
export const EloLogScalarWhereInputObjectZodSchema = elologscalarwhereinputSchema;
