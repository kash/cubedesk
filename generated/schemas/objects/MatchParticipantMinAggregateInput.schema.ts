import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  match_id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  resigned: z.literal(true).optional(),
  forfeited: z.literal(true).optional(),
  position: z.literal(true).optional(),
  won: z.literal(true).optional(),
  lost: z.literal(true).optional(),
  abandoned: z.literal(true).optional(),
  aborted: z.literal(true).optional()
}).strict();
export const MatchParticipantMinAggregateInputObjectSchema: z.ZodType<Prisma.MatchParticipantMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantMinAggregateInputType>;
export const MatchParticipantMinAggregateInputObjectZodSchema = makeSchema();
