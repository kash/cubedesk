import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const matchparticipantscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MatchParticipantScalarWhereInputObjectSchema), z.lazy(() => MatchParticipantScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MatchParticipantScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MatchParticipantScalarWhereInputObjectSchema), z.lazy(() => MatchParticipantScalarWhereInputObjectSchema).array()]).optional(),
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
  aborted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const MatchParticipantScalarWhereInputObjectSchema: z.ZodType<Prisma.MatchParticipantScalarWhereInput> = matchparticipantscalarwhereinputSchema as unknown as z.ZodType<Prisma.MatchParticipantScalarWhereInput>;
export const MatchParticipantScalarWhereInputObjectZodSchema = matchparticipantscalarwhereinputSchema;
