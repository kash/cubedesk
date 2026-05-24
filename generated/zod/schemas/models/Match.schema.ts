import * as z from 'zod';

export const MatchSchema = z.object({
  id: z.string(),
  winner_id: z.string().nullable(),
  created_at: z.date(),
  link_code: z.string(),
  match_session_id: z.string(),
  ended_at: z.date().nullable(),
  started_at: z.date().nullable(),
  spectate_code: z.string().nullable(),
  aborted: z.boolean(),
});

export type Match = z.infer<typeof MatchSchema>;
