import * as z from 'zod';
export const MatchGroupByResultSchema = z.array(z.object({
  id: z.string(),
  winner_id: z.string(),
  created_at: z.date(),
  link_code: z.string(),
  match_session_id: z.string(),
  ended_at: z.date(),
  started_at: z.date(),
  spectate_code: z.string(),
  aborted: z.boolean(),
  _count: z.object({
    id: z.number(),
    winner_id: z.number(),
    created_at: z.number(),
    link_code: z.number(),
    match_session_id: z.number(),
    ended_at: z.number(),
    started_at: z.number(),
    spectate_code: z.number(),
    aborted: z.number(),
    elo_log: z.number(),
    game_session: z.number(),
    match_session: z.number(),
    winner: z.number(),
    participants: z.number(),
    solves: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    winner_id: z.string().nullable(),
    created_at: z.date().nullable(),
    link_code: z.string().nullable(),
    match_session_id: z.string().nullable(),
    ended_at: z.date().nullable(),
    started_at: z.date().nullable(),
    spectate_code: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    winner_id: z.string().nullable(),
    created_at: z.date().nullable(),
    link_code: z.string().nullable(),
    match_session_id: z.string().nullable(),
    ended_at: z.date().nullable(),
    started_at: z.date().nullable(),
    spectate_code: z.string().nullable()
  }).nullable().optional()
}));