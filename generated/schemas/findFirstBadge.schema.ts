import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeIncludeObjectSchema as BadgeIncludeObjectSchema } from './objects/BadgeInclude.schema';
import { BadgeOrderByWithRelationInputObjectSchema as BadgeOrderByWithRelationInputObjectSchema } from './objects/BadgeOrderByWithRelationInput.schema';
import { BadgeWhereInputObjectSchema as BadgeWhereInputObjectSchema } from './objects/BadgeWhereInput.schema';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './objects/BadgeWhereUniqueInput.schema';
import { BadgeScalarFieldEnumSchema } from './enums/BadgeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BadgeFindFirstSelectSchema: z.ZodType<Prisma.BadgeSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    badge_type_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    badge_type: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BadgeSelect>;

export const BadgeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    badge_type_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    badge_type: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const BadgeFindFirstSchema: z.ZodType<Prisma.BadgeFindFirstArgs> = z.object({ select: BadgeFindFirstSelectSchema.optional(), include: z.lazy(() => BadgeIncludeObjectSchema.optional()), orderBy: z.union([BadgeOrderByWithRelationInputObjectSchema, BadgeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BadgeWhereInputObjectSchema.optional(), cursor: BadgeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BadgeScalarFieldEnumSchema, BadgeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BadgeFindFirstArgs>;

export const BadgeFindFirstZodSchema = z.object({ select: BadgeFindFirstSelectSchema.optional(), include: z.lazy(() => BadgeIncludeObjectSchema.optional()), orderBy: z.union([BadgeOrderByWithRelationInputObjectSchema, BadgeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BadgeWhereInputObjectSchema.optional(), cursor: BadgeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BadgeScalarFieldEnumSchema, BadgeScalarFieldEnumSchema.array()]).optional() }).strict();