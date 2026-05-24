import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { NotificationOrderByWithRelationInputObjectSchema as NotificationOrderByWithRelationInputObjectSchema } from './objects/NotificationOrderByWithRelationInput.schema';
import { NotificationWhereInputObjectSchema as NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';
import { NotificationCountAggregateInputObjectSchema as NotificationCountAggregateInputObjectSchema } from './objects/NotificationCountAggregateInput.schema';

export const NotificationCountSchema: z.ZodType<Prisma.NotificationCountArgs> = z.object({ orderBy: z.union([NotificationOrderByWithRelationInputObjectSchema, NotificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationWhereInputObjectSchema.optional(), cursor: NotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NotificationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.NotificationCountArgs>;

export const NotificationCountZodSchema = z.object({ orderBy: z.union([NotificationOrderByWithRelationInputObjectSchema, NotificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationWhereInputObjectSchema.optional(), cursor: NotificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NotificationCountAggregateInputObjectSchema ]).optional() }).strict();