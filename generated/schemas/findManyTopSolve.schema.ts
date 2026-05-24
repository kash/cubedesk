import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopSolveIncludeObjectSchema as TopSolveIncludeObjectSchema } from './objects/TopSolveInclude.schema';
import { TopSolveOrderByWithRelationInputObjectSchema as TopSolveOrderByWithRelationInputObjectSchema } from './objects/TopSolveOrderByWithRelationInput.schema';
import { TopSolveWhereInputObjectSchema as TopSolveWhereInputObjectSchema } from './objects/TopSolveWhereInput.schema';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './objects/TopSolveWhereUniqueInput.schema';
import { TopSolveScalarFieldEnumSchema } from './enums/TopSolveScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TopSolveFindManySelectSchema: z.ZodType<Prisma.TopSolveSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    time: z.boolean().optional(),
    solve_id: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    created_at: z.boolean().optional(),
    solve: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TopSolveSelect>;

export const TopSolveFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    time: z.boolean().optional(),
    solve_id: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    created_at: z.boolean().optional(),
    solve: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const TopSolveFindManySchema: z.ZodType<Prisma.TopSolveFindManyArgs> = z.object({ select: TopSolveFindManySelectSchema.optional(), include: z.lazy(() => TopSolveIncludeObjectSchema.optional()), orderBy: z.union([TopSolveOrderByWithRelationInputObjectSchema, TopSolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopSolveWhereInputObjectSchema.optional(), cursor: TopSolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TopSolveScalarFieldEnumSchema, TopSolveScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TopSolveFindManyArgs>;

export const TopSolveFindManyZodSchema = z.object({ select: TopSolveFindManySelectSchema.optional(), include: z.lazy(() => TopSolveIncludeObjectSchema.optional()), orderBy: z.union([TopSolveOrderByWithRelationInputObjectSchema, TopSolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopSolveWhereInputObjectSchema.optional(), cursor: TopSolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TopSolveScalarFieldEnumSchema, TopSolveScalarFieldEnumSchema.array()]).optional() }).strict();