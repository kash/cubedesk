import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DemoSolveOrderByWithRelationInputObjectSchema as DemoSolveOrderByWithRelationInputObjectSchema } from './objects/DemoSolveOrderByWithRelationInput.schema';
import { DemoSolveWhereInputObjectSchema as DemoSolveWhereInputObjectSchema } from './objects/DemoSolveWhereInput.schema';
import { DemoSolveWhereUniqueInputObjectSchema as DemoSolveWhereUniqueInputObjectSchema } from './objects/DemoSolveWhereUniqueInput.schema';
import { DemoSolveScalarFieldEnumSchema } from './enums/DemoSolveScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DemoSolveFindFirstSelectSchema: z.ZodType<Prisma.DemoSolveSelect> = z.object({
    id: z.boolean().optional(),
    demo_session_id: z.boolean().optional(),
    ip_address: z.boolean().optional(),
    raw_time: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    scramble: z.boolean().optional(),
    started_at: z.boolean().optional(),
    ended_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DemoSolveSelect>;

export const DemoSolveFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    demo_session_id: z.boolean().optional(),
    ip_address: z.boolean().optional(),
    raw_time: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    scramble: z.boolean().optional(),
    started_at: z.boolean().optional(),
    ended_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const DemoSolveFindFirstSchema: z.ZodType<Prisma.DemoSolveFindFirstArgs> = z.object({ select: DemoSolveFindFirstSelectSchema.optional(),  orderBy: z.union([DemoSolveOrderByWithRelationInputObjectSchema, DemoSolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: DemoSolveWhereInputObjectSchema.optional(), cursor: DemoSolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DemoSolveScalarFieldEnumSchema, DemoSolveScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DemoSolveFindFirstArgs>;

export const DemoSolveFindFirstZodSchema = z.object({ select: DemoSolveFindFirstSelectSchema.optional(),  orderBy: z.union([DemoSolveOrderByWithRelationInputObjectSchema, DemoSolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: DemoSolveWhereInputObjectSchema.optional(), cursor: DemoSolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DemoSolveScalarFieldEnumSchema, DemoSolveScalarFieldEnumSchema.array()]).optional() }).strict();