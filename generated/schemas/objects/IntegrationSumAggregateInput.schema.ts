import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  auth_expires_at: z.literal(true).optional()
}).strict();
export const IntegrationSumAggregateInputObjectSchema: z.ZodType<Prisma.IntegrationSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationSumAggregateInputType>;
export const IntegrationSumAggregateInputObjectZodSchema = makeSchema();
