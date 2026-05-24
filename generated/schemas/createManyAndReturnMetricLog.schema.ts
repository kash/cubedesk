import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MetricLogSelectObjectSchema as MetricLogSelectObjectSchema } from './objects/MetricLogSelect.schema';
import { MetricLogCreateManyInputObjectSchema as MetricLogCreateManyInputObjectSchema } from './objects/MetricLogCreateManyInput.schema';

export const MetricLogCreateManyAndReturnSchema: z.ZodType<Prisma.MetricLogCreateManyAndReturnArgs> = z.object({ select: MetricLogSelectObjectSchema.optional(), data: z.union([ MetricLogCreateManyInputObjectSchema, z.array(MetricLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MetricLogCreateManyAndReturnArgs>;

export const MetricLogCreateManyAndReturnZodSchema = z.object({ select: MetricLogSelectObjectSchema.optional(), data: z.union([ MetricLogCreateManyInputObjectSchema, z.array(MetricLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();