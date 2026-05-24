import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TimerBackgroundIncludeObjectSchema as TimerBackgroundIncludeObjectSchema } from './objects/TimerBackgroundInclude.schema';
import { TimerBackgroundOrderByWithRelationInputObjectSchema as TimerBackgroundOrderByWithRelationInputObjectSchema } from './objects/TimerBackgroundOrderByWithRelationInput.schema';
import { TimerBackgroundWhereInputObjectSchema as TimerBackgroundWhereInputObjectSchema } from './objects/TimerBackgroundWhereInput.schema';
import { TimerBackgroundWhereUniqueInputObjectSchema as TimerBackgroundWhereUniqueInputObjectSchema } from './objects/TimerBackgroundWhereUniqueInput.schema';
import { TimerBackgroundScalarFieldEnumSchema } from './enums/TimerBackgroundScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TimerBackgroundFindManySelectSchema: z.ZodType<Prisma.TimerBackgroundSelect> = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    storage_path: z.boolean().optional(),
    user_id: z.boolean().optional(),
    hex: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundSelect>;

export const TimerBackgroundFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    storage_path: z.boolean().optional(),
    user_id: z.boolean().optional(),
    hex: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const TimerBackgroundFindManySchema: z.ZodType<Prisma.TimerBackgroundFindManyArgs> = z.object({ select: TimerBackgroundFindManySelectSchema.optional(), include: z.lazy(() => TimerBackgroundIncludeObjectSchema.optional()), orderBy: z.union([TimerBackgroundOrderByWithRelationInputObjectSchema, TimerBackgroundOrderByWithRelationInputObjectSchema.array()]).optional(), where: TimerBackgroundWhereInputObjectSchema.optional(), cursor: TimerBackgroundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TimerBackgroundScalarFieldEnumSchema, TimerBackgroundScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundFindManyArgs>;

export const TimerBackgroundFindManyZodSchema = z.object({ select: TimerBackgroundFindManySelectSchema.optional(), include: z.lazy(() => TimerBackgroundIncludeObjectSchema.optional()), orderBy: z.union([TimerBackgroundOrderByWithRelationInputObjectSchema, TimerBackgroundOrderByWithRelationInputObjectSchema.array()]).optional(), where: TimerBackgroundWhereInputObjectSchema.optional(), cursor: TimerBackgroundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TimerBackgroundScalarFieldEnumSchema, TimerBackgroundScalarFieldEnumSchema.array()]).optional() }).strict();