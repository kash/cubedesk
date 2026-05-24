import * as z from 'zod';
import { MetricLogTypeSchema } from '../../enums/MetricLogType.schema';
// prettier-ignore
export const MetricLogInputSchema = z.object({
    id: z.string(),
    user_email: z.string().optional().nullable(),
    metric_type: MetricLogTypeSchema,
    metric_value: z.number().optional().nullable(),
    metric_details: z.string().optional().nullable(),
    created_at: z.date(),
    user: z.unknown().optional().nullable()
}).strict();

export type MetricLogInputType = z.infer<typeof MetricLogInputSchema>;
