import * as z from 'zod';
// prettier-ignore
export const SmartDeviceModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    internal_name: z.string(),
    created_at: z.date(),
    device_id: z.string(),
    user_id: z.string(),
    user: z.unknown(),
    solves: z.array(z.unknown())
}).strict();

export type SmartDevicePureType = z.infer<typeof SmartDeviceModelSchema>;
