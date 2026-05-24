import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ActionLogOrderByWithRelationInputObjectSchema as ActionLogOrderByWithRelationInputObjectSchema } from './objects/ActionLogOrderByWithRelationInput.schema';
import { ActionLogWhereInputObjectSchema as ActionLogWhereInputObjectSchema } from './objects/ActionLogWhereInput.schema';
import { ActionLogWhereUniqueInputObjectSchema as ActionLogWhereUniqueInputObjectSchema } from './objects/ActionLogWhereUniqueInput.schema';
import { ActionLogCountAggregateInputObjectSchema as ActionLogCountAggregateInputObjectSchema } from './objects/ActionLogCountAggregateInput.schema';

export const ActionLogCountSchema: z.ZodType<Prisma.ActionLogCountArgs> = z.object({ orderBy: z.union([ActionLogOrderByWithRelationInputObjectSchema, ActionLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActionLogWhereInputObjectSchema.optional(), cursor: ActionLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ActionLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ActionLogCountArgs>;

export const ActionLogCountZodSchema = z.object({ orderBy: z.union([ActionLogOrderByWithRelationInputObjectSchema, ActionLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActionLogWhereInputObjectSchema.optional(), cursor: ActionLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ActionLogCountAggregateInputObjectSchema ]).optional() }).strict();