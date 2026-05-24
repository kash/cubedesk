import * as z from 'zod';
import { MetricLogTypeSchema } from '../../enums/MetricLogType.schema';
// prettier-ignore
export const MetricLogModelSchema = z.object({
    id: z.string(),
    user_email: z.string().nullable(),
    metric_type: MetricLogTypeSchema,
    metric_value: z.number().nullable(),
    metric_details: z.string().nullable(),
    created_at: z.date(),
    user: z.unknown().nullable()
}).strict();

export type MetricLogPureType = z.infer<typeof MetricLogModelSchema>;
