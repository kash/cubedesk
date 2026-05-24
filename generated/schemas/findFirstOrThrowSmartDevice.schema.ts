import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SmartDeviceIncludeObjectSchema as SmartDeviceIncludeObjectSchema } from './objects/SmartDeviceInclude.schema';
import { SmartDeviceOrderByWithRelationInputObjectSchema as SmartDeviceOrderByWithRelationInputObjectSchema } from './objects/SmartDeviceOrderByWithRelationInput.schema';
import { SmartDeviceWhereInputObjectSchema as SmartDeviceWhereInputObjectSchema } from './objects/SmartDeviceWhereInput.schema';
import { SmartDeviceWhereUniqueInputObjectSchema as SmartDeviceWhereUniqueInputObjectSchema } from './objects/SmartDeviceWhereUniqueInput.schema';
import { SmartDeviceScalarFieldEnumSchema } from './enums/SmartDeviceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SmartDeviceFindFirstOrThrowSelectSchema: z.ZodType<Prisma.SmartDeviceSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    internal_name: z.boolean().optional(),
    created_at: z.boolean().optional(),
    device_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    user: z.boolean().optional(),
    solves: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SmartDeviceSelect>;

export const SmartDeviceFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    internal_name: z.boolean().optional(),
    created_at: z.boolean().optional(),
    device_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    user: z.boolean().optional(),
    solves: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SmartDeviceFindFirstOrThrowSchema: z.ZodType<Prisma.SmartDeviceFindFirstOrThrowArgs> = z.object({ select: SmartDeviceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => SmartDeviceIncludeObjectSchema.optional()), orderBy: z.union([SmartDeviceOrderByWithRelationInputObjectSchema, SmartDeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: SmartDeviceWhereInputObjectSchema.optional(), cursor: SmartDeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SmartDeviceScalarFieldEnumSchema, SmartDeviceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SmartDeviceFindFirstOrThrowArgs>;

export const SmartDeviceFindFirstOrThrowZodSchema = z.object({ select: SmartDeviceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => SmartDeviceIncludeObjectSchema.optional()), orderBy: z.union([SmartDeviceOrderByWithRelationInputObjectSchema, SmartDeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: SmartDeviceWhereInputObjectSchema.optional(), cursor: SmartDeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SmartDeviceScalarFieldEnumSchema, SmartDeviceScalarFieldEnumSchema.array()]).optional() }).strict();