import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MetricLogCreateManyInputObjectSchema as MetricLogCreateManyInputObjectSchema } from './objects/MetricLogCreateManyInput.schema';

export const MetricLogCreateManySchema: z.ZodType<Prisma.MetricLogCreateManyArgs> = z.object({ data: z.union([ MetricLogCreateManyInputObjectSchema, z.array(MetricLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MetricLogCreateManyArgs>;

export const MetricLogCreateManyZodSchema = z.object({ data: z.union([ MetricLogCreateManyInputObjectSchema, z.array(MetricLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();