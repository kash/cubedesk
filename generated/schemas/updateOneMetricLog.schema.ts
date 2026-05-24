import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MetricLogSelectObjectSchema as MetricLogSelectObjectSchema } from './objects/MetricLogSelect.schema';
import { MetricLogIncludeObjectSchema as MetricLogIncludeObjectSchema } from './objects/MetricLogInclude.schema';
import { MetricLogUpdateInputObjectSchema as MetricLogUpdateInputObjectSchema } from './objects/MetricLogUpdateInput.schema';
import { MetricLogUncheckedUpdateInputObjectSchema as MetricLogUncheckedUpdateInputObjectSchema } from './objects/MetricLogUncheckedUpdateInput.schema';
import { MetricLogWhereUniqueInputObjectSchema as MetricLogWhereUniqueInputObjectSchema } from './objects/MetricLogWhereUniqueInput.schema';

export const MetricLogUpdateOneSchema: z.ZodType<Prisma.MetricLogUpdateArgs> = z.object({ select: MetricLogSelectObjectSchema.optional(), include: MetricLogIncludeObjectSchema.optional(), data: z.union([MetricLogUpdateInputObjectSchema, MetricLogUncheckedUpdateInputObjectSchema]), where: MetricLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MetricLogUpdateArgs>;

export const MetricLogUpdateOneZodSchema = z.object({ select: MetricLogSelectObjectSchema.optional(), include: MetricLogIncludeObjectSchema.optional(), data: z.union([MetricLogUpdateInputObjectSchema, MetricLogUncheckedUpdateInputObjectSchema]), where: MetricLogWhereUniqueInputObjectSchema }).strict();