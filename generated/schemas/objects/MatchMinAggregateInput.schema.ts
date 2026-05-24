import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  winner_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  link_code: z.literal(true).optional(),
  match_session_id: z.literal(true).optional(),
  ended_at: z.literal(true).optional(),
  started_at: z.literal(true).optional(),
  spectate_code: z.literal(true).optional(),
  aborted: z.literal(true).optional()
}).strict();
export const MatchMinAggregateInputObjectSchema: z.ZodType<Prisma.MatchMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MatchMinAggregateInputType>;
export const MatchMinAggregateInputObjectZodSchema = makeSchema();
