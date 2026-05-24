import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BanLogOrderByWithRelationInputObjectSchema as BanLogOrderByWithRelationInputObjectSchema } from './objects/BanLogOrderByWithRelationInput.schema';
import { BanLogWhereInputObjectSchema as BanLogWhereInputObjectSchema } from './objects/BanLogWhereInput.schema';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './objects/BanLogWhereUniqueInput.schema';
import { BanLogCountAggregateInputObjectSchema as BanLogCountAggregateInputObjectSchema } from './objects/BanLogCountAggregateInput.schema';

export const BanLogCountSchema: z.ZodType<Prisma.BanLogCountArgs> = z.object({ orderBy: z.union([BanLogOrderByWithRelationInputObjectSchema, BanLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanLogWhereInputObjectSchema.optional(), cursor: BanLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BanLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BanLogCountArgs>;

export const BanLogCountZodSchema = z.object({ orderBy: z.union([BanLogOrderByWithRelationInputObjectSchema, BanLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanLogWhereInputObjectSchema.optional(), cursor: BanLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BanLogCountAggregateInputObjectSchema ]).optional() }).strict();