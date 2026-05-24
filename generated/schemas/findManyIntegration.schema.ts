import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { IntegrationIncludeObjectSchema as IntegrationIncludeObjectSchema } from './objects/IntegrationInclude.schema';
import { IntegrationOrderByWithRelationInputObjectSchema as IntegrationOrderByWithRelationInputObjectSchema } from './objects/IntegrationOrderByWithRelationInput.schema';
import { IntegrationWhereInputObjectSchema as IntegrationWhereInputObjectSchema } from './objects/IntegrationWhereInput.schema';
import { IntegrationWhereUniqueInputObjectSchema as IntegrationWhereUniqueInputObjectSchema } from './objects/IntegrationWhereUniqueInput.schema';
import { IntegrationScalarFieldEnumSchema } from './enums/IntegrationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IntegrationFindManySelectSchema: z.ZodType<Prisma.IntegrationSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    service_name: z.boolean().optional(),
    auth_token: z.boolean().optional(),
    refresh_token: z.boolean().optional(),
    auth_expires_at: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.IntegrationSelect>;

export const IntegrationFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    service_name: z.boolean().optional(),
    auth_token: z.boolean().optional(),
    refresh_token: z.boolean().optional(),
    auth_expires_at: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const IntegrationFindManySchema: z.ZodType<Prisma.IntegrationFindManyArgs> = z.object({ select: IntegrationFindManySelectSchema.optional(), include: z.lazy(() => IntegrationIncludeObjectSchema.optional()), orderBy: z.union([IntegrationOrderByWithRelationInputObjectSchema, IntegrationOrderByWithRelationInputObjectSchema.array()]).optional(), where: IntegrationWhereInputObjectSchema.optional(), cursor: IntegrationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([IntegrationScalarFieldEnumSchema, IntegrationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.IntegrationFindManyArgs>;

export const IntegrationFindManyZodSchema = z.object({ select: IntegrationFindManySelectSchema.optional(), include: z.lazy(() => IntegrationIncludeObjectSchema.optional()), orderBy: z.union([IntegrationOrderByWithRelationInputObjectSchema, IntegrationOrderByWithRelationInputObjectSchema.array()]).optional(), where: IntegrationWhereInputObjectSchema.optional(), cursor: IntegrationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([IntegrationScalarFieldEnumSchema, IntegrationScalarFieldEnumSchema.array()]).optional() }).strict();