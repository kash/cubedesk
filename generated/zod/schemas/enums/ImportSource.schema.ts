import * as z from 'zod';

export const ImportSourceSchema = z.enum(['cstimer', 'cubedesk'])

export type ImportSource = z.infer<typeof ImportSourceSchema>;