import * as z from 'zod';

export const MetricLogTypeSchema = z.enum(['DELETE_USER_ACCOUNT'])

export type MetricLogType = z.infer<typeof MetricLogTypeSchema>;