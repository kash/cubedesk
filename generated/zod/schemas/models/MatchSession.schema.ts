import * as z from 'zod';

export const MatchSessionSchema = z.object({
  id: z.string(),
  min_players: z.number().int().default(2),
  max_players: z.number().int().default(2),
  match_type: z.string(),
  custom_match: z.boolean(),
  created_at: z.date(),
  created_by_id: z.string().nullable(),
  rated: z.boolean().nullable(),
});

export type MatchSession = z.infer<typeof MatchSessionSchema>;
