import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TimerBackgroundIncludeObjectSchema as TimerBackgroundIncludeObjectSchema } from './objects/TimerBackgroundInclude.schema';
import { TimerBackgroundOrderByWithRelationInputObjectSchema as TimerBackgroundOrderByWithRelationInputObjectSchema } from './objects/TimerBackgroundOrderByWithRelationInput.schema';
import { TimerBackgroundWhereInputObjectSchema as TimerBackgroundWhereInputObjectSchema } from './objects/TimerBackgroundWhereInput.schema';
import { TimerBackgroundWhereUniqueInputObjectSchema as TimerBackgroundWhereUniqueInputObjectSchema } from './objects/TimerBackgroundWhereUniqueInput.schema';
import { TimerBackgroundScalarFieldEnumSchema } from './enums/TimerBackgroundScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TimerBackgroundFindFirstSelectSchema: z.ZodType<Prisma.TimerBackgroundSelect> = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    storage_path: z.boolean().optional(),
    user_id: z.boolean().optional(),
    hex: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundSelect>;

export const TimerBackgroundFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    storage_path: z.boolean().optional(),
    user_id: z.boolean().optional(),
    hex: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const TimerBackgroundFindFirstSchema: z.ZodType<Prisma.TimerBackgroundFindFirstArgs> = z.object({ select: TimerBackgroundFindFirstSelectSchema.optional(), include: z.lazy(() => TimerBackgroundIncludeObjectSchema.optional()), orderBy: z.union([TimerBackgroundOrderByWithRelationInputObjectSchema, TimerBackgroundOrderByWithRelationInputObjectSchema.array()]).optional(), where: TimerBackgroundWhereInputObjectSchema.optional(), cursor: TimerBackgroundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TimerBackgroundScalarFieldEnumSchema, TimerBackgroundScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TimerBackgroundFindFirstArgs>;

export const TimerBackgroundFindFirstZodSchema = z.object({ select: TimerBackgroundFindFirstSelectSchema.optional(), include: z.lazy(() => TimerBackgroundIncludeObjectSchema.optional()), orderBy: z.union([TimerBackgroundOrderByWithRelationInputObjectSchema, TimerBackgroundOrderByWithRelationInputObjectSchema.array()]).optional(), where: TimerBackgroundWhereInputObjectSchema.optional(), cursor: TimerBackgroundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TimerBackgroundScalarFieldEnumSchema, TimerBackgroundScalarFieldEnumSchema.array()]).optional() }).strict();