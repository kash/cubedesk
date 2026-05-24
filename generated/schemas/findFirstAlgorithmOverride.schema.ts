import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AlgorithmOverrideIncludeObjectSchema as AlgorithmOverrideIncludeObjectSchema } from './objects/AlgorithmOverrideInclude.schema';
import { AlgorithmOverrideOrderByWithRelationInputObjectSchema as AlgorithmOverrideOrderByWithRelationInputObjectSchema } from './objects/AlgorithmOverrideOrderByWithRelationInput.schema';
import { AlgorithmOverrideWhereInputObjectSchema as AlgorithmOverrideWhereInputObjectSchema } from './objects/AlgorithmOverrideWhereInput.schema';
import { AlgorithmOverrideWhereUniqueInputObjectSchema as AlgorithmOverrideWhereUniqueInputObjectSchema } from './objects/AlgorithmOverrideWhereUniqueInput.schema';
import { AlgorithmOverrideScalarFieldEnumSchema } from './enums/AlgorithmOverrideScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AlgorithmOverrideFindFirstSelectSchema: z.ZodType<Prisma.AlgorithmOverrideSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    rotate: z.boolean().optional(),
    cube_key: z.boolean().optional(),
    created_at: z.boolean().optional(),
    solution: z.boolean().optional(),
    name: z.boolean().optional(),
    scrambles: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AlgorithmOverrideSelect>;

export const AlgorithmOverrideFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    rotate: z.boolean().optional(),
    cube_key: z.boolean().optional(),
    created_at: z.boolean().optional(),
    solution: z.boolean().optional(),
    name: z.boolean().optional(),
    scrambles: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const AlgorithmOverrideFindFirstSchema: z.ZodType<Prisma.AlgorithmOverrideFindFirstArgs> = z.object({ select: AlgorithmOverrideFindFirstSelectSchema.optional(), include: z.lazy(() => AlgorithmOverrideIncludeObjectSchema.optional()), orderBy: z.union([AlgorithmOverrideOrderByWithRelationInputObjectSchema, AlgorithmOverrideOrderByWithRelationInputObjectSchema.array()]).optional(), where: AlgorithmOverrideWhereInputObjectSchema.optional(), cursor: AlgorithmOverrideWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AlgorithmOverrideScalarFieldEnumSchema, AlgorithmOverrideScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AlgorithmOverrideFindFirstArgs>;

export const AlgorithmOverrideFindFirstZodSchema = z.object({ select: AlgorithmOverrideFindFirstSelectSchema.optional(), include: z.lazy(() => AlgorithmOverrideIncludeObjectSchema.optional()), orderBy: z.union([AlgorithmOverrideOrderByWithRelationInputObjectSchema, AlgorithmOverrideOrderByWithRelationInputObjectSchema.array()]).optional(), where: AlgorithmOverrideWhereInputObjectSchema.optional(), cursor: AlgorithmOverrideWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AlgorithmOverrideScalarFieldEnumSchema, AlgorithmOverrideScalarFieldEnumSchema.array()]).optional() }).strict();