import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MetricLogWhereInputObjectSchema as MetricLogWhereInputObjectSchema } from './objects/MetricLogWhereInput.schema';

export const MetricLogDeleteManySchema: z.ZodType<Prisma.MetricLogDeleteManyArgs> = z.object({ where: MetricLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MetricLogDeleteManyArgs>;

export const MetricLogDeleteManyZodSchema = z.object({ where: MetricLogWhereInputObjectSchema.optional() }).strict();