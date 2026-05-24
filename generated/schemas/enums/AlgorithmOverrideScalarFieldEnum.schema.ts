import * as z from 'zod';

export const AlgorithmOverrideScalarFieldEnumSchema = z.enum(['id', 'user_id', 'rotate', 'cube_key', 'created_at', 'solution', 'name', 'scrambles'])

export type AlgorithmOverrideScalarFieldEnum = z.infer<typeof AlgorithmOverrideScalarFieldEnumSchema>;