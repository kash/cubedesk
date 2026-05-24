import * as z from 'zod';
export const MatchSessionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  min_players: z.number().int(),
  max_players: z.number().int(),
  match_type: z.string(),
  custom_match: z.boolean(),
  created_at: z.date(),
  created_by_id: z.string(),
  rated: z.boolean(),
  _count: z.object({
    id: z.number(),
    min_players: z.number(),
    max_players: z.number(),
    match_type: z.number(),
    custom_match: z.number(),
    created_at: z.number(),
    created_by_id: z.number(),
    rated: z.number(),
    chat_messages: z.number(),
    game_options: z.number(),
    matches: z.number(),
    created_by: z.number()
  }).optional(),
  _sum: z.object({
    min_players: z.number().nullable(),
    max_players: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    min_players: z.number().nullable(),
    max_players: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    min_players: z.number().int().nullable(),
    max_players: z.number().int().nullable(),
    match_type: z.string().nullable(),
    created_at: z.date().nullable(),
    created_by_id: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    min_players: z.number().int().nullable(),
    max_players: z.number().int().nullable(),
    match_type: z.string().nullable(),
    created_at: z.date().nullable(),
    created_by_id: z.string().nullable()
  }).nullable().optional()
}));