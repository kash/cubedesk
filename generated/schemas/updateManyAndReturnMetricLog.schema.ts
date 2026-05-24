import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MetricLogSelectObjectSchema as MetricLogSelectObjectSchema } from './objects/MetricLogSelect.schema';
import { MetricLogUpdateManyMutationInputObjectSchema as MetricLogUpdateManyMutationInputObjectSchema } from './objects/MetricLogUpdateManyMutationInput.schema';
import { MetricLogWhereInputObjectSchema as MetricLogWhereInputObjectSchema } from './objects/MetricLogWhereInput.schema';

export const MetricLogUpdateManyAndReturnSchema: z.ZodType<Prisma.MetricLogUpdateManyAndReturnArgs> = z.object({ select: MetricLogSelectObjectSchema.optional(), data: MetricLogUpdateManyMutationInputObjectSchema, where: MetricLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MetricLogUpdateManyAndReturnArgs>;

export const MetricLogUpdateManyAndReturnZodSchema = z.object({ select: MetricLogSelectObjectSchema.optional(), data: MetricLogUpdateManyMutationInputObjectSchema, where: MetricLogWhereInputObjectSchema.optional() }).strict();