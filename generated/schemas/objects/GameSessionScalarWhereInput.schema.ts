import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumGameTypeFilterObjectSchema as EnumGameTypeFilterObjectSchema } from './EnumGameTypeFilter.schema';
import { GameTypeSchema } from '../enums/GameType.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const gamesessionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GameSessionScalarWhereInputObjectSchema), z.lazy(() => GameSessionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GameSessionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GameSessionScalarWhereInputObjectSchema), z.lazy(() => GameSessionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  match_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  game_type: z.union([z.lazy(() => EnumGameTypeFilterObjectSchema), GameTypeSchema]).optional(),
  solve_count: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  total_time: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GameSessionScalarWhereInputObjectSchema: z.ZodType<Prisma.GameSessionScalarWhereInput> = gamesessionscalarwhereinputSchema as unknown as z.ZodType<Prisma.GameSessionScalarWhereInput>;
export const GameSessionScalarWhereInputObjectZodSchema = gamesessionscalarwhereinputSchema;
