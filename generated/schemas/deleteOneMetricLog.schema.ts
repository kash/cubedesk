import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MetricLogSelectObjectSchema as MetricLogSelectObjectSchema } from './objects/MetricLogSelect.schema';
import { MetricLogIncludeObjectSchema as MetricLogIncludeObjectSchema } from './objects/MetricLogInclude.schema';
import { MetricLogWhereUniqueInputObjectSchema as MetricLogWhereUniqueInputObjectSchema } from './objects/MetricLogWhereUniqueInput.schema';

export const MetricLogDeleteOneSchema: z.ZodType<Prisma.MetricLogDeleteArgs> = z.object({ select: MetricLogSelectObjectSchema.optional(), include: MetricLogIncludeObjectSchema.optional(), where: MetricLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MetricLogDeleteArgs>;

export const MetricLogDeleteOneZodSchema = z.object({ select: MetricLogSelectObjectSchema.optional(), include: MetricLogIncludeObjectSchema.optional(), where: MetricLogWhereUniqueInputObjectSchema }).strict();