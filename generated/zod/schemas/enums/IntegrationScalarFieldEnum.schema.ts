import * as z from 'zod';

export const IntegrationScalarFieldEnumSchema = z.enum(['id', 'user_id', 'service_name', 'auth_token', 'refresh_token', 'auth_expires_at', 'created_at'])

export type IntegrationScalarFieldEnum = z.infer<typeof IntegrationScalarFieldEnumSchema>;