import * as z from 'zod';

export const MetricLogScalarFieldEnumSchema = z.enum(['id', 'user_email', 'metric_type', 'metric_value', 'metric_details', 'created_at'])

export type MetricLogScalarFieldEnum = z.infer<typeof MetricLogScalarFieldEnumSchema>;