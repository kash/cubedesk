import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ForgotPasswordIncludeObjectSchema as ForgotPasswordIncludeObjectSchema } from './objects/ForgotPasswordInclude.schema';
import { ForgotPasswordOrderByWithRelationInputObjectSchema as ForgotPasswordOrderByWithRelationInputObjectSchema } from './objects/ForgotPasswordOrderByWithRelationInput.schema';
import { ForgotPasswordWhereInputObjectSchema as ForgotPasswordWhereInputObjectSchema } from './objects/ForgotPasswordWhereInput.schema';
import { ForgotPasswordWhereUniqueInputObjectSchema as ForgotPasswordWhereUniqueInputObjectSchema } from './objects/ForgotPasswordWhereUniqueInput.schema';
import { ForgotPasswordScalarFieldEnumSchema } from './enums/ForgotPasswordScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ForgotPasswordFindFirstSelectSchema: z.ZodType<Prisma.ForgotPasswordSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    code: z.boolean().optional(),
    claimed: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ForgotPasswordSelect>;

export const ForgotPasswordFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    code: z.boolean().optional(),
    claimed: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const ForgotPasswordFindFirstSchema: z.ZodType<Prisma.ForgotPasswordFindFirstArgs> = z.object({ select: ForgotPasswordFindFirstSelectSchema.optional(), include: z.lazy(() => ForgotPasswordIncludeObjectSchema.optional()), orderBy: z.union([ForgotPasswordOrderByWithRelationInputObjectSchema, ForgotPasswordOrderByWithRelationInputObjectSchema.array()]).optional(), where: ForgotPasswordWhereInputObjectSchema.optional(), cursor: ForgotPasswordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ForgotPasswordScalarFieldEnumSchema, ForgotPasswordScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ForgotPasswordFindFirstArgs>;

export const ForgotPasswordFindFirstZodSchema = z.object({ select: ForgotPasswordFindFirstSelectSchema.optional(), include: z.lazy(() => ForgotPasswordIncludeObjectSchema.optional()), orderBy: z.union([ForgotPasswordOrderByWithRelationInputObjectSchema, ForgotPasswordOrderByWithRelationInputObjectSchema.array()]).optional(), where: ForgotPasswordWhereInputObjectSchema.optional(), cursor: ForgotPasswordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ForgotPasswordScalarFieldEnumSchema, ForgotPasswordScalarFieldEnumSchema.array()]).optional() }).strict();