import * as z from 'zod';

export const ImportStatusSchema = z.enum(['pending', 'succeeded', 'failed'])

export type ImportStatus = z.infer<typeof ImportStatusSchema>;