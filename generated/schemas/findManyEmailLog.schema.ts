import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EmailLogIncludeObjectSchema as EmailLogIncludeObjectSchema } from './objects/EmailLogInclude.schema';
import { EmailLogOrderByWithRelationInputObjectSchema as EmailLogOrderByWithRelationInputObjectSchema } from './objects/EmailLogOrderByWithRelationInput.schema';
import { EmailLogWhereInputObjectSchema as EmailLogWhereInputObjectSchema } from './objects/EmailLogWhereInput.schema';
import { EmailLogWhereUniqueInputObjectSchema as EmailLogWhereUniqueInputObjectSchema } from './objects/EmailLogWhereUniqueInput.schema';
import { EmailLogScalarFieldEnumSchema } from './enums/EmailLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EmailLogFindManySelectSchema: z.ZodType<Prisma.EmailLogSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    subject: z.boolean().optional(),
    template: z.boolean().optional(),
    vars: z.boolean().optional(),
    created_at: z.boolean().optional(),
    email: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EmailLogSelect>;

export const EmailLogFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    subject: z.boolean().optional(),
    template: z.boolean().optional(),
    vars: z.boolean().optional(),
    created_at: z.boolean().optional(),
    email: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const EmailLogFindManySchema: z.ZodType<Prisma.EmailLogFindManyArgs> = z.object({ select: EmailLogFindManySelectSchema.optional(), include: z.lazy(() => EmailLogIncludeObjectSchema.optional()), orderBy: z.union([EmailLogOrderByWithRelationInputObjectSchema, EmailLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmailLogWhereInputObjectSchema.optional(), cursor: EmailLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EmailLogScalarFieldEnumSchema, EmailLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EmailLogFindManyArgs>;

export const EmailLogFindManyZodSchema = z.object({ select: EmailLogFindManySelectSchema.optional(), include: z.lazy(() => EmailLogIncludeObjectSchema.optional()), orderBy: z.union([EmailLogOrderByWithRelationInputObjectSchema, EmailLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmailLogWhereInputObjectSchema.optional(), cursor: EmailLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EmailLogScalarFieldEnumSchema, EmailLogScalarFieldEnumSchema.array()]).optional() }).strict();