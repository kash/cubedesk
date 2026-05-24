import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  auth_expires_at: z.literal(true).optional()
}).strict();
export const IntegrationAvgAggregateInputObjectSchema: z.ZodType<Prisma.IntegrationAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationAvgAggregateInputType>;
export const IntegrationAvgAggregateInputObjectZodSchema = makeSchema();
