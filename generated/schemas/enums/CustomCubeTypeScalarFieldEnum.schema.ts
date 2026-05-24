import * as z from 'zod';

export const CustomCubeTypeScalarFieldEnumSchema = z.enum(['id', 'user_id', 'name', 'created_at', 'scramble', 'private'])

export type CustomCubeTypeScalarFieldEnum = z.infer<typeof CustomCubeTypeScalarFieldEnumSchema>;