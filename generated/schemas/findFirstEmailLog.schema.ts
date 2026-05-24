import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EmailLogIncludeObjectSchema as EmailLogIncludeObjectSchema } from './objects/EmailLogInclude.schema';
import { EmailLogOrderByWithRelationInputObjectSchema as EmailLogOrderByWithRelationInputObjectSchema } from './objects/EmailLogOrderByWithRelationInput.schema';
import { EmailLogWhereInputObjectSchema as EmailLogWhereInputObjectSchema } from './objects/EmailLogWhereInput.schema';
import { EmailLogWhereUniqueInputObjectSchema as EmailLogWhereUniqueInputObjectSchema } from './objects/EmailLogWhereUniqueInput.schema';
import { EmailLogScalarFieldEnumSchema } from './enums/EmailLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EmailLogFindFirstSelectSchema: z.ZodType<Prisma.EmailLogSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    subject: z.boolean().optional(),
    template: z.boolean().optional(),
    vars: z.boolean().optional(),
    created_at: z.boolean().optional(),
    email: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EmailLogSelect>;

export const EmailLogFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    subject: z.boolean().optional(),
    template: z.boolean().optional(),
    vars: z.boolean().optional(),
    created_at: z.boolean().optional(),
    email: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const EmailLogFindFirstSchema: z.ZodType<Prisma.EmailLogFindFirstArgs> = z.object({ select: EmailLogFindFirstSelectSchema.optional(), include: z.lazy(() => EmailLogIncludeObjectSchema.optional()), orderBy: z.union([EmailLogOrderByWithRelationInputObjectSchema, EmailLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmailLogWhereInputObjectSchema.optional(), cursor: EmailLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EmailLogScalarFieldEnumSchema, EmailLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EmailLogFindFirstArgs>;

export const EmailLogFindFirstZodSchema = z.object({ select: EmailLogFindFirstSelectSchema.optional(), include: z.lazy(() => EmailLogIncludeObjectSchema.optional()), orderBy: z.union([EmailLogOrderByWithRelationInputObjectSchema, EmailLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmailLogWhereInputObjectSchema.optional(), cursor: EmailLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EmailLogScalarFieldEnumSchema, EmailLogScalarFieldEnumSchema.array()]).optional() }).strict();