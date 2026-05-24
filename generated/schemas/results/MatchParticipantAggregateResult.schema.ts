import * as z from 'zod';
export const MatchParticipantAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    match_id: z.number(),
    user_id: z.number(),
    created_at: z.number(),
    resigned: z.number(),
    forfeited: z.number(),
    position: z.number(),
    won: z.number(),
    lost: z.number(),
    abandoned: z.number(),
    aborted: z.number(),
    match: z.number(),
    user: z.number(),
    solves: z.number()
  }).optional(),
  _sum: z.object({
    position: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    position: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    match_id: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable(),
    position: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    match_id: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable(),
    position: z.number().int().nullable()
  }).nullable().optional()});