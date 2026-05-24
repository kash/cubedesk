import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ActionLogOrderByWithRelationInputObjectSchema as ActionLogOrderByWithRelationInputObjectSchema } from './objects/ActionLogOrderByWithRelationInput.schema';
import { ActionLogWhereInputObjectSchema as ActionLogWhereInputObjectSchema } from './objects/ActionLogWhereInput.schema';
import { ActionLogWhereUniqueInputObjectSchema as ActionLogWhereUniqueInputObjectSchema } from './objects/ActionLogWhereUniqueInput.schema';
import { ActionLogCountAggregateInputObjectSchema as ActionLogCountAggregateInputObjectSchema } from './objects/ActionLogCountAggregateInput.schema';
import { ActionLogMinAggregateInputObjectSchema as ActionLogMinAggregateInputObjectSchema } from './objects/ActionLogMinAggregateInput.schema';
import { ActionLogMaxAggregateInputObjectSchema as ActionLogMaxAggregateInputObjectSchema } from './objects/ActionLogMaxAggregateInput.schema';

export const ActionLogAggregateSchema: z.ZodType<Prisma.ActionLogAggregateArgs> = z.object({ orderBy: z.union([ActionLogOrderByWithRelationInputObjectSchema, ActionLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActionLogWhereInputObjectSchema.optional(), cursor: ActionLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ActionLogCountAggregateInputObjectSchema ]).optional(), _min: ActionLogMinAggregateInputObjectSchema.optional(), _max: ActionLogMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActionLogAggregateArgs>;

export const ActionLogAggregateZodSchema = z.object({ orderBy: z.union([ActionLogOrderByWithRelationInputObjectSchema, ActionLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActionLogWhereInputObjectSchema.optional(), cursor: ActionLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ActionLogCountAggregateInputObjectSchema ]).optional(), _min: ActionLogMinAggregateInputObjectSchema.optional(), _max: ActionLogMaxAggregateInputObjectSchema.optional() }).strict();