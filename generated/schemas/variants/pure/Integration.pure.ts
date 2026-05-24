import * as z from 'zod';
// prettier-ignore
export const IntegrationModelSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    service_name: z.string(),
    auth_token: z.string(),
    refresh_token: z.string(),
    auth_expires_at: z.bigint(),
    created_at: z.date(),
    user: z.unknown()
}).strict();

export type IntegrationPureType = z.infer<typeof IntegrationModelSchema>;
