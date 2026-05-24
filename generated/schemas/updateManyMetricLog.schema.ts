import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MetricLogUpdateManyMutationInputObjectSchema as MetricLogUpdateManyMutationInputObjectSchema } from './objects/MetricLogUpdateManyMutationInput.schema';
import { MetricLogWhereInputObjectSchema as MetricLogWhereInputObjectSchema } from './objects/MetricLogWhereInput.schema';

export const MetricLogUpdateManySchema: z.ZodType<Prisma.MetricLogUpdateManyArgs> = z.object({ data: MetricLogUpdateManyMutationInputObjectSchema, where: MetricLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MetricLogUpdateManyArgs>;

export const MetricLogUpdateManyZodSchema = z.object({ data: MetricLogUpdateManyMutationInputObjectSchema, where: MetricLogWhereInputObjectSchema.optional() }).strict();