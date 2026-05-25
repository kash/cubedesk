import * as z from 'zod';

export const MetricLogOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_email', 'metric_details'])

export type MetricLogOrderByRelevanceFieldEnum = z.infer<typeof MetricLogOrderByRelevanceFieldEnumSchema>;