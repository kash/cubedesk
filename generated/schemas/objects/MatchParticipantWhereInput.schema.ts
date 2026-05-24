import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { MatchScalarRelationFilterObjectSchema as MatchScalarRelationFilterObjectSchema } from './MatchScalarRelationFilter.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { SolveListRelationFilterObjectSchema as SolveListRelationFilterObjectSchema } from './SolveListRelationFilter.schema'

const matchparticipantwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MatchParticipantWhereInputObjectSchema), z.lazy(() => MatchParticipantWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MatchParticipantWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MatchParticipantWhereInputObjectSchema), z.lazy(() => MatchParticipantWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  match_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  resigned: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  forfeited: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  won: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  lost: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  abandoned: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  aborted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  match: z.union([z.lazy(() => MatchScalarRelationFilterObjectSchema), z.lazy(() => MatchWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  solves: z.lazy(() => SolveListRelationFilterObjectSchema).optional()
}).strict();
export const MatchParticipantWhereInputObjectSchema: z.ZodType<Prisma.MatchParticipantWhereInput> = matchparticipantwhereinputSchema as unknown as z.ZodType<Prisma.MatchParticipantWhereInput>;
export const MatchParticipantWhereInputObjectZodSchema = matchparticipantwhereinputSchema;
