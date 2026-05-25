import * as z from 'zod';

export const DemoSolveScalarFieldEnumSchema = z.enum(['id', 'demo_session_id', 'ip_address', 'raw_time', 'cube_type', 'scramble', 'started_at', 'ended_at', 'updated_at', 'created_at'])

export type DemoSolveScalarFieldEnum = z.infer<typeof DemoSolveScalarFieldEnumSchema>;