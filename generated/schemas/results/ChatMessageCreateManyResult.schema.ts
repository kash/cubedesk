import * as z from 'zod';
export const ChatMessageCreateManyResultSchema = z.object({
  count: z.number()
});