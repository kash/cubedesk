import * as z from 'zod';
export const SolveDeleteManyResultSchema = z.object({
  count: z.number()
});