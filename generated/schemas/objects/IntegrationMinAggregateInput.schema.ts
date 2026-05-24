import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  service_name: z.literal(true).optional(),
  auth_token: z.literal(true).optional(),
  refresh_token: z.literal(true).optional(),
  auth_expires_at: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const IntegrationMinAggregateInputObjectSchema: z.ZodType<Prisma.IntegrationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationMinAggregateInputType>;
export const IntegrationMinAggregateInputObjectZodSchema = makeSchema();
