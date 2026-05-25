import * as z from 'zod';

export const MatchParticipantSchema = z.object({
  id: z.string(),
  match_id: z.string(),
  user_id: z.string(),
  created_at: z.date(),
  resigned: z.boolean(),
  forfeited: z.boolean(),
  position: z.number().int(),
  won: z.boolean(),
  lost: z.boolean(),
  abandoned: z.boolean(),
  aborted: z.boolean(),
});

export type MatchParticipant = z.infer<typeof MatchParticipantSchema>;
