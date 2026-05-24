import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewIncludeObjectSchema as AdViewIncludeObjectSchema } from './objects/AdViewInclude.schema';
import { AdViewOrderByWithRelationInputObjectSchema as AdViewOrderByWithRelationInputObjectSchema } from './objects/AdViewOrderByWithRelationInput.schema';
import { AdViewWhereInputObjectSchema as AdViewWhereInputObjectSchema } from './objects/AdViewWhereInput.schema';
import { AdViewWhereUniqueInputObjectSchema as AdViewWhereUniqueInputObjectSchema } from './objects/AdViewWhereUniqueInput.schema';
import { AdViewScalarFieldEnumSchema } from './enums/AdViewScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AdViewFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AdViewSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    ip_address: z.boolean().optional(),
    ad_key: z.boolean().optional(),
    view_time_seconds: z.boolean().optional(),
    browser_session_id: z.boolean().optional(),
    clicked_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    created_at: z.boolean().optional(),
    pathname: z.boolean().optional(),
    last_session_started_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AdViewSelect>;

export const AdViewFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    ip_address: z.boolean().optional(),
    ad_key: z.boolean().optional(),
    view_time_seconds: z.boolean().optional(),
    browser_session_id: z.boolean().optional(),
    clicked_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    created_at: z.boolean().optional(),
    pathname: z.boolean().optional(),
    last_session_started_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const AdViewFindFirstOrThrowSchema: z.ZodType<Prisma.AdViewFindFirstOrThrowArgs> = z.object({ select: AdViewFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AdViewIncludeObjectSchema.optional()), orderBy: z.union([AdViewOrderByWithRelationInputObjectSchema, AdViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: AdViewWhereInputObjectSchema.optional(), cursor: AdViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AdViewScalarFieldEnumSchema, AdViewScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AdViewFindFirstOrThrowArgs>;

export const AdViewFindFirstOrThrowZodSchema = z.object({ select: AdViewFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AdViewIncludeObjectSchema.optional()), orderBy: z.union([AdViewOrderByWithRelationInputObjectSchema, AdViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: AdViewWhereInputObjectSchema.optional(), cursor: AdViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AdViewScalarFieldEnumSchema, AdViewScalarFieldEnumSchema.array()]).optional() }).strict();