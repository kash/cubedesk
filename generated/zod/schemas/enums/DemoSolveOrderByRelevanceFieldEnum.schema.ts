import * as z from 'zod';

export const DemoSolveOrderByRelevanceFieldEnumSchema = z.enum(['id', 'demo_session_id', 'ip_address', 'event_type', 'scramble'])

export type DemoSolveOrderByRelevanceFieldEnum = z.infer<typeof DemoSolveOrderByRelevanceFieldEnumSchema>;