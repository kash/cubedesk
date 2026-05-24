import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const matchparticipantscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MatchParticipantScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MatchParticipantScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MatchParticipantScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MatchParticipantScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MatchParticipantScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  match_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  resigned: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  forfeited: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  position: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  won: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  lost: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  abandoned: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  aborted: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const MatchParticipantScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MatchParticipantScalarWhereWithAggregatesInput> = matchparticipantscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MatchParticipantScalarWhereWithAggregatesInput>;
export const MatchParticipantScalarWhereWithAggregatesInputObjectZodSchema = matchparticipantscalarwherewithaggregatesinputSchema;
