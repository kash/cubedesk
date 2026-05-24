import * as z from 'zod';
// prettier-ignore
export const CustomCubeTypeModelSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    name: z.string(),
    created_at: z.date(),
    scramble: z.string(),
    private: z.boolean(),
    setting: z.unknown()
}).strict();

export type CustomCubeTypePureType = z.infer<typeof CustomCubeTypeModelSchema>;
