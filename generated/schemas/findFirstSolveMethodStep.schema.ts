import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveMethodStepIncludeObjectSchema as SolveMethodStepIncludeObjectSchema } from './objects/SolveMethodStepInclude.schema';
import { SolveMethodStepOrderByWithRelationInputObjectSchema as SolveMethodStepOrderByWithRelationInputObjectSchema } from './objects/SolveMethodStepOrderByWithRelationInput.schema';
import { SolveMethodStepWhereInputObjectSchema as SolveMethodStepWhereInputObjectSchema } from './objects/SolveMethodStepWhereInput.schema';
import { SolveMethodStepWhereUniqueInputObjectSchema as SolveMethodStepWhereUniqueInputObjectSchema } from './objects/SolveMethodStepWhereUniqueInput.schema';
import { SolveMethodStepScalarFieldEnumSchema } from './enums/SolveMethodStepScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SolveMethodStepFindFirstSelectSchema: z.ZodType<Prisma.SolveMethodStepSelect> = z.object({
    id: z.boolean().optional(),
    solve_id: z.boolean().optional(),
    turn_count: z.boolean().optional(),
    turns: z.boolean().optional(),
    method_name: z.boolean().optional(),
    step_index: z.boolean().optional(),
    step_name: z.boolean().optional(),
    created_at: z.boolean().optional(),
    total_time: z.boolean().optional(),
    tps: z.boolean().optional(),
    parent_name: z.boolean().optional(),
    recognition_time: z.boolean().optional(),
    skipped: z.boolean().optional(),
    oll_case_key: z.boolean().optional(),
    pll_case_key: z.boolean().optional(),
    solve: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SolveMethodStepSelect>;

export const SolveMethodStepFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    solve_id: z.boolean().optional(),
    turn_count: z.boolean().optional(),
    turns: z.boolean().optional(),
    method_name: z.boolean().optional(),
    step_index: z.boolean().optional(),
    step_name: z.boolean().optional(),
    created_at: z.boolean().optional(),
    total_time: z.boolean().optional(),
    tps: z.boolean().optional(),
    parent_name: z.boolean().optional(),
    recognition_time: z.boolean().optional(),
    skipped: z.boolean().optional(),
    oll_case_key: z.boolean().optional(),
    pll_case_key: z.boolean().optional(),
    solve: z.boolean().optional()
  }).strict();

export const SolveMethodStepFindFirstSchema: z.ZodType<Prisma.SolveMethodStepFindFirstArgs> = z.object({ select: SolveMethodStepFindFirstSelectSchema.optional(), include: z.lazy(() => SolveMethodStepIncludeObjectSchema.optional()), orderBy: z.union([SolveMethodStepOrderByWithRelationInputObjectSchema, SolveMethodStepOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveMethodStepWhereInputObjectSchema.optional(), cursor: SolveMethodStepWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SolveMethodStepScalarFieldEnumSchema, SolveMethodStepScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SolveMethodStepFindFirstArgs>;

export const SolveMethodStepFindFirstZodSchema = z.object({ select: SolveMethodStepFindFirstSelectSchema.optional(), include: z.lazy(() => SolveMethodStepIncludeObjectSchema.optional()), orderBy: z.union([SolveMethodStepOrderByWithRelationInputObjectSchema, SolveMethodStepOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveMethodStepWhereInputObjectSchema.optional(), cursor: SolveMethodStepWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SolveMethodStepScalarFieldEnumSchema, SolveMethodStepScalarFieldEnumSchema.array()]).optional() }).strict();