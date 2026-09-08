import * as z from 'zod';

export const UserFeatureStateScalarFieldEnumSchema = z.enum(['id', 'user_id', 'received_welcome_screen', 'import_prompt_hidden', 'updated_at', 'created_at'])

export type UserFeatureStateScalarFieldEnum = z.infer<typeof UserFeatureStateScalarFieldEnumSchema>;