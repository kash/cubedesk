import * as z from 'zod';
export const ChatMessageDeleteManyResultSchema = z.object({
  count: z.number()
});