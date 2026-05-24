import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopAverageIncludeObjectSchema as TopAverageIncludeObjectSchema } from './objects/TopAverageInclude.schema';
import { TopAverageOrderByWithRelationInputObjectSchema as TopAverageOrderByWithRelationInputObjectSchema } from './objects/TopAverageOrderByWithRelationInput.schema';
import { TopAverageWhereInputObjectSchema as TopAverageWhereInputObjectSchema } from './objects/TopAverageWhereInput.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './objects/TopAverageWhereUniqueInput.schema';
import { TopAverageScalarFieldEnumSchema } from './enums/TopAverageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TopAverageFindFirstSelectSchema: z.ZodType<Prisma.TopAverageSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    time: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    solve_1_id: z.boolean().optional(),
    solve_2_id: z.boolean().optional(),
    solve_3_id: z.boolean().optional(),
    solve_4_id: z.boolean().optional(),
    solve_5_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    solve_1: z.boolean().optional(),
    solve_2: z.boolean().optional(),
    solve_3: z.boolean().optional(),
    solve_4: z.boolean().optional(),
    solve_5: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TopAverageSelect>;

export const TopAverageFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    time: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    solve_1_id: z.boolean().optional(),
    solve_2_id: z.boolean().optional(),
    solve_3_id: z.boolean().optional(),
    solve_4_id: z.boolean().optional(),
    solve_5_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    solve_1: z.boolean().optional(),
    solve_2: z.boolean().optional(),
    solve_3: z.boolean().optional(),
    solve_4: z.boolean().optional(),
    solve_5: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const TopAverageFindFirstSchema: z.ZodType<Prisma.TopAverageFindFirstArgs> = z.object({ select: TopAverageFindFirstSelectSchema.optional(), include: z.lazy(() => TopAverageIncludeObjectSchema.optional()), orderBy: z.union([TopAverageOrderByWithRelationInputObjectSchema, TopAverageOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopAverageWhereInputObjectSchema.optional(), cursor: TopAverageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TopAverageScalarFieldEnumSchema, TopAverageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TopAverageFindFirstArgs>;

export const TopAverageFindFirstZodSchema = z.object({ select: TopAverageFindFirstSelectSchema.optional(), include: z.lazy(() => TopAverageIncludeObjectSchema.optional()), orderBy: z.union([TopAverageOrderByWithRelationInputObjectSchema, TopAverageOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopAverageWhereInputObjectSchema.optional(), cursor: TopAverageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TopAverageScalarFieldEnumSchema, TopAverageScalarFieldEnumSchema.array()]).optional() }).strict();