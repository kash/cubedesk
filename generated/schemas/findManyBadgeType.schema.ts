import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeTypeIncludeObjectSchema as BadgeTypeIncludeObjectSchema } from './objects/BadgeTypeInclude.schema';
import { BadgeTypeOrderByWithRelationInputObjectSchema as BadgeTypeOrderByWithRelationInputObjectSchema } from './objects/BadgeTypeOrderByWithRelationInput.schema';
import { BadgeTypeWhereInputObjectSchema as BadgeTypeWhereInputObjectSchema } from './objects/BadgeTypeWhereInput.schema';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './objects/BadgeTypeWhereUniqueInput.schema';
import { BadgeTypeScalarFieldEnumSchema } from './enums/BadgeTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BadgeTypeFindManySelectSchema: z.ZodType<Prisma.BadgeTypeSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    priority: z.boolean().optional(),
    color: z.boolean().optional(),
    created_at: z.boolean().optional(),
    description: z.boolean().optional(),
    created_by_id: z.boolean().optional(),
    badges: z.boolean().optional(),
    created_by: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BadgeTypeSelect>;

export const BadgeTypeFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    priority: z.boolean().optional(),
    color: z.boolean().optional(),
    created_at: z.boolean().optional(),
    description: z.boolean().optional(),
    created_by_id: z.boolean().optional(),
    badges: z.boolean().optional(),
    created_by: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const BadgeTypeFindManySchema: z.ZodType<Prisma.BadgeTypeFindManyArgs> = z.object({ select: BadgeTypeFindManySelectSchema.optional(), include: z.lazy(() => BadgeTypeIncludeObjectSchema.optional()), orderBy: z.union([BadgeTypeOrderByWithRelationInputObjectSchema, BadgeTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BadgeTypeWhereInputObjectSchema.optional(), cursor: BadgeTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BadgeTypeScalarFieldEnumSchema, BadgeTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BadgeTypeFindManyArgs>;

export const BadgeTypeFindManyZodSchema = z.object({ select: BadgeTypeFindManySelectSchema.optional(), include: z.lazy(() => BadgeTypeIncludeObjectSchema.optional()), orderBy: z.union([BadgeTypeOrderByWithRelationInputObjectSchema, BadgeTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BadgeTypeWhereInputObjectSchema.optional(), cursor: BadgeTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BadgeTypeScalarFieldEnumSchema, BadgeTypeScalarFieldEnumSchema.array()]).optional() }).strict();