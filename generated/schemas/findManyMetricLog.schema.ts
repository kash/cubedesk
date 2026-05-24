import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MetricLogIncludeObjectSchema as MetricLogIncludeObjectSchema } from './objects/MetricLogInclude.schema';
import { MetricLogOrderByWithRelationInputObjectSchema as MetricLogOrderByWithRelationInputObjectSchema } from './objects/MetricLogOrderByWithRelationInput.schema';
import { MetricLogWhereInputObjectSchema as MetricLogWhereInputObjectSchema } from './objects/MetricLogWhereInput.schema';
import { MetricLogWhereUniqueInputObjectSchema as MetricLogWhereUniqueInputObjectSchema } from './objects/MetricLogWhereUniqueInput.schema';
import { MetricLogScalarFieldEnumSchema } from './enums/MetricLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MetricLogFindManySelectSchema: z.ZodType<Prisma.MetricLogSelect> = z.object({
    id: z.boolean().optional(),
    user_email: z.boolean().optional(),
    metric_type: z.boolean().optional(),
    metric_value: z.boolean().optional(),
    metric_details: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MetricLogSelect>;

export const MetricLogFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_email: z.boolean().optional(),
    metric_type: z.boolean().optional(),
    metric_value: z.boolean().optional(),
    metric_details: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const MetricLogFindManySchema: z.ZodType<Prisma.MetricLogFindManyArgs> = z.object({ select: MetricLogFindManySelectSchema.optional(), include: z.lazy(() => MetricLogIncludeObjectSchema.optional()), orderBy: z.union([MetricLogOrderByWithRelationInputObjectSchema, MetricLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: MetricLogWhereInputObjectSchema.optional(), cursor: MetricLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MetricLogScalarFieldEnumSchema, MetricLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MetricLogFindManyArgs>;

export const MetricLogFindManyZodSchema = z.object({ select: MetricLogFindManySelectSchema.optional(), include: z.lazy(() => MetricLogIncludeObjectSchema.optional()), orderBy: z.union([MetricLogOrderByWithRelationInputObjectSchema, MetricLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: MetricLogWhereInputObjectSchema.optional(), cursor: MetricLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MetricLogScalarFieldEnumSchema, MetricLogScalarFieldEnumSchema.array()]).optional() }).strict();