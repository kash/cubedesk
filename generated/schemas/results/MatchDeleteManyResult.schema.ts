import * as z from 'zod';
export const MatchDeleteManyResultSchema = z.object({
  count: z.number()
});