import * as z from 'zod';
export const IntegrationCreateManyResultSchema = z.object({
  count: z.number()
});