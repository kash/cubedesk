import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  received_welcome_screen: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const UserFeatureStateMinAggregateInputObjectSchema: z.ZodType<Prisma.UserFeatureStateMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateMinAggregateInputType>;
export const UserFeatureStateMinAggregateInputObjectZodSchema = makeSchema();
