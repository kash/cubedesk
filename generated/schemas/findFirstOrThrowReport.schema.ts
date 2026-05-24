import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportIncludeObjectSchema as ReportIncludeObjectSchema } from './objects/ReportInclude.schema';
import { ReportOrderByWithRelationInputObjectSchema as ReportOrderByWithRelationInputObjectSchema } from './objects/ReportOrderByWithRelationInput.schema';
import { ReportWhereInputObjectSchema as ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';
import { ReportScalarFieldEnumSchema } from './enums/ReportScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ReportSelect> = z.object({
    id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    reason: z.boolean().optional(),
    created_by_id: z.boolean().optional(),
    reported_user_id: z.boolean().optional(),
    resolved_at: z.boolean().optional(),
    created_by: z.boolean().optional(),
    reported_user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReportSelect>;

export const ReportFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    reason: z.boolean().optional(),
    created_by_id: z.boolean().optional(),
    reported_user_id: z.boolean().optional(),
    resolved_at: z.boolean().optional(),
    created_by: z.boolean().optional(),
    reported_user: z.boolean().optional()
  }).strict();

export const ReportFindFirstOrThrowSchema: z.ZodType<Prisma.ReportFindFirstOrThrowArgs> = z.object({ select: ReportFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReportIncludeObjectSchema.optional()), orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportScalarFieldEnumSchema, ReportScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportFindFirstOrThrowArgs>;

export const ReportFindFirstOrThrowZodSchema = z.object({ select: ReportFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReportIncludeObjectSchema.optional()), orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportScalarFieldEnumSchema, ReportScalarFieldEnumSchema.array()]).optional() }).strict();