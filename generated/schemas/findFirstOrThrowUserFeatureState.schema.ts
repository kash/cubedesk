import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserFeatureStateIncludeObjectSchema as UserFeatureStateIncludeObjectSchema } from './objects/UserFeatureStateInclude.schema';
import { UserFeatureStateOrderByWithRelationInputObjectSchema as UserFeatureStateOrderByWithRelationInputObjectSchema } from './objects/UserFeatureStateOrderByWithRelationInput.schema';
import { UserFeatureStateWhereInputObjectSchema as UserFeatureStateWhereInputObjectSchema } from './objects/UserFeatureStateWhereInput.schema';
import { UserFeatureStateWhereUniqueInputObjectSchema as UserFeatureStateWhereUniqueInputObjectSchema } from './objects/UserFeatureStateWhereUniqueInput.schema';
import { UserFeatureStateScalarFieldEnumSchema } from './enums/UserFeatureStateScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFeatureStateFindFirstOrThrowSelectSchema: z.ZodType<Prisma.UserFeatureStateSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    received_welcome_screen: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserFeatureStateSelect>;

export const UserFeatureStateFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    received_welcome_screen: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const UserFeatureStateFindFirstOrThrowSchema: z.ZodType<Prisma.UserFeatureStateFindFirstOrThrowArgs> = z.object({ select: UserFeatureStateFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserFeatureStateIncludeObjectSchema.optional()), orderBy: z.union([UserFeatureStateOrderByWithRelationInputObjectSchema, UserFeatureStateOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserFeatureStateWhereInputObjectSchema.optional(), cursor: UserFeatureStateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserFeatureStateScalarFieldEnumSchema, UserFeatureStateScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFeatureStateFindFirstOrThrowArgs>;

export const UserFeatureStateFindFirstOrThrowZodSchema = z.object({ select: UserFeatureStateFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserFeatureStateIncludeObjectSchema.optional()), orderBy: z.union([UserFeatureStateOrderByWithRelationInputObjectSchema, UserFeatureStateOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserFeatureStateWhereInputObjectSchema.optional(), cursor: UserFeatureStateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserFeatureStateScalarFieldEnumSchema, UserFeatureStateScalarFieldEnumSchema.array()]).optional() }).strict();