import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BanLogIncludeObjectSchema as BanLogIncludeObjectSchema } from './objects/BanLogInclude.schema';
import { BanLogOrderByWithRelationInputObjectSchema as BanLogOrderByWithRelationInputObjectSchema } from './objects/BanLogOrderByWithRelationInput.schema';
import { BanLogWhereInputObjectSchema as BanLogWhereInputObjectSchema } from './objects/BanLogWhereInput.schema';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './objects/BanLogWhereUniqueInput.schema';
import { BanLogScalarFieldEnumSchema } from './enums/BanLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BanLogFindFirstOrThrowSelectSchema: z.ZodType<Prisma.BanLogSelect> = z.object({
    id: z.boolean().optional(),
    created_by_id: z.boolean().optional(),
    banned_user_id: z.boolean().optional(),
    reason: z.boolean().optional(),
    active: z.boolean().optional(),
    banned_until: z.boolean().optional(),
    minutes: z.boolean().optional(),
    forever: z.boolean().optional(),
    created_at: z.boolean().optional(),
    banned_user: z.boolean().optional(),
    created_by: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BanLogSelect>;

export const BanLogFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    created_by_id: z.boolean().optional(),
    banned_user_id: z.boolean().optional(),
    reason: z.boolean().optional(),
    active: z.boolean().optional(),
    banned_until: z.boolean().optional(),
    minutes: z.boolean().optional(),
    forever: z.boolean().optional(),
    created_at: z.boolean().optional(),
    banned_user: z.boolean().optional(),
    created_by: z.boolean().optional()
  }).strict();

export const BanLogFindFirstOrThrowSchema: z.ZodType<Prisma.BanLogFindFirstOrThrowArgs> = z.object({ select: BanLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BanLogIncludeObjectSchema.optional()), orderBy: z.union([BanLogOrderByWithRelationInputObjectSchema, BanLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanLogWhereInputObjectSchema.optional(), cursor: BanLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BanLogScalarFieldEnumSchema, BanLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BanLogFindFirstOrThrowArgs>;

export const BanLogFindFirstOrThrowZodSchema = z.object({ select: BanLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BanLogIncludeObjectSchema.optional()), orderBy: z.union([BanLogOrderByWithRelationInputObjectSchema, BanLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanLogWhereInputObjectSchema.optional(), cursor: BanLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BanLogScalarFieldEnumSchema, BanLogScalarFieldEnumSchema.array()]).optional() }).strict();