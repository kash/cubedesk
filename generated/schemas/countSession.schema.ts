import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SessionOrderByWithRelationInputObjectSchema as SessionOrderByWithRelationInputObjectSchema } from './objects/SessionOrderByWithRelationInput.schema';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './objects/SessionWhereInput.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema';
import { SessionCountAggregateInputObjectSchema as SessionCountAggregateInputObjectSchema } from './objects/SessionCountAggregateInput.schema';

export const SessionCountSchema: z.ZodType<Prisma.SessionCountArgs> = z.object({ orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SessionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SessionCountArgs>;

export const SessionCountZodSchema = z.object({ orderBy: z.union([SessionOrderByWithRelationInputObjectSchema, SessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SessionWhereInputObjectSchema.optional(), cursor: SessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SessionCountAggregateInputObjectSchema ]).optional() }).strict();