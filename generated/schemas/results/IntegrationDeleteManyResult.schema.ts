import * as z from 'zod';
export const IntegrationDeleteManyResultSchema = z.object({
  count: z.number()
});