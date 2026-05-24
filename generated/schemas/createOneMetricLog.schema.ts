import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MetricLogSelectObjectSchema as MetricLogSelectObjectSchema } from './objects/MetricLogSelect.schema';
import { MetricLogIncludeObjectSchema as MetricLogIncludeObjectSchema } from './objects/MetricLogInclude.schema';
import { MetricLogCreateInputObjectSchema as MetricLogCreateInputObjectSchema } from './objects/MetricLogCreateInput.schema';
import { MetricLogUncheckedCreateInputObjectSchema as MetricLogUncheckedCreateInputObjectSchema } from './objects/MetricLogUncheckedCreateInput.schema';

export const MetricLogCreateOneSchema: z.ZodType<Prisma.MetricLogCreateArgs> = z.object({ select: MetricLogSelectObjectSchema.optional(), include: MetricLogIncludeObjectSchema.optional(), data: z.union([MetricLogCreateInputObjectSchema, MetricLogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MetricLogCreateArgs>;

export const MetricLogCreateOneZodSchema = z.object({ select: MetricLogSelectObjectSchema.optional(), include: MetricLogIncludeObjectSchema.optional(), data: z.union([MetricLogCreateInputObjectSchema, MetricLogUncheckedCreateInputObjectSchema]) }).strict();