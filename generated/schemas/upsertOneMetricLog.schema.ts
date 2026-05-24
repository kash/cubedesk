import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MetricLogSelectObjectSchema as MetricLogSelectObjectSchema } from './objects/MetricLogSelect.schema';
import { MetricLogIncludeObjectSchema as MetricLogIncludeObjectSchema } from './objects/MetricLogInclude.schema';
import { MetricLogWhereUniqueInputObjectSchema as MetricLogWhereUniqueInputObjectSchema } from './objects/MetricLogWhereUniqueInput.schema';
import { MetricLogCreateInputObjectSchema as MetricLogCreateInputObjectSchema } from './objects/MetricLogCreateInput.schema';
import { MetricLogUncheckedCreateInputObjectSchema as MetricLogUncheckedCreateInputObjectSchema } from './objects/MetricLogUncheckedCreateInput.schema';
import { MetricLogUpdateInputObjectSchema as MetricLogUpdateInputObjectSchema } from './objects/MetricLogUpdateInput.schema';
import { MetricLogUncheckedUpdateInputObjectSchema as MetricLogUncheckedUpdateInputObjectSchema } from './objects/MetricLogUncheckedUpdateInput.schema';

export const MetricLogUpsertOneSchema: z.ZodType<Prisma.MetricLogUpsertArgs> = z.object({ select: MetricLogSelectObjectSchema.optional(), include: MetricLogIncludeObjectSchema.optional(), where: MetricLogWhereUniqueInputObjectSchema, create: z.union([ MetricLogCreateInputObjectSchema, MetricLogUncheckedCreateInputObjectSchema ]), update: z.union([ MetricLogUpdateInputObjectSchema, MetricLogUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MetricLogUpsertArgs>;

export const MetricLogUpsertOneZodSchema = z.object({ select: MetricLogSelectObjectSchema.optional(), include: MetricLogIncludeObjectSchema.optional(), where: MetricLogWhereUniqueInputObjectSchema, create: z.union([ MetricLogCreateInputObjectSchema, MetricLogUncheckedCreateInputObjectSchema ]), update: z.union([ MetricLogUpdateInputObjectSchema, MetricLogUncheckedUpdateInputObjectSchema ]) }).strict();