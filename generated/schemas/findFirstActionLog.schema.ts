import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ActionLogIncludeObjectSchema as ActionLogIncludeObjectSchema } from './objects/ActionLogInclude.schema';
import { ActionLogOrderByWithRelationInputObjectSchema as ActionLogOrderByWithRelationInputObjectSchema } from './objects/ActionLogOrderByWithRelationInput.schema';
import { ActionLogWhereInputObjectSchema as ActionLogWhereInputObjectSchema } from './objects/ActionLogWhereInput.schema';
import { ActionLogWhereUniqueInputObjectSchema as ActionLogWhereUniqueInputObjectSchema } from './objects/ActionLogWhereUniqueInput.schema';
import { ActionLogScalarFieldEnumSchema } from './enums/ActionLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ActionLogFindFirstSelectSchema: z.ZodType<Prisma.ActionLogSelect> = z.object({
    id: z.boolean().optional(),
    user_email: z.boolean().optional(),
    action_type: z.boolean().optional(),
    action_details: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ActionLogSelect>;

export const ActionLogFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_email: z.boolean().optional(),
    action_type: z.boolean().optional(),
    action_details: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const ActionLogFindFirstSchema: z.ZodType<Prisma.ActionLogFindFirstArgs> = z.object({ select: ActionLogFindFirstSelectSchema.optional(), include: z.lazy(() => ActionLogIncludeObjectSchema.optional()), orderBy: z.union([ActionLogOrderByWithRelationInputObjectSchema, ActionLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActionLogWhereInputObjectSchema.optional(), cursor: ActionLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActionLogScalarFieldEnumSchema, ActionLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ActionLogFindFirstArgs>;

export const ActionLogFindFirstZodSchema = z.object({ select: ActionLogFindFirstSelectSchema.optional(), include: z.lazy(() => ActionLogIncludeObjectSchema.optional()), orderBy: z.union([ActionLogOrderByWithRelationInputObjectSchema, ActionLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActionLogWhereInputObjectSchema.optional(), cursor: ActionLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActionLogScalarFieldEnumSchema, ActionLogScalarFieldEnumSchema.array()]).optional() }).strict();