import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationPreferenceIncludeObjectSchema as NotificationPreferenceIncludeObjectSchema } from './objects/NotificationPreferenceInclude.schema';
import { NotificationPreferenceOrderByWithRelationInputObjectSchema as NotificationPreferenceOrderByWithRelationInputObjectSchema } from './objects/NotificationPreferenceOrderByWithRelationInput.schema';
import { NotificationPreferenceWhereInputObjectSchema as NotificationPreferenceWhereInputObjectSchema } from './objects/NotificationPreferenceWhereInput.schema';
import { NotificationPreferenceWhereUniqueInputObjectSchema as NotificationPreferenceWhereUniqueInputObjectSchema } from './objects/NotificationPreferenceWhereUniqueInput.schema';
import { NotificationPreferenceScalarFieldEnumSchema } from './enums/NotificationPreferenceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NotificationPreferenceFindManySelectSchema: z.ZodType<Prisma.NotificationPreferenceSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    friend_request: z.boolean().optional(),
    friend_request_accept: z.boolean().optional(),
    created_at: z.boolean().optional(),
    marketing_emails: z.boolean().optional(),
    elo_refund: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.NotificationPreferenceSelect>;

export const NotificationPreferenceFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    friend_request: z.boolean().optional(),
    friend_request_accept: z.boolean().optional(),
    created_at: z.boolean().optional(),
    marketing_emails: z.boolean().optional(),
    elo_refund: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const NotificationPreferenceFindManySchema: z.ZodType<Prisma.NotificationPreferenceFindManyArgs> = z.object({ select: NotificationPreferenceFindManySelectSchema.optional(), include: z.lazy(() => NotificationPreferenceIncludeObjectSchema.optional()), orderBy: z.union([NotificationPreferenceOrderByWithRelationInputObjectSchema, NotificationPreferenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationPreferenceWhereInputObjectSchema.optional(), cursor: NotificationPreferenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NotificationPreferenceScalarFieldEnumSchema, NotificationPreferenceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.NotificationPreferenceFindManyArgs>;

export const NotificationPreferenceFindManyZodSchema = z.object({ select: NotificationPreferenceFindManySelectSchema.optional(), include: z.lazy(() => NotificationPreferenceIncludeObjectSchema.optional()), orderBy: z.union([NotificationPreferenceOrderByWithRelationInputObjectSchema, NotificationPreferenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationPreferenceWhereInputObjectSchema.optional(), cursor: NotificationPreferenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NotificationPreferenceScalarFieldEnumSchema, NotificationPreferenceScalarFieldEnumSchema.array()]).optional() }).strict();