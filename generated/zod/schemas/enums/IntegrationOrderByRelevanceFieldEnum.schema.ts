import * as z from 'zod';

export const IntegrationOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'service_name', 'auth_token', 'refresh_token'])

export type IntegrationOrderByRelevanceFieldEnum = z.infer<typeof IntegrationOrderByRelevanceFieldEnumSchema>;