import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SessionIncludeObjectSchema as SessionIncludeObjectSchema } from './objects/SessionInclude.schema';
import { SessionOrderByWithRelationInputObjectSchema as SessionOrderByWithRelationInputObjectSchema } from './objects/SessionOrderByWithRelationInput.schema';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './objects/SessionWhereInput.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema';
import { SessionScalarFieldEnumSchema } from './enums/SessionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SessionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    order: z.boolean().optional(),
    user: z.boolean().optional(),
    solves: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SessionSelect>;

export const SessionFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    order: z.boolean().optional(),
    user: z.boolean().optional(),
    solves: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SessionFindFirstOrThrowSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({ select: SessionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => SessionIncludeObjectSchema.optional()), orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SessionFindFirstOrThrowArgs>;

export const SessionFindFirstOrThrowZodSchema = z.object({ select: SessionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => SessionIncludeObjectSchema.optional()), orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array()]).optional() }).strict();