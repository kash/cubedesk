import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './objects/UserAccountOrderByWithRelationInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './objects/UserAccountWhereInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './objects/UserAccountWhereUniqueInput.schema';
import { UserAccountCountAggregateInputObjectSchema as UserAccountCountAggregateInputObjectSchema } from './objects/UserAccountCountAggregateInput.schema';

export const UserAccountCountSchema: z.ZodType<Prisma.UserAccountCountArgs> = z.object({ orderBy: z.union([UserAccountOrderByWithRelationInputObjectSchema, UserAccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserAccountWhereInputObjectSchema.optional(), cursor: UserAccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserAccountCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.UserAccountCountArgs>;

export const UserAccountCountZodSchema = z.object({ orderBy: z.union([UserAccountOrderByWithRelationInputObjectSchema, UserAccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserAccountWhereInputObjectSchema.optional(), cursor: UserAccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserAccountCountAggregateInputObjectSchema ]).optional() }).strict();