import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SmartDeviceOrderByWithRelationInputObjectSchema as SmartDeviceOrderByWithRelationInputObjectSchema } from './objects/SmartDeviceOrderByWithRelationInput.schema';
import { SmartDeviceWhereInputObjectSchema as SmartDeviceWhereInputObjectSchema } from './objects/SmartDeviceWhereInput.schema';
import { SmartDeviceWhereUniqueInputObjectSchema as SmartDeviceWhereUniqueInputObjectSchema } from './objects/SmartDeviceWhereUniqueInput.schema';
import { SmartDeviceCountAggregateInputObjectSchema as SmartDeviceCountAggregateInputObjectSchema } from './objects/SmartDeviceCountAggregateInput.schema';

export const SmartDeviceCountSchema: z.ZodType<Prisma.SmartDeviceCountArgs> = z.object({ orderBy: z.union([SmartDeviceOrderByWithRelationInputObjectSchema, SmartDeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: SmartDeviceWhereInputObjectSchema.optional(), cursor: SmartDeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SmartDeviceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SmartDeviceCountArgs>;

export const SmartDeviceCountZodSchema = z.object({ orderBy: z.union([SmartDeviceOrderByWithRelationInputObjectSchema, SmartDeviceOrderByWithRelationInputObjectSchema.array()]).optional(), where: SmartDeviceWhereInputObjectSchema.optional(), cursor: SmartDeviceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SmartDeviceCountAggregateInputObjectSchema ]).optional() }).strict();