import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MetricLogSelectObjectSchema as MetricLogSelectObjectSchema } from './objects/MetricLogSelect.schema';
import { MetricLogIncludeObjectSchema as MetricLogIncludeObjectSchema } from './objects/MetricLogInclude.schema';
import { MetricLogWhereUniqueInputObjectSchema as MetricLogWhereUniqueInputObjectSchema } from './objects/MetricLogWhereUniqueInput.schema';

export const MetricLogFindUniqueSchema: z.ZodType<Prisma.MetricLogFindUniqueArgs> = z.object({ select: MetricLogSelectObjectSchema.optional(), include: MetricLogIncludeObjectSchema.optional(), where: MetricLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MetricLogFindUniqueArgs>;

export const MetricLogFindUniqueZodSchema = z.object({ select: MetricLogSelectObjectSchema.optional(), include: MetricLogIncludeObjectSchema.optional(), where: MetricLogWhereUniqueInputObjectSchema }).strict();