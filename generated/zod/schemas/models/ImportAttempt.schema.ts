import * as z from 'zod';
import { ImportSourceSchema } from '../enums/ImportSource.schema';
import { ImportStatusSchema } from '../enums/ImportStatus.schema';

export const ImportAttemptSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  source: ImportSourceSchema,
  status: ImportStatusSchema.default("pending"),
  request_hash: z.string(),
  requested_sessions: z.number().int(),
  requested_solves: z.number().int(),
  saved_sessions: z.number().int(),
  saved_solves: z.number().int(),
  started_at: z.date(),
  completed_at: z.date().nullable(),
  failure_code: z.string().nullable(),
});

export type ImportAttempt = z.infer<typeof ImportAttemptSchema>;
