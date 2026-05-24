import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SettingOrderByWithRelationInputObjectSchema as SettingOrderByWithRelationInputObjectSchema } from './objects/SettingOrderByWithRelationInput.schema';
import { SettingWhereInputObjectSchema as SettingWhereInputObjectSchema } from './objects/SettingWhereInput.schema';
import { SettingWhereUniqueInputObjectSchema as SettingWhereUniqueInputObjectSchema } from './objects/SettingWhereUniqueInput.schema';
import { SettingCountAggregateInputObjectSchema as SettingCountAggregateInputObjectSchema } from './objects/SettingCountAggregateInput.schema';

export const SettingCountSchema: z.ZodType<Prisma.SettingCountArgs> = z.object({ orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SettingCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SettingCountArgs>;

export const SettingCountZodSchema = z.object({ orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SettingCountAggregateInputObjectSchema ]).optional() }).strict();