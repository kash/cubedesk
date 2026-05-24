import * as z from 'zod';
export const BadgeDeleteManyResultSchema = z.object({
  count: z.number()
});