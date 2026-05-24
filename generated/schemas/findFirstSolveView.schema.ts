import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveViewIncludeObjectSchema as SolveViewIncludeObjectSchema } from './objects/SolveViewInclude.schema';
import { SolveViewOrderByWithRelationInputObjectSchema as SolveViewOrderByWithRelationInputObjectSchema } from './objects/SolveViewOrderByWithRelationInput.schema';
import { SolveViewWhereInputObjectSchema as SolveViewWhereInputObjectSchema } from './objects/SolveViewWhereInput.schema';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './objects/SolveViewWhereUniqueInput.schema';
import { SolveViewScalarFieldEnumSchema } from './enums/SolveViewScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SolveViewFindFirstSelectSchema: z.ZodType<Prisma.SolveViewSelect> = z.object({
    id: z.boolean().optional(),
    solve_id: z.boolean().optional(),
    viewer_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    solve: z.boolean().optional(),
    user: z.boolean().optional(),
    viewer: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SolveViewSelect>;

export const SolveViewFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    solve_id: z.boolean().optional(),
    viewer_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    solve: z.boolean().optional(),
    user: z.boolean().optional(),
    viewer: z.boolean().optional()
  }).strict();

export const SolveViewFindFirstSchema: z.ZodType<Prisma.SolveViewFindFirstArgs> = z.object({ select: SolveViewFindFirstSelectSchema.optional(), include: z.lazy(() => SolveViewIncludeObjectSchema.optional()), orderBy: z.union([SolveViewOrderByWithRelationInputObjectSchema, SolveViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveViewWhereInputObjectSchema.optional(), cursor: SolveViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SolveViewScalarFieldEnumSchema, SolveViewScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SolveViewFindFirstArgs>;

export const SolveViewFindFirstZodSchema = z.object({ select: SolveViewFindFirstSelectSchema.optional(), include: z.lazy(() => SolveViewIncludeObjectSchema.optional()), orderBy: z.union([SolveViewOrderByWithRelationInputObjectSchema, SolveViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveViewWhereInputObjectSchema.optional(), cursor: SolveViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SolveViewScalarFieldEnumSchema, SolveViewScalarFieldEnumSchema.array()]).optional() }).strict();