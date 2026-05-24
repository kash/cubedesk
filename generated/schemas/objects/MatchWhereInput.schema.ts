import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EloLogListRelationFilterObjectSchema as EloLogListRelationFilterObjectSchema } from './EloLogListRelationFilter.schema';
import { GameSessionListRelationFilterObjectSchema as GameSessionListRelationFilterObjectSchema } from './GameSessionListRelationFilter.schema';
import { MatchSessionScalarRelationFilterObjectSchema as MatchSessionScalarRelationFilterObjectSchema } from './MatchSessionScalarRelationFilter.schema';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema';
import { UserAccountNullableScalarRelationFilterObjectSchema as UserAccountNullableScalarRelationFilterObjectSchema } from './UserAccountNullableScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { MatchParticipantListRelationFilterObjectSchema as MatchParticipantListRelationFilterObjectSchema } from './MatchParticipantListRelationFilter.schema';
import { SolveListRelationFilterObjectSchema as SolveListRelationFilterObjectSchema } from './SolveListRelationFilter.schema'

const matchwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MatchWhereInputObjectSchema), z.lazy(() => MatchWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MatchWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MatchWhereInputObjectSchema), z.lazy(() => MatchWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  winner_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  link_code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  match_session_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ended_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  started_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  spectate_code: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  aborted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  elo_log: z.lazy(() => EloLogListRelationFilterObjectSchema).optional(),
  game_session: z.lazy(() => GameSessionListRelationFilterObjectSchema).optional(),
  match_session: z.union([z.lazy(() => MatchSessionScalarRelationFilterObjectSchema), z.lazy(() => MatchSessionWhereInputObjectSchema)]).optional(),
  winner: z.union([z.lazy(() => UserAccountNullableScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  participants: z.lazy(() => MatchParticipantListRelationFilterObjectSchema).optional(),
  solves: z.lazy(() => SolveListRelationFilterObjectSchema).optional()
}).strict();
export const MatchWhereInputObjectSchema: z.ZodType<Prisma.MatchWhereInput> = matchwhereinputSchema as unknown as z.ZodType<Prisma.MatchWhereInput>;
export const MatchWhereInputObjectZodSchema = matchwhereinputSchema;
