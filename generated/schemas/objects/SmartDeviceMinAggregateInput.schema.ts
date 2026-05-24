import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  internal_name: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  device_id: z.literal(true).optional(),
  user_id: z.literal(true).optional()
}).strict();
export const SmartDeviceMinAggregateInputObjectSchema: z.ZodType<Prisma.SmartDeviceMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceMinAggregateInputType>;
export const SmartDeviceMinAggregateInputObjectZodSchema = makeSchema();
